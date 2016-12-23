


$(function() {
	$("a[name-2='pass']").click(function(){
        $("#m_pass").get(0).play();
    });
    $("a[name-1='modal']").click(function(){
        $("#m_fail").get(0).play();
    });
    $("a[name='winner']").click(function(){
        $("#m_win").get(0).play();
    });
});