$(document).ready(function() {
    $('#menubtn').on('click', function(e) {
        e.preventDefault(); /*防止打開URL*/
        $('.menu').toggleClass('menu-show');
    });
    
    /*滾動出現*/
    $(window).scroll( function(){
        $('.contenttitle').each( function(i){
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if( bottom_of_window > bottom_of_object+200){
                $(this).addClass('animated fadeInDown');
            }
        }); 
        
        $('.contentblock').each( function(i){
            // var col3option = $(this).find('.col3');
            var col3option = $(this).children('.col3');
            var col3top = col3option.offset().top + col3option.outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window > col3top){
                $('.col3:nth-child(1)', this).addClass('animated fadeInRight');
                $('.col3:nth-child(2)', this).addClass('animated fadeInRight');
                $('.col3:nth-child(3)', this).addClass('animated fadeInRight');
            }
        });
        
    });

    /*行程*/
    // $('.schedule').on('click', function(e) {
    //     e.preventDefault(); /*防止打開URL*/
    //     $('.maskblock').fadeIn();
    //     $('body').css('overflow','hidden');
    //     $('.maskblock').css('overflow-x', 'auto');

    // });
    // $('.buttonclose').click(function() {
    //     $('.maskblock').fadeOut();
    //     $('body').css('overflow','auto');

    // });
    
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

    /*左右輪播*/
    var Lslide = document.querySelectorAll('.Lslide'),
        Rslide = document.querySelectorAll('.Rslide'),
        control = document.querySelectorAll('.oncontrol'),
        slideHeight = document.querySelector('.wrapper').clientHeight,
        // color = ['#fdc97c', '#e5d3d0', '#71b3d6'],
        index = 0;


    function init() {
        slideHeight = document.querySelector('.wrapper').clientHeight;
        for (i = 0; i < Lslide.length; i++) {
            // Lslide[i].style.backgroundColor = color[i];
            Lslide[i].style.top = -slideHeight * i + "px";
            Rslide[i].style.top = slideHeight * i + "px";
        }
    }
    init()
    window.addEventListener('resize', function() {
        init()
    });

    function moveToTop() {

        index++;
        for (el = 0; el < Lslide.length; el++) {
            Lslide[el].style.top = parseInt(Lslide[el].style.top) + slideHeight + "px";
            Rslide[el].style.top = parseInt(Rslide[el].style.top) - slideHeight + "px";
        }

        if (index > Lslide.length - 1) {
            index = 0;
            for (el = 0; el < Lslide.length; el++) {
                Lslide[el].style.top = -slideHeight * el + "px";
                Rslide[el].style.top = slideHeight * el + "px";
            }
        }
    }

    function moveToBottom() {
        index--;
        for (el = 0; el < Lslide.length; el++) {
            Lslide[el].style.top = parseInt(Lslide[el].style.top) - slideHeight + "px";
            Rslide[el].style.top = parseInt(Rslide[el].style.top) + slideHeight + "px";

        }
        if (index < 0) {
            index = Rslide.length - 1;
            for (el = 0; el < Lslide.length; el++) {
                Lslide[el].style.top = parseInt(Lslide[el].style.top) + slideHeight * Lslide.length + "px";
                Rslide[el].style.top = parseInt(Rslide[el].style.top) - slideHeight * Rslide.length + "px";
            }
        }
    }

    function transition() {
        for (t = 0; t < Lslide.length; t++) {
            Lslide[t].style.transition = "all 1.5s";
            Rslide[t].style.transition = "all 1.5s";
        }
    }


    for (t = 0; t < control.length; t++) {
        control[t].addEventListener("click", function() {

            if (this.classList.contains('control-top')) {
                moveToTop()
            }
            if (this.classList.contains('control-bottom')) {
                moveToBottom();
            }

            transition()

        });
    }

    var wheeling;

    function mousemouve(e) {

        clearTimeout(wheeling);
        e.preventDefault();
        var e = window.event || e;
        var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));

        wheeling = setTimeout(function() {
            wheeling = undefined;
            if (delta === 1) {
                moveToTop()
            }
            if (delta === -1) {
                moveToBottom()
            }
        }, 100);

        transition()
    }

    // document.addEventListener("mousewheel", mousemouve);/*滾輪滾動*/
    document.addEventListener("DOMMouseScroll", mousemouve);

    //setInterval 是無限重複循環到他停止
    function automove() {
        moveToTop();
        transition();
    }
    setInterval(automove, 4000);
});