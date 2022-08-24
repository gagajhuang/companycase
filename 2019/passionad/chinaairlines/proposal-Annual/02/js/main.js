$(document).ready(function(){
	// $('#section04').hide();
	$('.btngo').click(function(){
		$('#section04').fadeIn('slow');
	});
	    /*行程*/
    $('.scheduleplace').on('click', function(e) {
        e.preventDefault(); /*防止打開URL*/
        $('.maskblock').fadeIn();
        $('body').css('overflow','hidden');
        $('.maskblock').css('overflow-x', 'auto');

    });
    $('.buttonclose').click(function() {
        $('.maskblock').fadeOut();
        $('body').css('overflow','auto');
    });
})
  // /*錨點平滑*/
  //   $(function() {
  //     $('a[href*="#"]:not([href="#"])').click(function() {
  //       if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
  //         var target = $(this.hash);
  //         target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
  //         var scrollto = target.offset().top;
  //         if (target.length) {
  //           $('html, body').animate({
  //             scrollTop: scrollto
  //           }, 1000);
  //           return false;
  //         }
  //       }
  //     });
  //   });
