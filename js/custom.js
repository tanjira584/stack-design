$(document).ready(function(){
	/*-------Main Slider--------*/
	$('.feature .owl-carousel').owlCarousel({
		'items':1,
		'dots':false,
		'loop':true,
		'autoplay':true,
		'autoplayTimeout':6000,
		'smartSpeed':1000,
	});
	var owl=$('.feature .owl-carousel');
		owl.owlCarousel();
		$('.feature .slider .arrow .prev').click(function(){
			owl.trigger('prev.owl.carousel');
		});
		$('.feature .slider .arrow .next').click(function(){
			owl.trigger('next.owl.carousel');
		});
		
	
	/*--------All Tweets Slider--------*/
	$('.tweets .owl-carousel').owlCarousel({
		'items':1,
		'autoplay':true,
		'loop':true,
		'autoplayTimeout':2000,
		'smartSpeed':1000
	});
	
	
	/*-------Sticky & Fixed Sidebar while Scrolling-------*/
	
	$('.body-right').stick_in_parent();
	
	/*--------------fixed Menubar-------------*/
	$('.fixed-menu').stick_in_parent();
	
	$('.date-time .menu-icon .bars-icon i').click(function(){
		$('.fixed-menu').addClass('fixed-menu-show');
	});
	$('.fixed-menu .menu-wrapper .crossBtn i').click(function(){
		$('.fixed-menu').removeClass('fixed-menu-show');
	});
	
	
	/*------------------Notification---------------*/
	$('.login-area .login i.bell').click(function(){
		$('.login-area .login .notification .p-head').toggleClass('show-not');
	});
	
	var box=document.querySelector('.login-area .login .notification .p-head');
	var box2=document.querySelector('.login-area .login i.bell');
	document.addEventListener('click',function(event){
		var isClickInside=box.contains(event.target);
		var isClickIcon=box2.contains(event.target);
		if(!isClickInside && !isClickIcon){
			$('.login-area .login .notification .p-head').removeClass('show-not');
		}
		
	});
	
	/*---------------Search Bar--------*/
	$('.date-time .menu-icon i.main-icon').click(function(){
		$('.date-time .menu-icon i.main-icon').addClass('show');
		$('.menu-icon .search-icon form').addClass('show-bar');
	});
	
	var box=document.querySelector('.menu-icon .search-icon');
	document.addEventListener('click',function(event){
		var isClickInside=box.contains(event.target);
		if(!isClickInside){
			$('.date-time .menu-icon i.main-icon').removeClass('show');
			$('.menu-icon .search-icon form').removeClass('show-bar');
		}
		
	});
	/*------------fixed menu-------*/
	
		var x=$('.header').outerHeight(true);
		var y=$('.main-menu').outerHeight(true);
		var menu= x-y;
		
		$(window).scroll(function(){
			var utd=$(window).scrollTop();
			if(utd > 250){
				$('.main-menu nav').addClass('fixed');
			}
			else{
				$('.main-menu nav').removeClass('fixed');
			}
			
		});
		
		
	/*----------Language---------*/
	
	
	
	
		
		
	/*-----------------------Change Page Class---------------*/
	/*-----------------------Change Page Class---------------*/
	let index = document.getElementById('index');
	let business = document.getElementById('business');
	let fashion = document.getElementById('fashion');
	let fitness = document.getElementById('fitness');
	let food = document.getElementById('food');
	let travel = document.getElementById('travel');
	let video = document.getElementById('video');
	
	// This are the Variable of Page id
	const pageId = [index,business,fashion,fitness,food,travel,video];
	
	//Here,  pages file-name 
	const pageNames = ["index","page-business","page-fashion","page-fitness","page-food","page-travel","page-video"];
	
	//get the current page name
	function pageName(){
		let err = window.location.pathname.split('/');
		return err[err.length-1].split('.')[0];
	}
	
	//Add ta "active" class with geted page name
	let i = pageNames.indexOf(pageName());
	pageId[i].classList.add('active');
	
	
	
	
	
	
	
	
	
	
});