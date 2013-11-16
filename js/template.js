 

  
  
	$(window).load(function() {
		$("#status").fadeOut();
		$("#preloader").delay(350).fadeOut("slow");
	})  
	


	
	/*global $:false */
	$(function(){"use strict";
		$('#home').css({'height':($(window).height())+'px'});
		$(window).resize(function(){
		$('#home').css({'height':($(window).height())+'px'});
		});
	});


	
	

	
	
	
	
	
	
	
	$(document).ready(
		function() {  
		$("html").niceScroll();
		}
	);	
	


		




			
/*global $:false */
$(document).ready(function(){"use strict";
	$(".scroll").click(function(event){

		event.preventDefault();

		var full_url = this.href;
		var parts = full_url.split("#");
		var trgt = parts[1];
		var target_offset = $("#"+trgt).offset();
		var target_top = target_offset.top;

		$('html, body').animate({scrollTop:target_top}, 1400);
	});
});				


	
$(function(){

   $('ul li a').click(function(){
      var item=$(this).parent();
       $('ul li').removeClass('current');
       item.addClass("current")
    });

});	


$(  '.slide-text'  ).airport([ 'CREATIVE', 'awesome', 'professional' ]);
$(  '.slide-text1'  ).airport([ 'applications', 'websites', 'logos']);
$(  '.slide-text2'  ).airport([ 'branding', 'design', 'development', 'printing']);



$(document).ready(function(){
		$("#navigation").sticky({topSpacing:0});
		
		$("ul#menu").click(function(){
			if( $("ul#menu li").css('display') != 'inline' ){
				if($("ul#menu").hasClass('showmenu')) {
        			$("ul#menu").removeClass('showmenu');
					$("ul#menu li").css('display','none');
    			} else {
					$("ul#menu").addClass('showmenu');
        			$("ul#menu li").css('display','block');
    			}
			}
		});
		
		$(window).resize(function() {
			if( $(window).width() >= 960 ){
				if( $("ul#menu li").css('display' ) == 'none' )
					$("ul#menu li").css('display','inline');
			}
			else{
				$("ul#menu li").css('display','none');
			}
		});
		
	});	




			


	
	

	
	
	
	
	
	
	


jQuery(document).ready(function () { 
	(function ($) { 
	
	
		var container = $('.portfolio-isotope');
		
		
		function getNumbColumns() { 
			var winWidth = $(window).width(), 
				columnNumb = 1;
			
			
			if (winWidth > 700) {
				columnNumb = 4;
			} else if (winWidth > 400) {
				columnNumb = 2;
			} else if (winWidth > 200) {
				columnNumb = 1;
			}
			
			return columnNumb;
		}
		
		
		function setColumnWidth() { 
			var winWidth = $(window).width(), 
				columnNumb = getNumbColumns(), 
				postWidth = Math.floor(winWidth / columnNumb);

		}
		
		$('#portfolio-filter #filter a').click(function () { 
			var selector = $(this).attr('data-filter');
			
			$(this).parent().parent().find('a').removeClass('current');
			$(this).addClass('current');
			
			container.isotope( { 
				filter : selector 
			});
			
			setTimeout(function () { 
				reArrangeProjects();
			}, 300);
			
			
			return false;
		});
		
		function reArrangeProjects() { 
			setColumnWidth();
			container.isotope('reLayout');
		}
		
		
		container.imagesLoaded(function () { 
			setColumnWidth();
			
			
			container.isotope( { 
				itemSelector : '.box', 
				layoutMode : 'masonry', 
				resizable : false 
			} );
		} );
		
		
	
		
	
		$(window).on('debouncedresize', function () { 
			reArrangeProjects();
			
		} );
		
	
	} )(jQuery);
} );





/* DebouncedResize Function */
	(function ($) { 
		var $event = $.event, 
			$special, 
			resizeTimeout;
		
		
		$special = $event.special.debouncedresize = { 
			setup : function () { 
				$(this).on('resize', $special.handler);
			}, 
			teardown : function () { 
				$(this).off('resize', $special.handler);
			}, 
			handler : function (event, execAsap) { 
				var context = this, 
					args = arguments, 
					dispatch = function () { 
						event.type = 'debouncedresize';
						
						$event.dispatch.apply(context, args);
					};
				
				
				if (resizeTimeout) {
					clearTimeout(resizeTimeout);
				}
				
				
				execAsap ? dispatch() : resizeTimeout = setTimeout(dispatch, $special.threshold);
			}, 
			threshold : 150 
		};
	} )(jQuery);			
	
	
	
	
$(document).ready(function(){
		
		//.parallax(xPosition, speedFactor, outerHeight) options:
		//xPosition - Horizontal position of the element
		//inertia - speed to move relative to vertical scroll. Example: 0.1 is one tenth the speed of scrolling, 2 is twice the speed of scrolling
		//outerHeight (true/false) - Whether or not jQuery should use it's outerHeight option to determine when a section is in the viewport
		$('#home').parallax("50%", 0.2);
		$('#separator1').parallax("50%", 0.2);
		$('#separator2').parallax("50%", 0.2);
	
	});				
		
	
	
	/*
$(document).ready(function(){
$(".iframe").colorbox({iframe:true, width:"100%", height:"100%"});	
});

$(".group1").colorbox({rel:'group1'});	
	*/
	

	
	
jQuery(document).ready(function ($) { // wait until the document is ready
	$('#send').click(function(){ // when the button is clicked the code executes
		$('.error').fadeOut('slow'); // reset the error messages (hides them)

		var error = false; // we will set this true if the form isn't valid

		var name = $('input#name').val(); // get the value of the input field
		if(name == "" || name == " ") {
			$('#err-name').fadeIn('slow'); // show the error message
			error = true; // change the error state to true
		}

		var email_compare = /^([a-z0-9_.-]+)@([da-z.-]+).([a-z.]{2,6})$/; // Syntax to compare against input
		var email = $('input#email').val(); // get the value of the input field
		if (email == "" || email == " ") { // check if the field is empty
			$('#err-email').fadeIn('slow'); // error - empty
			error = true;
		}else if (!email_compare.test(email)) { // if it's not empty check the format against our email_compare variable
			$('#err-emailvld').fadeIn('slow'); // error - not right format
			error = true;
		}

		if(error == true) {
			$('#err-form').slideDown('slow');
			return false;
		}

		var data_string = $('#ajax-form').serialize(); // Collect data from form
		alert(data_string);

		$.ajax({
			type: "POST",
			url: $('#ajax-form').attr('action'),
			data: data_string,
			timeout: 6000,
			error: function(request,error) {
				if (error == "timeout") {
					$('#err-timedout').slideDown('slow');
				}
				else {
					$('#err-state').slideDown('slow');
					$("#err-state").html('An error occurred: ' + error + '');
				}
			},
			success: function() {
				$('#ajax-form').slideUp('slow');
				$('#ajaxsuccess').slideDown('slow');
			}
		});

		return false; // stops user browser being directed to the php file
	}); // end click function
});	

var iTitles = new Array('最足以显示一个人性格的，莫过于他所嘲笑的是什么东西','Tomorrow is another day! ', '有人就有恩怨，有恩怨就有江湖。人就是江湖，你怎么退出？', '做人如果没有梦想，那跟咸鱼有什么区别？','求知若渴，虚心若愚','往往都是事情改变人，人却改变不了事情','你想成为哪一类人，并不取决于你的能力，而是取决于你的选择','强者自救,圣者渡人','生活就像一盒巧克力，你永远不知道你会得到什么。','恐惧让你沦为囚犯，希望让你重获自由','当你不能够再拥有，你唯一可以做的，就是令自己不要忘记。','如果你有梦想，就要守护它。','世界上再没有地方像家一样。','为什么总是正义战胜邪恶？因为只有赢的一方才代表正义'); iTitlesIndex = Math.floor(Math.random() * iTitles.length); document.title = '袁克强的主页 | '+ iTitles[iTitlesIndex];





	
	