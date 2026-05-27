$(document).ready(function () {
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

  // 收合
  $(".btn-collapse").on("click", function () {
    if ($(this).find("i").hasClass("fa-caret-up")) {
      $(this).html('<i class="fa-solid fa-caret-down"></i> 開啟');
    } else if ($(this).find("i").hasClass("fa-caret-down")) {
      $(this).html('<i class="fa-solid fa-caret-up"></i> 收合');
    }
  });

  //modal close
  $(".remind .modal .btn-primary").on("click", function () {
    $(".remind .modal").hide();
  });
  // stepper
  const stepItems = document.querySelectorAll(".stepper-item");
  const progress = document.querySelector("#progress");
  const progressNum = document.querySelector(".progress-num span");

  Array.from(stepItems).forEach((Items, index) => {
    Items.addEventListener("click", () => {
      progress.setAttribute("value", (index * 100) / (stepItems.length - 1)); 
      progressNum.innerHTML = index * 1 + 1;
      stepItems.forEach((item, secindex) => {
        console.log(item.childNodes);
        if (index > secindex) {
          item.childNodes[1].classList.add("done-text");
          item.childNodes[3].classList.add("done-btn");
        }
        if (index < secindex) {
          item.childNodes[1].classList.remove("done-text");
          item.childNodes[3].classList.remove("done-btn");
        }
      });
    });
  });

});
