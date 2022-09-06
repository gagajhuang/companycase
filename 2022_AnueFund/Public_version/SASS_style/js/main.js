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

    $('#menu-btn').on('click', function(e) {
        e.preventDefault(); /*防止打開URL*/
        $('.menu').toggleClass('menu-show');
    });
     //收起 menu
    $('.menu a').on('click', function(e) {
        e.preventDefault(); /*防止打開URL*/
        $('.menu').removeClass('menu-show');
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
    $('.footer__btn').on('click', function(e) {
        e.preventDefault(); /*防止打開URL*/
        $('.description__block').toggle();
        $('.footer__block i').toggleClass('fa-chevron-circle-up');
        $('.footer__block i').toggleClass('fa-chevron-circle-down');
    });

    $('.point-content').click(function(){
        // console.log($("body").hasClass('modal-open'))
        if ($("body").hasClass('modal-open') || $(".modal").hasClass('show')) {
          $("body, .modal").css("padding-right", "0");
        }
    });
    // 複製連結
    new ClipboardJS('.copy-url');
    $('.copy-url').on('click', function(e) {
        e.preventDefault(); /*防止打開URL*/
        alert('網址已複製，歡迎分享!')
    });
});