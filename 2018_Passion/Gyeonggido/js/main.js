$(document).ready(function(){
	$('#menubtn').on('click', function(e) {
        e.preventDefault(); /*防止打開URL*/
        $('.menu').toggleClass('menu-show');
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
});