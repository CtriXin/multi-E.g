//$(document).ready(function(){
//    function button(){
//        $('#setAllowScrollingTrue').click()
//    };
//    setInterval(button,19000);
//});
$('.btn-question').click(function(){
    $(this).attr('data-value',$(this).text()).css({'background': '#eb472d','border-color':'#eb472d','color':'#fff'}).siblings().removeAttr('data-value').css({'background': 'none','border-color':'#fff','color':'#fff'})
});