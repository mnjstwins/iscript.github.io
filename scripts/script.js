$(document).ready(function(){
	//gridster
	$(function(){ //DOM Ready
	    $(".gridster ul").gridster({
	        widget_margins: [10, 10],
	        widget_base_dimensions: [140, 140]
	    });
	});

	//hover
	$(".gridster li").hover(function(){
		$(this).find(".mask").addClass('animated bounceOutLeft');
	},function(){
		$(this).find(".mask").removeClass('animated bounceOutLeft');
	});

	//slide
	var slideImgWidth = $(".slide img").eq(0).width();
	var slideImgLength = $(".slide img").size();
	var slideWidth = (slideImgWidth * slideImgLength)+"px";
	var slideIndex = 0;
	$(".slide").css({"width":slideWidth});
	setInterval(function(){
		if(slideIndex>=slideImgLength){
			slideIndex = 0;
		}
		var left = -slideImgWidth*slideIndex
		$(".slide").animate({"left":left},"slow","swing");
		var info = $(".slide span").eq(slideIndex).html();
		$(".slide_info p").html(info);
		slideIndex++;
	},5000);

	//bg 
	var r = Math.ceil(Math.random() *10 );
	console.log(r);
	$("body").css("background","url(images/b/"+r+".jpg) no-repeat center");

	//title
	var iTitles = new Array('最足以显示一个人性格的，莫过于他所嘲笑的是什么东西','Tomorrow is another day! ', '有人就有恩怨，有恩怨就有江湖。人就是江湖，你怎么退出？', '做人如果没有梦想，那跟咸鱼有什么区别？','求知若渴，虚心若愚','往往都是事情改变人，人却改变不了事情','你想成为哪一类人，并不取决于你的能力，而是取决于你的选择','强者自救,圣者渡人','生活就像一盒巧克力，你永远不知道你会得到什么。','恐惧让你沦为囚犯，希望让你重获自由','当你不能够再拥有，你唯一可以做的，就是令自己不要忘记。','如果你有梦想，就要守护它。','世界上再没有地方像家一样。','为什么总是正义战胜邪恶？因为只有赢的一方才代表正义'); iTitlesIndex = Math.floor(Math.random() * iTitles.length); document.title = '袁克强的主页 | '+ iTitles[iTitlesIndex];

});
window.onload = function(){
	$(".spinner").hide();
	$(".gridster").show();
}