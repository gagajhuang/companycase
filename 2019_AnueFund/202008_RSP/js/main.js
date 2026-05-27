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
    setTimeout(window.open("https://www.anuefund.com/FundSpec/redr/?FundID=" + fundId, "_blank"), 500);
  });
  AOS.init({
    duration: 600,
    easing: "ease-in-sine",
  });

  $("#menubtn").on("click", function (e) {
    e.preventDefault(); /*防止打開URL*/
    $(".menu").toggleClass("menu-show");
  });
   //收起 menu
   $('.menu a').on('click', function(e) {
    e.preventDefault(); /*防止打開URL*/
    $('.menu').removeClass('menu-show');
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
  $(".fundinfor").bind("click", function () {
    console.log($(this).parent().parent().parent()); //listcontent
    var listContent = $(this).parent().parent().parent(); //listcontent
    var fundContent = listContent.find(".fundcontent");
    var funBtn = $(this);
    var funbtnIcon = $(this).find(".fas");

    if (fundContent.css("display") == "none") {
      fundContent.slideDown();
      funBtn.css("background", "#ff9d34");
      funbtnIcon.addClass("fa-chevron-circle-up");
    } else {
      fundContent.slideUp();
      funBtn.css("background", "#ff8400");
      funbtnIcon.removeClass("fa-chevron-circle-up");
      funbtnIcon.addClass("fa-chevron-circle-down");
    }
  });

  //警告
  $(".btnshowcontent").on("click", function (e) {
    e.preventDefault(); /*防止打開URL*/
    $(".descriptionextra,.descriptionblock").toggle();
    $(".footerblock i").toggleClass("fa-chevron-circle-up");
    $(".footerblock i").toggleClass("fa-chevron-circle-down");
  });

  // icon guideline
  // change position
  var offsetPixels = 450;
  $(window).scroll(function () {
    if ($(window).scrollTop() > offsetPixels) {
      $(".scrollingBox2").css({
        left: "0",
        "justify-content": "center",
      });
      $(".goTop").fadeIn();
    } else {
      $(".scrollingBox2").css({
        left: "10px",
        "justify-content": "left",
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
  var s = document.createElement("script");
  s.type = "text/javascript";
  s.async = true;
  s.src = url + "/widget-send-button/js/init.js";
  s.onload = function () {
    WhWidgetSendButton.init(host, proto, options);
  };
  var x = document.getElementsByTagName("script")[0];
  x.parentNode.insertBefore(s, x);

  // 動畫區塊
  if ($(window).width() <= "769") {
    // $('.pointcontent').removeAttr('data-aos');
    $(".pointcontent").removeAttr("data-aos-delay");
  }
  $(window).resize(function () {
    if ($(window).width() <= "769") {
      $(".pointcontent").removeAttr("data-aos-delay");
    } else {
      $(".pointcontent").attr("data-aos-delay", "fade-right");
    }
  });
  function msieversion() {
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");
    if (msie > 0){
      $("[data-aos^=fade][data-aos^=fade]").css("opacity", "1");
    }
    }
    msieversion();

  //計算區
  const countList = document.querySelectorAll(".count__list");
  const countResult = document.querySelector(".count__result");
  const addDiv = document.createElement('div');
  let fundA = '67.2%', fundB = '35.7%', fundC = '159.7%';
  
  let fundAText = '資料來源: Bloomberg，「鉅亨買基金」整理，本利和是以連續10年每月投資固定金額於美股基金，並以S&P500指數於1989/9-2020/7期間滾動一年之年化報酬率計算之數據。資料僅為歷史數據模擬回測，不為未來投資獲利之保證，在不同指數走勢、比重與期間下，可能得到不同數據結果。';
  let fundBText = '資料來源: Bloomberg，「鉅亨買基金」整理，本利和是以連續10年每月投資固定金額於台股基金，並以台灣加權指數於1989/9-2020/7期間滾動一年之年化報酬率計算之數據。資料僅為歷史數據模擬回測，不為未來投資獲利之保證，在不同指數走勢、比重與期間下，可能得到不同數據結果。';
  let fundCText = '資料來源: Bloomberg，「鉅亨買基金」整理，本利和是以連續10年每月投資固定金額於產業股票-科技基金，並以那斯達克指數於1989/9-2020/7期間滾動一年之年化報酬率計算之數據。資料僅為歷史數據模擬回測，不為未來投資獲利之保證，在不同指數走勢、比重與期間下，可能得到不同數據結果。';

  // 加入計算區塊
  function countAdd(fundReward, fundRate, fundText){
    // addDiv.classList.add('result__content', 'result__roomin'); // IE 不支援多個
    addDiv.classList.add('result__content');
    addDiv.classList.add('result__roomin');
    addDiv.innerHTML ='<div class="result__tt">STEP<span>2.</span> 請輸入每月投資金額</div> <div class="result__input">每月投資新台幣<input class="principal" type="number" name="money" placeholder="請輸入金額"/>元，<br>10年後資產總和達<span class="result">???</span>元。<br><p class="fundreward">累積報酬率為' + fundReward + '</p></div><div class="tablecaption">' + fundText +'</div>';
        
    countResult.appendChild(addDiv);
    
    // 公式計算
    const principalInput = document.querySelector(".principal");
    const result = document.querySelector(".result");
    const Reward = document.querySelector(".fundreward");// 報酬率後顯示

    principalInput.addEventListener("keyup", function(e) {
      toThousands(this.value);
      if(this.value >= 300000000) {
        alert('請輸入正確金額！\n因應電子交易法規定每一客戶每天申購金額不得超過新台幣 3 千萬，請輸入 ≦ 30,000,000 之金額。');
        this.value = '';
        result.innerHTML = '???';
      }else if(this.value <= 0 && this.value != ''){
        alert('請輸入正確金額！\n天天選月月扣每次最低扣款門檻為新台幣 3,000 元，請輸入 ≧ 3,000 之金額。');
        this.value = '3000';
        result.innerHTML = '???';
      };
      
      if (this.value != '') {
        let sum = Math.floor(e.target.value * fundRate);
        result.innerHTML = toThousands(sum);
        Reward.classList.add('show__reward');
      }else{
        result.innerHTML = '???';
        Reward.classList.remove('show__reward');
      }
    });
    //判斷加入逗號
    function toThousands(num) {
      let result = '', counter = 0;
      num = (num || 0).toString();
      for (let i = num.length - 1; i >= 0; i--) {
        counter++;
        result = num.charAt(i) + result;
        if (!(counter % 3) && i != 0) { result = ',' + result; }
      }
      return result;
    }
  };

  // 移除所有加入的 class
  function removeClass() {
    var countImg = document.querySelectorAll(".count__img");
    var blackMask = document.querySelectorAll(".blackmask");
    [].forEach.call(countImg, function (el) {
      el.classList.remove("actline");
    });
    [].forEach.call(blackMask, function (el) {
      el.classList.remove("maskact");
    });
  }
  
  // 預設
  countAdd(fundA, 189.4711, fundAText);

  // 點擊切換
  for (let i = 0; i < countList.length; i++) {
    countList[i].addEventListener("click", countresult);
  }
  function countresult(e) {
    removeClass();
    const fundId = this.childNodes[1].dataset.fundid;

    switch (fundId) {
      case "A":
        console.log(this.childNodes);
        this.childNodes[3].classList.toggle("actline");
        this.childNodes[5].classList.toggle("maskact");
        countAdd(fundA, 200.6567, fundAText);
        break;
      case "B":
        this.childNodes[3].classList.toggle("actline");
        this.childNodes[5].classList.toggle("maskact");
        countAdd(fundB, 162.8693, fundBText);
        break;
      case "C":
        this.childNodes[3].classList.toggle("actline");
        this.childNodes[5].classList.toggle("maskact");
        countAdd(fundC, 311.6893, fundCText);
        break;
    }
  }

});
