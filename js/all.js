/*
 * 文字变换插件
 */

 (function($){ 
    $.fn.extend({  
        airport: function(array) {
            
            var self = $(this);
            var chars = ['a','b','c','d','e','f','g',' ','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','-'];
            var longest = 0;
            var items = items2 = array.length;

            function pad(a,b) { return a + new Array(b - a.length + 1).join(' '); }
            
            $(this).empty();
            
            while(items--)
                if(array[items].length > longest) longest = array[items].length;

            while(items2--)
                array[items2] = pad(array[items2],longest);
                
            spans = longest;
            while(spans--)
                $(this).prepend("<span class='c" + spans + "'></span>");
                
            
            function testChar(a,b,c,d){
                if(c >= array.length)
                    setTimeout(function() { testChar(0,0,0,0); }, 1000);                
                else if(d >= longest)
                    setTimeout(function() { testChar(0,0,c+1,0); }, 1000);
                else {
                    $(self).find('.c'+a).html((chars[b]==" ")?"&nbsp;":chars[b]);
                    setTimeout(function() {
                        if(b > chars.length)
                            testChar(a+1,0,c,d+1);
                        else if(chars[b] != array[c].substring(d,d+1).toLowerCase())
                            testChar(a,b+1,c,d);
                        else
                            testChar(a+1,0,c,d+1);
                    }, 20);
                }
            }
            
            testChar(0,0,0,0);
        } 
    }); 
})(jQuery);

jQuery(document).ready(function ($) {
	//Cache some variables
	var links = $('.nav').find('li');
	slide = $('.section');
	button = $('.button');
	mywindow = $(window);
	htmlbody = $('html,body');
	
	//Create a function that will be passed a slide number and then will scroll to that slide using jquerys animate. The Jquery
	//easing plugin is also used, so we passed in the easing method of 'easeInOutQuint' which is available throught the plugin.
	function goToByScroll(dataslide) {
		var offset_top = ( dataslide == 1 ) ? '0px' : $('.section[data-slide="' + dataslide + '"]').offset().top ;
		//alert(offset_top);
		htmlbody.stop(false, false).animate({
			scrollTop: offset_top
		}, 1500, 'easeInOutQuart');
	}
	
	//点击导航事件
	links.click(function (e) {
		e.preventDefault();
		dataslide = $(this).attr('data-slide');
		goToByScroll(dataslide);
		$(".nav-collapse").collapse('hide');
	});
});

var iTitles = new Array('最足以显示一个人性格的，莫过于他所嘲笑的是什么东西','Tomorrow is another day! ', '有人就有恩怨，有恩怨就有江湖。人就是江湖，你怎么退出？', '做人如果没有梦想，那跟咸鱼有什么区别？','求知若渴，虚心若愚','往往都是事情改变人，人却改变不了事情','你想成为哪一类人，并不取决于你的能力，而是取决于你的选择','强者自救,圣者渡人','生活就像一盒巧克力，你永远不知道你会得到什么。','恐惧让你沦为囚犯，希望让你重获自由','当你不能够再拥有，你唯一可以做的，就是令自己不要忘记。','如果你有梦想，就要守护它。','世界上再没有地方像家一样。','为什么总是正义战胜邪恶？因为只有赢的一方才代表正义'); iTitlesIndex = Math.floor(Math.random() * iTitles.length); document.title = '袁克强的主页 | '+ iTitles[iTitlesIndex];

$(window).scroll(function(){
    var scroll_top = $(this).scrollTop(); 
    var sec2_top = $("#section-2").offset().top;
    if(scroll_top >= sec2_top){
        $(".navbar").addClass("navbar-fixed-top").removeClass("pos-a");;
    }else{
        $(".navbar").removeClass("navbar-fixed-top").addClass("pos-a");;
    }
    //console.log(scroll_top +'===' +sec2_top );
});

$('.slide-text'  ).airport([ 'CREATIVE', 'awesome', 'professional' ]);
$('.slide-text1'  ).airport([ 'PHP', 'JAVASCRIPT', 'NODE.js']);
//$('.slide-text2'  ).airport([ 'branding', 'design', 'development', 'printing']);

$(' .da-thumbs  a').each( function() { $(this).hoverdir(); } );