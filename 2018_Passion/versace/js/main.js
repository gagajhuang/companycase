$(document).ready(function(){
	$('#menubtn').on('click', function(e) {
        e.preventDefault(); /*防止打開URL*/
        $('.menu').toggleClass('menu-show');
    });
    /*自動判斷nav高度，調整banner區塊的margin-top*/
    // $('#bannerblock').css('margin-top',$('nav').height());
    // $(window).resize(function(){
    // 	$('#bannerblock').css('margin-top',$('nav').height());
    // });
	$( document ).ready(function( $ ) {
			$( '#introcarousel' ).sliderPro({
				width: 1400,
				height: 500,
				arrows: false,
				buttons: false,
				smallSize: 500,
				mediumSize: 1000,
				largeSize: 3000,
				thumbnailArrows: true,
				autoplay: true,
				autoplayDelay:4000,
				thumbnailWidth: 190,
				thumbnailHeight: 200,
				// shuffle: true,隨機輪播
				breakpoints: {
					1400: {
						thumbnailWidth: 150,
						thumbnailHeight: 158
					},
					1024: {
						thumbnailWidth: 120,
						thumbnailHeight: 126
					},
					480: {
						width: 480,
						height: 450
					},

				}
			});
		});
	/*錨點平滑*/
    $(function() {
      $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          var scrollto = target.offset().top;
          if (target.length) {
            $('html, body').animate({
              scrollTop: scrollto
            }, 1000);
            return false;
          }
        }
      });
    });
    $('#popbtn').click(function() {
		$('.maskblock').fadeIn();
		$('body').css('overflow','hidden');
	});
	$('.closebox').click(function() {
		$('.maskblock').fadeOut();
		$('body').css('overflow','auto');
	});
});