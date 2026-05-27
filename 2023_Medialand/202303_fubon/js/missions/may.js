$(function () {
  const questions = [
    {
      question: "購買飲料時，<br>應盡量使用自備環保杯，若未攜帶，<br>也應響應使用 <span></span>。",
      choices: ["循環杯", "一次性紙杯", "保麗龍杯", "塑膠杯"],
      answer: "A. 循環杯",
    },
    {
      question: "響應低碳生活，我出門都會帶 <span></span>。",
      choices: ["環保餐具", "免洗餐具", "免費餐具", "名牌餐具"],
      answer: "A. 環保餐具",
    },
    {
      question: "出門前會檢查家中電器及 <span></span>，<br>養成節能的好習慣。",
      choices: ["打扮自己", "隨手關燈", "打包行李", "上個廁所"],
      answer: "B. 隨手關燈",
    },
    {
      question: "這週出門不開車，<br>改搭乘 <span></span> 以減低碳排。",
      choices: ["計程車", "大眾運輸工具", "飛機", "筋斗雲"],
      answer: "B. 大眾運輸工具",
    },
    {
      question: "我願意減少 <span></span>，嘗試蔬食，<br>降低碳排放。",
      choices: ["吃香菜", "吃悶虧", "吃牛排", "吃水果"],
      answer: "C. 吃牛排",
    },
    {
      question: "我願意向保險公司申請 <span></span>，<br>以減少使用紙張。",
      choices: ["電子雞", "電子錶", "電子保單", "電子鍋"],
      answer: "C. 電子保單",
    },

    {
      question: "我願意購買具備 <span></span> 的電器產品，<br>節約能源並減緩溫室效應。",
      choices: ["鮮乳標章", "節能標章", "有機標章", "食安標章"],
      answer: "B. 節能標章",
    },
    {
      question: "不過度追求 <span></span>，減少喜新厭舊及用完即丟的購物消費行為。",
      choices: ["快時尚服飾", "環保產品", "綠色產品", "有機產品"],
      answer: "A. 快時尚服飾",
    },
    {
      question: "<span></span> 是有效降低碳排的方式之一，<br>因此我支持 Run For Greenᵀᴹ 計畫。",
      choices: ["植樹", "自拍", "曬太陽", "照顧盆栽"],
      answer: "A. 植樹",
    },
    {
      question: "我支持消費無紙化減碳愛地球，<br>我會多用 <span></span>。",
      choices: ["三聯發票", "雲端發票", "統一發票", "電子發票"],
      answer: "B. 雲端發票",
    },
  ];

  let selectedQuestions = [];
  let choicesEng = ["A", "B", "C", "D"];
  let questionNum = [];

  // 隨機選取三題題目及選項
  while (selectedQuestions.length < 3) {
    const randomIndex = Math.floor(Math.random() * questions.length);
    if (!selectedQuestions.includes(randomIndex)) {
      selectedQuestions.push(randomIndex);
    }
  }

  function showQuestions() {
    $("#may-mission .mission__question").css("display", "block");
    $("#may-mission .choice-item").removeClass("scan-light");

    for (let i = 0; i < selectedQuestions.length; i++) {
      questionNum.push(i + 1);
      const questionIndex = selectedQuestions[i];
      const question = questions[questionIndex].question;
      const choices = questions[questionIndex].choices;
      const correctAnswer = questions[questionIndex].answer;

      $("#may-mission .question-num")
        .eq(i)
        .html("Q" + questionNum[0]);
      $("#may-mission .question-topic").eq(i).html(question);

      for (let j = 0; j < choices.length; j++) {
        $("#may-mission .choice-item")
          .eq(i * 4 + j)
          .html(choicesEng[j] + ". " + choices[j]); 
      }
      //掃光
      $("#may-mission .choice-item").each(function(index) {
        if ($(this).text() == correctAnswer){
          $(this).addClass("#may-mission scan-light")
        }
      });
      
    }
  }
  showQuestions();

  // 檢查答案
  $("#may-mission .choice-item").on("click", function () {
    const selectedChoice = $(this).text();
    const questionIndex = Math.floor($(this).index() / 4);
    const correctAnswer = questions[selectedQuestions[questionIndex]].answer;
    if (selectedChoice == correctAnswer) {
      $(this).parent().parent().parent().css("display", "none");
      selectedQuestions = selectedQuestions.slice(1);
      questionNum = questionNum.slice(1); //3 => 2 => 1
      showQuestions();
      progressBar();

      //跳出獎勵視窗
      if (selectedQuestions.length == 0) {
        completeAward();
      }
    } else {
      $("#may-mission .choice-wrong").css("display", "block");
    }
  });

  //關閉錯誤訊息
  $("#may-mission .choice-wrong-close").on("click", (e) => {
    $("#may-mission .choice-wrong").css("display", "none");
  });

  //進度條
  function progressBar() {
    const stepItems = document.querySelectorAll("#may-mission .stepper-item");
    const progress = document.querySelector("#may-mission #progress");
    let i = questionNum[0] - 1;
    if (i > 0) {
      progress.setAttribute("value", (i * 100) / (stepItems.length - 1));
    }
    stepItems.forEach((item, secindex) => {
      if (i >= secindex && item.childNodes[1].classList[1] !== 'done') {
        setTimeout(() => {
          item.childNodes[1].classList.add("done");
          item.childNodes[1].innerHTML = "<img src='images/mission/may/check.png'>";
        }, 300);
      }
    });
  }

  //任務完成
  function completeAward() {
    $.ajax({
      type: "POST",
      cache: "false",
      url: API_DOMAIN + "Eventjoin",
      data: {
        EID: MAY_EID,
      },
      headers: {
        Authorization: "Bearer " + USER_DATA.API_TOKEN,
      },
      success: function (resp) {
        if (resp && resp.rs == API_RESPONSE.OK) {
          togglePopup({ active: "open", element: "#popup-may-mission-complete", isShowBtnClose: false });
        }
      },
      error: function (resp) {
        togglePopup({ active: "open", element: "#popup-may-mission-complete", isShowBtnClose: false });
        console.log(resp);
      },
    });
  }
  //分享列
  $("#popup-may-mission-complete-btn-share").on("click", () => {
    togglePopup({
      active: "open",
      element: "#popup-share",
      isShowBtnClose: true,
      btnCloseFn: () => {
        togglePopup({ active: "open", element: "#popup-may-mission-complete" });
      },
    });
  });


});

$(window).on("load", function () {
  $("#may-mission").addClass("loaded");
});
