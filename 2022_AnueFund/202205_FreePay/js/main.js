$(document).ready(function () {
  AOS.init({
    duration: 600,
    easing: "ease-in-sine",
  });
  // 開戶
  $('.opentrack').on('click',function(e) {
    window.launch_Registration_Appier(window.location.href,'https://www.anuefund.com/FundSpec/OpenAcct/');
    setTimeout(window.open('https://www.anuefund.com/FundSpec/OpenAcct/', '_blank'),500);
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

  // 收合
  $(".btn-collapse").on("click", function () {
    if ($(this).find("i").hasClass("fa-caret-up")) {
      $(this).html('<i class="fa-solid fa-caret-down"></i> 開啟');
    } else if ($(this).find("i").hasClass("fa-caret-down")) {
      $(this).html('<i class="fa-solid fa-caret-up"></i> 收合');
    }
  });

  // 基金資訊收合
  $(".list-collapse").on("click", function () {
    if ($(this).find("i").hasClass("fa-circle-chevron-up")) {
      $(this).html('<i class="fa-solid fa-circle-chevron-down"></i>');
    } else if ($(this).find("i").hasClass("fa-circle-chevron-down")) {
      $(this).html('<i class="fa-solid fa-circle-chevron-up"></i>');
    }
  });
  
  
  //stepper tab 收合
  function stepperAct(){
    const NavBtn = document.querySelectorAll(".stepper .nav-link");
    function cleartabText(e) {
      [].forEach.call(NavBtn, function (el) {
        el.querySelector("p").style = "display:none";
        // el.querySelector("p").classList.toggle('show-tab')
      });
    }
    
    for (let i = 0; i < NavBtn.length; i++) {
      NavBtn[i].addEventListener("click", navStyle);
      // NavBtn[i].addEventListener("resize", function(){});
      if(NavBtn[i].classList.contains('active')){
        NavBtn[i].querySelector("p").style = "display:inline"
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
        default:
          this.querySelector("p").style = "display:inline";
          break;
      }
    }
    return false
  }

  function pcAct(){
    const NavBtn = document.querySelectorAll(".stepper .nav-link");
    function cleartabText(e) {
      [].forEach.call(NavBtn, function (el) {
        el.querySelector("p").style = "display: inline";
      });
    }
    
    for (let i = 0; i < NavBtn.length; i++) {
      NavBtn[i].addEventListener("click", function(){
        cleartabText();
      });
    }
    cleartabText();
    return false
  }

  // PDF加入、stepper tab收合
  if ($(window).width() <= 480) {
    $(".file-pdf div").attr("data-content", "[PDF]");
    stepperAct();
  }

  if ($(window).width() <= 640) {
    $(".collapse-table").removeClass("show");
  }else{
    $(".collapse-table").addClass("show");
  }

  $(window).resize(function (e) {
    if ($(window).width() > 640) {
      $("#collapse-List").addClass("show");
      $(".collapse-table").addClass("show");
    }else{
      $(".collapse-table").removeClass("show");
    }

    if ($(window).width() <= 480) {
      $(".file-pdf div").attr("data-content", "[PDF]");
      stepperAct()
      return false
    } else{
      $(".file-pdf div").attr("data-content", "");
      pcAct()
      return false
    }
  });

  /* vanillajs-datepicker 1.1.4 JS included */
  const getDatePickerTitle = elem => {
    // From the label or the aria-label
    const label = elem.nextElementSibling;
    let titleText = '';
    if (label && label.tagName === 'LABEL') {
      titleText = label.textContent;
    } else {
      titleText = elem.getAttribute('aria-label') || '';
    }
    return titleText;
  }

  const elems = document.querySelectorAll('.datepicker_input');
  for (const elem of elems) {
    const datepicker = new Datepicker(elem, {
      'format': 'yyyy/mm/dd', // UK format
      title: getDatePickerTitle(elem)
    });
  }     
  
});
