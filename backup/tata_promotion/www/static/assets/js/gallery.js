
(function( $ ) {

	/*
	Thumbnail: Select
	*/
	$('.mg-toolbar input[type=checkbox]').on('change', function( ev ) {
		var wrapper = $(this).parents('.thumbnail');
        var key = wrapper.children()[1].innerHTML;
		if($(this).is(':checked')) {
			wrapper.addClass('thumbnail-selected');
		} else {
			wrapper.removeClass('thumbnail-selected');
		}
		console.log("the input is checked from line:14")
	});

	/*
	Toolbar: Select All
	*/
	$('#mgSelectAll').on('click', function( ev ) {
		ev.preventDefault();
		var $this = $(this),
			$label = $this.find('> span');
		    console.log($label);
			$checks = $('.mg-toolbar input[type=checkbox]');
            $checksparent = $checks.parents().find('div.thumbnail-selected');
            $yourkey = $checksparent.find('h5.mg-title').text();

		if($this.attr('data-all-selected')) {
			$this.removeAttr('data-all-selected');
			$checks.prop('checked', false).trigger('change');
			$label.html($label.data('all-text'));
		} else {
			$this.attr('data-all-selected', 'true');
            console.log($checksparent);
            $checks.prop('checked', true).trigger('change');
			$label.html($label.data('none-text'));
		}
	});


	/*
	Thumnail: Dropdown Options
	*/
	$('.thumbnail .mg-toggle').parent()
		.on('show.bs.dropdown', function( ev ) {
			$(this).closest('.mg-thumb-options').css('overflow', 'visible');
		})
		.on('hidden.bs.dropdown', function( ev ) {
			$(this).closest('.mg-thumb-options').css('overflow', '');
		});

	$('.thumbnail').on('mouseenter', function() {
		var toggle = $(this).find('.mg-toggle');
		if ( toggle.parent().hasClass('open') ) {
			toggle.dropdown('toggle');
		}
	});


    /*
    Delete file
     */
    $('#deletebtn').on('click',function(ev){
        ev.preventDefault();
        var keyArr = [];
        $('.mg-toolbar input[type=checkbox]:checked').each(function(){
            var key = $(this).attr('data-key');
            keyArr.push(key);
        });
        console.log(keyArr);
        keyArr = JSON.stringify(keyArr);
        $.ajax({
            url:'/index/deleteall/',
            type:'post',
            data:{
                'key' : keyArr
            },
            dataType:'json',
            success: function (data) {
                var namelist = [];
                for(var i in data){
                    var name = data[i].key;
                    namelist.push(name)
                }
                alert(namelist+'已删除');
                window.location.reload();
                console.log(name)
            }
        })
    })

}(jQuery));
