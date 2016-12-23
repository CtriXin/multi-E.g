//$(document).ready(function(){
//    function button(){
//        $('#setAllowScrollingTrue').click()
//    };
//    setInterval(button,19000);
//});
$('.btn-question').click(function(){
    $(this).attr('data-value',$(this).text()).css({'background': '#eb472d','border-color':'#eb472d','color':'#fff'}).siblings().removeAttr('data-value').css({'background': 'none','border-color':'#fff','color':'#fff'})
});

$('#final-btn').click(function(){
    var key4 = $('#Q4').find('button[data-value]').text();
    var key3 = $('#Q3').find('button[data-value]').text();
    var key2 = $('#Q2').find('button[data-value]').text();
    var key1 = $('#Q1').find('button[data-value]').text();
    var object = {};
    if(key1!=""&&key2!=""&&key3!=""&&key4!=""){
        object.Q1=key1;
        object.Q2=key2;
        object.Q3=key3;
        object.Q4=key4;
    }else{
        alert('还有问题没有回答哦~');
        return
    }
    console.log(JSON.stringify(object));
    window.location.href='index-landing.html'
});

//    $.ajax({
//        url:url,
//        type:'post',
//        data:{
//            'jsondata' : object,
//        },
//        dataType:'json',
//        async:true,
//        beforeSend:function(XMLHttpRequest){
//
//        },
//        success:function(data){
//
//        }
//    })
