#nodeJS绑定Zookeeper客户端

## 创建zookeeper
1.在node中下载 `node-zookeeper-client`插件
命令为

```
$ npm install node-zookeeper-client
```

2.创建node，并使用如下命令 调用zookeeper

```
var zookeeper = require('node-zookeeper-client');
```

3.定义客户端

```
var client = zookeeper.createClient('连接字符串：端口号，连接字符串：端口号'，{可选项});
e.g:var client = zookeeper.createClient('112.112.32.14:80，132.123.41.52：8080'，{retries : 2});

```
默认的选项：
`sessionTimeout: 30000,spinDelay : 1000,retries : 0`

4.定义路径（此路径可由后台传或者自己创建，创建详见下方***创建path***）

```
var path = '路径名'
```

5.创建zookeeper

```
client.once('connected', function () {
    console.log('Connected to the server.');
 
    client.create(path, function (error) {
        if (error) {
            console.log('Failed to create node: %s due to: %s.', path, error);
        } else {
            console.log('Node: %s is successfully created.', path);
        }
 
        client.close();
    });
});
 
client.connect();
```


## 获取zookeeper数据

1.同上，定义zookeeper，定义客户端，定义路径

```
var zookeeper = require('node-zookeeper-client');
 
var client = zookeeper.createClient('localhost:2181');
var path = ’/test’;
```

2.获取数据

```
function getData(client, path) {
    client.getData(
        path,
        function (event) {
            console.log('Got event: %s', event);
            getData(client, path);
        },
        function (error, data, stat) {
            if (error) {
                console.log('Error occurred when getting data: %s.', error);
                return;
            }

            console.log(
                'Node: %s has data: %s, version: %d',
                path,
                data ? data.toString() : undefined,
                stat.version
            );
        }
    );
}

client.once('connected', function () {
    console.log('Connected to ZooKeeper.');
    getData(client, path);
});

client.connect();

```

## 创建路径

1.同上，依然需要定义zookeeper，定义客户端，定义需要***创建的路径***

```
var zookeeper = require('node-zookeeper-client');
 
var client = zookeeper.createClient('localhost:2181');
var path = ’/test’;
```

2.创建路径

```
client.once('connected', function () {
    console.log('Connected to the server.');

    client.mkdirp(path, zookeeper.CreateMode.PERSISTENT, function (error, p) {
        if (error) {
            console.log('Failed to mkdirp: %s due to: %s: ', path, error.stack);
        } else {
            console.log('Path: %s is successfully created.', p);
        }

        client.close();
    });
});

client.connect();
```