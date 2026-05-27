const missionList = {
  data() {
    return {
      isNewMission: false,
      isMobile: false,
      isMonth: '',
      openedMission: [
        {
          title: "消費塑塑走",
          img: "images/mission/june/img-mission-june.png",
          // athlete: "images/mission/june/icon-lin.png",
          text: "<p>夏天是塑膠浪費的高峰<br>玩遊戲一起發現減塑小方法</p>",
          btnText: "立即減塑",
          month: "june",
          isNewMission: false,
          isShowed: true,
        },
        {
          title: "聽海哭的聲音",
          img: "images/mission/july/img-mission-july.png",
          // athlete: "images/mission/july/icon-kuo.png",
          text: "<p>別讓海廢汙染影響你的踏浪興致<br>一起認識海廢議題</p>",
          btnText: "瞭解海廢",
          month: "july",
          isNewMission: false,
          isShowed: true,
        },
        {
          title: "節能動起來",
          img: "images/mission/august/img-mission-august.png",
          // athlete: "images/mission/august/icon-chen.png",
          text: "<p>在用電高峰期共同瞭解如何節能<br>幫助北極熊守護家園</p>",
          btnText: "立刻節能",
          month: "august",
          isNewMission: false,
          isShowed: true,
        },
      ],
      notOpenedMission: [
        {
          title: "消費塑塑走",
          img: "images/mission/june/icon-kuo.png",
          btnText: "立即減塑",
          month: "june",
          isShowed: false,
        },
        {
          title: "聽海哭的聲音",
          img: "images/mission/june/icon-kuo.png",
          btnText: "瞭解海廢",
          month: "july",
          isShowed: false,
        },
        {
          title: "節能動起來",
          img: "images/mission/june/icon-chen.png",
          btnText: "立刻節能",
          month: "august",
          isShowed: false,
        },
      ],
    };
  },
  methods: {
    initSwiper() {
      const { swiper } = this.$refs;
      var that = this;
      this.$options.swiper = new Swiper(swiper, {
        loop: true,
        slidesPerView: "auto",
        centeredSlides: true,
        pagination: {
          el: ".swiper-pagination",
        },
        breakpoints: {
          1080: {
            allowTouchMove: false,
            loop: false,
            centeredSlides: false,
            pagination: false,
          },
        },
        on:{
          click: function(e){
            const targetId = e.clickedSlide.id;
            const targetMonth = e.clickedSlide.dataset.month;
            const targetTitle = e.clickedSlide.dataset.title;
            console.log(e.realIndex)
            // if(targetId == 'mission-bonus'){
            //   that.bonusClick();
            // } else if (targetId == 'mission-points') {
            //   that.pointsClick()
            // } else{
            //   that.missionClick(targetMonth, targetTitle);
            // }
          },
        },
      });
    },
    bonusClick() {
      if (eventTracker) eventTracker({ category: "富邦加碼任務" });
      window.location.search = "page=bonus-mission";
    },
    pointsClick() {
      if (eventTracker) eventTracker({ category: "路跑贏點數" });
      window.location.search = "page=marathon";
    },
    missionClick(itemMonth, itemTitle) {
      var urls = [
        "page=" + itemMonth + "-mission-quiz",
        "page=june-mission-match&month="+ itemMonth,
      ];
      var randomIndex = Math.floor(Math.random() * urls.length);
      var randomUrl = urls[randomIndex];
      if (eventTracker) eventTracker({ category: itemTitle });
      window.location.search = randomUrl;
    },
    openedFun(isMonth){
      const { openedMission, notOpenedMission } = this;
      for (let i = 0; i < openedMission.length; i++) {
        if(openedMission[i].month == isMonth){
          openedMission[i].isShowed = true;
          notOpenedMission[i].isShowed = false;
        }
      }
    },
    notOpenedFun(isMonth){
      const { openedMission, notOpenedMission } = this;
      for (let i = 0; i < openedMission.length; i++) {
        if(openedMission[i].month == isMonth){
          openedMission[i].isShowed = false;
          notOpenedMission[i].isShowed = true;
        }
      }
    },
    getEventList() {
      return new Promise((resolve, reject) => {
        const { openedFun, notOpenedFun} = this;
        $.ajax({
          type: "POST",
          cache: "false",
          url: API_DOMAIN + "Eventlist",
          dataType: "json",
          headers: {
            Authorization: "Bearer " + USER_DATA.API_TOKEN,
          },
          success: function (resp) {
            let { isMonth } = this;
            if (resp && resp.rs == API_RESPONSE.OK) {
              console.log(resp.item)
              for (i = 0; i < resp.item.length; i++) {
                // 6月
                if (resp.item[i].EID == JUNE_EID) {
                  isMonth = 'june';
                  if (resp.item[i].ISACTIVE) {
                    openedFun(isMonth);
                  } else {
                    notOpenedFun(isMonth)
                  }
                }
                // 7月
                if (resp.item[i].EID == JULY_EID) {
                  isMonth = 'july';
                  if (resp.item[i].ISACTIVE) {
                    openedFun(isMonth);
                  } else {
                    notOpenedFun(isMonth)
                  }
                }
    
                // 8月
                if (resp.item[i].EID == AUGUST_EID) {
                  isMonth = 'august';
                  // openedFun(isMonth);
                  if (resp.item[i].ISACTIVE) {
                    openedFun(isMonth);
                  } else {
                    notOpenedFun(isMonth)
                  }
                }
              }
              resolve(); 
            }
          },
          error: function (resp) {
            reject(resp);
          },
        });
      });
    },
    
  },
  computed: {},
  mounted() {
    // this.getEventList()
    // .then(() => {
    //   setTimeout(() => {
    //     this.initSwiper();
    //   }, 1000)
    // })
    // .catch(error => {
    //   console.error(error);
    // });

    setTimeout(() => {
      document.querySelector("#mission").classList.add("loaded");
    }, 1500);
    
  },
};

Vue.createApp(missionList).mount("#app");
