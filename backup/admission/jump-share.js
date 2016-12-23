/**
 * Created by XIN-ice on 15/7/17.
 */
function ext(){
    CloseDiv('MyDiv','fade');
//        var fd = $('#frontpage').click();
//        console.log(fd)
    window.location.href='#page2'
    setTimeout('shownew7();',1000);
}

function jump(){
    CloseDiv('MyDiv1','fade1');
//        window.location.href='#page1'
}
var syy = document.getElementById('MyDiv1');
var syt = document.getElementById('fade1')
function jump(){
    CloseDiv('syy','syt');
//        window.location.href='#page1'
}
function share1(){
    CloseDiv('syy','syt');
    window.location.href='#shareit'
}
function jump2(){
    CloseDiv('MyDiv2','fade2');
//        window.location.href='#page1'
}
function share2(){
    CloseDiv('MyDiv2','fade2');
    window.location.href='#shareit'
}