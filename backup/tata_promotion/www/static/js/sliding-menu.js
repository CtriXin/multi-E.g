$(document).ready(function() { 
	
	
	// toggle skin select	
	$("#skin-select #toggle").click(function() { //隐藏侧边栏按钮点击事件



		if($(this).hasClass('active')) {
			$(this).removeClass('active'); //点击时如果有active 则为已经隐藏,点击事件后删除active 还原
		
			$('#skin-select').css({"width":"260px"});
			$('.wrap-fluid').css({"width":"auto","margin-left":"260px"});
			$('#skin-select li').css({"text-align":"left"});
			$('#skin-select li span, .devider-title h3, ul.topnav h4, .side-dash, .noft-blue, .noft-purple-number, .noft-blue-number').css({"display":"inline-block", "float":"none"});
			$('.ul.topnav h4, .hide-min-toggle').css({"display":"none"});
			$('.tooltip-tip2').addClass('tooltipster-disable');
			$('.tooltip-tip').addClass('tooltipster-disable');
			$('.datepicker-wrap').css({"position":"absolute", "right":"300px"});
			$('.skin-part').css({"visibility":"visible"});
			$('#menu-showhide').css({"height":"auto", "margin":"-13px 0 0"});
				$('#skin-select li i').css({"top":"0", "left":"-15px", "padding":"8px 0"});
			$('ul.topnav ul').css({"border-radius":"0", "padding":"15px 25px"});
            $(".side-bar ul li.has-form").css({'display':'block'});
			$('img.admin-pic.img-circle').css({"margin":"20px 0 0 20px"});
			$('.profile span, .profile i, .bottom-list-menu li').css({"display":"block"});
			$(".profile h3").css({'display':'block'});
			$(".profile img").css({'width':'45px', 'height':'45px', 'top':'16px', 'left':'5px' });
			$(".profile").css({'top':'-13px'});
	

			$('#menuwrapper').removeAttr('id').addClass();
			
			
		} else {
			$(this).addClass('active');
			
	
			$('#skin-select').css({"width":"50px"});
			$('.wrap-fluid').css({"width":"auto", "margin-left":"50px"});
			$('#skin-select li').css({"text-align":"right"});
			$('#skin-select li span, .devider-title h3, ul.topnav h4, .side-dash, .noft-blue, .noft-purple-number, .noft-blue-number').css({"display":"none"});
			//$('.tooltip-tip2').removeClass('tooltipster-disable');
			//$('.tooltip-tip').removeClass('tooltipster-disable');
			$('.datepicker-wrap').css({"position":"absolute", "right":"84px"});	
			$('.skin-part').css({"visibility":"visible"});
			$('.hide-min-toggle').css({"display":"block"});
			$('#menu-showhide').css({"margin":"-10px 0px 0px"});
			$('#skin-select li i').css({"top":"0", "left":"-30px", "padding":"8px 0"});
			$('ul.topnav ul').css({"border-radius":"0", "padding":"5px 10px"});
			$('ul.topnav ul').removeAttr('style');
			$('#menuwrapper ul li ul').css({"display":"inline-grid!important"});
			$('.profile span, .profile i, .bottom-list-menu li').css({"display":"none"});
		
			$('img.admin-pic.img-circle').css({"margin":"18px 0 0 4px"});
			$('.accordion-nav').removeAttr('class').addClass('topnav');
			$(".side-bar").attr("id","menuwrapper");
			$(".side-bar ul li.has-form").css({'display':'none'});
			$(".profile h3").css({'display':'none'});
			$(".profile img").css({'width':'30px', 'height':'30px', 'top':'24px', 'left':'-3px' });
			$(".profile").css({'top':'-10px'});



		}
		return false;
	});
	
	
	// 0.01s内出现
	setTimeout(function(){
		$("#skin-select #toggle").addClass('active').trigger('click');
	},10);
	
	
});//结束

