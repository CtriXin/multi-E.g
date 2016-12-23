/*!
 * fullPage 2.7.1
 * https://github.com/alvarotrigo/fullPage.js
 * @license MIT licensed
 *
 * Copyright (C) 2015 alvarotrigo.com - A project by Alvaro Trigo
 */
!function(e,n){"function"==typeof define&&define.amd?define(["jquery"],function(t){return n(t,e,e.document,e.Math)}):"undefined"!=typeof exports?module.exports=n(require("jquery"),e,e.document,e.Math):n(jQuery,e,e.document,e.Math)}("undefined"!=typeof window?window:this,function(e,n,t,o,i){var s=e(n),a=e(t);e.fn.fullpage=function(l){function r(){ye.css({height:"100%",position:"relative"}),ye.addClass("fullpage-wrapper"),e("html").addClass("fp-enabled"),l.css3&&(l.css3=te()),l.anchors.length||(l.anchors=e("[data-anchor]").map(function(){return e(this).data("anchor").toString()}).get()),ge.setAllowScrolling(!0),ye.removeClass("fp-destroyed"),f(),e(".fp-section").each(function(n){var t=e(this),o=t.find(".fp-slide"),i=o.length;n||0!==e(".fp-section.active").length||t.addClass("active"),t.css("height",xe+"px"),l.paddingTop&&t.css("padding-top",l.paddingTop),l.paddingBottom&&t.css("padding-bottom",l.paddingBottom),"undefined"!=typeof l.sectionsColor[n]&&t.css("background-color",l.sectionsColor[n]),"undefined"!=typeof l.anchors[n]&&(t.attr("data-anchor",l.anchors[n]),t.hasClass("active")&&V(l.anchors[n],n)),l.menu&&l.css3&&e(l.menu).closest(".fullpage-wrapper").length&&e(l.menu).appendTo(he),i>0?c(t,o,i):l.verticalCentered&&W(t)}),ge.setAutoScrolling(l.autoScrolling,"internal");var o=e(".fp-section.active").find(".fp-slide.active");if(o.length&&(0!==e(".fp-section.active").index(".fp-section")||0===e(".fp-section.active").index(".fp-section")&&0!==o.index())&&le(o),l.fixedElements&&l.css3&&e(l.fixedElements).appendTo(he),l.navigation&&p(),l.scrollOverflow?("complete"===t.readyState&&u(),s.on("load",u)):v(),D(),!l.animateAnchor&&(o=n.location.hash.replace("#","").split("/")[0],o.length)){var i=e('[data-anchor="'+o+'"]');i.length&&(l.autoScrolling?re(i.position().top):(re(0),ve.scrollTop(i.position().top)),V(o,null),e.isFunction(l.afterLoad)&&l.afterLoad.call(i,o,i.index(".fp-section")+1),i.addClass("active").siblings().removeClass("active"))}ne(),s.on("load",function(){var e=n.location.hash.replace("#","").split("/"),t=e[0],e=e[1];t&&Q(t,e)})}function c(n,t,o){var i=100*o,s=100/o;t.wrapAll('<div class="fp-slidesContainer" />'),t.parent().wrap('<div class="fp-slides" />'),n.find(".fp-slidesContainer").css("width",i+"%"),o>1&&(l.controlArrows&&d(n),l.slidesNavigation&&G(n,o)),t.each(function(n){e(this).css("width",s+"%"),l.verticalCentered&&W(e(this))}),n=n.find(".fp-slide.active"),n.length&&(0!==e(".fp-section.active").index(".fp-section")||0===e(".fp-section.active").index(".fp-section")&&0!==n.index())?le(n):t.eq(0).addClass("active")}function f(){e(l.sectionSelector).each(function(){e(this).addClass("fp-section")}),e(l.slideSelector).each(function(){e(this).addClass("fp-slide")})}function d(e){e.find(".fp-slides").after('<div class="fp-controlArrow fp-prev"></div><div class="fp-controlArrow fp-next"></div>'),"#fff"!=l.controlArrowColor&&(e.find(".fp-controlArrow.fp-next").css("border-color","transparent transparent transparent "+l.controlArrowColor),e.find(".fp-controlArrow.fp-prev").css("border-color","transparent "+l.controlArrowColor+" transparent transparent")),l.loopHorizontal||e.find(".fp-controlArrow.fp-prev").hide()}function p(){he.append('<div id="fp-nav"><ul></ul></div>');var n=e("#fp-nav");n.addClass(function(){return l.showActiveTooltip?"fp-show-active "+l.navigationPosition:l.navigationPosition});for(var t=0;t<e(".fp-section").length;t++){var o="";l.anchors.length&&(o=l.anchors[t]);var o='<li><a href="#'+o+'"><span></span></a>',i=l.navigationTooltips[t];"undefined"!=typeof i&&""!==i&&(o+='<div class="fp-tooltip '+l.navigationPosition+'">'+i+"</div>"),o+="</li>",n.find("ul").append(o)}e("#fp-nav").css("margin-top","-"+e("#fp-nav").height()/2+"px"),e("#fp-nav").find("li").eq(e(".fp-section.active").index(".fp-section")).find("a").addClass("active")}function u(){e(".fp-section").each(function(){var n=e(this).find(".fp-slide");n.length?n.each(function(){U(e(this))}):U(e(this))}),v()}function v(){var n=e(".fp-section.active"),t=n.find("SLIDES_WRAPPER"),o=n.find(".fp-scrollable");t.length&&(o=t.find(".fp-slide.active")),o.mouseover(),M(n),F(n),e.isFunction(l.afterLoad)&&l.afterLoad.call(n,n.data("anchor"),n.index(".fp-section")+1),e.isFunction(l.afterRender)&&l.afterRender.call(ye)}function h(){var n;if(!l.autoScrolling||l.scrollBar){for(var i=s.scrollTop(),a=0,r=o.abs(i-t.querySelectorAll(".fp-section")[0].offsetTop),c=t.querySelectorAll(".fp-section"),f=0;f<c.length;++f){var d=o.abs(i-c[f].offsetTop);r>d&&(a=f,r=d)}n=e(c).eq(a)}if(!l.autoScrolling||l.scrollBar){if(!n.hasClass("active")&&!n.hasClass("fp-auto-height")){if(De=!0,i=e(".fp-section.active"),a=i.index(".fp-section")+1,r=N(n),c=n.data("anchor"),f=n.index(".fp-section")+1,d=n.find(".fp-slide.active"),d.length)var p=d.data("anchor"),u=d.index();ke&&(n.addClass("active").siblings().removeClass("active"),e.isFunction(l.onLeave)&&l.onLeave.call(i,a,f,r),e.isFunction(l.afterLoad)&&l.afterLoad.call(n,c,f),M(n),ge.setFitToSection(!n.hasClass("fp-auto-height")),V(c,f-1),l.anchors.length&&(Ce=c,J(u,p,c,f))),clearTimeout(ze),ze=setTimeout(function(){De=!1},100)}l.fitToSection&&(clearTimeout(Ie),Ie=setTimeout(function(){ke&&l.fitToSection&&(e(".fp-section.active").is(n)&&requestAnimFrame(function(){be=!0}),k(n),be=!1)},l.fitToSectionDelay))}}function g(e){return e.find(".fp-slides").length?e.find(".fp-slide.active").find(".fp-scrollable"):e.find(".fp-scrollable")}function m(e,n){if(Be.m[e]){var t,o;if("down"==e?(t="bottom",o=ge.moveSectionDown):(t="top",o=ge.moveSectionUp),0<n.length){if(!(t="top"===t?!n.scrollTop():"bottom"===t?n.scrollTop()+1+n.innerHeight()>=n[0].scrollHeight:void 0))return!0;o()}else o()}}function S(n){var t=n.originalEvent;if(!w(n.target)&&y(t)){l.autoScrolling&&n.preventDefault(),n=e(".fp-section.active");var i=g(n);ke&&!me&&(t=ae(t),Ve=t.y,Ne=t.x,n.find(".fp-slides").length&&o.abs(Oe-Ne)>o.abs(He-Ve)?o.abs(Oe-Ne)>s.width()/100*l.touchSensitivity&&(Oe>Ne?Be.m.right&&ge.moveSlideRight():Be.m.left&&ge.moveSlideLeft()):l.autoScrolling&&o.abs(He-Ve)>s.height()/100*l.touchSensitivity&&(He>Ve?m("down",i):Ve>He&&m("up",i)))}}function w(n,t){t=t||0;var o=e(n).parent();return t<l.normalScrollElementTouchThreshold&&o.is(l.normalScrollElements)?!0:t==l.normalScrollElementTouchThreshold?!1:w(o,++t)}function y(e){return"undefined"==typeof e.pointerType||"mouse"!=e.pointerType}function x(e){e=e.originalEvent,l.fitToSection&&ve.stop(),y(e)&&(e=ae(e),He=e.y,Oe=e.x)}function b(e,n){for(var t=0,i=e.slice(o.max(e.length-n,1)),s=0;s<i.length;s++)t+=i[s];return o.ceil(t/n)}function T(t){var i=(new Date).getTime();if(l.autoScrolling&&!Ee){t=t||n.event;var s=t.wheelDelta||-t.deltaY||-t.detail,a=o.max(-1,o.min(1,s));return 149<Le.length&&Le.shift(),Le.push(o.abs(s)),l.scrollBar&&(t.preventDefault?t.preventDefault():t.returnValue=!1),t=e(".fp-section.active"),t=g(t),s=i-Ue,Ue=i,s>200&&(Le=[]),ke&&(i=b(Le,10),s=b(Le,70),i>=s&&(0>a?m("down",t):m("up",t))),!1}l.fitToSection&&ve.stop()}function C(n){var t=e(".fp-section.active").find(".fp-slides"),o=t.find(".fp-slide").length;if(!(!t.length||me||2>o)){var o=t.find(".fp-slide.active"),i=null,i="prev"===n?o.prev(".fp-slide"):o.next(".fp-slide");if(!i.length){if(!l.loopHorizontal)return;i="prev"===n?o.siblings(":last"):o.siblings(":first")}me=!0,I(t,i)}}function A(){e(".fp-slide.active").each(function(){le(e(this),"internal")})}function k(n,t,o){requestAnimFrame(function(){var i=n.position();if("undefined"!=typeof i){var a=n.hasClass("fp-auto-height")?0==i.top?0:i.top-xe+n.height():i.top,i={element:n,callback:t,isMovementUp:o,dest:i,dtop:a,yMovement:N(n),anchorLink:n.data("anchor"),sectionIndex:n.index(".fp-section"),activeSlide:n.find(".fp-slide.active"),activeSection:e(".fp-section.active"),leavingSection:e(".fp-section.active").index(".fp-section")+1,localIsResizing:be};if(!(i.activeSection.is(n)&&!be||l.scrollBar&&s.scrollTop()===i.dtop&&!n.hasClass("fp-auto-height"))){if(i.activeSlide.length)var r=i.activeSlide.data("anchor"),c=i.activeSlide.index();if(l.autoScrolling&&l.continuousVertical&&"undefined"!=typeof i.isMovementUp&&(!i.isMovementUp&&"up"==i.yMovement||i.isMovementUp&&"down"==i.yMovement)&&(i.isMovementUp?e(".fp-section.active").before(i.activeSection.nextAll(".fp-section")):e(".fp-section.active").after(i.activeSection.prevAll(".fp-section").get().reverse()),re(e(".fp-section.active").position().top),A(),i.wrapAroundElements=i.activeSection,i.dest=i.element.position(),i.dtop=i.dest.top,i.yMovement=N(i.element)),e.isFunction(l.onLeave)&&!i.localIsResizing){if(!1===l.onLeave.call(i.activeSection,i.leavingSection,i.sectionIndex+1,i.yMovement))return;R(i.activeSection)}n.addClass("active").siblings().removeClass("active"),M(n),ke=!1,J(c,r,i.anchorLink,i.sectionIndex),L(i),Ce=i.anchorLink,V(i.anchorLink,i.sectionIndex)}}})}function L(n){if(l.css3&&l.autoScrolling&&!l.scrollBar)X("translate3d(0px, -"+n.dtop+"px, 0px)",!0),l.scrollingSpeed?Re=setTimeout(function(){B(n)},l.scrollingSpeed):B(n);else{var t=E(n);e(t.element).animate(t.options,l.scrollingSpeed,l.easing).promise().done(function(){B(n)})}}function E(e){var n={};return l.autoScrolling&&!l.scrollBar?(n.options={top:-e.dtop},n.element=".fullpage-wrapper"):(n.options={scrollTop:e.dtop},n.element="html, body"),n}function B(n){n.wrapAroundElements&&n.wrapAroundElements.length&&(n.isMovementUp?e(".fp-section:first").before(n.wrapAroundElements):e(".fp-section:last").after(n.wrapAroundElements),re(e(".fp-section.active").position().top),A()),n.element.find(".fp-scrollable").mouseover(),ge.setFitToSection(!n.element.hasClass("fp-auto-height")),e.isFunction(l.afterLoad)&&!n.localIsResizing&&l.afterLoad.call(n.element,n.anchorLink,n.sectionIndex+1),F(n.element),ke=!0,e.isFunction(n.callback)&&n.callback.call(this)}function M(n){var t=n.find(".fp-slide.active");t.length&&(n=e(t)),n.find("img[data-src], source[data-src], audio[data-src]").each(function(){e(this).attr("src",e(this).data("src")),e(this).removeAttr("data-src"),e(this).is("source")&&e(this).closest("video").get(0).load()})}function F(n){n.find("video, audio").each(function(){var n=e(this).get(0);n.hasAttribute("autoplay")&&"function"==typeof n.play&&n.play()})}function R(n){n.find("video, audio").each(function(){var n=e(this).get(0);n.hasAttribute("data-ignore")||"function"!=typeof n.pause||n.pause()})}function q(){if(!De&&!l.lockAnchors){var e=n.location.hash.replace("#","").split("/"),t=e[0],e=e[1];if(t.length){var o="undefined"==typeof Ce,i="undefined"==typeof Ce&&"undefined"==typeof e&&!me;(t&&t!==Ce&&!o||i||!me&&Ae!=e)&&Q(t,e)}}}function z(e){ke&&(e.pageY<Ye?ge.moveSectionUp():e.pageY>Ye&&ge.moveSectionDown()),Ye=e.pageY}function I(n,t){var i=t.position(),s=t.index(),a=n.closest(".fp-section"),r=a.index(".fp-section"),c=a.data("anchor"),f=a.find(".fp-slidesNav"),d=ee(t),p=be;if(l.onSlideLeave){var u=a.find(".fp-slide.active"),v=u.index(),h;if(h=v==s?"none":v>s?"left":"right",!p&&"none"!==h&&e.isFunction(l.onSlideLeave)&&!1===l.onSlideLeave.call(u,c,r+1,v,h,s))return void(me=!1)}t.addClass("active").siblings().removeClass("active"),p||M(t),!l.loopHorizontal&&l.controlArrows&&(a.find(".fp-controlArrow.fp-prev").toggle(0!==s),a.find(".fp-controlArrow.fp-next").toggle(!t.is(":last-child"))),a.hasClass("active")&&J(s,d,c,r);var g=function(){p||e.isFunction(l.afterSlideLoad)&&l.afterSlideLoad.call(t,c,r+1,d,s),me=!1};l.css3?(i="translate3d(-"+o.round(i.left)+"px, 0px, 0px)",H(n.find(".fp-slidesContainer"),0<l.scrollingSpeed).css(ce(i)),qe=setTimeout(function(){g()},l.scrollingSpeed,l.easing)):n.animate({scrollLeft:o.round(i.left)},l.scrollingSpeed,l.easing,function(){g()}),f.find(".active").removeClass("active"),f.find("li").eq(s).find("a").addClass("active")}function P(){if(D(),Se){var n=e(t.activeElement);n.is("textarea")||n.is("input")||n.is("select")||(n=s.height(),o.abs(n-We)>20*o.max(We,n)/100&&(ge.reBuild(!0),We=n))}else clearTimeout(Fe),Fe=setTimeout(function(){ge.reBuild(!0)},350)}function D(){var e=l.responsive||l.responsiveWidth,n=l.responsiveHeight;e&&ge.setResponsive(s.width()<e),n&&(ye.hasClass("fp-responsive")||ge.setResponsive(s.height()<n))}function H(e){var n="all "+l.scrollingSpeed+"ms "+l.easingcss3;return e.removeClass("fp-notransition"),e.css({"-webkit-transition":n,transition:n})}function O(e,n){if(825>e||900>n){var t=o.min(100*e/825,100*n/900).toFixed(2);he.css("font-size",t+"%")}else he.css("font-size","100%")}function V(n,t){l.menu&&(e(l.menu).find(".active").removeClass("active"),e(l.menu).find('[data-menuanchor="'+n+'"]').addClass("active")),l.navigation&&(e("#fp-nav").find(".active").removeClass("active"),n?e("#fp-nav").find('a[href="#'+n+'"]').addClass("active"):e("#fp-nav").find("li").eq(t).find("a").addClass("active"))}function N(n){var t=e(".fp-section.active").index(".fp-section");return n=n.index(".fp-section"),t==n?"none":t>n?"up":"down"}function U(e){e.css("overflow","hidden");var n=e.closest(".fp-section"),t=e.find(".fp-scrollable"),o;t.length?o=t.get(0).scrollHeight:(o=e.get(0).scrollHeight,l.verticalCentered&&(o=e.find(".fp-tableCell").get(0).scrollHeight)),n=xe-parseInt(n.css("padding-bottom"))-parseInt(n.css("padding-top")),o>n?t.length?t.css("height",n+"px").parent().css("height",n+"px"):(l.verticalCentered?e.find(".fp-tableCell").wrapInner('<div class="fp-scrollable" />'):e.wrapInner('<div class="fp-scrollable" />'),e.find(".fp-scrollable").slimScroll({allowPageScroll:!0,height:n+"px",size:"10px",alwaysVisible:!0})):Y(e),e.css("overflow","")}function Y(e){e.find(".fp-scrollable").children().first().unwrap().unwrap(),e.find(".slimScrollBar").remove(),e.find(".slimScrollRail").remove()}function W(e){e.addClass("fp-table").wrapInner('<div class="fp-tableCell" style="height:'+K(e)+'px;" />')}function K(e){var n=xe;return(l.paddingTop||l.paddingBottom)&&(n=e,n.hasClass("fp-section")||(n=e.closest(".fp-section")),e=parseInt(n.css("padding-top"))+parseInt(n.css("padding-bottom")),n=xe-e),n}function X(e,n){n?H(ye):ye.addClass("fp-notransition"),ye.css(ce(e)),setTimeout(function(){ye.removeClass("fp-notransition")},10)}function j(n){var t=e('.fp-section[data-anchor="'+n+'"]');return t.length||(t=e(".fp-section").eq(n-1)),t}function Q(e,n){var t=j(e);"undefined"==typeof n&&(n=0),e===Ce||t.hasClass("active")?_(t,n):k(t,function(){_(t,n)})}function _(e,n){if("undefined"!=typeof n){var t=e.find(".fp-slides"),o;o=e.find(".fp-slides");var i=o.find('.fp-slide[data-anchor="'+n+'"]');i.length||(i=o.find(".fp-slide").eq(n)),o=i,o.length&&I(t,o)}}function G(e,n){e.append('<div class="fp-slidesNav"><ul></ul></div>');var t=e.find(".fp-slidesNav");t.addClass(l.slidesNavPosition);for(var o=0;n>o;o++)t.find("ul").append('<li><a href="#"><span></span></a></li>');t.css("margin-left","-"+t.width()/2+"px"),t.find("li").first().find("a").addClass("active")}function J(e,n,t,o){o="",l.anchors.length&&!l.lockAnchors&&(e?("undefined"!=typeof t&&(o=t),"undefined"==typeof n&&(n=e),Ae=n,Z(o+"/"+n)):("undefined"!=typeof e&&(Ae=n),Z(t))),ne()}function Z(e){if(l.recordHistory)location.hash=e;else if(Se||we)history.replaceState(i,i,"#"+e);else{var t=n.location.href.split("#")[0];n.location.replace(t+"#"+e)}}function ee(e){var n=e.data("anchor");return e=e.index(),"undefined"==typeof n&&(n=e),n}function ne(){var n=e(".fp-section.active"),t=n.find(".fp-slide.active"),o=n.data("anchor"),i=ee(t),n=n.index(".fp-section"),n=String(n);l.anchors.length&&(n=o),t.length&&(n=n+"-"+i),n=n.replace("/","-").replace("#",""),he[0].className=he[0].className.replace(RegExp("\\b\\s?fp-viewing-[^\\s]+\\b","g"),""),he.addClass("fp-viewing-"+n)}function te(){var e=t.createElement("p"),o,s={webkitTransform:"-webkit-transform",OTransform:"-o-transform",msTransform:"-ms-transform",MozTransform:"-moz-transform",transform:"transform"};t.body.insertBefore(e,null);for(var a in s)e.style[a]!==i&&(e.style[a]="translate3d(1px,1px,1px)",o=n.getComputedStyle(e).getPropertyValue(s[a]));return t.body.removeChild(e),o!==i&&0<o.length&&"none"!==o}function oe(){if(Se||we){var n=se();e(".fullpage-wrapper").off("touchstart "+n.down).on("touchstart "+n.down,x),e(".fullpage-wrapper").off("touchmove "+n.move).on("touchmove "+n.move,S)}}function ie(){if(Se||we){var n=se();e(".fullpage-wrapper").off("touchstart "+n.down),e(".fullpage-wrapper").off("touchmove "+n.move)}}function se(){return n.PointerEvent?{down:"pointerdown",move:"pointermove"}:{down:"MSPointerDown",move:"MSPointerMove"}}function ae(e){var n=[];return n.y="undefined"!=typeof e.pageY&&(e.pageY||e.pageX)?e.pageY:e.touches[0].pageY,n.x="undefined"!=typeof e.pageX&&(e.pageY||e.pageX)?e.pageX:e.touches[0].pageX,we&&y(e)&&l.scrollBar&&(n.y=e.touches[0].pageY,n.x=e.touches[0].pageX),n}function le(e,n){ge.setScrollingSpeed(0,"internal"),"undefined"!=typeof n&&(be=!0),I(e.closest(".fp-slides"),e),"undefined"!=typeof n&&(be=!1),ge.setScrollingSpeed(Me.scrollingSpeed,"internal")}function re(e){l.scrollBar?ye.scrollTop(e):l.css3?X("translate3d(0px, -"+e+"px, 0px)",!1):ye.css("top",-e)}function ce(e){return{"-webkit-transform":e,"-moz-transform":e,"-ms-transform":e,transform:e}}function fe(e,n,t){switch(n){case"up":Be[t].up=e;break;case"down":Be[t].down=e;break;case"left":Be[t].left=e;break;case"right":Be[t].right=e;break;case"all":"m"==t?ge.setAllowScrolling(e):ge.setKeyboardScrolling(e)}}function de(){re(0),e("#fp-nav, .fp-slidesNav, .fp-controlArrow").remove(),e(".fp-section").css({height:"","background-color":"",padding:""}),e(".fp-slide").css({width:""}),ye.css({height:"",position:"","-ms-touch-action":"","touch-action":""}),ve.css({overflow:"",height:""}),e("html").removeClass("fp-enabled"),e.each(he.get(0).className.split(/\s+/),function(e,n){0===n.indexOf("fp-viewing")&&he.removeClass(n)}),e(".fp-section, .fp-slide").each(function(){Y(e(this)),e(this).removeClass("fp-table active")}),ye.addClass("fp-notransition"),ye.find(".fp-tableCell, .fp-slidesContainer, .fp-slides").each(function(){e(this).replaceWith(this.childNodes)}),ve.scrollTop(0)}function pe(e,n,t){l[e]=n,"internal"!==t&&(Me[e]=n)}function ue(e,n){console&&console[e]&&console[e]("fullPage: "+n)}var ve=e("html, body"),he=e("body"),ge=e.fn.fullpage;l=e.extend({menu:!1,anchors:[],lockAnchors:!1,navigation:!1,navigationPosition:"right",navigationTooltips:[],showActiveTooltip:!1,slidesNavigation:!1,slidesNavPosition:"bottom",scrollBar:!1,css3:!0,scrollingSpeed:700,autoScrolling:!0,fitToSection:!0,fitToSectionDelay:1e3,easing:"easeInOutCubic",easingcss3:"ease",loopBottom:!1,loopTop:!1,loopHorizontal:!0,continuousVertical:!1,normalScrollElements:null,scrollOverflow:!1,touchSensitivity:5,normalScrollElementTouchThreshold:5,keyboardScrolling:!0,animateAnchor:!0,recordHistory:!0,controlArrows:!0,controlArrowColor:"#fff",verticalCentered:!0,resize:!1,sectionsColor:[],paddingTop:0,paddingBottom:0,fixedElements:null,responsive:0,responsiveWidth:0,responsiveHeight:0,sectionSelector:".section",slideSelector:".slide",afterLoad:null,onLeave:null,afterRender:null,afterResize:null,afterReBuild:null,afterSlideLoad:null,onSlideLeave:null},l),function(){l.continuousVertical&&(l.loopTop||l.loopBottom)&&(l.continuousVertical=!1,ue("warn","Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),l.scrollBar&&l.scrollOverflow&&ue("warn","Option `scrollBar` is mutually exclusive with `scrollOverflow`. Sections with scrollOverflow might not work well in Firefox"),l.continuousVertical&&l.scrollBar&&(l.continuousVertical=!1,ue("warn","Option `scrollBar` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),e.each(l.anchors,function(n,t){(e("#"+t).length||e('[name="'+t+'"]').length)&&ue("error","data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE).")})}(),e.extend(e.easing,{easeInOutCubic:function(e,n,t,o,i){return 1>(n/=i/2)?o/2*n*n*n+t:o/2*((n-=2)*n*n+2)+t}}),e.extend(e.easing,{easeInQuart:function(e,n,t,o,i){return o*(n/=i)*n*n*n+t}}),ge.setAutoScrolling=function(n,t){pe("autoScrolling",n,t);var o=e(".fp-section.active");l.autoScrolling&&!l.scrollBar?(ve.css({overflow:"hidden",height:"100%"}),ge.setRecordHistory(l.recordHistory,"internal"),ye.css({"-ms-touch-action":"none","touch-action":"none"}),o.length&&re(o.position().top)):(ve.css({overflow:"visible",height:"initial"}),ge.setRecordHistory(!1,"internal"),ye.css({"-ms-touch-action":"","touch-action":""}),re(0),o.length&&ve.scrollTop(o.position().top))},ge.setRecordHistory=function(e,n){pe("recordHistory",e,n)},ge.setScrollingSpeed=function(e,n){pe("scrollingSpeed",e,n)},ge.setFitToSection=function(e,n){pe("fitToSection",e,n)},ge.setLockAnchors=function(e){l.lockAnchors=e},ge.setMouseWheelScrolling=function(e){e?t.addEventListener?(t.addEventListener("mousewheel",T,!1),t.addEventListener("wheel",T,!1),t.addEventListener("DOMMouseScroll",T,!1)):t.attachEvent("onmousewheel",T):t.addEventListener?(t.removeEventListener("mousewheel",T,!1),t.removeEventListener("wheel",T,!1),t.removeEventListener("DOMMouseScroll",T,!1)):t.detachEvent("onmousewheel",T)},ge.setAllowScrolling=function(n,t){"undefined"!=typeof t?(t=t.replace(/ /g,"").split(","),e.each(t,function(e,t){fe(n,t,"m")})):n?(ge.setMouseWheelScrolling(!0),oe()):(ge.setMouseWheelScrolling(!1),ie())},ge.setKeyboardScrolling=function(n,t){"undefined"!=typeof t?(t=t.replace(/ /g,"").split(","),e.each(t,function(e,t){fe(n,t,"k")})):l.keyboardScrolling=n},ge.moveSectionUp=function(){var n=e(".fp-section.active").prev(".fp-section");n.length||!l.loopTop&&!l.continuousVertical||(n=e(".fp-section").last()),n.length&&k(n,null,!0)},ge.moveSectionDown=function(){var n=e(".fp-section.active").next(".fp-section");n.length||!l.loopBottom&&!l.continuousVertical||(n=e(".fp-section").first()),n.length&&k(n,null,!1)},ge.silentMoveTo=function(e,n){requestAnimFrame(function(){ge.setScrollingSpeed(0,"internal")}),ge.moveTo(e,n),requestAnimFrame(function(){ge.setScrollingSpeed(Me.scrollingSpeed,"internal")})},ge.moveTo=function(e,n){var t=j(e);"undefined"!=typeof n?Q(e,n):0<t.length&&k(t)},ge.moveSlideRight=function(){C("next")},ge.moveSlideLeft=function(){C("prev")},ge.reBuild=function(n){if(!ye.hasClass("fp-destroyed")){requestAnimFrame(function(){be=!0});var t=s.width();xe=s.height(),l.resize&&O(xe,t),e(".fp-section").each(function(){var n=e(this).find(".fp-slides"),t=e(this).find(".fp-slide");l.verticalCentered&&e(this).find(".fp-tableCell").css("height",K(e(this))+"px"),e(this).css("height",xe+"px"),l.scrollOverflow&&(t.length?t.each(function(){U(e(this))}):U(e(this))),1<t.length&&I(n,n.find(".fp-slide.active"))}),(t=e(".fp-section.active").index(".fp-section"))&&ge.silentMoveTo(t+1),requestAnimFrame(function(){be=!1}),e.isFunction(l.afterResize)&&n&&l.afterResize.call(ye),e.isFunction(l.afterReBuild)&&!n&&l.afterReBuild.call(ye)}},ge.setResponsive=function(n){var t=ye.hasClass("fp-responsive");n?t||(ge.setAutoScrolling(!1,"internal"),ge.setFitToSection(!1,"internal"),e("#fp-nav").hide(),ye.addClass("fp-responsive")):t&&(ge.setAutoScrolling(Me.autoScrolling,"internal"),ge.setFitToSection(Me.autoScrolling,"internal"),e("#fp-nav").show(),ye.removeClass("fp-responsive"))};var me=!1,Se=navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/),we="ontouchstart"in n||0<navigator.msMaxTouchPoints||navigator.maxTouchPoints,ye=e(this),xe=s.height(),be=!1,Te=!0,Ce,Ae,ke=!0,Le=[],Ee,Be={m:{up:!0,down:!0,left:!0,right:!0}};Be.k=e.extend(!0,{},Be.m);var Me=e.extend(!0,{},l),Fe,Re,qe,ze,Ie,Pe;e(this).length&&r();var De=!1;s.on("scroll",h);var He=0,Oe=0,Ve=0,Ne=0,Ue=(new Date).getTime();n.requestAnimFrame=function(){return n.requestAnimationFrame||function(e){e()}}(),s.on("hashchange",q),a.keydown(function(n){clearTimeout(Pe);var t=e(":focus");t.is("textarea")||t.is("input")||t.is("select")||!l.keyboardScrolling||!l.autoScrolling||(-1<e.inArray(n.which,[40,38,32,33,34])&&n.preventDefault(),Ee=n.ctrlKey,Pe=setTimeout(function(){var t=n.shiftKey;switch(n.which){case 38:case 33:Be.k.up&&ge.moveSectionUp();break;case 32:if(t&&Be.k.up){ge.moveSectionUp();break}case 40:case 34:Be.k.down&&ge.moveSectionDown();break;case 36:Be.k.up&&ge.moveTo(1);break;case 35:Be.k.down&&ge.moveTo(e(".fp-section").length);break;case 37:Be.k.left&&ge.moveSlideLeft();break;case 39:Be.k.right&&ge.moveSlideRight()}},150))}),a.keyup(function(e){Te&&(Ee=e.ctrlKey)}),e(n).blur(function(){Ee=Te=!1}),ye.mousedown(function(e){2==e.which&&(Ye=e.pageY,ye.on("mousemove",z))}),ye.mouseup(function(e){2==e.which&&ye.off("mousemove")});var Ye=0;a.on("click touchstart","#fp-nav a",function(n){n.preventDefault(),n=e(this).parent().index(),k(e(".fp-section").eq(n))}),a.on("click touchstart",".fp-slidesNav a",function(n){n.preventDefault(),n=e(this).closest(".fp-section").find(".fp-slides");var t=n.find(".fp-slide").eq(e(this).closest("li").index());I(n,t)}),l.normalScrollElements&&(a.on("mouseenter",l.normalScrollElements,function(){ge.setMouseWheelScrolling(!1)}),a.on("mouseleave",l.normalScrollElements,function(){ge.setMouseWheelScrolling(!0)})),e(".fp-section").on("click touchstart",".fp-controlArrow",function(){e(this).hasClass("fp-prev")?Be.m.left&&ge.moveSlideLeft():Be.m.right&&ge.moveSlideRight()}),s.resize(P);var We=xe;ge.destroy=function(n){ge.setAutoScrolling(!1,"internal"),ge.setAllowScrolling(!1),ge.setKeyboardScrolling(!1),ye.addClass("fp-destroyed"),clearTimeout(qe),clearTimeout(Re),clearTimeout(Fe),clearTimeout(ze),clearTimeout(Ie),s.off("scroll",h).off("hashchange",q).off("resize",P),a.off("click","#fp-nav a").off("mouseenter","#fp-nav li").off("mouseleave","#fp-nav li").off("click",".fp-slidesNav a").off("mouseover",l.normalScrollElements).off("mouseout",l.normalScrollElements),e(".fp-section").off("click",".fp-controlArrow"),clearTimeout(qe),clearTimeout(Re),n&&de()}}});