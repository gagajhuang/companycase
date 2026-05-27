$(document).ready(function(){
    $(window).resize(function() {
        var wdth=$(window).width();
        if(wdth<=640){
        	$(".freegift-m").css('display', 'block');
        	$(".freegift").css('display', 'none');
        }else{
        	$(".freegift-m").css('display', 'none');
        	$(".freegift").css('display', 'block');
        }
    });
    $('#menubtn').on('click', function(e) {
        e.preventDefault(); /*防止打開URL*/
        $('.menu').toggleClass('menu-show');
    });
    $('.exchangeposition').on('click', function(e) {
        e.preventDefault(); /*防止打開URL*/
        $('body').css('overflow', 'hidden');
    });
    setTimeout(function(){
        $('.banner-title02 img:nth-child(2)').fadeIn();
    },500)
    setTimeout(function(){
        $('.banner-title02 img:nth-child(3)').fadeIn();
    },1000)
    setTimeout(function(){
        $('.banner-title02 img:nth-child(4)').fadeIn();
    },1500)
    setTimeout(function(){
        $('.banner-title02 img:nth-child(5)').fadeIn();
    },2000)

    $(window).scroll( function(){
        $('.actmove').each( function(i){
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window > bottom_of_object-500 ){
                $(this).animate({'opacity':'1'},500);
            }
            
        }); 
    
    });

    /*平滑滾動*/
    $(function() {
      $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });

    $('.buybtn').hover(function(){
        $('.buybtn').css('animation-play-state', 'paused');
    },function(){
        $('.buybtn').css('animation-play-state', 'running');
    });
    $('.navclick').click(function(){
        $('#block06').fadeIn();
        $('body').css('overflow', 'hidden');
        $('#block06').css('overflow-x', 'auto');

    });
    $('.closebtn').click(function(){
        $('#block06').fadeOut();
        $('body').css('overflow', 'auto');
    });
    /*TOP鍵*/
    $(window).scroll( function(){
        var topbtnscroll = $('#block01').offset().top;
        var winscroll = $(window).scrollTop();
        if( winscroll >= topbtnscroll ){
            $('.topbtn').fadeIn();
        }else{
            $('.topbtn').fadeOut();
        }
    });
});