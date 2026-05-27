
$(document).ready(function(){
    AOS.init({
      duration: 600,
      easing: 'ease-in-sine',
    });     

	$('#menubtn').on('click', function(e) {
        e.preventDefault(); /*防止打開URL*/
        $('.menu').toggleClass('menu-show');
    });

	// 滾動平滑效果
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top - 60
            }, 1000);
            // console.log($(this.hash).find('.companyblock'));
            // $(this.hash).css('padding-top',60);
            // $(this.hash).css('margin-top',-60);
            return false;
          }
        }
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
        var options = {
            facebook: "1517773441849696", // Facebook page ID
            line: "//line.me/R/ti/p/@anuefund", // Line QR code URL
            call_to_action: "聯絡我們", // Call to action
            button_color: "#FF6550", // Color of button
            position: "top right", // Position may be 'right' or 'left'
            order: "facebook,line", // Order of buttons
        };
        var proto = document.location.protocol,
            host = "whatshelp.io",
            url = proto + "//static." + host;
        var s = document.createElement('script');
        s.type = 'text/javascript';
        s.async = true;
        s.src = url + '/widget-send-button/js/init.js';
        s.onload = function() {
            WhWidgetSendButton.init(host, proto, options);
        };
        var x = document.getElementsByTagName('script')[0];
        x.parentNode.insertBefore(s, x); 
  
    
});