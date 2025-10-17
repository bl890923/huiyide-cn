$(function(){
	toolbar();//右侧悬浮
	share();	
});
//toolbar
function toolbar(){
	$('#toolbar dd').bind({
        'mouseenter': function () {
            if ($(this).children('.slide').length) {
                var _this = $(this).children('.slide');
                _this.stop(true, true).animate({ 'width': 180 }, 200);
            } else if ($(this).children('.pop').length) {
                var _this = $(this).children('.pop');
                _this.show().animate({ 'right': 65 }, 180);
            }
        },
        'mouseleave': function () {
            if ($(this).children('.slide').length) {
                var _this = $(this).children('.slide');
                _this.stop(false, false).animate({ 'width': 0 }, 200);
            } else if ($(this).children('.pop').length) {
                var _this = $(this).children('.pop');
                _this.hide().animate({ 'right': 90 },190);
            }
        }
    });
	$("#gotop").click(function() {
		$("body, html").stop().animate({
				"scrollTop": 0
		});
	});	
	$(".kehu").slide({mainCell:".bd ul",autoPlay:true,effect:"leftMarquee",vis:5,interTime:30,trigger:"click"});
	$(".rongyu").slide({mainCell:".bd ul",autoPlay:true,effect:"topMarquee",vis:3,interTime:30,trigger:"click"});
	$(".zlfcBox").slide({mainCell:".bd ul",autoPlay:true,effect:"leftMarquee",vis:5,interTime:30,trigger:"click"});
	$(".newsBox_right").slide({titCell:"li", targetCell:"li div",defaultIndex:1,effect:"slideDown",delayTime:300,triggerTime:0,returnDefault:true});
}

//banner
$(".fullSlide").hover(function(){
    $(this).find(".prev,.next").stop(true, true).fadeTo("show", 0.5)
},
function(){
    $(this).find(".prev,.next").fadeOut()
});
$(".fullSlide").slide({
    titCell: ".hd ul",
    mainCell: ".bd ul",
	interTime: 5000,
    effect: "fold",
    autoPlay: true,
    autoPage: true,
    trigger: "click",
    startFun: function(i) {
        var curLi = jQuery(".fullSlide .bd li").eq(i);
        if ( !! curLi.attr("_src")) {
            curLi.css("background-image", curLi.attr("_src")).removeAttr("_src")
        }
    }
});
function share(){
	window._bd_share_config = {
		share : [{
			"bdSize" : 16
		}],
	}
	with(document)0[(getElementsByTagName('head')[0]||body).appendChild(createElement('script')).src='http://bdimg.share.baidu.com/static/api/js/share.js?cdnversion='+~(-new Date()/36e5)];
}