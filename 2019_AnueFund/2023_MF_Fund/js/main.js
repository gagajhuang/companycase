$(document).ready(function () {
  AOS.init({
    duration: 600,
    easing: "ease-in-sine",
  });
  // 開戶
  $(".opentrack").on("click", function (e) {
    window.launch_Registration_Appier(window.location.href, "https://www.anuefund.com/FundSpec/OpenAcct/");
    setTimeout(window.open("https://www.anuefund.com/FundSpec/OpenAcct/", "_blank"), 500);
  });
  $("#menu-btn").on("click", function (e) {
    e.preventDefault(); /*防止打開URL*/
    $(".menu").toggleClass("menu-show");
  });
  //收起 menu
  $(".menu a").on("click", function (e) {
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
            scrollTop: target.offset().top - 80,
          },
          1000
        );
        return false;
      }
    }
  });

  // 收合
  $(".btn-collapse").on("click", function () {
    if ($(this).find("i").hasClass("fa-caret-up")) {
      $(this).html('<i class="fa-solid fa-caret-down"></i> 開啟');
    } else if ($(this).find("i").hasClass("fa-caret-down")) {
      $(this).html('<i class="fa-solid fa-caret-up"></i> 收合');
    }
  });
  var iconUp = '<i class="fa-solid fa-chevron-up"></i>';
  var iconDown = '<i class="fa-solid fa-chevron-down"></i>';
  // 基金資訊收合
  $(".list-collapse").on("click", function () {
    if ($(this).find("i").hasClass("fa-chevron-down")) {
      $(this).html(iconUp);
    } else if ($(this).find("i").hasClass("fa-chevron-up")) {
      $(this).html('<i class="fa-solid fa-chevron-down"></i>');
    }
    if ($("#details .collapse-table.show").length == $("#details .collapse-table").length - 1) {
      $(".expand-btn .btn-new").html("全部收合 " + iconUp);
    } else {
      $(".expand-btn .btn-new").html("全部展開 " + iconDown);
    }
  });

  // 交易明細 - 全部展開/全部收合
  $(".expand-btn .btn-new").on("click", function () {
    if ($("#details .collapse-table.show").length == $("#details .collapse-table").length) {
      $("#details .collapse-table").removeClass("show");
      $(".list-collapse").html(iconDown);
      $(this).html("全部展開 " + iconDown);
    } else {
      $("#details .collapse-table").addClass("show");
      $(".list-collapse").html(iconUp);
      $(this).html("全部收合 " + iconUp);
    }
  });

  //stepper tab 收合
  const NavBtn = document.querySelectorAll(".process-steps .nav-link");

  function stepperAct() {
    function cleartabText(e) {
      [].forEach.call(NavBtn, function (el) {
        el.querySelector("p").style = "display:none";
      });
    }
    for (let i = 0; i < NavBtn.length; i++) {
      NavBtn[i].addEventListener("click", navStyle);
      if (NavBtn[i].classList.contains("active")) {
        NavBtn[i].querySelector("p").style = "display:inline";
      }
    }
    function navStyle(e) {
      cleartabText();
      const tabId = this.id;
      switch (tabId) {
        case "tab02":
          this.querySelector("p").style = "display:inline";
          break;
        case "tab03":
          this.querySelector("p").style = "display:inline";
          break;
        case "tab04":
          this.querySelector("p").style = "display:inline";
          break;
        default:
          this.querySelector("p").style = "display:inline";
          break;
      }
    }
    return false;
  }

  function pcAct() {
    function cleartabText(e) {
      [].forEach.call(NavBtn, function (el) {
        el.querySelector("p").style = "display: inline";
      });
    }
    for (let i = 0; i < NavBtn.length; i++) {
      NavBtn[i].addEventListener("click", function () {
        cleartabText();
      });
    }
    cleartabText();
    return false;
  }

  // PDF加入、stepper tab收合
  if ($(window).width() <= 480) {
    $(".file-pdf div").attr("data-content", "[PDF]");
    stepperAct();
  }

  if ($(window).width() <= 960) {
    $(".transaction-list .collapse-table").removeClass("show");
  } else {
    $(".transaction-list .collapse-table").addClass("show");
  }

  var oldwindowswidth = $(window).width(); //一開始載入的寬度，不會因resize而變動

  $(window).resize(function (e) {
    //17為卷軸寬度
    if ($(window).width() + 17 > 960 && oldwindowswidth <= 960) {
      $("#collapse-List").addClass("show");
      $(".transaction-list .collapse-table").addClass("show");
      $(".list-collapse").html(iconUp);
    } else if ($(window).width() + 17 <= 960 && oldwindowswidth > 960) {
      $("#collapse-List").removeClass("show");
      $(".transaction-list .collapse-table").removeClass("show");
      $(".list-collapse").html(iconDown);
    }

    //會無限觸發，所以需要第二個條件阻止觸發行為
    if ($(window).width() <= 480 && oldwindowswidth > 480) {
      // 當下寬度 > 480 時，resize狀態寬度 < 480時
      $(".file-pdf div").attr("data-content", "[PDF]");
      stepperAct();
      return false;
    } else if ($(window).width() > 480 && oldwindowswidth <= 480) {
      // 當下寬度 <= 480 時，resize狀態寬度 >480時
      $(".file-pdf div").attr("data-content", "");
      pcAct();
      return false;
    }
    oldwindowswidth = $(window).width(); //把目前"寬的值"再丟回去給 oldwindowswidth
  });

  // 複製連結
  new ClipboardJS(".copy-url");
  $(".copy-url").on("click", function (e) {
    e.preventDefault(); /*防止打開URL*/
    alert("網址已複製，歡迎分享!");
  });

  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 3000,
    autoplaySpeed: 1000,
    mouseDrag: true,
    responsive: {
      0: {
        items: 1,
      },
      640: {
        items: 2,
      },
      1024: {
        items: 3,
        nav: false,
        loop: false,
        dots: false,
        mouseDrag: false,
      },
    },
    navText: ["<i class='fa-solid fa-chevron-left'></i>", "<i class='fa-solid fa-chevron-right'></i>"],
  });

  // 循環動畫
  $(window).scroll(function () {
    var windowH = $(window).scrollTop() + $(window).height() / 2;
    var circleH = $(".circle-block").offset().top;
    // console.log(windowH,circleH)
    if (windowH >= circleH) {
      setTimeout(function () {
        $(".circle-bowl").fadeIn();
        $(".coins-circle").fadeIn();
      }, 0);
      setTimeout(function () {
        $(".circle-ingots01").fadeIn();
      }, 1000);
      setTimeout(function () {
        $(".circle-ingots02").fadeIn();
      }, 2000);
    }
  });

  $("#datepicker-D, #datepicker-01, #datepicker-02, #datepicker-03, #datepicker-04").datepicker($.datepicker.regional["fr"]);
  $("#datepicker-D, #datepicker-01, #datepicker-02, #datepicker-03, #datepicker-04").focus(function () {
    $(".ui-datepicker-header").hide();
  });

  
});
