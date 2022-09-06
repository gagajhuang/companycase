$(document).ready(function() {
    // 開戶
    $('.opentrack').on('click',function(e) {
        window.launch_Registration_Appier(window.location.href,'https://www.anuefund.com/FundSpec/OpenAcct/');
        setTimeout(window.open('https://www.anuefund.com/FundSpec/OpenAcct/', '_blank'),500);
    });
    // 各基金
    $('.fundtrack').on('click', function(e) {
        var fundId = $(this).data('fundid');
        // console.log(fundId);
        window.launch_Addtocart_Appier(window.location.href,fundId);
        // setTimeout(window.open(`https://www.anuefund.com/FundSpec/redr/?FundID=${fundId}` , '_blank'),500);
        setTimeout(window.open('https://www.anuefund.com/FundSpec/redr/?FundID=' + fundId , '_blank'),500);
    });
    AOS.init({
        duration: 600,
        easing: 'ease-in-sine',
    });

    $('#menubtn').on('click', function(e) {
        e.preventDefault(); /*防止打開URL*/
        $('.menu').toggleClass('menu-show');
    });
     // 收起 menu
    $('.menu a').on('click', function(e) {
        // e.preventDefault(); /*防止打開URL*/
        $('.menu').removeClass('menu-show');
    });

    // 開啟下拉選單
    $('.dropdown-btn').on('click', function(e) {
        $('.dropdown-list').slideToggle();
    });
     // 收起下拉選單
     $('.dropdown-btn a').on('click', function(e) {
        $('.dropdown-list').slideUp();
    });

    // 滾動平滑效果
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
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

    //點擊展開列表 
    $(".fundinfor").bind("click", function() {
        console.log($(this).parent().parent().parent()); //listcontent
        var listContent = $(this).parent().parent().parent(); //listcontent
        var fundContent = listContent.find('.fundcontent');
        var funBtn = $(this);
        var funbtnIcon = $(this).find('.fas');

        if (fundContent.css('display') == 'none') {
            fundContent.slideDown();
            funBtn.css('background', '#e82a2a');
            funbtnIcon.addClass('fa-chevron-circle-up');
        } else {
            fundContent.slideUp();
            funBtn.css('background', '#cc0000');
            funbtnIcon.removeClass('fa-chevron-circle-up');
            funbtnIcon.addClass('fa-chevron-circle-down');
        }
    });
    
    //警告
    $('.btnshowcontent').on('click', function(e) {
        e.preventDefault(); /*防止打開URL*/
        $('.descriptionblock').toggle();
        $('.footerblock i').toggleClass('fa-chevron-circle-up');
        $('.footerblock i').toggleClass('fa-chevron-circle-down');
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
    $('.owl-carousel').owlCarousel({
        dots:false,
        loop:true,
        margin:10,
        nav:true,
        navText: ["<img src='images/arrow-left.png'>","<img src='images/arrow-right.png'>"],
        responsive:{
            0:{
                items:1
            },
            640:{
                items:2
            },
            1024:{
                items:3
            }
        },
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
    });
});