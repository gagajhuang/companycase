$(document).ready(function () {
  // 開戶
  $(".opentrack").on("click", function (e) {
    window.launch_Registration_Appier(window.location.href, "https://www.anuefund.com/FundSpec/OpenAcct/");
    setTimeout(window.open("https://www.anuefund.com/FundSpec/OpenAcct/", "_blank"), 500);
  });
  // 各基金
  $(".fundtrack").on("click", function (e) {
    var fundId = $(this).data("fundid");
    // console.log(fundId);
    window.launch_Addtocart_Appier(window.location.href, fundId);
    // setTimeout(window.open(`https://www.anuefund.com/FundSpec/redr/?FundID=${fundId}` , '_blank'),500);
    setTimeout(window.open("https://www.anuefund.com/FundSpec/redr/?FundID=" + fundId, "_blank"), 500);
  });
  AOS.init({
    duration: 600,
    easing: "ease-in-sine",
  });

  $("#menu-btn").on("click", function (e) {
    e.preventDefault(); /*防止打開URL*/
    $(".menu").toggleClass("menu-show");
  });
  //收起 menu
  $(".menu a").on("click", function (e) {
    // e.preventDefault(); /*防止打開URL*/
    $(".menu").removeClass("menu-show");
  });

  // 滾動平滑效果
  $('a[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html, body").animate(
          {
            scrollTop: target.offset().top - 60,
          },
          1000
        );
        return false;
      }
    }
  });

  //點擊展開列表
  $(".step__TT").bind("click", function () {
    // console.log($(this).parent()); //.step__block
    var stepBlock = $(this).parent();
    var stepContent = stepBlock.find(".step__content");
    var btnNext = stepBlock.find(".step__next");
    var stepBtn = $(this);
    // var stepbtnIcon = $(this).find('.fas');

    if (stepContent.css("display") == "none") {
      stepContent.slideDown();
      stepBtn.addClass("act-status arrow-up");
      $(this).removeClass("arrow-down");
      btnNext.show();
      // stepbtnIcon.addClass('fa-chevron-circle-up');
    } else {
      stepContent.slideUp();
      stepBtn.removeClass("act-status arrow-up");
      $(this).addClass("arrow-down");
      btnNext.hide();
      // stepbtnIcon.removeClass('fa-chevron-circle-up');
      // stepbtnIcon.addClass('fa-chevron-circle-down');
    }
  });

  for (var i = 0; i <= 5; i++) {
    // console.log($("#step0" + i));
    // var stepNext = $('.step__next');
    var stepArea = $("#step0" + i); //00、01、02、03、04、05
    var stepNext = stepArea.find(".step__next");
    stepNext.bind("click", function () {
      // console.log($(this).parent().parent().next())//#step00、#step01、...
      var nextIdContent = $(this).parent().parent().next().find(".step__content");
      var nextIdBtn = $(this).parent().parent().next().find(".step__TT");
      var btnNext = $(this).parent().parent().next().find(".step__next");
      if (nextIdContent.css("display") == "none") {
        nextIdContent.slideDown();
        nextIdBtn.addClass("act-status arrow-up");
        nextIdBtn.removeClass("arrow-down");
        btnNext.show();
        $("html, body").animate(
          {
            scrollTop: nextIdBtn.offset().top - 65,
          },
          500
        );
        return false;
      } else {
        nextIdContent.slideUp();
        nextIdBtn.removeClass("act-status arrow-up");
        nextIdBtn.addClass("arrow-down");
        btnNext.hide();
      }
    });
  }

  //警告
  $(".footer__btn").on("click", function (e) {
    e.preventDefault(); /*防止打開URL*/
    $(".description__block").toggle();
    $(".footer__block i").toggleClass("fa-chevron-circle-up");
    $(".footer__block i").toggleClass("fa-chevron-circle-down");
  });

  // 複製連結
  new ClipboardJS('.copy-url');
  $('.copy-url').on('click', function(e) {
      e.preventDefault(); /*防止打開URL*/
      alert('網址已複製，歡迎分享!')
  })
});
