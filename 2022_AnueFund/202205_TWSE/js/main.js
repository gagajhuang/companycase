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
        var fundContent = listContent.find('.fundlist__content');
        var funBtn = $(this);
        var funbtnIcon = $(this).find('.fas');

        if (fundContent.css('display') == 'none') {
            fundContent.slideDown();
            funBtn.css('background', '#e5911e');
            funbtnIcon.addClass('fa-chevron-circle-up');
        } else {
            fundContent.slideUp();
            funBtn.css('background', '#f9a532');
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

    // icon guideline
    // change position
    var offsetPixels = 450;
    $(window).scroll(function() {
        if ($(window).scrollTop() > offsetPixels) {
            $(".scrollingBox").css({
                "left": "0",
                "justify-content": "center"
            });
            $(".goTop").fadeIn();
        } else {
            $(".scrollingBox").css({
                "left": "10px",
                "justify-content": "left"
            });
            $(".goTop").fadeOut();
        }
    });
    
    // 複製連結
    new ClipboardJS('.copy-url');
    $('.copy-url').on('click', function(e) {
        e.preventDefault(); /*防止打開URL*/
        alert('網址已複製，歡迎分享!')
    });
    
    // window.onload=function(){
    // var timer=null;
    // var day = document.getElementById("day");
    // var hour = document.getElementById("hour");
    // var min = document.getElementById("min");
    // var sec = document.getElementById("sec");

    // function show_date_time(){   
    //     var target=new Date("2021/9/22 00:00");  
    //     var today=new Date(); 
    //     var timeold=(target.getTime()-today.getTime());   
    //     var sectimeold=timeold/1000   
    //     var secondsold=Math.floor(sectimeold);   
    //     var msPerDay=24*60*60*1000   
    //     var e_daysold=timeold/msPerDay   
    //     var daysold=Math.floor(e_daysold);   
    //     var e_hrsold=(e_daysold-daysold)*24;   
    //     var hrsold=Math.floor(e_hrsold);   
    //     var e_minsold=(e_hrsold-hrsold)*60;   
    //     var minsold=Math.floor((e_hrsold-hrsold)*60);   
    //     var seconds=Math.floor((e_minsold-minsold)*60);
        
    //     if(daysold<0){   
    //     document.querySelector('.count-time').style = "display:none"; 
    //     clearInterval(timer);
    //     }   
    //     else{   
    //         if (daysold<10) {daysold="0"+daysold}   
    //         if (hrsold<10) {hrsold="0"+hrsold}   
    //         if (minsold<10) {minsold="0"+minsold}   
    //         if (seconds<10) {seconds="0"+seconds} 
    //         day.innerHTML = daysold; 
    //         hour.innerHTML = hrsold;
    //         min.innerHTML = minsold;
    //         sec.innerHTML = seconds;   
    //     }   
    // }   
    // timer=setInterval(show_date_time,1000);
    // }  
    
});