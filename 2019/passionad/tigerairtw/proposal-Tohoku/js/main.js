$(document).ready(function(){
	$('.owl-carousel').owlCarousel({
	    center: true,
	    items:1,
	    loop:true,
	    margin:10,
	    mouseDrag:false,
	    autoplay:true,
    	responsive:{
	        768:{
	            items:2,
	        }
	    }
	});

});