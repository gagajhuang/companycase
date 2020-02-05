$(document).ready(function(){
	// $('body').css('overflow','hidden');
	$('#menubtn').on('click', function(e) {
        e.preventDefault(); /*防止打開URL*/
        $('.menu').toggleClass('menu-show');
    });
    $('.topbtn img').click(function(){
    	$('html,body').animate({scrollTop:0},900);
    	return false;
    });	
	$(window).scroll(function(){
		var topbtnscroll = $('.activitymethed').offset().top;
		var winscroll = $(window).scrollTop();
		if( winscroll >= topbtnscroll ){
			$('.topbtn').fadeIn();
		}else{
			$('.topbtn').fadeOut();
		}
		if(winscroll>100){
			$('header').css('background','rgba(255,255,255,0.8)')
		}else{
			$('header').css('background','transparent')
		}
	});
	$('#flightbtn').click(function() {
		$('.maskblock').fadeIn();
		$('body').css('overflow','hidden');
		logs('inside', 'view', '3');
		return false;
	});
	$('.closebox').click(function() {
		$('.maskblock').fadeOut();
		$('body').css('overflow','auto');
	});
	// $('.makeshow').on('click',function() {
		// $('#activityshareblock,#activitydatablock').fadeIn();
	// });
    // $('.mainvision, #activitybtn').on('click',function() {
		// $('.mainvision').fadeOut();
		// $('article').fadeIn();
		// $('bannerblock').fadeIn();
		// $('.buybtn').fadeIn();
		// $('body').css('overflow','auto');
		// $('header').css('background','transparent');
	// });
});