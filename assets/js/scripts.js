/*
 * Author Name: Umar Farooque
 * Website: http://ufwebdesigns.com
 * Template Name: Musk - Coming Soon Template
 * Template Designed for Themeforest, All rights reserved.
 * Copyright (c) 2015 Umar Farooque
 
 */

$(document).ready(function() {
	
/* **************************************************
 * selectors
 */
	var mainCont = $(".main-container"),
		contAbout = $(".main-container-about"),
		contServices = $(".main-container-services"),
		contPhotos = $(".main-container-photos"),
		contMssg = $(".main-container-contact"),
		navBar = $(".navigation"),
		muskpreloader = $(".preloader");

/* **************************************************
 * pre-loader
 */
	 
	//hide initially for fade-in effect
	mainCont.hide();
	navBar.hide();
	
	//when window is completely loaded
	$(window).load(function() {
		
		//fade-out/hide pre-loader screen
		muskpreloader.fadeOut('fast');
		
		//show/fade-in main content
		mainCont.fadeIn('slow');
		//fade in navigation bar with a delay
		navBar.fadeIn(1200);
	});
	
/* **************************************************
 * countdown timer
 * set desired date in finalDate
 * format: YYYY/MM/DD
 */
	
	var finalDate = '2016/01/01';

	$('.countdown-timer').countdown(finalDate)
   	.on('update.countdown', function(event) {

   		$(this).html(event.strftime(
		//countdown timer layout
		'\n<div class="col-xs-6 col-sm-2 col-sm-offset-2">\n' +
		'<span class="big">%D</span><br><span class="word">DAYS</span>\n' +
		'</div><div class="col-xs-6 col-sm-2">\n' +
		'<span class="big">%H</span><br><span class="word">HOURS</span>\n' +
		'</div><div class="col-xs-6 col-sm-2">\n' +
		'<span class="big">%M</span><br><span class="word">MINUTES</span>\n' +
		'</div><div class="col-xs-6 col-sm-2">\n' +
		'<span class="big">%S</span><br><span class="word">SECONDS</span>\n' +
		'</div>'
		));

   });  	
   
   
/* **************************************************
 * initially hide other content for animations
 */ 
	
    contAbout.hide();
    contMssg.hide();
	contServices.hide();
	contPhotos.hide();
	$(".close-button").hide();
	var animEnd = 'webkitAnimationEnd oanimationEnd msAnimationEnd animationend';
   
/* **************************************************
 * function for toggling different sections
 * with animations
 */ 
    function toggleSection(x, toggle_section){
	    if (x == 'show') {

			mainCont.fadeOut('slow');
			toggle_section.show().addClass("animated zoomIn");
			navBar.fadeOut('slow').addClass("animated slideOutUp");
			
			toggle_section.one(animEnd, function(){
				$(this).removeClass("animated zoomIn");
				navBar.removeClass("animated slideOutUp");
			});
			
		    $(".close-button").fadeIn(2500);

	    }
	   
	   if (x == 'hide') {
		   
			mainCont.fadeIn('slow');
			toggle_section.addClass("animated zoomOut");
			navBar.show().addClass("animated slideInDown");
			
			navBar.one(animEnd, function(){
				toggle_section.hide().removeClass("animated zoomOut");
				$(this).removeClass("animated slideInDown");
			});
			
	    }
	}
   
   
/* **************************************************
 * toggle different sections using animate.css
 * animations
 */ 
    $("#knowmore").click(function(){ 
	   toggleSection('show', contAbout);
	});
   
	$("#closeAbout").click(function(){ 
	   toggleSection('hide', contAbout);
	});
   
	$("#contact-us").click(function(){ 
		toggleSection('show', contMssg);
	});

	$("#closeMessageForm").click(function(){ 
		toggleSection('hide', contMssg);
	});	
	
	$("#toggle-services").click(function(){ 
		toggleSection('show', contServices);
	});

	$("#closeServices").click(function(){ 
		toggleSection('hide', contServices);
	});	
	
	$("#toggle-photos").click(function(){ 
		toggleSection('show', contPhotos);
	});

	$("#closePhotos").click(function(){ 
		toggleSection('hide', contPhotos);
	});	
	
/* **************************************************
 * background parallax
 */ 
	$(".bg-parallax").mouseParallax({ moveFactor : 2 }); //less moveFactor is better

	
/* **************************************************
 * initiate background slider
 */ 
	$('#slides').superslides({
      animation: 'fade', //use fade/slide
	  pagination: false, //no need of pagination
	  play: 4000 //time taken for transition between slides
    });
	
	
/* **************************************************
 * owl carousel controls for different sliders
 * used in different sections
 */ 
	 
	//about us section slider
	$("#about-us").owlCarousel({ 
		slideSpeed : 300,
		paginationSpeed : 400,
		singleItem:true,
		transitionStyle: 'fadeUp',
	});
		//button controls
	var owlAbout = $("#about-us").data('owlCarousel');
	$(".owl-prev").click(function(){
		owlAbout.prev();
	});
	$(".owl-next").click(function(){
		owlAbout.next();
	});
	
	//about us section quote slider
	$("#about-us-quotes").owlCarousel({ 
		slideSpeed : 400,
		paginationSpeed : 400,
		autoPlay: true,
		singleItem:true,
		transitionStyle: 'goDown',
	});
	
	//switch between message and subscribe forms
	$("#contact-carousel").owlCarousel({ 
		slideSpeed : 300,
		paginationSpeed : 400,
		singleItem:true,
		transitionStyle: 'backSlide',
		mouseDrag: false,
		touchDrag: false,
	});
		//button controls
	var owlContact = $("#contact-carousel").data('owlCarousel');
	$(".owl-message").click(function(){
		owlContact.goTo(0);
	});
	$(".owl-subscribe").click(function(){
		owlContact.goTo(1);
	});
	
	//services section photo carousel
	$("#services-carousel").owlCarousel({ 
		slideSpeed : 300,
		paginationSpeed : 400,
		singleItem: true,
		transitionStyle: 'goDown',
	});
		//button controls
	var owlServices = $("#services-carousel").data('owlCarousel');
	$(".owl-prev").click(function(){
		owlServices.prev();
	});
	$(".owl-next").click(function(){
		owlServices.next();
	});
	
	//open popup to show full size photo
	$("#services-carousel .item a, #show-photo").magnificPopup({
		type: 'image',
		zoom: { enabled: true, duration: 300 },
	});
	
/* **************************************************
 *  enable scrollbar for different sections
 */
	
	var contentSections = $(".main-container, .main-container-contact, " + 
	".main-container-photos, .main-container-services, .main-container-about")
	contentSections.niceScroll({
		cursorwidth: "6px",
		cursorborder: "none",
		cursorcolor: "grey",
		cursoropacitymin: 0.3,
		cursoropacitymax: 0.7,
		mousescrollstep: 40,
		zindex: 999
	});
	

/* **************************************************
 * form validation
 */
	 //for message form
	$(".mssgForm").validate();
	
	//for subscription form
	$(".subscribe-form").validate();
	
	
/* **************************************************
 * for demo only
 */
	
	var closeDemoBox = $(".demo-button.fa-close"),
		openDemoBox = $(".demo-button.fa-cog"),
		DemoBox = $(".color-box");
		
	closeDemoBox.hide();
	DemoBox.hide();
	
	openDemoBox.click(function(){
		$(this).fadeOut('fast');
		DemoBox.fadeIn();
		closeDemoBox.fadeIn('slow');
	});
	
	closeDemoBox.click(function(){
		$(this).fadeOut('fast');
		DemoBox.fadeOut();
		openDemoBox.fadeIn('slow');
	});
	
	//switch color styles
	(function($j) {
		switch_style = {
			onReady: function(){
				this.switch_style_click();
			},
			
			switch_style_click: function(){
				$(".color").hover(function(){
					var id = $(this).attr("id");
					$("#switch_style").attr("href", "assets/css/colors/" + id + ".css");
				});
			},
		};
		
		$j().ready(function(){
			switch_style.onReady();
		});
	})(jQuery);
	
}); //jQuery end