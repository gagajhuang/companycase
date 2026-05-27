
$(document).ready(function(){
    AOS.init({
      duration: 1000,
    });   

    //logo scroll
    // $(window).scroll(function(e) {
    //     var $winS = $(this).scrollTop();
    //     if ($winS>40) {
    //         $('.logo').addClass('logoscroll');
    //     }else{
    //         $('.logo').removeClass('logoscroll');
    //     }
    // });

	// 滾動平滑效果
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top - 60
            }, 1000);
            return false;
          }
        }
    });

    //單選
    $('.queslist form').each(function(){
        var checkEach =$(this).find('input');
        var checkBox = $(this).find('input:checkbox');
        console.log(checkBox);

         checkEach.click(function(){
            if($(this).prop('checked')){
                checkBox.prop('checked',false);//其他消失
                $(this).prop('checked',true);//選取一個
            }
        });
    });
    
    //動畫效果
    var $winW = $(window).width();
    var $winH = $(window).height();
    var bannerBtn =$('.bannerTT .bannerBtn');
    var bannerBg =$('.bannerblock');
    function pageChange(){
        $('.bannerTT').fadeOut();
        
        bannerBg.fadeOut(function() {
            $(this).addClass('bannerblockChange');
            setTimeout(function(){
                bannerBg.fadeIn();
            },1000);
            $('.bannerPeo').addClass('bannerPeoChang');
            $('.quesblock').fadeIn();
        });
        // $('.quesblock').fadeIn('slow');
    };

    // $(bannerBg).fadeIn(2000);
    bannerBtn.on('click', function(e) {
        event.preventDefault();
        pageChange();
        
        if($winW<=480){
            $('main').css('overflow','auto');
            bannerBg.css({
                'overflow':'auto',
                'height':'auto',
            });
        }
    });
    //popup
        $('#popuplogin').click(function() {
        $('.maskblock').fadeIn();
        $('body').css('overflow','hidden');
    });
    $('.closebox').click(function() {
        $('.maskblock').fadeOut();
        $('body').css('overflow','auto');
    });

    //警告
    $('.btnshowcontent').on('click',function(e){
        e.preventDefault(); /*防止打開URL*/
        // $('.descriptionblock').toggleClass('showcontent');
        $('.descriptionblock').toggle();
        $('i').toggleClass('fa-chevron-circle-up');
        $('i').toggleClass('fa-chevron-circle-down');
    });


    // icon guideline
    // change position
    var offsetPixels = 450;

    $(window).scroll(function() {
        if ($(window).scrollTop() > offsetPixels) {
            $(".scrollingBox2").css({
                "left": "0",
                "justify-content": "center"
            });
            $(".goTop").fadeIn();
        } else {
            $(".scrollingBox2").css({
                "left": "10px",
                "justify-content": "left"
            });
            $(".goTop").fadeOut();
        }
    });
    // WhatsHelp.io widget----FB、LINE、 Email
        // var options = {
        //     facebook: "1517773441849696", // Facebook page ID
        //     line: "//line.me/R/ti/p/@anuefund", // Line QR code URL
        //     call_to_action: "聯絡我們", // Call to action
        //     button_color: "#FF6550", // Color of button
        //     position: "top right", // Position may be 'right' or 'left'
        //     order: "facebook,line", // Order of buttons
        // };
        // var proto = document.location.protocol,
        //     host = "whatshelp.io",
        //     url = proto + "//static." + host;
        // var s = document.createElement('script');
        // s.type = 'text/javascript';
        // s.async = true;
        // s.src = url + '/widget-send-button/js/init.js';
        // s.onload = function() {
        //     WhWidgetSendButton.init(host, proto, options);
        // };
        // var x = document.getElementsByTagName('script')[0];
        // x.parentNode.insertBefore(s, x); 
  
    
});