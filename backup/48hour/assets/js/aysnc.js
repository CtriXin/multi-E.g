function loadImage(id,src,callback)
{
    var imgloader= new window.Image();
    //当图片成功加载到浏览器缓存
    imgloader.onload =function(evt)
    {
        if(typeof(imgloader.readyState)=='undefined')
        {
            imgloader.readyState = 'undefined';
        }
        //在IE8以及以下版本中需要判断readyState而不是complete
        if ((imgloader.readyState=='complete'||imgloader.readyState=="loaded")||imgloader.complete)
        {
            //console.log('width='+imgloader.width+',height='+imageloader.height);//读取原始图片大小
            callback({'msg':'ok','src':src,'id':id});
        }else{
            imgloader.onreadystatechange(evt);
        }
    };

    imgloader.onerror = function(evt)
    {
        callback({'msg':'error','id':id});
    };

    imgloader.onreadystatechange = function(e)
    {
        //此方法只有IE8以及一下版本会调用
    };
    imgloader.src=src;
}

var loadResult = function(data)
{
    data =	data ||{} ;
    if(typeof(data.msg)!='undefined')
    {
        if(data.msg=='ok')
        {
            //这里使用了id获取元素，有点死板，建议读者自行扩展为css 选择符
            document.getElementById(''+data.id).src=data.src;

        }else{
            //这里图片加载失败，我们可以显示其他图片，防止大红叉
            document.getElementById(''+data.id).src='http://imgcdn.tataufo.com/bitmap/bitmap80.png';
        }
    }
}

var body1 = 'assets/imgs/body1.png';
var body2 = 'assets/imgs/body2.png';
var body3 = 'assets/imgs/body3.png';
var longpic = 'assets/imgs/top-bar.png'

loadImage('body1',body1,loadResult);
loadImage('body2',body2,loadResult);
loadImage('body3',body3,loadResult);
loadImage('long-pic',longpic,loadResult);
