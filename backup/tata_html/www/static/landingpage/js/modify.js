/**
 * Created by xin on 16/5/31.
 */
$(document).ready(function () {


    //定义宽高
    var footerH = $('footer').height();
    var document_height = $(window).height()-footerH;
    var document_width = $(window).width();
    console.log('浏览器高: ',document_height);
    var triple = document_height / 3; //宽三等分

    var iphoneWidth = $('.iphone').width() + 20;
    $('.qchar-iphone,.qchar-andriod').css({
        top:-iphoneWidth - 20 + 'px'
    });
    $(".iphone").mouseover(function () {
        $('.qchar-iphone').delay(0).animate({
            'top':-iphoneWidth + 'px',
            opacity:1
        },300)
    });
    $(".iphone").mouseout(function () {
        $('.qchar-iphone').delay(100).animate({
            'top':-iphoneWidth - 20 + 'px',
            opacity:0
        },300)
    });
    //
    $(".andriod").mouseover(function () {
        $('.qchar-andriod').delay(0).animate({
            'top':-iphoneWidth + 'px',
            opacity:1
        },300)
    });
    $(".andriod").mouseout(function () {
        $('.qchar-andriod').delay(100).animate({
            'top':-iphoneWidth - 20 + 'px',
            opacity:0
        },300)
    });

    /*
     首页
     */

    console.log($('.warp_p3').width(),document_width,document_width*.15,'hhhhhhhhhhhhhhh')
    $('.warp_p3,.warp_p2').css({
        left:(document_width- document_width*.15)/2 + 'px',
        top:(document_height- $('.warp_p3').height())*.4 + 'px'
    });
    $('.loading-tata-1,.loading-tata-2').css({
        'top':(document_height- $('.loading-tata-2').height())*.4 + 'px'
    });
    $('.warp_p1').css({
        top: (document_height- $('.warp_p1').height())*.4 + 'px'
    });
    //首页的三个模块三等分
    $('.warp_middle_1,.warp_middle_2,.warp_middle_3,.warp_top_1,.warp_top_2,.warp_top_3,.warp_bottom_1,.warp_bottom_2,.warp_bottom_3  ').css({
        height: triple + 'px'
    });
    $('.warp_bottom_1,.warp_bottom_2,.warp_bottom_3 ').css({
        top:triple*2 +'px'
    });
    //首页模块中间部分顶部距离
    $('.warp_middle_1,.warp_middle_2,.warp_middle_3').css({
        top: triple + 'px'
    });

    /*
    第二页
     */
    //定义第二页三角形的高和宽
    $('#triangle').attr({
        height: document_height,
        width: document_width
    });
    $('.squere').css({
        height: document_height
    });
    console.log($('.page2-phone').width())
    // $('.page2-phone').css({
    //     height: document_height * 0.7,
    //     left: (document_width- $('.page2-phone').width())/2 + 'px'
    // });
    $('.flash-blue-squere').css({
        left: document_width / 4.5,
        top: document_height / 2
    });
    $('.flash-pink-squere').css({
        left: document_width / 4.5,
        top: document_height / 2
    });
    var peoplew = $('.people').width();
    var peopleh = $('.people').height();
    console.log(peoplew);

    //因为占比为60% 所以判断用60%高度比
    if(peopleh<peoplew){
        $('.people').css({
            height: peopleh,
            width:peopleh,
            right:(document_width /2 - peopleh)/2 + 'px'
        })
    }else{
        $('.people').css({
            height: peoplew,
            width:peoplew,
            right:(document_width /2 - peoplew)/2 + 'px'
        })
    }



    //第四页
   





    //定义元素大小
    var circlelargeW = $('.circle-large').width(); //得到圆的宽度
    $('.circle-large').css({
        height: circlelargeW +'px', //让高度与宽度相等
        // top: (document_height-circlelargeW)/2 +'px' //用整体高度 - 圆的高度 除以2 得到上半部分
    });
    var circlesamllW = $('.circle-small').width(); //得到圆的宽度
    var top = (document_height-circlelargeW)/2;
    $('.circle-small').css({
        height: circlesamllW +'px', //让高度与宽度相等
    });





    var gonnawidth =  document_width*.4;
    var circlewidth = document_width*.5;
    var gonnaH = $('.sloagn-gonna').height()-20
    $('.gonnaslide').css({
        width: gonnawidth + 'px',
        height: gonnawidth + 'px',
    });
    var circlegonnaW = gonnawidth //得到圆的宽度
    $('.circle-gonna').css({
        width:circlewidth +'px',
        height: circlewidth +'px', //让高度与宽度相等
    });
    var circle_top = document_height*.17;
    console.log(circle_top,circlewidth/2,gonnaH)
    $('.sloagn-gonna').css({
        top: circle_top + (circlewidth/2 - gonnaH/2)  + 'px'
    });






    //JavaScript绘制一个三角形
    var canvas = document.getElementById('triangle');
    var context = canvas.getContext('2d');


    context.beginPath();
    context.moveTo(0, 0);
    context.lineTo(0, document_height);
    context.lineTo(document_width, document_height);

    context.closePath();

    context.fillStyle = "rgb(207, 226, 253)";
    context.fill();

    



    //test

});


$(function () {
    var second_p1weight = $('.second_p1').width();//得到手机图层的width
    var sp1weight = $('.second_nei1').width();//得到手机图层的移动层的 width
    var lert = $('.center-wrap').width() - sp1weight; //算出他们的差
    var $mlNav = $('.ml-nav');
    var document_width = $(window).width();
    var document_height = $(window).height();
    var triple = document_height / 3;
    var circlelargeW = $('.circle-large').width(); //得到圆的宽度
    var circlesamllW = $('.circle-small').width(); //得到圆的宽度
    var circletop = (document_height-circlelargeW)/2;

    function initialization(){


        var topInterval;
        var topTimeout;
        var middleInterval;
        var middleTimeout;
        var bottomInterval;
        var bottomTimeout;
        function top(){
            console.log('start-top-a');
            $('.warp_top_1').delay().animate({
                left: 0,
                opacity:1
            },500,function(){
                $('.warp_top_3').animate({ //强制将第三张的位置变到右侧,以便一会调用
                    left:'100%',
                    opacity:0
                });
                $('.warp_top_1').delay(6000).animate({
                    left: '-100%',
                    opacity:0
                },500);
                $('.warp_top_2').delay(6000).animate({
                    left: '0',
                    opacity:1
                },500,function(){
                    $('.warp_top_1').animate({
                        left: '100%',
                        opacity:0
                    });
                    $('.warp_top_2').delay(6000).animate({
                        left: '-100%',
                        opacity:0
                    },500);
                    $('.warp_top_3').delay(6000).animate({
                        left: '0%',
                        opacity:1
                    },500,function(){
                        $('.warp_top_2').animate({
                            left: '100%',
                            opacity:0
                        });
                        $('.warp_top_3').delay(6000).animate({
                            left: '-100%',
                            opacity:0
                        },500)
                    })
                })
            });
            topInterval = setInterval(starttop,20000);
        }
        function starttop(){
            console.log('start-top-b');
            $('.warp_top_1').delay().animate({
                left: 0,
                opacity:1
            },500,function(){
                $('.warp_top_3').animate({ //强制将第三张的位置变到右侧,以便一会调用
                    left:'100%',
                    opacity:0
                });
                $('.warp_top_1').delay(6000).animate({
                    left: '-100%',
                    opacity:0
                },500);
                $('.warp_top_2').delay(6000).animate({
                    left: '0',
                    opacity:1
                },500,function(){
                    $('.warp_top_1').animate({
                        left: '100%',
                        opacity:0
                    });
                    $('.warp_top_2').delay(6000).animate({
                        left: '-100%',
                        opacity:0
                    },500);
                    $('.warp_top_3').delay(6000).animate({
                        left: '0%',
                        opacity:1
                    },500,function(){
                        $('.warp_top_2').animate({
                            left: '100%',
                            opacity:0
                        });
                        $('.warp_top_3').delay(6000).animate({
                            left: '-100%',
                            opacity:0
                        },500)
                    })
                })
            });
        }



        function middle(){
            console.log('start-mid-a');
            $('.warp_middle_1').delay().animate({
                left: 0,
                opacity:1
            },500,function(){
                $('.warp_middle_3').animate({ //强制将第三张的位置变到右侧,以便一会调用
                    left:'-100%',
                    opacity:0
                });
                $('.warp_middle_1').delay(6000).animate({
                    left: '100%',
                    opacity:0
                },500);
                $('.warp_middle_2').delay(6000).animate({
                    left: '0',
                    opacity:1
                },500,function(){
                    $('.warp_middle_1').animate({
                        left: '-100%',
                        opacity:0
                    });
                    $('.warp_middle_2').delay(6000).animate({
                        left: '100%',
                        opacity:0
                    },500);
                    $('.warp_middle_3').delay(6000).animate({
                        left: '0%',
                        opacity:1
                    },500,function(){
                        $('.warp_middle_2').animate({
                            left: '-100%',
                            opacity:0
                        });
                        $('.warp_middle_3').delay(6000).animate({
                            left: '100%',
                            opacity:0
                        },500)
                    })
                })
            });
            middleInterval = setInterval(startmiddle,20000);
        }
        function startmiddle(){
            console.log('start-mid-b');
            $('.warp_middle_1').delay().animate({
                left: 0,
                opacity:1
            },500,function(){
                $('.warp_middle_3').animate({ //强制将第三张的位置变到右侧,以便一会调用
                    left:'-100%',
                    opacity:0
                });
                $('.warp_middle_1').delay(6000).animate({
                    left: '100%',
                    opacity:0
                },500);
                $('.warp_middle_2').delay(6000).animate({
                    left: '0',
                    opacity:1
                },500,function(){
                    $('.warp_middle_1').animate({
                        left: '-100%',
                        opacity:0
                    });
                    $('.warp_middle_2').delay(6000).animate({
                        left: '100%',
                        opacity:0
                    },500);
                    $('.warp_middle_3').delay(6000).animate({
                        left: '0%',
                        opacity:1
                    },500,function(){
                        $('.warp_middle_2').animate({
                            left: '-100%',
                            opacity:0
                        });
                        $('.warp_middle_3').delay(6000).animate({
                            left: '100%',
                            opacity:0
                        },500)
                    })
                })
            });
        }


        function bottom(){
            console.log('start-bot-a');
            $('.warp_bottom_1').delay().animate({
                left: 0,
                opacity:1
            },500,function(){
                $('.warp_bottom_3').animate({ //强制将第三张的位置变到右侧,以便一会调用
                    left:'100%',
                    opacity:0
                });
                $('.warp_bottom_1').delay(6000).animate({
                    left: '-100%',
                    opacity:0
                },500);
                $('.warp_bottom_2').delay(6000).animate({
                    left: '0',
                    opacity:1
                },500,function(){
                    $('.warp_bottom_1').animate({
                        left: '100%',
                        opacity:0
                    });
                    $('.warp_bottom_2').delay(6000).animate({
                        left: '-100%',
                        opacity:0
                    },500);
                    $('.warp_bottom_3').delay(6000).animate({
                        left: '0%',
                        opacity:1
                    },500,function(){
                        $('.warp_bottom_2').animate({
                            left: '100%',
                            opacity:0
                        });
                        $('.warp_bottom_3').delay(6000).animate({
                            left: '-100%',
                            opacity:0
                        },500)
                    })
                })
            });
            bottomInterval = setInterval(startbottom,20000);
        }
        function startbottom(){
            console.log('start-bottom-b');
            $('.warp_bottom_1').delay().animate({
                left: 0,
                opacity:1
            },500,function(){
                $('.warp_bottom_3').animate({ //强制将第三张的位置变到右侧,以便一会调用
                    left:'100%',
                    opacity:0
                });
                $('.warp_bottom_1').delay(6000).animate({
                    left: '-100%',
                    opacity:0
                },500);
                $('.warp_bottom_2').delay(6000).animate({
                    left: '0',
                    opacity:1
                },500,function(){
                    $('.warp_bottom_1').animate({
                        left: '100%',
                        opacity:0
                    });
                    $('.warp_bottom_2').delay(6000).animate({
                        left: '-100%',
                        opacity:0
                    },500);
                    $('.warp_bottom_3').delay(6000).animate({
                        left: '0%',
                        opacity:1
                    },500,function(){
                        $('.warp_bottom_2').animate({
                            left: '100%',
                            opacity:0
                        });
                        $('.warp_bottom_3').delay(6000).animate({
                            left: '-100%',
                            opacity:0
                        },500)
                    })
                })
            });
        }


        var slideInterval;
        function five_slide(){
            $('.slide-1').delay(0).animate({
                opacity:1,
                left:'0%'
            },600,function() {
                console.log('第一次slide滚动');
                slideInterval = setInterval(slide,10200);
                $('.slide-1').delay(1200).animate({
                    opacity:0,
                    left:'0%'
                },600,function(){
                    console.log('oye');
                    $('.slide-2').delay(0).animate({
                        opacity:1,
                        left:'0%'
                    },600,function(){
                        $('.slide-2').delay(1200).animate({
                            opacity:0,
                            left:'0%'
                        },600,function(){
                            $('.slide-3').delay(0).animate({
                                opacity:1,
                                left:'0%'
                            },600,function(){
                                $('.slide-3').delay(1200).animate({
                                    opacity:0,
                                    left:'0%'
                                },600,function(){
                                    $('.slide-4').delay(0).animate({
                                        opacity:1,
                                        left:'0%'
                                    },600,function(){
                                        $('.slide-4').delay(1200).animate({
                                            opacity:0,
                                            left:'0%'
                                        },600,function(){
                                            $('.slide-1').delay(0).animate({
                                                opacity:1,
                                                left:'0%'
                                            },600)
                                        })
                                    })
                                })
                            })
                        });
                    })
                });

                function slide(){
                    $('.slide-1').delay(1200).animate({
                        opacity:0,
                        left:'0%'
                    },600,function(){
                        console.log('进入循环slide');
                        $('.slide-2').delay(0).animate({
                            opacity:1,
                            left:'0%'
                        },600,function(){
                            $('.slide-2').delay(1200).animate({
                                opacity:0,
                                left:'0%'
                            },600,function(){
                                $('.slide-3').delay(0).animate({
                                    opacity:1,
                                    left:'0%'
                                },600,function(){
                                    $('.slide-3').delay(1200).animate({
                                        opacity:0,
                                        left:'0%'
                                    },600,function(){
                                        $('.slide-4').delay(0).animate({
                                            opacity:1,
                                            left:'0%'
                                        },600,function(){
                                            $('.slide-4').delay(1200).animate({
                                                opacity:0,
                                                left:'0%'
                                            },600,function(){
                                                $('.slide-1').delay(0).animate({
                                                    opacity:1,
                                                    left:'0%'
                                                },600)
                                            })
                                        })
                                    })
                                })
                            });
                        })
                    });
                }
            });
        }


        $('#dowebok').fullpage({
            verticalCentered: !0,
            // navigation: true,
            // menu: '#menu',
            scrollingSpeed: 1000,
            easing:'easeInOutExpo',
            anchors: ['firstPage', 'secondPage', '3rdPage','4thPage','Last'],
            afterRender: function () {
//                $('.flyme').empty();
                $.fn.fullpage.setAllowScrolling(false);

                function loading(){
                    $('.warp_p1').delay(500).animate({
                        left: '150%',
                        opacity: 1
                    }, 2000, 'easeInOutCirc');
                    $('.loading-tata-1').delay(500).animate({
                        opacity: 0
                    }, 1700, 'easeInOutCirc');

                    $('.loading-tata-2').delay(1400).animate({
                        opacity: 1
                    }, 600, 'easeInOutCirc');
                    setTimeout(removepage1,2000)
                }

                function removepage1() {
                    $('.thin').remove();
                    $('#logo-top').css({
                        display: 'block'
                    });
                    $.fn.fullpage.setAllowScrolling(true);

                    $('.flyme-txt1').delay(50).animate({
                        left: '15%',
                        opacity:1
                    }, 500);

                    $('.flyme-txt2').delay(80).animate({
                        left: '15%',
                        opacity:1
                    }, 200);

                    $('.flyme-txt3').delay(100).animate({
                        left: '15%',
                        opacity:1
                    }, 300);

                    $('.flyme-txt4').delay(70).animate({
                        left: '15%',
                        opacity:1
                    }, 400);

                    $('footer').animate({opacity:1},500);
                    $('.warp_top_1').delay().animate({
                        left: 0,
                        opacity:1
                    },500,function(){
                        $('.warp_top_3').animate({ //强制将第三张的位置变到右侧,以便一会调用
                            left:'100%',
                            opacity:0
                        });
                        $('.warp_top_1').delay(6000).animate({
                            left: '-100%',
                            opacity:0
                        },500);
                        $('.warp_top_2').delay(6000).animate({
                            left: '0',
                            opacity:1
                        },500,function(){
                            $('.warp_top_1').animate({
                                left: '100%',
                                opacity:0
                            });
                            $('.warp_top_2').delay(6000).animate({
                                left: '-100%',
                                opacity:0
                            },500);
                            $('.warp_top_3').delay(6000).animate({
                                left: '0%',
                                opacity:1
                            },500,function(){
                                $('.warp_top_2').animate({
                                    left: '100%',
                                    opacity:0
                                });
                                $('.warp_top_3').delay(6000).animate({
                                    left: '-100%',
                                    opacity:0
                                },500)
                            })
                        })
                    });
                    topTimeout = setTimeout(top,20000);


                    $('.warp_bottom_1').delay().animate({
                        left: 0,
                        opacity:1
                    },500,function(){
                        $('.warp_bottom_3').animate({ //强制将第三张的位置变到右侧,以便一会调用
                            left:'100%',
                            opacity:0
                        });
                        $('.warp_bottom_1').delay(2000).animate({
                            left: '-100%',
                            opacity:0
                        },500);
                        $('.warp_bottom_2').delay(2000).animate({
                            left: '0',
                            opacity:1
                        },500,function(){
                            $('.warp_bottom_1').animate({
                                left: '100%',
                                opacity:0
                            });
                            $('.warp_bottom_2').delay(6000).animate({
                                left: '-100%',
                                opacity:0
                            },500);
                            $('.warp_bottom_3').delay(6000).animate({
                                left: '0%',
                                opacity:1
                            },500,function(){
                                $('.warp_bottom_2').animate({
                                    left: '100%',
                                    opacity:0
                                });
                                $('.warp_bottom_3').delay(6000).animate({   //少4s
                                    left: '-100%',
                                    opacity:0
                                },500)
                            })
                        })
                    });
                    bottomTimeout = setTimeout(bottom,16000);


                    $('.warp_middle_1').delay().animate({
                        left: 0,
                        opacity:1
                    },500,function(){
                        $('.warp_middle_3').animate({ //强制将第三张的位置变到右侧,以便一会调用
                            left:'-100%',
                            opacity:0
                        });
                        $('.warp_middle_1').delay(4000).animate({
                            left: '100%',
                            opacity:0
                        },500);
                        $('.warp_middle_2').delay(4000).animate({
                            left: '0',
                            opacity:1
                        },500,function(){
                            $('.warp_middle_1').animate({
                                left: '-100%',
                                opacity:0
                            });
                            $('.warp_middle_2').delay(6000).animate({
                                left: '100%',
                                opacity:0
                            },500);
                            $('.warp_middle_3').delay(6000).animate({
                                left: '0%',
                                opacity:1
                            },500,function(){
                                $('.warp_middle_2').animate({
                                    left: '-100%',
                                    opacity:0
                                });
                                $('.warp_middle_3').delay(6000).animate({
                                    left: '100%',
                                    opacity:0
                                },500)
                            })
                        })
                    });
                    middleTimeout = setTimeout(middle,18000);

                }
                //


                //监听加载状态改变
                document.onreadystatechange = completeLoading;

                //加载状态为complete时移除loading效果
                function completeLoading() {
                    if (document.readyState == "complete") {
                        setTimeout(loading, 300)
                    }
                }


            },
            afterLoad: function (anchorLink, index) {
                if (index == 1) {

                } else if (index == 2) {
                    console.log('来到了第二页');
                    $('#triangle').delay(0).animate({
                        left: '0'
                    }, 500);
                    $('.squere').delay(100).animate({
                        top: '0',
                        right:0,
                        opacity: 1
                    }, 500, 'easeInOutCirc');
                    $('.anli-txt1').delay(50).animate({
                        left: '0%'
                    }, 600);

                    $('.anli-txt2').delay(90).animate({
                        left: '0%'
                    }, 200);

                    $('.anli-txt3').delay(120).animate({
                        left: '0%'
                    }, 400);

                    $('.anli-txt4').delay(80).animate({
                        left: '0%'
                    }, 300);
                    $('.blueslogn-1').delay(500).animate({
                        opacity: 1
                    },500);
                    $('.blueslogn-2').delay(900).animate({
                        opacity: 1
                    }, 500);
                    $('.page2-phone').delay(800).animate({
                        bottom: 0,
                        opacity: 1
                    }, 600)
                } else if (index == 3) {
                    $('.flash-blue-squere').animate({
                        width: '50%',
                        left: 0,
                        top: 0,
                        height: document_height,
                        opacity:1
                    }, 1000);

                    var position = {left: '15%', top: '15%', opacity: 1};
                    $('.flash-pink-squere').delay(100).animate({
                        left: '14%',
                        top: '27%',
                        width: '22%',
                        height: '46%',
                        opacity:1
                    }, 600);
                    $('.circle-5').delay(50).animate({opacity:1},100);
                    $('.circle-1').delay(50).animate(position, 500);
                    $('.circle-2').delay(150).animate(position, 800);
                    $('.circle-3').delay(90).animate(position, 400);
                    $('.circle-4').delay(190).animate(position, 1200);
                    $('.circle-6').delay(30).animate(position, 800);
                    $('.circle-7').delay(160).animate(position, 300);
                    $('.circle-8').delay(70).animate(position, 700);
                    $('.circle-9').delay(200).animate(position, 1600);
                    $('.flash-txt1').delay(800).animate({
                        left: 0,
                        opacity : 1
                    }, 500);
                    $('.flash-txt2').delay(500).animate({
                        left: 0,
                        opacity : 1
                    }, 600);
                    $('.flash-small-1').delay(700).animate({
                        left: 0,
                        opacity : 1
                    }, 400);
                    $('.flash-small-2').delay(800).animate({
                        left: 0,
                        opacity : 1
                    }, 700);
                    $('.flash-small-3').delay(1100).animate({
                        left: 0,
                        opacity : 1
                    }, 300);
                    new Vue({
                        el: '#dowebok',
                        data: {
                            show: null
                        },
                        ready: function () {
                            var self = this;
                            setInterval(function () {
                                self.show = Math.round(Math.random() * 10);
                                console.log(self.show)
                            }, 800)
                        },
                        method: {}
                    })
                } else if(index == 4){
                    $('.cike-txt1').delay(150).animate({
                        left: '0%',
                        opacity:1
                    }, 600);

                    $('.cike-txt2').delay(250).animate({
                        left: '0%',
                        opacity:1
                    }, 200);
                    $('#demo').delay(450).animate({
                        opacity: 1
                    }, 500);
                    $('.circle-phone').delay(300).animate({
                        opacity:1,
                        bottom: '15%'
                        // bottom:(document_height-circlelargeW)/2 -1 +'px'
                    },500);
                    $('.circle-large').delay(400).animate({
                        opacity:1
                        // top: (document_height-circlelargeW)/2 +'px'
                    },500,'easeOutSine');
                    $('.cike-blu-1').delay(800).animate({
                        opacity:1,
                        left:0
                    },500,'easeOutSine');
                    $('.cike-blu-2').delay(1000).animate({
                        opacity:1,
                        left:0
                    },800,'easeOutSine');
                    $('.cike-blu-3').delay(1150).animate({
                        opacity:1,
                        left:0
                    },400,'easeOutSine');
                    $('.cike-blu-4').delay(1200).animate({
                        opacity:1,
                        left:0
                    },900,'easeOutSine');

                    $('.cike-pink-1').delay(1230).animate({
                        opacity:1,
                        left:0
                    },500,'easeOutSine');
                    $('.cike-pink-2').delay(1300).animate({
                        opacity:1,
                        left:0
                    },500,'easeOutSine');
                    $('.cike-pink-3').delay(1300).animate({
                        opacity:1,
                        left:0
                    },500,'easeOutSine');
                    $('.cike-pink-4').delay(1300).animate({
                        opacity:1,
                        left:0
                    },500,'easeOutSine')
                }else if(index == 5){
                    $('.circle-gonna').delay(0).animate({
                        left:'25%'
                    },600,'easeInOutQuart');
                    $('.gonna-txt1').animate({'color' : '#FFFFFF'}, 1000);
                    $('.sloagn-gonna').animate({opacity:1},300);
                    $('.sloagn-play').animate({opacity:1},300);
                    $('.download-tag').animate({opacity:1},200);
                    $('.gonna-blu-1').delay(300).animate({
                        left:0,
                        opacity:1
                    },600);
                    $('.abouttata').delay(100).animate({
                        left: '7%'
                    },500)
                    $('.gonna-blu-2').delay(200).animate({
                        left:'1.5rem',
                        opacity:1
                    },800);
                    $('.gonna-pink-1').delay(300).animate({
                        left:0,
                        opacity:1
                    },500);
                    $('.gonna-pink-2').delay(600).animate({
                        left:'-1.5rem',
                        opacity:1
                    },300);
                    five_slide()


                }

            },
            onLeave: function (index, nextIndex, direction) {
                if (index == 1 && direction == 'down') { //离开第一页
                    console.log('离开了第一页');
                    clearInterval(topInterval);
                    clearInterval(middleInterval);
                    clearInterval(bottomInterval);
                    clearTimeout(topTimeout);
                    clearTimeout(middleTimeout);
                    clearTimeout(bottomTimeout);
                    $('.warp_top_1,.warp_top_2,.warp_top_3,.warp_bottom_1,.warp_bottom_2,.warp_bottom_3').stop(true,true).animate({
                        left: '100%',
                        opacity: 0
                    });
                    $('.warp_middle_1,.warp_middle_2,.warp_middle_3').stop(true,true).animate({
                        left: '-100%',
                        opacity: 0
                    });

                }else if((index==2 && nextIndex == 1 && direction == 'up') || nextIndex == 1){ //回到第一页
                    console.log('回到了第一页');
                    $('.flyme-txt1').delay(50).animate({
                        left: '15%'
                    }, 500);

                    $('.flyme-txt2').delay(80).animate({
                        left: '15%'
                    }, 200);

                    $('.flyme-txt3').delay(100).animate({
                        left: '15%'
                    }, 300);

                    $('.flyme-txt4').delay(70).animate({
                        left: '15%'
                    }, 400);


                    $('.warp_top_1').delay().animate({
                        left: 0,
                        opacity:1
                    },500,function(){
                        $('.warp_top_3').animate({ //强制将第三张的位置变到右侧,以便一会调用
                            left:'100%',
                            opacity:0
                        });
                        $('.warp_top_1').delay(6000).animate({
                            left: '-100%',
                            opacity:0
                        },500);
                        $('.warp_top_2').delay(6000).animate({
                            left: '0',
                            opacity:1
                        },500,function(){
                            $('.warp_top_1').animate({
                                left: '100%',
                                opacity:0
                            });
                            console.log('hereeee')

                            $('.warp_top_2').delay(6000).animate({
                                left: '-100%',
                                opacity:0
                            },500);
                            $('.warp_top_3').delay(6000).animate({
                                left: '0%',
                                opacity:1
                            },500,function(){
                                $('.warp_top_2').animate({
                                    left: '100%',
                                    opacity:0
                                });
                                $('.warp_top_3').delay(6000).animate({
                                    left: '-100%',
                                    opacity:0
                                },500)
                            })
                        })
                    });
                    topTimeout = setTimeout(top,20000);

                    $('.warp_bottom_1').delay().animate({
                        left: 0,
                        opacity:1
                    },500,function(){
                        $('.warp_bottom_3').animate({ //强制将第三张的位置变到右侧,以便一会调用
                            left:'100%',
                            opacity:0
                        });
                        $('.warp_bottom_1').delay(2000).animate({
                            left: '-100%',
                            opacity:0
                        },500);
                        $('.warp_bottom_2').delay(2000).animate({
                            left: '0',
                            opacity:1
                        },500,function(){
                            $('.warp_bottom_1').animate({
                                left: '100%',
                                opacity:0
                            });
                            $('.warp_bottom_2').delay(6000).animate({
                                left: '-100%',
                                opacity:0
                            },500);
                            $('.warp_bottom_3').delay(6000).animate({
                                left: '0%',
                                opacity:1
                            },500,function(){
                                $('.warp_bottom_2').animate({
                                    left: '100%',
                                    opacity:0
                                });
                                $('.warp_bottom_3').delay(6000).animate({   //少4s
                                    left: '-100%',
                                    opacity:0
                                },500)
                            })
                        })
                    });
                    bottomTimeout = setTimeout(bottom,16000);


                    $('.warp_middle_1').delay().animate({
                        left: 0,
                        opacity:1
                    },500,function(){
                        $('.warp_middle_3').animate({ //强制将第三张的位置变到右侧,以便一会调用
                            left:'-100%',
                            opacity:0
                        });
                        $('.warp_middle_1').delay(4000).animate({
                            left: '100%',
                            opacity:0
                        },500);
                        $('.warp_middle_2').delay(4000).animate({
                            left: '0',
                            opacity:1
                        },500,function(){
                            $('.warp_middle_1').animate({
                                left: '-100%',
                                opacity:0
                            });
                            $('.warp_middle_2').delay(6000).animate({
                                left: '100%',
                                opacity:0
                            },500);
                            $('.warp_middle_3').delay(6000).animate({
                                left: '0%',
                                opacity:1
                            },500,function(){
                                $('.warp_middle_2').animate({
                                    left: '-100%',
                                    opacity:0
                                });
                                $('.warp_middle_3').delay(6000).animate({
                                    left: '100%',
                                    opacity:0
                                },500)
                            })
                        })
                    });
                    middleTimeout = setTimeout(middle,18000);


                }
                if (index == 2 && (direction == 'down' || direction == 'up')) {
                    console.log('离开第二页');
                    $('#triangle').delay(0).animate({
                        left: '-100%'
                    }, 500);
                    $('.squere').delay(100).animate({
                        right: '-100%',
                        opacity: 0
                    }, 500, function(){
                        $(this).css({
                            right:0,
                            top:'-100%'
                        });
                    });
                    $('.anli-txt1').delay(50).animate({
                        left: '-100%'
                    }, 600);

                    $('.anli-txt2').delay(90).animate({
                        left: '-100%'
                    }, 200);

                    $('.anli-txt3').delay(120).animate({
                        left: '-100%'
                    }, 400);

                    $('.anli-txt4').delay(80).animate({
                        left: '-100%'
                    }, 300);
                    $('.blueslogn-1').delay(0).animate({
                        opacity: 0
                    }, function () {
                        $(this).removeClass('bounceIn')
                    });
                    $('.blueslogn-2').delay(0).animate({
                        opacity: 0
                    }, function () {
                        $(this).removeClass('bounceIn')
                    });
                    $('.page2-phone').delay(0).animate({
                        bottom: '-100%',
                        opacity: 0
                    }, 600)
                }
                if (index == 3 && (direction == 'down' || direction == 'up')) {
                    $('.flash-blue-squere').animate({
                        width: '5%',
                        height: '5%',
                        left: document_width / 4.5,
                        top: document_height / 2,
                        opacity: 0
                    }, 1000);
                    var position = {left: '15%', top: '15%', opacity: 1};
                    $('.flash-pink-squere').delay(100).animate({
                        width: '5%',
                        left: document_width / 4.5,
                        top: document_height / 2,
                        height: '5%',
                        opacity:0
                    }, 600);
                    $('.circle-1').delay(50).animate({
                        left: '-110%',
                        top: '-50%',
                        opacity:0
                    }, 500);
                    $('.circle-2').delay(150).animate({
                        left: 0,
                        top: '-100%',
                        opacity:0
                    }, 800);
                    $('.circle-3').delay(90).animate({
                        left: '100%',
                        top: '-100%',
                        opacity:0
                    }, 400);
                    $('.circle-4').delay(190).animate({
                        left: '-100%',
                        top: 0,
                        opacity:0
                    }, 1200);
                    $('.circle-6').delay(30).animate({
                        left: '100%',
                        top: 0,
                        opacity:0
                    }, 800);
                    $('.circle-7').delay(160).animate({
                        left: '-100%',
                        top: '-100%',
                        opacity:0
                    }, 300);
                    $('.circle-8').delay(70).animate({
                        left: 0,
                        top: '100%',
                        opacity:0
                    }, 700);
                    $('.circle-9').delay(200).animate({
                        left: '100%',
                        top: '100%',
                        opacity:0
                    }, 1600);
                    $('.flash-txt1').animate({
                        left: '-100',
                        opacity : 0
                    }, 500);
                    $('.flash-txt2').animate({
                        left: '-100',
                        opacity : 0
                    }, 600);
                    $('.flash-small-1').animate({
                        left: '80%',
                        opacity : 0
                    }, 400);
                    $('.flash-small-2').animate({
                        left: '80%',
                        opacity : 0
                    }, 700);
                    $('.flash-small-3').animate({
                        left: '80%',
                        opacity : 0
                    }, 300);
                }
                if (index == 4 && (direction == 'down' || direction == 'up')){
                    $('.cike-txt1').delay(0).animate({
                        left: '100%',
                        opacity:0
                    }, 600);

                    $('.cike-txt2').delay(100).animate({
                        left: '100%',
                        opacity:0
                    }, 200);
                    $('#demo').delay(0).animate({
                        opacity: 0
                    }, 500);
                    $('.circle-phone').delay(100).animate({
                        opacity:0,
                        bottom:'-100%'
                    },300);
                    $('.circle-small').delay(0).animate({
                        opacity:0,
                        top: '0%'
                    },500,'easeInQuart');
                    $('.circle-large').delay(0).animate({
                        opacity:0
                        // top: (document_height-circlelargeW)/2 +'px'
                    },500,'easeOutSine');
                    $('.cike-blu-1').delay(0).animate({
                        opacity:0,
                        left:'-50%'
                    },500,'easeOutSine');
                    $('.cike-blu-2').delay(200).animate({
                        opacity:0,
                        left:'-50%'
                    },800,'easeOutSine');
                    $('.cike-blu-3').delay(400).animate({
                        opacity:0,
                        left:'-50%'
                    },400,'easeOutSine');
                    $('.cike-blu-4').delay(600).animate({
                        opacity:0,
                        left:'-50%'
                    },900,'easeOutSine');

                    $('.cike-pink-1').delay(1400).animate({
                        opacity:0,
                        left:'100%'
                    },500,'easeOutSine');
                    $('.cike-pink-2').delay(1600).animate({
                        opacity:0,
                        left:'100%'
                    },900,'easeOutSine');
                    $('.cike-pink-3').delay(1450).animate({
                        opacity:0,
                        left:'100%'
                    },700,'easeOutSine');
                    $('.cike-pink-4').delay(1700).animate({
                        opacity:0,
                        left:'100%'
                    },400,'easeOutSine')
                }
                if(index == 5 && direction == 'up'){
                    clearInterval(slideInterval);
                    $('.slide-1,.slide-2,.slide-3,.slide-4').stop(true,true).animate({
                        opacity: 0,
                        left:'0%'
                    },500);
                    $('.circle-gonna').delay(0).animate({
                        left:'-100%'
                    },600,'easeInOutQuart');
                    $('.gonna-txt1').animate({'color' : '#116ef4'}, 1000);
                    $('.sloagn-gonna').animate({opacity:0},300);
                    $('.gonna-blu-1').delay(0).animate({
                        left:'60%',
                        opacity:0
                    },600);
                    $('.gonna-blu-2').delay(0).animate({
                        left:'80%',
                        opacity:0
                    },800);
                    $('.gonna-pink-1').delay(0).animate({
                        left:'-70%',
                        opacity:0
                    },500);
                    $('.gonna-pink-2').delay(0).animate({
                        left:'-40%',
                        opacity:0
                    },300);
                }

            }


        });
    }

    //fullPage.js initialization
    initialization();








});