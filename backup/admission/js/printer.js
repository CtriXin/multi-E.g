/**
 * Created by XIN-ice on 15/7/15.
 */
var NewsTime = 2000;    //每条信息完整出现后停留时间
var TextTime = 80;    //每条信息中的字出现的间隔时间

var newsi = 0;
var txti = 0;
var txttimer;   //调用setInterval的返回值，用于取消对函数的周期性执行
var newstimer;

var newstitle = new Array();    //以数组形式保存每个信息的标题
var newshref = new Array();   //以数组形式保存信息标题的链接

newstitle[0] = "宿管大妈太可怕了，还是快点滚到寝室和室友打招呼吧。咦……怎么一个人都没有？感觉好几年没人住过。";   //显示在网页上的文字内容和对应的链接
newstitle[1] = "XX躺在床上闻到饭菜香。听说食堂的月饼炒辣条很任性很酸爽。黑暗料理届的传说真的有这么神奇吗……";   //显示在网页上的文字内容和对应的链接
newstitle[2] = "吃完饭满嘴的辣条味儿，XX决定去小卖部买瓶水，仔细一看，尼玛居然是“农天山泉”……";   //显示在网页上的文字内容和对应的链接
newstitle[3] = "毛主席说过“学不成名誓不还”。12月要考英语四级，找个教室背下单词……N419教室的灯亮着，刚开学居然有人自习。";   //显示在网页上的文字内容和对应的链接
newstitle[4] = "城里人真会玩，打蚊子都这么有节奏感。还是去图书馆吧，有空调没蚊子……";   //显示在网页上的文字内容和对应的链接
newstitle[5] = "这是什么APP，下载了然后呢？呀，九点了！幸好澡堂还没关门，都这个时间了澡堂还这么多人。";   //显示在网页上的文字内容和对应的链接
newstitle[6] = "这个澡洗得孤独又伤感，全是陌生的身体。这时菜鸟XX感到肚子不舒服，一定是今天食堂的饭菜有问题！噼里啪啦，噼里啪啦……";   //显示在网页上的文字内容和对应的链接


//这里是开头
newstitle[7] = "这个公寓的宿管阿姨出名的凶残。这栋楼的学生毕业后，文能当段子手，武能打小怪兽。";   //显示在网页上的文字内容和对应的链接
newstitle[8] = "这个公寓的宿管阿姨出名的凶残。这栋楼的学生毕业后，文能当段子手，武能打小怪兽。";   //显示在网页上的文字内容和对应的链接


function shownew_e(num_j){
    hwnewstr=newstitle[newsi];    //通过newsi传递，依次显示数组中的内容
    newslink=newshref[newsi];     //依次显示文字对应的链接

    if(txti>=hwnewstr.length){
        clearInterval(txttimer);  //一旦超过要显示的文字长度，清除对shownew()的周期性调用
        clearInterval(newstimer);
        newsi++;   //显示数组中的下一个

        if(newsi>=newstitle.length){
            newsi = 0;  //当newsi大于信息标题的数量时，把newsi清零，重新从第一个显示
        }
//            newstimer = setInterval("shownew()",NewsTime);   //间隔2000ms后重新调用shownew()
        txti = 0;
        return;
    }
    clearInterval(txttimer);

    var dang = $('.active');

    var p = 'printer' + num_j.toString()
    var s = 'shownew_e(' + num_j.toString() + ')'
    document.getElementById(p).innerHTML = newstitle[num_j].substring(0,txti+1);   //截取字符，从第一个字符到txti+1个字符

    txti++;  //文字一个个出现
    txttimer = setInterval(s,TextTime);
}

function shownew(){
    hwnewstr=newstitle[newsi];    //通过newsi传递，依次显示数组中的内容
    newslink=newshref[newsi];     //依次显示文字对应的链接

    if(txti>=hwnewstr.length){
        clearInterval(txttimer);  //一旦超过要显示的文字长度，清除对shownew()的周期性调用
        clearInterval(newstimer);
        newsi++;   //显示数组中的下一个

        if(newsi>=newstitle.length){
            newsi = 0;  //当newsi大于信息标题的数量时，把newsi清零，重新从第一个显示
        }
//            newstimer = setInterval("shownew()",NewsTime);   //间隔2000ms后重新调用shownew()
        txti = 0;
        return;
    }
    clearInterval(txttimer);

    var dang = $('.active');

    document.getElementById("printer").innerHTML = newstitle[0].substring(0,txti+1);   //截取字符，从第一个字符到txti+1个字符

    txti++;  //文字一个个出现
    txttimer = setInterval("shownew()",TextTime);
}

function fff(num_j, num_k){
    var printer_ = 'printer';
    var fast_ = 'fasttxt';
    var f_p = '#fade-pass';
    if (num_j){
        printer_ += num_j.toString();
        fast_ += num_j.toString();
        f_p += num_j.toString();
    }
    var prin = document.getElementById(printer_);
    var fast = document.getElementById(fast_);
    var name = 'kuaii' + num_k.toString();
    var selector = 'span[name="'+name+'"]';
    var hi = $(selector);
    prin.style.display = "none";
    hi.hide();

    fast.style.display = "";
    //var cback = '$("'+f_p+'").click()';
    //setTimeout(cback,1000);
}


//
//$('#click-to-fade').on('click',function(){
//
//    setTimeout('shownew();',1000);
//});

//$('a[name="fir"]').on('click',function(){
//
//    setTimeout('shownew();',1000);
//});

$("a[name='fir']").click(function(){setTimeout('shownew();',1000);});
$('#click-to-fade1').on('click',function(){

    setTimeout('shownew_e(1);',1000);
});

$('#click-to-fade2').on('click',function(){

    setTimeout('shownew_e(2);',1000);
});

$('#click-to-fade3').on('click',function(){

    setTimeout('shownew_e(3);',1000);
});

$('#click-to-fade4').on('click',function(){

    setTimeout('shownew_e(4);',1000);
});

$('#click-to-fade5').on('click',function(){

    setTimeout('shownew_e(5);',1000);
});

$('#click-to-fade6').on('click',function(){

    setTimeout('shownew_e(6);',1000);
});

$('#click-to-fade7').on('click',function(){

    setTimeout('shownew_e(7);',1000);
});

