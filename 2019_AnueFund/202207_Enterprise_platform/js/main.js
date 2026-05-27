$(document).ready(function () {
  // AOS.init({
  //   duration: 600,
  //   easing: "ease-in-sine",
  // });
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

  // 資訊收合
  // 17為卷軸寬度
  if ($(window).width()+17 <= 640) {
    $(".transaction-list > .collapse-table").removeClass("show");
  }else{
    $(".transaction-list > .collapse-table").addClass("show");
  }

  $(window).resize(function (e) {
    if ($(window).width()+17 > 640) {
      $(".transaction-list > .collapse-table").addClass("show");
    }else{
      $(".transaction-list > .collapse-table").removeClass("show");
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

  // const elem = document.querySelector('input[name="chooseY"]');
  // const datepicker = new Datepicker(elem, {
  //   'format': 'yyyy'
  // });
  // const elemsY = document.querySelector('input[name="chooseY"]');
  // const elemsM = document.querySelector('input[name="chooseM"]');
  // const elemsD = document.querySelector('input[name="chooseD"]');
  
  
  // function calenderChoose(elem, date){
  //   const datepicker = new Datepicker(elem, {
  //     'format': date,
  //   });
  // }

  // if (elemsY) {
  //   calenderChoose(elemsY,'yyyy')
  // }else if (elemsM) {
  //   calenderChoose(elemsM,'mm')
  // }else{
  //   calenderChoose(elemsD,'dd')
  // }
  


  //modal close
  $('.remind .modal .btn-secondary').on("click", function(){
    $('.remind .modal').hide()
  })
  // 檔案上傳
  $('.file-btn').on('click', function() {
    const file = $(this).parent().find('.file')
    file.trigger('click');
    file.on('change', function() {
      const fileVal = $(this)[0].files[0].name; 
      const fileName = $(this).parent().find('.file-name')
      fileName.val(fileVal);
    });
  });
  
});
