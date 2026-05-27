const missionGame = {
  data() {
    return {
      month: "",
      currentIndex: 0,
      imgLin: "images/mission/june/quiz/img-people.png",
      imgKuo: "images/mission/july/quiz/img-people.png",
      imgChen: "images/mission/august/quiz/img-people.png",
      completedText:
        "恭喜！任務挑戰成功！\n生活中的綠色行動就是這麼簡單\n讓我們一起減塑愛地球吧！",
      quiz: [
        {
          month: "june",
          list: [
            {
              question: "來吧考考你！\n下列哪個不是要減塑原因？",
              choices: [
                "A. 拯救海洋生態",
                "B. 減少進食物鏈",
                "C. 增加碳排放量",
                "D. 有益身體健康",
              ],
              answer: "D. 有益身體健康",
              wrongText: "不對唷~\n看清楚題目再想想喔！",
              trackText: "有益身體健康",
            },
            {
              question: "去店家消費時\n哪個行為不能做到減塑？",
              choices: [
                "A. 買補充包填裝",
                "B. 帶舊空瓶填充",
                "C. 重複使用包材",
                "D. 鼓勵用完即丟",
              ],
              answer: "D. 鼓勵用完即丟",
              wrongText: "QQ答錯惹！\n用完即丟會產生更多垃圾喔！",
              trackText: "鼓勵用完即丟",
            },
            {
              question: "猜猜哪項塑膠產業製品\n佔全球塑膠業最大占比(約26%)？",
              choices: ["A. 塑膠包裝", "B. 塑膠玩具", "C. 塑膠桶", "D. 塑膠管"],
              answer: "A. 塑膠包裝",
              wrongText: "Ooops！想想我們平日購物\n是不是都用掉好多包裝呢？",
              trackText: "塑膠包裝",
            },
            {
              question:
                "2022年政府開始實施減塑\n買飲料自備環保杯可能享有哪項優惠？",
              choices: [
                "A. 附贈環保袋",
                "B. 加料折抵",
                "C. 集會員點數",
                "D. 減免五元",
              ],
              answer: "D. 減免五元",
              wrongText: "好康報你知！\n現在只要用環保杯有機會減免五元喔！",
              trackText: "減免五元",
            },
            {
              question: "驚！全台超市、量販店每年\n產生多少一次性塑膠垃圾？",
              choices: ["A. 一億", "B. 二億", "C. 三億", "D. 三十六億"],
              answer: "D. 三十六億",
              wrongText: "嗚嗚...答案比你想的更驚人！",
              trackText: "三十六億",
            },
            {
              question: "哪種超市商品若進行包裝減量\n你覺得減塑效果最明顯呢？",
              choices: ["A. 雞蛋", "B. 水果", "C. 蔬菜", "D. 瓶裝飲料"],
              answer: "B. 水果",
              wrongText:
                "「果」然想不到吧！\n水果一年可減少\n快 4,000 公噸塑膠包裝唷！",
              trackText: "水果",
            },

            {
              question:
                "聯合國於2022年制訂哪種公約\n預計2024年執行來壓制溫室效應？",
              choices: [
                "A. 全面禁菸",
                "B. 嚴禁回收",
                "C. 全球塑膠",
                "D. 省水省電",
              ],
              answer: "C. 全球塑膠",
              wrongText: "小提示！\n這項公約對於塑膠製品使用有規範唷！",
              trackText: "全球塑膠",
            },
            {
              question:
                "慈濟大愛感恩科技用什麼做環保毛毯\n送到43個受災國家解救災民？",
              choices: [
                "A. 植物纖維",
                "B. 寶特瓶",
                "C. 天然蠶絲",
                "D. 舊衣回收",
              ],
              answer: "B. 寶特瓶",
              wrongText:
                "再猜猜，是我們超常看到的飲料包裝\n感恩科技！讚嘆科技！",
              trackText: "大愛寶特瓶",
            },
            {
              question:
                "2023年富邦悍將Run For Greenᵀᴹ主題日\n球員環保球衣是以何種回收材料製成？",
              choices: ["A. 塑膠袋", "B. 帆布", "C. 寶特瓶", "D. 皮革"],
              answer: "C. 寶特瓶",
              wrongText:
                "沒想到是超常見的飲料包裝吧？\n沒錯！跟富邦一起奔向綠色！",
              trackText: "球衣寶特瓶",
            },
            {
              question:
                "富邦金控與小智研發合作將廢棄口罩\n再生成哪種想不到的3C周邊產品外殼？",
              choices: [
                "A. 手機充電版",
                "B. 智能飛盤",
                "C. 電動車",
                "D. 掃地機器人",
              ],
              answer: "A. 手機充電版",
              wrongText: "嘿嘿！這個答案…\n能讓你的手機再活過來",
              trackText: "手機充電版外殼",
            },
          ],
        },
        {
          month: "july",
          list: [
            {
              question:
                "海洋生物誤食塑膠微粒後輾轉被人吸收\n請問每人每月吃掉的塑膠微粒約為多大？",
              choices: [
                "A. 一粒沙",
                "B. 一顆紅豆",
                "C. 一張信用卡",
                "D. 一塊樂高積木",
              ],
              answer: "D. 一塊樂高積木",
              wrongText: "應該不是吃什麼都要來一點？\n提示為小時候的玩具！",
              trackText: "一塊樂高積木",
            },
            {
              question:
                "從海中打撈一次性容器廢棄物\n回收後這些海洋垃圾可以變身成？",
              choices: ["A. 眼鏡", "B. 夾克", "C. 水壺", "D. 以上皆是"],
              answer: "D. 以上皆是",
              wrongText: "不是這個答案啦！\n這幾個海廢物都可以點石成金喔！",
              trackText: "海洋垃圾可以變身成以上皆是",
            },
            {
              question: "如果你想通報海洋污染案件\n要撥打哪個專線號碼呢？",
              choices: ["A. 118", "B. 110", "C. 119", "D. 113"],
              answer: "A. 118",
              wrongText: "唉呀！不是這個號碼唷\n找個最不常見的吧",
              trackText: "118專線",
            },
            {
              question: "請問把玻璃瓶丟進海裡，\n需要多久的分解時間？",
              choices: ["A. 一年", "B. 十年", "C. 五十年", "D. 一千年以後"],
              answer: "D. 一千年以後",
              wrongText: "Oooops~答錯了\n原來海洋承載這麼久的負荷呀？",
              trackText: "一千年以後",
            },
            {
              question:
                "當海水溫度上升，共生藻和珊瑚都會\n受到影響會造成什麼現象？",
              choices: [
                "A. 白化現象",
                "B. 靈異現象",
                "C. 社會現象",
                "D. 爆紅現象",
              ],
              answer: "A. 白化現象",
              wrongText: "熱極生悲！再多想一下\n海洋熱浪來襲帶來的白色恐怖",
              trackText: "白化現象",
            },
            {
              question: "保護及復育哪個生物\n對改善氣候變遷非常有幫助？",
              choices: ["A. 食人魚", "B. 鯨魚", "C. 小比目魚", "D. 美人魚"],
              answer: "B. 鯨魚",
              wrongText:
                "比森林還厲害的吸碳神器\n讓海洋維持調節氣候，非鯨魚莫屬！",
              trackText: "鯨魚",
            },

            {
              question:
                "一起守護野生動物棲息地吧！澎湖縣\n望安島守護了哪個動物的棲地保護區？",
              choices: ["A. 腔棘魚", "B. 短吻鱘", "C. 信天翁", "D. 綠蠵龜"],
              answer: "D. 綠蠵龜",
              wrongText:
                "其實在小琉球也很容易看到喔！\n他屬於瀕臨絕種保育類野生動物喔！",
              trackText: "綠蠵龜",
            },
            {
              question:
                "環境保護組織發起守護臺灣海洋行動\n推動<span></span>，共同創造永續的海洋環境",
              choices: [
                "A. 海洋公共法",
                "B. 海洋環保法",
                "C. 海洋保育法",
                "D. 海洋神奇魔法",
              ],
              answer: "C. 海洋保育法",
              wrongText: "避免生物多樣性喪失和資源枯竭，\n海洋保育從你我做起！",
              trackText: "海洋保育法",
            },
            {
              question:
                "聯合國宣布通過<span></span>，目標為2030年\n全球至少要有30%的海洋受到保護！",
              choices: [
                "A. 全球節能公約",
                "B. 全球環保公約",
                "C. 全球海洋公約",
                "D. 全球綠色公約",
              ],
              answer: "C. 全球海洋公約",
              wrongText: "保護海洋生物的家園吧！\n一起杜絕濫採濫捕",
              trackText: "全球海洋公約",
            },
            {
              question:
                "聯合國為呼籲全球關心海洋\n每年幾月幾日訂為「世界海洋日」？",
              choices: ["A. 6月8日", "B. 3月8日", "C. 4月22日", "D. 9月22日"],
              answer: "A. 6月8日",
              wrongText: "正確月份接近夏天唷\n再試試看",
              trackText: "世界海洋日6月8日",
            },
            {
              question:
                "富邦人壽攜手荒野保護協會\n推動哪項「河川<span></span>快篩調查計畫」？",
              choices: ["A. 稀有物", "B. 貴重物", "C. 動植物", "D. 廢棄物"],
              answer: "D. 廢棄物",
              wrongText: "再重選答案試試\n一起讓「廢棄物」OUT",
              trackText: "河川廢棄物快篩調查計畫",
            },
            {
              question:
                "為呼籲重視水汙染的嚴重性富邦人壽\n共同發表「新竹頭前溪」哪項白皮書？",
              choices: [
                "A. 河川保育",
                "B. 森林保育",
                "C. 海洋保育",
                "D. 環境保育",
              ],
              answer: "A. 河川保育",
              wrongText: "想擴大綠色影響力\n富邦帶頭提倡的是河川保育唷",
              trackText: "河川保育",
            },
            {
              question:
                "ESG已是全球語言，富邦人壽認養<span></span>，\n已取得ISO 20121永續性活動管理國際認證",
              choices: [
                "A. 海岸淨灘行動",
                "B. 濕地保育行動",
                "C. 綠色環保行動",
                "D. 生態復育行動",
              ],
              answer: "A. 海岸淨灘行動",
              wrongText:
                "要落實ESG永續承諾！快跟富邦\n一起關注海洋廢棄物議題認養海岸吧～",
              trackText: "海岸淨灘行動",
            },
          ],
        },
        {
          month: "august",
          list: [
            {
              question:
                "不同的發電方式所產生的二氧化碳量\n下列何者排放量最高？",
              choices: [
                "A. 火力發電",
                "B. 太陽能發電",
                "C. 風力發電",
                "D. 水力發電",
              ],
              answer: "A. 火力發電",
              wrongText: "給點小提示，燃燒會造成空污\n發電可以有更好的方式喔！",
              trackText: "八月_火力發電",
            },

            {
              question:
                "行政院環境保護署研訂車輛怠速\n在一般情況下不得超過多久？",
              choices: ["A. 三分鐘", "B. 五分鐘", "C. 十分鐘", "D. 十五分鐘"],
              answer: "A. 三分鐘",
              wrongText: "為了達到節能減碳目的\n三分鐘是極限了",
              trackText: "八月_三分鐘",
            },
            {
              question: "經濟部能源局的能源效率標示\n分為幾個等級？",
              choices: ["A. 7", "B. 5", "C. 3", "D. 1"],
              answer: "B. 5",
              wrongText: "省錢省能源\n記得「五級」才會有錢(台語)喔！",
              trackText: "八月_5 級",
            },
            {
              question: "什麼標章代表有政府認證的\n高效率及省能源？",
              choices: [
                "A. 環保標章",
                "B. 減碳標章",
                "C. 碳足跡標章",
                "D. 節能標章",
              ],
              answer: "D. 節能標章",
              wrongText: "答案怎麼都這麼像？\n關鍵在於節省能源喔",
              trackText: "八月_節能標章",
            },

            {
              question: "冷氣溫度設定在幾度\n最能兼顧舒適與節能？",
              choices: ["A. 22-24℃", "B. 24-26℃", "C. 26-28℃", "D. 28-30℃"],
              answer: "C. 26-28℃",
              wrongText: "這樣太冷跟太熱啦\n再重新選一次吧",
              trackText: "八月_26-28℃",
            },
            {
              question: "可以自然成長或不斷循環利用的\n稱為什麼資源？",
              choices: [
                "A. 可回收資源",
                "B. 不可再生資源",
                "C. 可再生資源",
                "D. 綠色資源",
              ],
              answer: "C. 可再生資源",
              wrongText: "給你一點小提示\n循環利用就像是有再生力量唷",
              trackText: "八月_可再生資源",
            },
            {
              question: "以下哪一種光源最省錢？",
              choices: [
                "A. 太陽自然光",
                "B. 省電燈泡",
                "C. LED燈",
                "D. 白熾燈泡",
              ],
              answer: "A. 太陽自然光",
              wrongText: "You're My Sunshine~\n最省錢的方式就是不用錢",
              trackText: "八月_太陽自然光",
            },
            {
              question: "下列何種生活習慣\n對全球暖化的減緩有幫助？",
              choices: [
                "A. 電腦不關機",
                "B. 天天開冷氣",
                "C. 出門以開車代步",
                "D. 隨手關燈",
              ],
              answer: "D. 隨手關燈",
              wrongText: "NO！大量用電和製造空氣汙染\n都不是好習慣",
              trackText: "八月_隨手關燈",
            },
            {
              question: "富邦透過量化計算發現\n投資哪項能源可避免最多碳排？",
              choices: ["A. 太陽能", "B. 風能", "C. 地熱", "D. 水力"],
              answer: "B. 風能",
              wrongText: "再生能源中減碳效益最好的是風\n減緩氣候變化的好幫手",
              trackText: "八月_風能",
            },
            {
              question: "富邦人壽與產險打造綠色保單\n能減少哪項排放量？",
              choices: [
                "A. 二氧化碳",
                "B. 一氧化碳",
                "C. 二氧化氮",
                "D. 二氧化硫",
              ],
              answer: "A. 二氧化碳",
              wrongText: "打造綠色保險商品\n此舉讓富邦人壽榮獲雙認證減碳肯定",
              trackText: "八月_二氧化碳",
            },
            {
              question:
                "Coldplay演唱會設置<span></span>\n邀請粉絲一起跳起來，創造永續演唱會。",
              choices: [
                "A. 發電地板",
                "B. 飛毯地板",
                "C. 震動地板",
                "D. 塑膠地板",
              ],
              answer: "A. 發電地板",
              wrongText: "嗨起來！鋪設動能轉換地面\n實現透過觀眾跳動來發電！",
              trackText: "八月_發電地板",
            },
            {
              question:
                "日月潭伊達邵邵族部落在環保團體促成下，\n設置<span></span>發電設備，紓解住戶供電問題。",
              choices: ["A. 生質能", "B. 太陽能", "C. 海洋能", "D. 地熱能"],
              answer: "B. 太陽能",
              wrongText: "讓太陽能進駐部落，\n一起朝綠能部落發展吧！",
              trackText: "八月_太陽能",
            },
            {
              question:
                "呼應臺灣2050淨零排放，富邦金控與\n中央研究院簽署<span></span>研發獎勵合作協議。",
              choices: [
                "A. 綠能科技",
                "B. 淨零科技",
                "C. 光電科技",
                "D. 能源科技",
              ],
              answer: "B. 淨零科技",
              wrongText: "富邦鼓勵中研院研究人員投入\n綠色能源之淨零科技研發",
              trackText: "八月_淨零科技",
            },
          ],
        },
      ],
      itemSelectedIndex: "",
      matchedItem: [],
      isSelected: true,
      showCategory: false,
      isMatching: false,
      groupAll: {
        group01: {
          item: [
            {
              name: "再生紙",
              img: "images/mission/june/match/img-item01-1.png",
              sort: "category01",
            },
            {
              name: "甘蔗渣",
              img: "images/mission/june/match/img-item01-2.png",
              sort: "category02",
            },
            {
              name: "寶特瓶",
              img: "images/mission/june/match/img-item01-3.png",
              sort: "category03",
            },
          ],
          category: [
            {
              name: "環保酒瓶",
              className: "category-item-01",
              img: "images/mission/june/match/img-category01-1.png",
              sort: "category01",
            },
            {
              name: "環保杯",
              className: "category-item-02",
              img: "images/mission/june/match/img-category01-2.png",
              sort: "category02",
            },
            {
              name: "環保球衣",
              className: "category-item-03",
              img: "images/mission/june/match/img-category03.png",
              sort: "category03",
            },
          ],
        },
        group02: {
          item: [
            {
              name: "輪胎",
              img: "images/mission/june/match/img-item02-1.png",
              sort: "category01",
            },
            {
              name: "口罩",
              img: "images/mission/june/match/img-item02-2.png",
              sort: "category02",
            },
            {
              name: "寶特瓶",
              img: "images/mission/june/match/img-item01-3.png",
              sort: "category03",
            },
          ],
          category: [
            {
              name: "地墊",
              className: "category-item-01",
              img: "images/mission/june/match/img-category02-1.png",
              sort: "category01",
            },
            {
              name: "手機充電板外殼",
              className: "category-item-02",
              img: "images/mission/june/match/img-category02-2.png",
              sort: "category02",
            },
            {
              name: "環保球衣",
              className: "category-item-03",
              img: "images/mission/june/match/img-category03.png",
              sort: "category03",
            },
          ],
        },
        group03: {
          item: [
            {
              name: "玻璃",
              img: "images/mission/june/match/img-item03-1.png",
              sort: "category01",
            },
            {
              name: "泡棉",
              img: "images/mission/june/match/img-item03-2.png",
              sort: "category02",
            },
            {
              name: "寶特瓶",
              img: "images/mission/june/match/img-item01-3.png",
              sort: "category03",
            },
          ],
          category: [
            {
              name: "防火磚",
              className: "category-item-01",
              img: "images/mission/june/match/img-category03-1.png",
              sort: "category01",
            },
            {
              name: "運動鞋底",
              className: "category-item-02",
              img: "images/mission/june/match/img-category03-2.png",
              sort: "category02",
            },
            {
              name: "環保球衣",
              className: "category-item-03",
              img: "images/mission/june/match/img-category03.png",
              sort: "category03",
            },
          ],
        },
      },
    };
  },
  computed: {
    randomQuizJune() {
      const { randomFun, quiz } = this;
      return randomFun(quiz[0].list);
    },
    randomQuizJuly() {
      const { randomFun, quiz } = this;
      return randomFun(quiz[1].list);
    },
    randomQuizAugust() {
      const { randomFun, quiz } = this;
      return randomFun(quiz[2].list);
    },
    randomMatch() {
      const { shuffle, groupAll } = this;
      const groups = Object.keys(groupAll);
      const itemRandom = shuffle(groups).slice(0, 1);
      const result = groupAll[itemRandom];

      return result;
    },
  },
  methods: {
    shuffle(array) {
      let currentIndex = array.length,
        temporaryValue,
        randomIndex;
      while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        temporaryValue = array[currentIndex]; //最後的元素
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }
      return array;
    },
    randomFun(quizList) {
      const { shuffle } = this;
      const quizOneRandom = shuffle(quizList).slice(0, 3);
      const result = shuffle(quizOneRandom);
      return result;
    },
    setAPI(missionEID){
      if ($.cookie("API_TOKEN")) {
        $.ajax({
          type: "POST",
          cache: "false",
          url: API_DOMAIN + "Eventjoin",
          data: {
            EID: missionEID,
          },
          headers: {
            Authorization: "Bearer " + USER_DATA.API_TOKEN,
          },
          success: function (resp) {
            if (resp && resp.rs == API_RESPONSE.OK) {
              togglePopup({
                active: "open",
                element: "#popup-member-mission-complete",
                isShowBtnClose: false,
                isBonus: false,
              });
              console.log("missionEID：", missionEID);
            }
          },
          error: function (resp) {
            togglePopup({
              active: "open",
              element: "#popup-member-mission-complete",
              isShowBtnClose: false,
              isBonus: false,
            });
            console.log(resp);
          },
        });
      } else {
        $.cookie("GUEST_EVENT_ID", missionEID);
        togglePopup({ active: "open", element: "#popup-end-mission-complete", isBonus: false, isMarathon: false});
        // togglePopup({ active: "open", element: "#popup-guest-mission-complete", isBonus: false});
      }
    },
    correctFun(randomQuizMouth, missionEID) {
      if (this.currentIndex >= randomQuizMouth.length - 1) {
        this.setAPI(missionEID);
        this.currentIndex--;
      }
    },
    correctAnswer(month, trackText) {
      let { correctFun } = this;
      if (month == "june") {
        correctFun(this.randomQuizJune, JUNE_EID);
      } else if (month == "july") {
        correctFun(this.randomQuizJuly, JULY_EID);
      } else if (month == "august") {
        correctFun(this.randomQuizAugust, AUGUST_EID);
      }

      this.currentIndex++; //題目未做完則累加，顯示下一題

      //進度條
      const stepItemsJune = document.querySelectorAll(
        "#june-mission-quiz .stepper-item"
      );
      const stepItemsJuly = document.querySelectorAll(
        "#july-mission-quiz .stepper-item"
      );
      const stepItemsAugust = document.querySelectorAll(
        "#august-mission-quiz .stepper-item"
      );
      this.stepperAct(stepItemsJune);
      this.stepperAct(stepItemsJuly);
      this.stepperAct(stepItemsAugust);
      if (eventTracker) eventTracker({ category: trackText });
    },
    wrongAnswer(text) {
      togglePopup({
        active: "open",
        wrongText: text.wrongText,
        element: "#popup-june-mission-wrong",
        isShowBtnClose: false,
      });
    },
    stepperAct(stepItem) {
      stepItem.forEach((item, stepIndex) => {
        const stepBtn = item.childNodes[0];
        if (this.currentIndex >= stepIndex && stepBtn.classList[1] !== "done") {
          stepBtn.classList.add("done");
        }
      });
    },
    // match
    selectOne(item, index) {
      let { matchedItem } = this;
      this.itemSelectedIndex = index;
      this.isSelected = false;
      this.isMatching = true;

      if (matchedItem.length == 0) {
        matchedItem.push(item);
      } else {
        matchedItem.splice(0, 1);
        this.isSelected = true;
        this.isMatching = false;
      }
      this.showCategory = !this.showCategory;
      if (eventTracker) eventTracker({ category: item.name });
    },
    selectAnswer( categoryItem) {
      let { matchedItem, randomMatch } = this;
      if (matchedItem.length == 1) {
        matchedItem.push(categoryItem);

        if (categoryItem.sort == matchedItem[0].sort) {
          categoryItem.completed = true;
          matchedItem[0].completed = true;
          this.showCategory = !this.showCategory;
          matchedItem.splice(0, 2);

          //完成
          const isAllCompleted = randomMatch.category.every(
            (item) => item.completed
          );
          this.isSelected = true;
          this.isMatching = false;

          let { completedText } = this;
          if (isAllCompleted) {
            const url = new URL(location.href);
            const month = url.searchParams.get('month');
            if (month == "june") {
              this.setAPI(JUNE_EID);
            } else if (month == "july") {
              this.setAPI(JULY_EID);
            } else if (month == "august") {
              this.setAPI(AUGUST_EID);
            }
          }
        } else {
          categoryItem.wrongshake = true;
          matchedItem[0].wrongshake = true;
          setTimeout(() => {
            togglePopup({
              active: "open",
              wrongText: "嗶嗶！配對錯誤！",
              element: "#popup-june-mission-wrong",
              isShowBtnClose: false,
            });
            matchedItem[0].wrongshake = true;
            categoryItem.wrongshake = false;
            matchedItem[0].wrongshake = false;
          }, 800);
          matchedItem.splice(1, 2);
        }
      }
    },
  },

  mounted() {
    setTimeout(() => {
      document.querySelector("#mission-game").classList.add("loaded");
    }, 1000);
  },
};
Vue.createApp(missionGame).mount("#mission-game");
