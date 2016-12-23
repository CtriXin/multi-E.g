#fs 摘要

##  ***var fs = require("fs") ;***

======


## 常用代码
-------
1.最常规的读写函数，函数名称和形式

```
fs.open(文件路径,读写标识,[文件mode值,666],回调函数(err,文件句柄fd));          
fs.read(文件句柄fd,被写入的buffer,offset,length,position,回调函数(err, bytesRead, buffer));          
fs.write(文件句柄fd,被读取的buffer,offset,length,position,回调函数(err,bytesWritten,buffer));          
fs.close(文件句柄,回调函数)          
fs.truncate(文件句柄,截断长度,回调函数);          
fs.fsync(文件句柄,回调函数);

```


2.直接对文件进行读写的

```
fs.readFile(文件名,编码,回调函数(err,data));       
fs.writeFile(文件名,数据,编码,回调函数(err));       
fs.appendFile(文件名,数据,编码,回调函数(err));

```

3.其它常用文件操作

```
判断文件是否存在      
fs.exists(文件路径,callback(是否存在));      
修改文件名称     
fs.rename(旧文件名,新文件名,回调函数);      
文件所有者变更      
fs.chown(文件名,uid,gid,回调函数);/fs.fchown(文件句柄fd,uid,gid,回调函数);/fs.lchown(链接路径,uid,gid,回调函数);      
文件权限变更      
fs.chmod(文件名,mode,回调函数);/fs.fchmod(文件句柄,mode,回调函数);/fs.lchmod(链接路径,mode,回调函数);      
查看文件状态      
fs.stat(文件路径,回调函数(err.fs.Stats对象));/fs.fstat(文件句柄fd,回调函数(err.fs.Stats对象));/fs.lstat(链接路径,回调函数(err.fs.Stats对象));      
文件时间      
fs.utimes(文件路径,访问时间,新建时间,回调函数);/fs.futimes(文件句柄,访问时间,新建时间,回调函数);      
监视文件      
fs.watchFile(文件名,[options],listener_callback(当前文件的stats,改变前的stats));      
fs.unwatchFile(文件名);

```

4.目录操作

```
fs.mkdir(路径,权限mode/777,回调函数);    //创建
fs.rmdir(路径,回调函数);    //移除
fs.readdir(路径,回调函数(err,fileNameArray)); //读

```

5.链接文件操作

```
创建一个链接   
fs.link(srcpath, dstpath, [callback])   
fs.symlink(destination, path, [type], [callback])  
读取链接指向的路径   
fs.readlink(path, [callback(err,linkstr)])   
fs.unlink(path,[callback]);

```


## 大文件传输问题

复制文件可以用的方法为：

	var source = fs.readFileSync('/path/to/source', {encoding: 	'utf8'});
	fs.writeFileSync('/path/to/dest', source);
	
这种方式是把**文件内容全部读入内存**，然后**再写入文件**，对于*小型*的文本文件，这没有多大问题 如果大文件！！！

```
var fs = require('fs');
var readStream = fs.createReadStream('/path/to/source');
var writeStream = fs.createWriteStream('/path/to/dest');

readStream.on('data', function(chunk) { // 当有数据流出时，写入数据
    writeStream.write(chunk);
});

readStream.on('end', function() { // 当没有数据时，关闭数据流
    writeStream.end();
});
```
上面的写法有一些问题，如果写入的速度跟不上读取的速度，有可能导致数据丢失。正常的情况应该是，写完一段，再读取下一段，如果没有写完的话，就让读取流先暂停，等写完再继续，于是代码可以修改为：

```
var fs = require('fs');
var readStream = fs.createReadStream('/path/to/source');
var writeStream = fs.createWriteStream('/path/to/dest');

readStream.on('data', function(chunk) { // 当有数据流出时，写入数据
    if (writeStream.write(chunk) === false) { // 如果没有写完，暂停读取流
        readStream.pause();
    }
});

writeStream.on('drain', function() { // 写完后，继续读取
    readStream.resume();
});

readStream.on('end', function() { // 当没有数据时，关闭数据流
    writeStream.end();
});
```
### pipe写法

```
// pipe自动调用了data,end等事件
fs.createReadStream('/path/to/source').pipe(fs.createWriteStream('/path/to/dest'));
```

### 完整写法

```
var fs = require('fs'),
    path = require('path'),
    out = process.stdout;

var filePath = '/Users/chen/Movies/Game.of.Thrones.S04E07.1080p.HDTV.x264-BATV.mkv';

var readStream = fs.createReadStream(filePath);
var writeStream = fs.createWriteStream('file.mkv');

var stat = fs.statSync(filePath);

var totalSize = stat.size;
var passedLength = 0;
var lastSize = 0;
var startTime = Date.now();

readStream.on('data', function(chunk) {

    passedLength += chunk.length;

    if (writeStream.write(chunk) === false) {
        readStream.pause();
    }
});

readStream.on('end', function() {
    writeStream.end();
});

writeStream.on('drain', function() {
    readStream.resume();
});

setTimeout(function show() {
    var percent = Math.ceil((passedLength / totalSize) * 100);
    var size = Math.ceil(passedLength / 1000000);
    var diff = size - lastSize;
    lastSize = size;
    out.clearLine();
    out.cursorTo(0);
    out.write('已完成' + size + 'MB, ' + percent + '%, 速度：' + diff * 2 + 'MB/s');
    if (passedLength < totalSize) {
        setTimeout(show, 500);
    } else {
        var endTime = Date.now();
        console.log();
        console.log('共用时：' + (endTime - startTime) / 1000 + '秒。');
    }
}, 500);
```