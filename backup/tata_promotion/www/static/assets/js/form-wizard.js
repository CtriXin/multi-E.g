
(function( $ ) {

	'use strict';

	/*
	Wizard #5
	*/
	var $w5finish = $('#w5').find('ul.pager li.finish'),
		$w5validator = $("#w5 form").validate({
		highlight: function(element) {
			$(element).closest('.form-group').removeClass('has-success').addClass('has-error');
		},
		success: function(element) {
			$(element).closest('.form-group').removeClass('has-error');
			$(element).remove();
		},
		errorPlacement: function( error, element ) {
			element.parent().append( error );
		}
	});

	$w5finish.on('click', function( ev ) {
		ev.preventDefault();
		var validated = $('#w5 form').valid();
		var message1 = $('#dic-last-live').val();
		var message2 = $('#path-last-live').val();
        var message ={};
        message.dic = message1;
        message.path = message2;
		if ( validated ) {
			console.log('#########当前文件将会上传到的空间和前缀'+JSON.stringify(message));
			if(message1 == '尚未设置' ){
				alert('空间未定义!!');
                window.location.reload()
			}
            if(message2 == '尚未设置' ){
                alert('路径为中文,推荐你刷新页面从新输入!')
            }
            $.ajax({
                url: '/index/getvalue',
                type: 'post',
                data:{
                    dic:message1,
                    path:message2
                },
                dataType: 'json',
                success:function(data){
                    console.log(data);
                    if(data.dic != 'tata-prod'){
                        $('#url-link').text('http://imagecloud.tataufo.com/')
                    }else{
                        $('#url-link').text('http://imagecloud.tataufo.com/')
                    }
                    $('#upload-now').css({'display':'block'});
                }
            })
		}
	});

	$('#w5').bootstrapWizard({
		tabClass: 'wizard-steps',
		nextSelector: 'ul.pager li.next',
		previousSelector: 'ul.pager li.previous',
		firstSelector: null,
		lastSelector: null,
		onNext: function( tab, navigation, index, newindex ) {
			var validated = $('#w5 form').valid();
			if( !validated ) {
				$w5validator.focusInvalid();
                return false;
			}
		},
		onTabChange: function( tab, navigation, index, newindex ) {
			var $total = navigation.find('li').size() - 1;
			$w5finish[ newindex != $total ? 'addClass' : 'removeClass' ]( 'hidden' );
			$('#w5').find(this.nextSelector)[ newindex == $total ? 'addClass' : 'removeClass' ]( 'hidden' );
		},
		onTabShow: function( tab, navigation, index ) {
			var $total = navigation.find('li').length;
			var $current = index + 1;
			var $percent = ( $current / $total ) * 100;
			$('#w5').find('.progress-bar').css({ 'width': $percent + '%' });
		}
	});

}).apply( this, [ jQuery ]);