$(document).ready(function(){
    // $(window).resize(function() {
    //     winwidth = $(window).width();
    //     if (winwidth<769) {
    //         $('.bannerbg img').attr("src","images/banner-m.jpg")
    //     }else{
    //         $('.bannerbg img').attr("src","images/banner.jpg")
    //     }
    // });

    // $('.logo a').click(function() {

    //     var hash = this.hash;//敘述URL的錨點部分，字串

    //     $('html, body').animate({
    //         scrollTop: $(hash).offset().top
    //     }, 800, function() {
    //         window.location.href = hash;
    //     });
    //     return false;
    // });

    $(document).on("scroll",function(){
        if ($(document).scrollTop()>150) { 
            $("header").css({
                'background': '#fff',
                'border-bottom': '1px solid #918686'
            });
            $(".logo a img").attr("src","images/logo2.gif");
            $(".logo a,.menu a").css("color","#3e3a39");
            $(".menu li+li").css("border-color","#3e3a39");
            $(".menu a").hover(function() {
                $(this).css("color","#b2165a");
            }, function() {
                $(this).css("color","#3e3a39");
            });
            winwidth = $(window).width();
                if (winwidth<1280) {
                     $('.menu').css('background','#fff');
                     $("#menubtn img").attr("src","images/menubtn2.png");
                }
        }else{
            $("header").css('background', '#3e3a39');
            $(".logo a img").attr("src","images/logo.gif");
            $(".logo a,.menu a").css("color","#fff");
            $(".menu li+li").css("border-color","#fff");
            $(".menu a").hover(function() {
                $(this).css("color","#f6f60a");
            }, function() {
                $(this).css("color","#fff");
            });
            winwidth = $(window).width();
                if (winwidth<1280) {
                     $('.menu').css('background','#3e3a39');
                     $("#menubtn img").attr("src","images/menubtn.png");

                }
        }
    });
    $('#menubtn').on('click', function(e) {
            e.preventDefault(); /*防止打開URL*/
            $('.menu').toggleClass('menu-show');
    });
    $('.owl-carousel').owlCarousel({
            autoplay:true,
            autoplaySpeed: 1000,
            autoplayTimeout: 3000,
            nav: true,
            dots: true,
            loop: true,
            margin: 0,
            items: 1,
            navText: ["<img src='images/arrow-prev.png' alt=''/>", "<img src='images/arrow-next.png' alt=''/>"]
    });

});
