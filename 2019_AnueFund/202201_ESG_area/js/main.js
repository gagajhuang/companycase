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

  // 文章、影片分類
  var $btns = $('.btn-filter').click(function() {
    if (this.id == 'all') {
      $('#filter-show > div').fadeIn(450);
    } else {
      var $el = $('.' + this.id).fadeIn(450);
      $('#filter-show > div').not($el).hide();
    }
    $btns.removeClass('filter-active');
    $(this).addClass('filter-active');
  })
});
