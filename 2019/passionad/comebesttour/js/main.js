$(document).ready(function(){
	/*輪播*/
	$('.owl-carousel').owlCarousel({
        	items:1,
		    loop:true,
		    margin:0,
		    dots:false,
		    // animateOut: 'zoomOut',
		    // animateIn: 'zoomIn',
		    // autoWidth:true,
		    mouseDrag:false,
		    nav:true,
		    navText: ["<img src='images/arrow-prev.png' alt=''/>", "<img src='images/arrow-next.png' alt=''/>"]
    });
	/*banner輪播*/
	 $('.owl-carousel2').owlCarousel({
        	items:1,
            loop:true,
            margin:0,
            dots:false,
            autoplay:true,
            autoplayTimeout:3000,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            // autoWidth:true,
            mouseDrag:false,
    });
	$('.btnmethod').click(function() {
		$('.maskblock').fadeIn();
		$('body').css('overflow','hidden');
	});
	$('.closebox').click(function() {
		$('.maskblock').fadeOut();
		$('body').css('overflow','auto');
	});
});