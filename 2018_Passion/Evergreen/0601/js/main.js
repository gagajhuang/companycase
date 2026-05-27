$(document).ready(function(){
	/*輪播*/
	var owl = $('.owl-carousel');
		owl.owlCarousel({
		    items:1,
		    loop:true,
		    margin:0,
		    autoplay:true,
		    autoplayTimeout:3000,
		    // animateOut: 'zoomOut',
		    // animateIn: 'zoomIn',
		    // autoWidth:true,
		    mouseDrag:false,
		});

});