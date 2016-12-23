/*global Qiniu */
/*global plupload */
/*global FileProgress */
/*global hljs */


$(function () {
    var uploader = Qiniu.uploader({
        runtimes: 'html5,flash,html4',   //上传模式,依次退化
        browse_button: 'pickfiles',  //上传选择的点选按钮，**必需**
        container: 'container',   //上传区域DOM ID，默认是browser_button的父元素，
        drop_element: 'drag', //拖曳上传区域元素的ID，拖曳文件或文件夹后可触发上传
        max_file_size: '100mb',  //最大文件体积限制
        flash_swf_url: 'js/plupload/Moxie.swf',  //引入flash,相对路径
        dragdrop: true, //开启可拖曳上传
        chunk_size: '4mb', //分块上传时，每片的体积
        uptoken_url: $('#uptoken_url_p').text(), //Ajax请求upToken的Url，**强烈建议设置**（服务端提供）
        //若未指定uptoken_url,则必须指定 uptoken ,uptoken由其他程序生成
        //unique_names: true,  // 默认 false，key为文件名。若开启该选项，SDK会为每个文件自动生成key（文件名）
        // save_key: true,  // 默认 false。若在服务端生成uptoken的上传策略中指定了 `sava_key`，则开启，SDK在前端将不对key进行任何处理
        domain: $('#domain').text(),   //bucket 域名，下载资源时用到，**必需**
        auto_start: false, //选择文件后自动上传，若关闭需要自己绑定事件触发上传
        init: {
            'PostInit': function () {
                document.getElementById('filelist').innerHTML = '';

                document.getElementById('uploadfiles').onclick = function () {
                    uploader.start();
                    return false;
                };
            },
            'FilesAdded': function (up, files) {
                $('table').show();
                //$('#success').hide();
                var prefix  = $('#path-last-live').val();   //这里改成路径的input所在id e.p:$('#path-live').val()
                plupload.each(files, function (file) {
                    console.log('####################上传的文件目录结构: ' + JSON.stringify(file));
                    var file_name = file.name.split('.');
                    var file_type = file_name[file_name.length-1];
                    console.log(file_type);   //字符串拼接,获取随机名字
                    var url_name = prefix+file.name;
                    if(prefix == ''){
                        url_name = 'oam/upload/'+file.id+'.'+file_type
                    }
                    console.log(url_name);
                    document.getElementById('table-index').innerHTML +=
                        '<tr id="' + file.id + '">'+
                            '<td>'+file.name+ ' (' + plupload.formatSize(file.size) + ')'+'</td>'+
                            '<td>http://imagecloud.tataufo.com/'+url_name+'</td>'+
                            '<td>'+file.type+'</td>'+
                            '<td></td>'+
                            '<td></td>'+
                        '</tr>';
                });
            },
            'BeforeUpload': function (up, file) {

            },
            'UploadProgress': function (up, file) {

            },
            'UploadComplete': function () {


            },
            'FileUploaded': function (up, file, info) {
                console.log(file);
                var domain = up.getOption('domain');
                console.log(info);
                var res = JSON.parse(info);
                var sourceLink = 'http://imagecloud.tataufo.com/' + res.key; //获取上传成功后的文件的Url;
                var key = res.key;
                console.log('============' + key);
                var id = file.id;
                //水印
                var waterimgLink = Qiniu.watermark({
                    mode: 2,  // 文字水印
                    text: '你好吗', // 水印文字，mode = 2 时 **必需**
                    dissolve: 100,          // 透明度，取值范围1-100，默认100,非必需，下同
                    gravity: 'SouthWest',  // 水印位置，同上
                    fontsize: 600,         // 字体大小，单位: 缇
                    dx: 10,  // 横轴边距，单位:像素(px)
                    dy: 10,  // 纵轴边距，单位:像素(px)
                    fill: 'red'        // 水印文字颜色，RGB格式，可以是颜色名称
                });

                //图片处理
                var imghandle = Qiniu.imageView2({
                    mode: 5,
                    w: 50
                });

                //TODO 用户自定义改变图片的大小,裁剪
                var infomation = sourceLink + '?' + 'imageInfo';
                console.log(typeof (infomation));
                imgLinks = 'http://imagecloud.tataufo.com/' + key + '?' + waterimgLink;

                //缩略图
                if(file.type == 'image/jpeg' || file.type == 'image/png'){
                    document.getElementById(file.id).getElementsByTagName('td')[3].innerHTML = '<img src="http://imagecloud.tataufo.com/' + key + '?' + imghandle + '" alt="">';
                }else{
                    document.getElementById(file.id).getElementsByTagName('td')[3].innerHTML = '<img src="http://imagecloud.tataufo.com/undefinedbitmap80.png'+ '?' + imghandle + '" alt="">';

                }


                var file_name = file.name.split('.');
                var modal_name = file_name[0];

                document.getElementById(file.id).getElementsByTagName('td')[4].innerHTML =
                    '<ul class="button-group round ">' +
                    '   <li>' +
                    '       <a data-reveal-id="modal_name_'+modal_name+'" onclick="imageorignal(this)" class="tiny button bg-blue" href="#">编辑</a> ' +
                    '   </li> ' +
                    '   <li>' +
                    '       <a class="tiny button bg-blue deleteit" data-key="'+key+'">删除</a> ' +
                    '   </li> ' +
                    '</ul>'+
                    '<div id="modal_name_'+modal_name+'" class="reveal-modal" data-reveal> ' +
                    '<h5 class="text-center"><img class="avatar_pic" orignal="http://imagecloud.tataufo.com/' + key + '?imageView2/2/h/500/q/60" src="http://imagecloud.tataufo.com/' + key + '?imageView2/2/h/500/q/60" alt=""></h5>'+
                    '<div class="modal-body-footer"> ' +
                    '<div class="imageView2"> ' +
                    '<span>缩略控制：</span> ' +
                    '<a onclick="imagelarge(this)" data-imageview="large" class="tiny radius button">' +
                    '大缩略图 ' +
                    '</a> ' +
                    '<a onclick="imagemid(this)" data-imageview="middle" class="tiny radius button">' +
                    '中缩略图 ' +
                    '</a> ' +
                    '<a onclick="imagesmall(this)" data-imageview="small" class="tiny radius button">' +
                    '小缩略图 ' +
                    '</a> ' +
                    '</div> ' +
                    '<div class="imageMogr2"> ' +
                    '<span>高级控制：</span> ' +
                    '<a onclick="imagemogrleft(this)" data-imagemogr="left" class="tiny radius button">' +
                    '逆时针 ' +
                    '</a> ' +
                    '<a onclick="imagemogrright(this)" data-imagemogr="right" class="tiny radius button">' +
                    '顺时针 ' +
                    '</a> ' +
                    '<a onclick="imagemogrnone(this)"  data-imagemogr="no-rotate" class="tiny radius button">' +
                    '无旋转 ' +
                    '</a> ' +
                    '</div> ' +
                    '</div>'+
                    '<a class="close-reveal-modal">&#215;</a> ' +
                    '</div>';


                //'<a data-reveal-id="'+file.id+'" class="radius button tiny" href="">编辑</a>'+
                //        '<a href="#" data-reveal-id="'+modal_name+'" class="radius button tiny">弹窗后还有弹窗</a>'+
                //'<div id="'+modal_name+'" class="reveal-modal" data-reveal> ' +
                //'<h2>这是一个弹窗</h2> ' +
                //'<p>' +
                //'点击任何地方都将退出弹窗,关闭弹窗的按钮只需要加上一个class = ‘close-reveal-modal.’ ' +
                //'</p> ' +
                //'<a class="close-reveal-modal">&#215;</a> ' +
                //'</div>';
                    ////'<a class="btn btn-info" href="/index/change?key='+key+'">更改</a>'+
                    //'<a class="btn btn-danger deleteit" data-key="'+key+'">删除</a>';

                console.log(imgLinks);
                $.ajax({
                    url: 'http://imagecloud.tataufo.com/' + key + '?imageInfo',
                    type: 'get',
                    dataType: 'json',
                    success: function (data) {
                        console.log(data.width)
                    }

                });
                $('.deleteit').on('click',function(){
                    var self = $(this);
                    var key = $(this).attr('data-key');
                    $.ajax({
                        url:'/index/delete',
                        type:'get',
                        dataType:'json',
                        data:{
                            key:key
                        },
                        success:function(data){
                            console.log(self.parents('#'+id)); //.remove();
                            self.parents('#'+id).remove();
                        }
                    })
                })
            },
            'Error': function (up, err, errTip) {
                document.getElementById('console').innerHTML += "\nError #" + err.code + ": " + err.message;

            }
            ,
            'Key': function (up, file) {
                // 若想在前端对每个文件的key进行个性化处理，可以配置该函数
                // 该配置必须要在 unique_names: false , save_key: false 时才生效
                console.log(typeof ('################' + up), file.name);
                var myprefix = $('#path-last-live').val();
                console.log(file);
                var key = myprefix + file.name;
                if(myprefix == ''){
                    var file_name = file.name.split('.');
                    var file_type = file_name[file_name.length-1];
                    console.log(file_type);   //字符串拼接,获取随机名字
                    var key = 'oam/upload/' + file.id + '.'+file_type
                }

                // do something with key
                return key
            }


        }
    });

    uploader.bind('FileUploaded', function () {
        console.log('hello man,a file is uploaded');
    });

    $('.imageinfo').on('click', function () {
        var key = $(this).attr('data-key');
        console.log('fhhsh');
        $.ajax({
            url: 'http://imagecloud.tataufo.com/' + key + '?imageInfo',
            type: 'get',
            dataType: 'json',
            success: function (data) {
                console.log(data)
            }

        })
    });


});

