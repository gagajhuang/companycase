// 活動結束
$(document).ready(function() {
    const searchUrl = window.location.search;
    if (searchUrl == '') {
        alert("富邦地球隊全員Run For Green™活動已於2023/12/31 結束囉！\n活動期間結束後，本網站將停止Green Point發放亦不提供任何抽獎！謝謝您的支持！") 
    }
});
$(".btn-replay").click(function () {
    togglePopup({ active: "close" })
});
$(".btn-endgame").click(function () {
    // window.location.search = "page=mission";
    window.open('https://www.fubon.com/r4g/#r4g')
    togglePopup({ active: "close" })
});

// 隱私權政策
$("#privacy-btn-ok").click(function () {
    $("#privacy").removeClass("privacy--show");
    $.cookie("privacyIsShow", 0, { expires: 90 });
});
// menu
$("#header-logo").click(function () {
    window.location.search = "";
});

$("#menu-icon").click(toggleMenu);

$("#menu-index, #menu-index-top").click(function () {
    window.location.search = "";
    
});

$("#menu-award").click(function () {
    if (window.location.search) {
        window.location.hash = "goto=award";
        window.location.search = "";
    } else {
        toggleMenu("close");
        $("html, body").animate({ scrollTop: $("#index-main").offset().top + $("#index-main").height() }, 300);
    }
});

$("#menu-choice").click(function () {
    if (window.location.search) {
        window.location.hash = "goto=choice";
        window.location.search = "";
    } else {
        toggleMenu("close");
        setTimeout(function () {
            $("html, body").animate({ scrollTop: $("#index-main").offset().top + $("#index-main").height() + 1500 }, 300);
        }, 500);
    }
});

$("#menu-member").click(function () {
    window.location.search = "page=member";
});

$("#menu-mission").click(function () {
    eventTracker({category: "漢堡-任務列表"})
    window.location.search = "page=mission";
});

$("#menu-rule, #menu-rule-top").click(function () {
    window.location.search = "page=rule";
});

$("#menu-logout").click(function () {
    $.cookie("API_TOKEN", "");
    USER_DATA = $.extend(true, {}, USER_DATA_DEFAULT);
    window.location = "./";
});


// header

$("#header__login__title-login").click(function () {
    window.location.search = "page=mission";
    // 舊版邏輯 start
    // if (
    //     window.location.search === '?page=' ||
    //     window.location.search === ''
    // ) {
    //     if ($.cookie("API_ISACTIVE"))
    //     {
    //         togglePopup({ active: "open", element: "#popup-social-login", isShowBtnClose: true });
    //     }else
    //     {
    //         $("html, body").animate({ scrollTop: $("#index-main").offset().top + $("#index-main").height() + 1500 }, 300);
    //     }
    // } else {
    //     location.href = './#goto=choice';
    // }
    // 舊版邏輯 end
});

$("#header-btn-fb").click(function (e) {
    // e.preventDefault();
    togglePopup({ active: "open", element: "#popup-after-share", showAfterShareBtnBack: false, isShowBtnClose: true });
    getShareLink("facebook");
    getShareLink("line");
    eventTracker({category: "分享活動", label: "facebook_button"});
});

$("#header-btn-line").click(function () {
    togglePopup({ active: "open", element: "#popup-after-share", showAfterShareBtnBack: false, isShowBtnClose: true });
    getShareLink("facebook");
    getShareLink("line");
    eventTracker({category: "分享活動", label: "line_button"});
});

// popup

// fb 登入
$("#popup-login-btn-fb, #popup-guest-mission-complete .popup__main__box__main__button--facebook, #popup-guest-marathon-complete .popup__main__box__main__button--facebook").click(fBLogin);

// line 登入
$("#popup-login-btn-line, #popup-guest-mission-complete .popup__main__box__main__button--line, #popup-guest-marathon-complete .popup__main__box__main__button--line").click(lineLogin);

// 確認送出表單
$("#popup-form-btn-submit").click(checkForm);

// 隱私權政策
$("#popup-form-privacy").click(function () {
    togglePopup({
        active: "open",
        element: "#popup-privacy",
        isShowBtnClose: true,
        btnCloseFn: () => {
            togglePopup({ active: "open", element: "#popup-form" });
        }
    });
});

// 分享活動至 fb
$("#popup-share-btn-fb").click(function () {
    FB.ui({
        method: 'share',
        display: 'popup',
        href: USER_DATA.FB_SHARE_LINK,
        hashtag: "#富邦地球隊全員RunForGreen"
    }, function (response) {
    });
    togglePopup({ active: "open", element: "#popup-after-share", isShowBtnClose: IS_NEED_CLOSE });
    IS_NEED_CLOSE = false;
});

// 分享活動至 line
$("#popup-share-btn-line").click(function () {
    window.open(USER_DATA.LINE_SHARE_LINK);
    togglePopup({ active: "open", element: "#popup-after-share", isShowBtnClose: IS_NEED_CLOSE })
    IS_NEED_CLOSE = false;
});

// 回到個人頁面
$("#popup-after-share-btn-back").click(function () {
    togglePopup({ active: "close" })
    window.location.search = "page=member";
});

// 前往個人頁面
$("#popup-finish-form-btn-go-to-member").click(function () {
    window.location.search = "page=mission";
});

// 前往個人頁面
$("#popup-re-choice-btn-go-to-member").click(function () {
    window.location.search = "page=mission";
});

// 換隊 radius
$(".popup__main__box__main__choice__item__btn__check-box").click(function () {
    $(".popup__main__box__main__choice__item__btn__check-box").prop('checked', false);
    $(this).prop('checked', true);
});

// 確認換隊
$("#popup-choice-team-btn-confirm").click(sendTeam);

// 取消換隊
$("#popup-choice-team-btn-cancel").click(function () {
    togglePopup({ active: "close" })
});

$('#popup-member-mission-complete .popup__main__box__main__button--mission').click(function() {
    if (IS_NEW_MEMBER) {
        eventTracker({category: "註冊成功前往任務列表"})
    } else {
        eventTracker({category: getMissionPrefixString() + "繼續玩賺更多"})
    }
})

$('#popup-member-mission-complete .popup__main__box__main__button--bonus-mission').click(function() {
    if (IS_NEW_MEMBER) {
        eventTracker({category: "註冊成功前往加碼任務"})
    } else {
        eventTracker({category: getMissionPrefixString() + "Greenpoint加碼任務"})
    }
})

// privacy
$("#privacy-btn").click(function () {
    togglePopup({ active: "open", element: "#popup-privacy", isShowBtnClose: true });
});

// index
$("#index-main-info").click(function () {
    togglePopup({ active: "open", element: "#popup-normal", normalText: "「數位碳足跡」是網路科技在儲存傳輸、處理或分析數據⋯等運作時消耗能源產生的碳排放。<br>本站以字符編碼 (ASCII Code) 組成圖像<br>減少使用圖片、降低網站的運算處理<br>進而達到較低碳的目標。", isShowBtnClose: true, normalTextIsOneLine: false });
});

$("#index-main-btn-guide").click(function () {
    togglePopup({ active: "open", element: "#popup-hint", isShowBtnClose: true });
});

$("#index-btn-active, #index-btn-active2").click(function () {
    if ($(this)[0].id === 'index-btn-active2') {
        eventTracker({category: "立即參加"})
    }
    window.location.search = "page=mission";
    // 舊版邏輯 start
    // if ($.cookie("API_TOKEN"))
    // {
    //     window.location.search = "page=mission";
    // }
    // else if ($.cookie("API_ISACTIVE"))
    // {
    //     togglePopup({ active: "open", element: "#popup-social-login", isShowBtnClose: true });
        
    // }else
    // {
    //     $("html, body").animate({ scrollTop: $("#index-choice").offset().top }, 500);
    // }
    // 舊版邏輯 end
});

$("#index-main-btn-mission").click(function () {
    eventTracker({category: "分享任務並分享抽gogoro"})
    window.location.search = "page=mission";
    // 舊版邏輯 start
    // if ($.cookie("API_TOKEN"))
    // {
    //     window.location.search = "page=mission";
    // }else if ($.cookie("API_ISACTIVE"))
    // {
    //     togglePopup({ active: "open", element: "#popup-social-login", isShowBtnClose: true });
    // }else
    // {
    //     $("html, body").animate({ scrollTop: $("#index-choice").offset().top }, 500);
    // }
    // 舊版邏輯 end
});

var marathonLogosTimer = null, marathonLogosCounter = 0;

if (window.location.search.match("page=marathon")) {
    marathonLogosTimer = setInterval(function() {
        marathonLogosCounter++;
        $('.page__logos').removeClass('page__logos--row-1 page__logos--row-2').addClass('page__logos--row-' + ((marathonLogosCounter % 2) + 1));
    }, 3000);
}

// var indexKvTimer = null,
//     indexKvArray = ['lin', 'kuo', 'chen'];
//     indexKvCounter = 0,

// indexKvTimer = setInterval(function() {
//     indexKvCounter++;
//     $('.index__main__athlete').removeClass('lin kuo chen').addClass(indexKvArray[indexKvCounter % 3]);
// }, 3000);

// KV 運動員 hover
// $('.index__main__athlete__card').on('click', function() {
//     clearInterval(indexKvTimer);
//     indexKvCounter = $(this).index();
//     indexKvTimer = setInterval(function() {
//         indexKvCounter++;
//         $('.index__main__athlete').removeClass('lin kuo chen').addClass(indexKvArray[indexKvCounter % 3]);
//     }, 3000);

//     if (
//         ($(this).hasClass('lin') && $(this).parents('.index__main__athlete').hasClass('lin')) ||
//         ($(this).hasClass('kuo') && $(this).parents('.index__main__athlete').hasClass('kuo')) ||
//         ($(this).hasClass('chen') && $(this).parents('.index__main__athlete').hasClass('chen'))
//     ) {

//         // 舊版邏輯 start
//         eventTracker({category: "挑戰任務"});
//         window.location.search = "page=mission";
        
//         // if (USER_DATA.IS_ACTIVE) {
//         //     if (USER_DATA.TEAM !== 0) { // 已有隊伍
//         //         // console.log('::: 1 :::')
//         //         togglePopup({ active: "open", element: "#popup-re-choice", isShowBtnClose: true });
//         //     } else {
//         //         // console.log('::: 2 :::')
//         //         togglePopup({ active: "open", element: "#popup-finish-form" });
//         //         window.location.hash = "popupFinishFormIsShow=1";
//         //     }
//         // } else {
//         //     if ($(this).hasClass('kuo')) {
//         //         CHOOSED_TEAM = API_TEAM_TYPE.KUO;
//         //         USER_DATA.TEAM = API_TEAM_TYPE.KUO;
//         //     } else if ($(this).hasClass('chen')) {
//         //         CHOOSED_TEAM = API_TEAM_TYPE.CHEN;
//         //         USER_DATA.TEAM = API_TEAM_TYPE.CHEN;
//         //     } else if ($(this).hasClass('lin')) {
//         //         CHOOSED_TEAM = API_TEAM_TYPE.LIN;
//         //         USER_DATA.TEAM = API_TEAM_TYPE.LIN;
//         //     }
//         //     togglePopup({ active: "open", element: "#popup-social-login", isShowBtnClose: true });
//         // }

//         // 舊版邏輯 end

//     } else {

//         var label = 'lin';

//         if ($(this).hasClass('kuo')) label = 'kuo';
//         if ($(this).hasClass('chen')) label = 'chen';

//         $('.index__main__athlete').removeClass('lin kuo chen').addClass(label);

//     }

// })

$("#index-award01-detail").click(function () {
    window.location.search = "page=rule";
});

// $("#index-award02-detail").click(function () {
//     window.location.search = "page=rule";
// });

// 立即參加
$("#index-choice-swiper-btn-active").click(function () {
    // 在測試
    eventTracker({category: "挑戰任務go"})
    window.location.search = "page=mission";
    // 舊版邏輯 start
    // if (USER_DATA.IS_ACTIVE) {
    //     if (USER_DATA.TEAM !== 0) { // 已有隊伍
    //         console.log('::: 1 :::')
    //         // if (window.location.hash.match("popupFinishFormIsShow=1")) {
    //         togglePopup({ active: "open", element: "#popup-re-choice", isShowBtnClose: true });
    //         // console.log('::: 3 :::')
    //         // }
    //     } else {
    //         console.log('::: 2 :::')
    //         togglePopup({ active: "open", element: "#popup-finish-form" });
    //         window.location.hash = "popupFinishFormIsShow=1";
    //     }
    //     // if (window.location.hash.match("popupFinishFormIsShow=1")) {
    //     //     togglePopup({ active: "open", element: "#popup-re-choice", isShowBtnClose: true });
    //     // } else {
    //     //     togglePopup({ active: "open", element: "#popup-finish-form" });
    //     //     window.location.hash = "popupFinishFormIsShow=1";
    //     // }
    // } else {
    //     // if ($(".index__choice__swiper__wrap__slide.swiper-slide-active").hasClass("slide--kuo")) {
    //     //     USER_DATA.TEAM = API_TEAM_TYPE.KUO;
    //     // } else if ($(".index__choice__swiper__wrap__slide.swiper-slide-active").hasClass("slide--chen")) {
    //     //     USER_DATA.TEAM = API_TEAM_TYPE.CHEN;
    //     // } else if ($(".index__choice__swiper__wrap__slide.swiper-slide-active").hasClass("slide--lin")) {
    //     //     USER_DATA.TEAM = API_TEAM_TYPE.LIN;
    //     // }
    //     if ($(this).hasClass('kuo')) {
    //         CHOOSED_TEAM = API_TEAM_TYPE.KUO;
    //         USER_DATA.TEAM = API_TEAM_TYPE.KUO;
    //     } else if ($(this).hasClass('chen')) {
    //         CHOOSED_TEAM = API_TEAM_TYPE.CHEN;
    //         USER_DATA.TEAM = API_TEAM_TYPE.CHEN;
    //     } else if ($(this).hasClass('lin')) {
    //         CHOOSED_TEAM = API_TEAM_TYPE.LIN;
    //         USER_DATA.TEAM = API_TEAM_TYPE.LIN;
    //     }
    //     togglePopup({ active: "open", element: "#popup-social-login", isShowBtnClose: true });
    // }
    // 舊版邏輯 end
});

$('#marathon .page__form__button').on('click', function() {
    var marathonCode = $('#marathon .page__form__input').val();
    if (!marathonCode) {
        alert('請輸入完賽序號');
        $('#marathon .page__form__input').focus();
        return;
    } else if (marathonCode.length < 10) {
        togglePopup({ active: "open", element: "#popup-marathon-error", normalText: 'wrong', isShowBtnClose: true });
        $('#marathon .page__form__input').focus();
        return;
    }
    $(this).addClass('fetching');
    sendEventcode(marathonCode);
    eventTracker({category: "送出抽好禮"})
})

mixpanel.init('157ed5ac20b1ea79f497434d8a3ec78a', {debug: true});

function eventTracker({tracker = "clarity", category, action = "click", label = "button"}) {
    if (clarity && tracker === "clarity" && category) {
        clarity("set", category, label)
        console.log(`clarity("set", "${category}", "${label}")`);
    }
    if (mixpanel && category) {
        mixpanel.track(category, {
            'label': label,
        })
    }
}

function sendEventcode(marathonCode) {
    var headers = $.cookie("API_TOKEN") ? { 'Authorization': 'Bearer ' + USER_DATA.API_TOKEN } : null;
    $.ajax({
        type: 'POST',
        cache: 'false',
        url: API_DOMAIN + 'Eventcode',
        data: { SERIALCODE: marathonCode },
        headers: headers,
        success: function(resp) {
            console.log(resp);
            $('#marathon .page__form__input').val('')
            $('#marathon .page__form__button').removeClass('fetching');
            if (resp && resp.rs == API_RESPONSE.OK) {
                // 成功
                togglePopup({ active: "open", element: "#popup-member-mission-complete" });
                if ($.cookie("GUEST_SERIALCODE")) $.cookie("GUEST_SERIALCODE", "");
                if (!USER_DATA.FB_SHARE_LINK) getShareLink("facebook");
                if (!USER_DATA.LINE_SHARE_LINK) getShareLink("line");
                if (!globalShareLink) getGlobalShareLink();
            }
        },
        error: function(resp) {
            $('#marathon .page__form__button').removeClass('fetching');
            var json = JSON.parse(resp.responseText);
            var msg = json.msg;

            // console.log(json);

            if (msg === '序號錯誤') {
                // 叫出序號錯誤 popup
                // alert('序號錯誤');
                togglePopup({ active: "open", element: "#popup-marathon-error", normalText: 'wrong', isShowBtnClose: true });
            } else if (msg === '任務己完成') {
                // 叫出已領過 popup
                // alert('任務己完成');
                togglePopup({ active: "open", element: "#popup-marathon-error", normalText: 'claimed', isShowBtnClose: true });
            } else if (msg === '未登入') {
                // alert('未登入');
                $.cookie("GUEST_EVENT_ID", "")
                $.cookie("GUEST_SERIALCODE", marathonCode);
                // togglePopup({ active: "open", element: "#popup-guest-marathon-complete" });
                togglePopup({ active: "open", element: "#popup-end-mission-complete", isMarathon: true});
            } else {
                alert(`${msg}`);
            }
        }
    });
}

function fBLogin() {
    
    // fb 登入
    $.cookie("fb",1);

    // FB.init({
    //     appId: FB_APP_ID,
    //     cookie: true,                     // Enable cookies to allow the server to access the session.
    //     xfbml: true,                     // Parse social plugins on this webpage.
    //     version: 'v16.0'           // Use this Graph API version for this call.
    // });


    FB.login(function (response) {
        if (response.status === 'connected') {
            USER_DATA.LOGIN_TYPE = API_LOGIN_TYPE.FACEBOOK;
            USER_DATA.ID = response.authResponse.userID;
            var accessToken = response.authResponse.accessToken;
            FB.api('/me', { fields: 'name, email, picture', access_token: accessToken }, function (response2) {
                //console.log(response2)
                USER_DATA.NAME = response2.name;
                USER_DATA.EMAIL = response2.email;
                // USER_DATA.IMAGE = response2.picture.data.url;
                $.ajax({
                    type: 'POST',
                    cache: 'false',
                    url: 'https://graph.facebook.com/v15.0/me?access_token=' + accessToken + '&fields=name,%20email,%20picture.height(320).width(320)&method=get&pretty=0&sdk=joey&suppress_http_code=1',
                    success: function (response3) {
                        //console.log(response3);
                        USER_DATA.IMAGE = response3.picture.data.url;
                        sendSignup();
                    },
                    error: function (resp) {
                        //console.log(resp);
                        // alert("系統錯誤，請稍後再試");
                        // window.location.reload();
                    }
                });
            });
        } else {
            alert("請先登入！");
        }
    }, { scope: 'public_profile,email' });
}

// 送使用者登入資料給後端
function sendSignup() {
    var postData = {
        COM_TYP: USER_DATA.LOGIN_TYPE,
        COM_ID: USER_DATA.ID,
        COM_IMG: USER_DATA.IMAGE,
        COM_NAM: USER_DATA.NAME
    };
    console.log(postData)
    $.ajax({
        type: 'POST',
        cache: 'false',
        url: API_DOMAIN + 'Signup',
        data: postData,
        dataType: "json",
        success: function (resp) {
            if (resp && resp.rs == API_RESPONSE.OK) {
                USER_DATA.API_TOKEN = resp.msg;
                USER_DATA.IS_ACTIVE = resp.item.ISACTIVE == 1;
                $.cookie("API_TOKEN", USER_DATA.API_TOKEN);
                getUserData();
                setUserData();
                $.cookie("fb","");
                if (USER_DATA.IS_ACTIVE) {
                    if ($.cookie("GUEST_EVENT_ID")) {
                        // 既有會員登入後要送出完成任務
                        sendEventjoinWhenLogin();
                    } else if ($.cookie("GUEST_SERIALCODE")) {
                        // 既有會員登入後要送出之前填的序號
                        sendEventcodeWhenLogin();
                    } else {
                        togglePopup({ active: "open", element: "#popup-member-mission-complete" });
                        // togglePopup({ active: "open", element: "#popup-finish-form" });
                    }
                    if (!USER_DATA.FB_SHARE_LINK) getShareLink("facebook");
                    if (!USER_DATA.LINE_SHARE_LINK) getShareLink("line");
                    window.location.hash = "popupFinishFormIsShow=1";
                } else {
                    // if (CHOOSED_TEAM == 0 && USER_DATA.TEAM < 1)
                    // {
                    //     togglePopup({ active: "open", element: "#popup-normal", titleText: "未完成選隊", normalText: "此帳號尚未完成選擇隊伍<br>請再次確認<br>或切換首次造訪時的<br>登入帳號", isShowBtnClose: true });
                    //     $.cookie("API_TOKEN","");
                    //     $.cookie("API_ISACTIVE","");
                    // }else
                    // {
                        togglePopup({ active: "open", element: "#popup-form" });
                    // }
                }
            }
        },
        error: function (resp) {
            console.log(resp);
            // alert("系統錯誤，請稍後再試");
            // window.location.reload();
        }
    });
}

// 檢查表單
function checkForm() {
    var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var normalText = "";
    var titleText = "";
    if (!$("#popup-form-name").val() || !$("#popup-form-email").val() || !$("#popup-form-mobile").val()) {
        titleText = "資料不全";
        normalText = "請完整填寫聯絡資訊<br>以利後續得獎通知";
    } else if ($("#popup-form-name").val().length < 2 || $("#popup-form-name").val().length > 10) {
        titleText = "資料有誤";
        normalText = "請輸入真實中文姓名";
    } else if (!emailRegex.test($("#popup-form-email").val())) {
        titleText = "資料有誤";
        normalText = "EMAIL 格式錯誤<br>請再次確認";
    } else if ($("#popup-form-mobile").val().length != 10 || $("#popup-form-mobile").val().substring(0, 2) != "09" || !Number.isInteger(Number($("#popup-form-mobile").val()))) {
        titleText = "資料有誤";
        normalText = "手機格式錯誤<br>請再次確認";
    } else if ($("#popup-form-check-box:checked").length != 1) {
        titleText = "請勾選同意";
        normalText = "請勾選同意<br>個資保護之相關規定";
    }
    if (normalText) {
        togglePopup({
            active: "open",
            element: "#popup-normal",
            titleText: titleText,
            normalText: normalText,
            isShowBtnClose: true,
            btnCloseFn: () => {
                togglePopup({ active: "open", element: "#popup-form" });
            }
        })
    } else {
        USER_DATA.NAME = $("#popup-form-name").val();
        USER_DATA.EMAIL = $("#popup-form-email").val();
        USER_DATA.TEL = $("#popup-form-mobile").val();
        sendBind();
        gtag('event', 'conversion', {'send_to': 'AW-10792739655/Ryq5CI_EqpUYEMfGsJoo'});
        eventTracker({category: "確認送出"})
    }
}

// 送使用者表單資料給後端
function sendBind() {
    if (CHOOSED_TEAM == 0) CHOOSED_TEAM = USER_DATA.TEAM;
    var postData = {
        mob: USER_DATA.TEL,
        eml: USER_DATA.EMAIL,
        nam: USER_DATA.NAME,
        choiceteam: CHOOSED_TEAM
    };

    // 如果有暫存的任務 ID
    if ($.cookie("GUEST_EVENT_ID")) {
        CHOOSED_TEAM = API_TEAM_TYPE.LIN;
        postData['choiceteam'] = CHOOSED_TEAM;
        postData['EID'] = $.cookie("GUEST_EVENT_ID");
    }

    // 如果有暫存的賽事序號
    if ($.cookie("GUEST_SERIALCODE")) {
        CHOOSED_TEAM = API_TEAM_TYPE.LIN;
        postData['choiceteam'] = CHOOSED_TEAM;
        postData['SERIALCODE'] = $.cookie("GUEST_SERIALCODE");
    }

    var api = $.cookie("GUEST_EVENT_ID") ? 'Bind7' : $.cookie("GUEST_SERIALCODE") ? 'Bind8' : 'Bind';

    $.ajax({
        type: 'POST',
        cache: 'false',
        url: API_DOMAIN + api,
        data: postData,
        headers: {
            'Authorization': 'Bearer ' + USER_DATA.API_TOKEN
        },
        success: function (resp) {
            if (resp) {
                switch (resp.rs) {
                    case API_RESPONSE.OK:
                        IS_NEW_MEMBER = true;
                        USER_DATA.IS_ACTIVE = resp.item.ISACTIVE == 1;
                        USER_DATA.TEAM = resp.item.EVENT1;
                        USER_DATA.MISSION = resp.item.TASK;
                        USER_DATA.POINTS = resp.item.POINTS;
                        setUserData();
                        $('#popup-member-mission-complete .popup__main__box__main__button--mission').attr('href', './?page=mission&join=success');
                        // togglePopup({ active: "open", element: "#popup-join-success" }); // 舊版邏輯
                        togglePopup({ active: "open", element: "#popup-member-mission-complete" });
                        $.cookie("GUEST_EVENT_ID", "")
                        $.cookie("GUEST_SERIALCODE", "")
                        if (!USER_DATA.FB_SHARE_LINK) getShareLink("facebook");
                        if (!USER_DATA.LINE_SHARE_LINK) getShareLink("line");
                        if (!globalShareLink) getGlobalShareLink();
                        // window.location.search = "page=member";
                        break;
                    case API_RESPONSE.UNAUTH:
                        alert("系統錯誤，請稍後再試");
                        window.location.reload();
                        break;
                    case API_RESPONSE.BAD:
                        togglePopup({ active: "open", element: "#popup-normal", titleText: "資料有誤", normalText: resp.item, isShowBtnClose: true });
                        break;
                    case API_RESPONSE.ACCEPTED:
                        togglePopup({
                            active: "open",
                            element: "#popup-normal",
                            titleText: "資料重複",
                            normalText: "手機號碼已被使用<br>請再次確認<br>或改以首次造訪時的<br>帳號登入",
                            isShowBtnClose: true,
                            btnCloseFn: () => {
                                togglePopup({ active: "open", element: "#popup-form" });
                            }
                        });
                        break;
                }
            }
        },
        error: function (resp) {
            console.log(resp);
            var obj = jQuery.parseJSON(resp.responseText);
            if (obj.rs) {
                switch (obj.rs) {
                    case API_RESPONSE.UNAUTH:
                        alert("系統錯誤，請稍後再試");
                        window.location.reload();
                        break;
                    case API_RESPONSE.BAD:
                        togglePopup({
                            active: "open",
                            element: "#popup-normal",
                            titleText: "資料有誤",
                            normalText: obj.item,
                            isShowBtnClose: true,
                            btnCloseFn: () => {
                                togglePopup({ active: "open", element: "#popup-form" });
                            }
                        })
                        break;
                    case API_RESPONSE.ACCEPTED:
                        togglePopup({
                            active: "open",
                            element: "#popup-normal",
                            titleText: "資料重複",
                            normalText: "手機號碼已被使用<br>請再次確認<br>或改以首次造訪時的<br>帳號登入",
                            isShowBtnClose: true,
                            btnCloseFn: () => {
                                togglePopup({ active: "open", element: "#popup-form" });
                            }
                        });
                        break;
                }
            }
            // alert("系統錯誤，請稍後再試");
            // window.location.reload();
        }
    });
}

// line 登入
function lineLogin() {
    var redirectUri = DOMAIN;
    if (window.location.href.indexOf('greenpoints') < 0) {
        redirectUri = 'http://localhost:3030/';
    }
    window.location.href = "https://access.line.me/oauth2/v2.1/authorize?response_type=code&client_id=" + LINE_CHANNEL_ID + "&redirect_uri=" + encodeURIComponent(redirectUri) + "&state=line_login_team" + USER_DATA.TEAM + "&scope=" + encodeURIComponent("profile openid");
}

// 既有會員登入後補送完成任務
function sendEventjoinWhenLogin() {
    $.ajax({
        type: 'POST',
        cache: 'false',
        url: API_DOMAIN + 'Eventjoin',
        data: { EID: $.cookie("GUEST_EVENT_ID") },
        headers: {
            'Authorization': 'Bearer ' + USER_DATA.API_TOKEN
        },
        success: function(resp) {
            console.log(resp);
            if (resp && resp.rs == API_RESPONSE.OK) {
                togglePopup({ active: "open", element: "#popup-member-mission-complete", isBonus: false});
                $.cookie("GUEST_EVENT_ID", "");
            }
        },
        error: function(resp) {
            console.log(resp);
        }
    });
}

// 既有會員登入後補送之前填的序號
function sendEventcodeWhenLogin() { sendEventcode($.cookie("GUEST_SERIALCODE")); }

// member

// 分享活動抽 Gogoro
$("#member-btn-share").click(function () {
    eventTracker({category: "立即分享抽gogoro"})
    togglePopup({ active: "open", element: "#popup-share", isShowBtnClose: true });
});

$("#popup-member-mission-complete .popup__main__box__main__button--share").click(function() {
    // eventTracker({category: "任務完成-立即分享抽gogoro"})
    eventTracker({category: getMissionPrefixString() + "完成任務_立即分享抽Gogoro"})
    togglePopup({ active: "open", element: "#popup-share", isShowBtnClose: true });
})

// 前往完成每月任務
$("#member-btn-mission").click(function () {
    eventTracker({category: "個人頁前往永續任務"})
    window.location.search = "page=mission";
});

// 前往子公司任務
$("#member-btn-bonus-mission").click(function () {
    eventTracker({category: "個人頁前往加碼任務"})
    window.location.search = "page=bonus-mission";
});

// 重新選隊
$("#member-btn-re-choice").click(function () {
    togglePopup({ active: "open", element: "#popup-choice-team" })
});

// 立即製作
$("#mission-btn-active").click(function () {
    if ($(this).hasClass('done')) {
        togglePopup({ active: "open", element: "#popup-repeat", isShowBtnClose: true })
    } else {
        window.location.search = "page=april-mission";
    }
});

// 五月
$("#mission2-btn-active").click(function () {
    if ($(this).hasClass('done')) {
        togglePopup({ active: "open", element: "#popup-repeat", isShowBtnClose: true })
    } else {
        window.location.search = "page=may-mission";
    }
});
// common
function changePage(page) {
    $(".page:visible").hide();
    $("#" + page).show();
    toggleMenu("close");
}

function toggleMenu(active) {
    if (active == "open") {
        $("#menu").addClass("menu--open");
        $('.header__menu-icon__img').attr('src', 'images/menu-icon2.png')
    } else if (active == "close") {
        $("#menu").removeClass("menu--open");
        $('.header__menu-icon__img').attr('src', 'images/menu-icon.png')
    } else {
        if ($("#menu").hasClass("menu--open")) {
            $('.header__menu-icon__img').attr('src', 'images/menu-icon.png')
        } else {
            $('.header__menu-icon__img').attr('src', 'images/menu-icon2.png')
        }
        $("#menu").toggleClass("menu--open");
    }
}

var USER_DATA_DEFAULT = {
    ID: "",
    NAME: "",
    TEL: "",
    EMAIL: "",
    IMAGE: "",
    LOGIN_TYPE: -1, // 0=google ,1=line
    TEAM: -1, // 1=郭 2=林 3=陳
    MISSION: -1,
    POINTS: -1,
    IS_SHARE: false,
    IS_ACTIVE: false,  // 是否有填個資
    API_TOKEN: "",
    FB_SHARE_LINK: "",
    LINE_SHARE_LINK: ""
}

var RESIZE_TIMER = null;

var USER_DATA = $.extend(true, {}, USER_DATA_DEFAULT);

// 塞使用者資料
function setUserData() {
    $(".user-name").html(USER_DATA.NAME);
    var teamKey = "", teamName = "", otherTeams = [], tag = "";

    switch (USER_DATA.TEAM) {
        case 1:
            teamKey = "kuo";
            teamName = KUO.NAME;
            otherTeams = [CHEN, LIN];
            otherTeams[0].key = "chen";
            otherTeams[1].key = "lin";
            tag = KUO.TAG;
            break;
        case 2:
            teamKey = "lin";
            teamName = LIN.NAME;
            otherTeams = [KUO, CHEN];
            otherTeams[0].key = "kuo";
            otherTeams[1].key = "chen";
            tag = LIN.TAG;
            break;
        case 3:
            teamKey = "chen";
            teamName = CHEN.NAME;
            otherTeams = [KUO, LIN];
            otherTeams[0].key = "kuo";
            otherTeams[1].key = "lin";
            tag = CHEN.TAG;
            break;

    }
    if (teamKey) {
        $(".user-team").html(teamName);
        $("#popup-join-success").removeClass('lin kuo chen').addClass(teamKey);
        $("#popup-form-tag").attr("src", "images/popup-form-tag-" + teamKey + ".png");
        $("#popup-choice-team").removeClass("popup--choice-team--team-lin").removeClass("popup--choice-team--team-chen").removeClass("popup--choice-team--team-kuo");
        $("#popup-choice-team").addClass("popup--choice-team--team-" + teamKey);
        // $("#member-header").css({ "background-image": "url(" + IMAGE_DOMAIN + "member-header-" + teamKey + ".png)" });
        $("#member-header").removeClass('lin kuo chen').addClass(teamKey);
        $("#member").removeClass("member--lin").removeClass("member--chen").removeClass("member--kuo");
        $("#member").addClass("member--" + teamKey);
        $("#mission-april").removeClass("item--lin").removeClass("item--chen").removeClass("item--kuo");
        $("#mission-april").addClass("item--" + teamKey);
    }
    $("#member-mission").html(USER_DATA.MISSION);
    $("#member-green-point").html(USER_DATA.POINTS);
    var image = USER_DATA.IMAGE.match(FB_NO_IMAGE_DOMAIN) ? IMAGE_DOMAIN + "popup-form-avatar-default.png" : USER_DATA.IMAGE;
    $("#popup-form-avatar, #popup-april-mission-complete-avatar").css({ "background-image": "url(" + image + ")" });
    $('#popup-april-mission-complete-avatar').html('<img src="' + image + '">')
    $('#popup-may-mission-complete-avatar').html('<img src="' + image + '">')
    $("#popup-finish-form-avatar").css({ "background-image": "url(" + image + ")" });
    $("#popup-after-share-avatar").css({ "background-image": "url(" + image + ")" });
    $("#popup-re-choice-avatar").css({ "background-image": "url(" + image + ")" });
    $("#member-avatar").css({ "background-image": "url(" + image + ")" });
    var image = USER_DATA.IMAGE.match(FB_NO_IMAGE_DOMAIN) ? IMAGE_DOMAIN + "header-avatar-default.png" : USER_DATA.IMAGE;
    $("#member-btn-hint").toggle(!USER_DATA.IS_SHARE);
    $(".user-tag").html(tag);
    // if (USER_DATA.API_TOKEN && USER_DATA.NAME && USER_DATA.ID && USER_DATA.IS_ACTIVE) {
    if (USER_DATA.API_TOKEN && USER_DATA.NAME && USER_DATA.ID) {
        $("#header-login").removeClass("header--show");
        $("#header-share").addClass("header--show");
        // $("#menu-logout, #menu-member, #menu-mission").show(); // 舊版邏輯
        $("#menu-logout, #menu-member").show();
    } else {
        $("#header-login").addClass("header--show");
        $("#header-share").removeClass("header--show");
        // $("#menu-logout, #menu-member, #menu-mission").hide(); // 舊版邏輯
        $("#menu-logout, #menu-member").hide();
    }

    resize();
}

function togglePopup({ active, element = "", titleText = "", normalText = "", completedText = "", wrongText = "", isShowBtnClose = false, isNewShowBtnClose = false , btnCloseFn = null, normalTextIsOneLine = true, showAfterShareBtnBack = true, isBonus = true, isMarathon = true}) {
    if (active == "open") {
        togglePopup({ active: "close" });
        $("#popup-btn-close").removeClass('hint').removeClass('marathon');
        $("#popup").addClass("popup--show").removeClass('no-max-width');
        $(element).addClass("popup--show");
        if (isShowBtnClose) {
            $("#popup-btn-close").addClass("popup--show");
            $("#popup-btn-close").click(function () {
                if (btnCloseFn == null) {
                    togglePopup({ active: "close" })
                } else {
                    btnCloseFn();
                }
            });
        }
        if (isNewShowBtnClose) {
            $("#popup-btn-close-new").addClass("popup--show");
            $("#popup-btn-close-new").click(function () {
                if (btnCloseFn == null) {
                    togglePopup({ active: "close" })
                } else {
                    btnCloseFn();
                }
            });
        }
        if(!isBonus){
            if (element == '#popup-member-mission-complete') {
                $(".popup__main__box__main__button--mission").attr("href", "./?page=mission");
            }
            if (element == '#popup-end-mission-complete') {
                $(".btn-replay").click(function () {
                    location.reload();
                });
            }
        }
        if(isMarathon){
            if (element == '#popup-end-mission-complete') {
                $(".btn-replay").click(function () {
                    window.location.search = "page=mission";
                });
            }
        }
        if (element == "#popup-hint") {
            $("#popup-btn-close").addClass('hint');
        }
        if (element == "#popup-guest-mission-complete" || element == '#popup-member-mission-complete') {
            $.cookie("BONUS_CLICKED", "");
            $("#popup").addClass('no-max-width');

            if (element == "#popup-guest-mission-complete") {
                // 如果是訪客要先記在 cookie
                $.cookie("URL_PARAMS", location.search);
            }
        }
        if (element == '#popup-guest-marathon-complete') {
            $.cookie("BONUS_CLICKED", "");
            $.cookie("URL_PARAMS", location.search);
        }
        if (element == "#popup-normal") {
            $("#popup-title-text p").html(titleText);
            $("#popup-normal-text p").html(normalText);
            normalTextIsOneLine ? $("#popup-normal-text").addClass("text--one-line") : $("#popup-normal-text").removeClass("text--one-line")
        }
        if (element == "#popup-after-share") {
            if (window.location.search === '?page=april-mission') {
                $("#popup-after-share-btn-back").hide()
            } else {
            showAfterShareBtnBack ? $("#popup-after-share-btn-back").show() : $("#popup-after-share-btn-back").hide();
        }
        }
        if (element == "#popup-june-mission-complete") {
            $(".completed-text").html(completedText)
        }
        if (element == "#popup-june-mission-wrong") {
            $(".wrong-text").html(wrongText)
        }
        if (element == "#popup-marathon-error") {
            $("#popup-btn-close").addClass('marathon');
            $('#popup-marathon-error .popup__main__box__main__dialog p').removeClass('show');
            if (normalText == 'claimed') {
                $('#popup-marathon-error .popup__main__box__main__dialog .claimed').addClass('show');
            } else if (normalText == 'wrong') {
                $('#popup-marathon-error .popup__main__box__main__dialog .wrong').addClass('show');
            }
        }
        
        $(".btn-try").click(function () {
            togglePopup({ active: "close" })
        });
    } else {
        // $.cookie("URL_PARAMS", "");
        $("#popup").removeClass("popup--show");
        $(".popup__main__box.popup--show").removeClass("popup--show");
        $(".popup-new-box.popup--show").removeClass("popup--show");
        $("#popup-btn-close.popup--show").removeClass("popup--show");
        $("#popup-btn-close-new.popup--show").removeClass("popup--show");
    }
}

function togglePage(page) {
    togglePopup({ active: "close" });
    $(".page:visible").hide();
    $("#" + page).show();
}

// 抓取分享網址
function getShareLink(social) {
    $.ajax({
        type: 'POST',
        cache: 'false',
        url: API_DOMAIN + 'Shareimg',
        dataType: 'json',
        contentType: 'application/json',
        headers: {
            'Authorization': 'Bearer ' + USER_DATA.API_TOKEN
        },
        success: function (resp) {
            if (resp && resp.rs == API_RESPONSE.OK) {
                if (social == "facebook") {
                    USER_DATA.FB_SHARE_LINK = resp.msg;
                } else {
                    var sharetext = "我已經加入富邦地球隊！%0D%0A邀請你跟我一起來響應節能減碳，%0D%0A完成任務還有機會獲得 Gogoro！%0D%0A%23富邦地球隊全員RunForGreen™";
                    if (ismobile() == true)
                    {
                        USER_DATA.LINE_SHARE_LINK = "https://line.me/R/share?text=" + sharetext + "%0D%0A" + encodeURIComponent(resp.msg);
                    }else
                    {
                        USER_DATA.LINE_SHARE_LINK = "https://social-plugins.line.me/lineit/share?url=" + encodeURIComponent(resp.msg) + "&text=" + sharetext;
                    }
                }
                setUserData();
            }
        },
        error: function (resp) {
            console.log(resp);
            // alert("系統錯誤，請稍後再試");
            // window.location.reload();
        }
    });
}

// 抓取全站分享網址
var globalShareLink = "";
function getGlobalShareLink() {
    $.ajax({
        type: 'POST',
        cache: 'false',
        url: API_DOMAIN + 'Shareimg2',
        dataType: 'json',
        contentType: 'application/json',
        headers: {
            'Authorization': 'Bearer ' + USER_DATA.API_TOKEN
        },
        success: function (resp) {
            if (resp && resp.rs == API_RESPONSE.OK) {
                globalShareLink = resp.msg;
                var sharetext = "我已經加入富邦地球隊！%0D%0A邀請你跟我一起來響應節能減碳，%0D%0A完成任務還有機會獲得 Gogoro！%0D%0A%23富邦地球隊全員RunForGreen™";
                if (ismobile() == true)
                {
                    $("#header-btn-line").attr("href", "https://line.me/R/share?text=" + sharetext + "%0D%0A" + encodeURIComponent(globalShareLink));
                }else
                {
                    $("#header-btn-line").attr("href", "https://social-plugins.line.me/lineit/share?url=" + encodeURIComponent(globalShareLink) + "&text=" + sharetext);
                }
                $("#header-btn-fb").attr("href", `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(globalShareLink)}&hashtag=%23富邦地球隊全員RunForGreen`);
            }
        },
        error: function (resp) {
            console.log(resp);
            // alert("系統錯誤，請稍後再試");
            // window.location.reload();
        }
    });
}

function ismobile() {

    if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) {
        return true;
    }
    return false;
  }

// 抓取任務列表
function getEventList() {
    $.ajax({
        type: 'POST',
        cache: 'false',
        url: API_DOMAIN + 'Eventlist',
        dataType: 'json',
        headers: {
            'Authorization': 'Bearer ' + USER_DATA.API_TOKEN
        },
        success: function (resp) {
            // $('#mission .mission-lists').show();
            if (resp && resp.rs == API_RESPONSE.OK) {
                for (i = 0; i < resp.item.length; i++) {
                    if (resp.item[i].ENAM === '4月活動' && resp.item[i].CNT > 0) {
                        $("#mission-april #mission-btn-active").addClass('done');
                        if (window.location.search === '?page=april-mission') {
                            window.location.search = 'page=mission'
                        }
                    }
                    if (resp.item[i].ENAM === '5月活動' && resp.item[i].CNT > 0) {
                        $("#mission-may #mission2-btn-active").addClass('done');
                        if (window.location.search === '?page=may-mission') {
                            window.location.search = 'page=mission'
                        }
                    }
                    if (resp.item[i].EID == APRIL_EID && resp.item[i].ISACTIVE) {
                      $("#mission-april").addClass("item--show");
                    }

                    if (resp.item[i].EID == MAY_EID) {
                      $("#mission-may").addClass("item--show");
                    }
                    
                    // 6月
                    // if (resp.item[i].EID == JUNE_EID) {
                    //   if (resp.item[i].ISACTIVE) {
                    //     $(".mission-june").addClass("mission-show");
                    //   }else{
                    //     $(".comming-june").addClass("mission-show");
                    //   }
                    // }else{
                    //   $(".comming-june").addClass("mission-show");
                    // }
                    // 7月
                    // if (resp.item[i].EID == JULY_EID) {
                    //   if (resp.item[i].ISACTIVE) {
                    //     $(".mission-july").addClass("mission-show");
                    //   }else{
                    //     $(".comming-july").addClass("mission-show");
                    //   }
                    // }else{
                    //   $(".comming-july").addClass("mission-show");
                    // }
                    // 8月
                    // if (resp.item[i].EID == AUGUST_EID) {
                    //   if (resp.item[i].ISACTIVE) {
                    //     $("#mission-august").addClass("mission-show");
                    //   }else{
                    //     $("#comming-august").addClass("mission-show");
                    //   }
                    // }else{
                    //   $("#comming-august").addClass("mission-show");
                    // }
                }
            }
        },
        error: function (resp) {
            console.log(resp);
            // alert("系統錯誤，請稍後再試");
            // window.location.reload();
        }
    });
}

// popup 測試

// togglePopup({ active: "open", element: "#popup-join-success" })

// togglePopup({
//     active: "open",
//     element: "#popup-normal",
//     titleText: "資料不全",
//     normalText: "請完整填寫聯絡資訊<br>以利後續得獎通知",
//     isShowBtnClose: true,
//     btnCloseFn: () => {
//         togglePopup({ active: "open", element: "#popup-form" });
//     }
// })

// togglePopup({ active: "open", element: "#popup-choice-team", isShowBtnClose: true })

// 抓取子公司任務列表
function getEventList2() {
    function bonusEventBinding() {
        $('#bonus-mission .list .item').on('click', function(e) {
            var mission = $(this)[0];
            var button = $(this).find('.item__button');
            var eid = mission.dataset.eid;

            $.cookie("BONUS_CLICKED", 'true');
            $.cookie('BONUS_EVENT_ENDED', '');

            if ($.cookie("API_TOKEN")) {
                // 如果使用者登入中，機制照舊，但 popup 換成 #popup-member-mission-complete
                $.ajax({
                    type: 'POST',
                    cache: 'false',
                    url: API_DOMAIN + 'Eventjoin',
                    data: { EID: eid },
                    headers: {
                        'Authorization': 'Bearer ' + USER_DATA.API_TOKEN
                    },
                    success: function(resp) {
                        console.log(resp);
                        button.removeClass('disabled');
                        if (resp && resp.rs == API_RESPONSE.OK) {
                            // togglePopup({ active: "open", element: "#popup-bonus-mission", isShowBtnClose: true });
                            togglePopup({ active: "open", element: "#popup-member-mission-complete" });
                        }
                    },
                    error: function(resp) {
                        var json = JSON.parse(resp.responseText);
                        var msg = json.msg;
                        alert(msg);
                        if (msg === '活動己結束') {
                            $.cookie('BONUS_EVENT_ENDED', 'true');
                        }
                    }
                });
            } else {

                console.log('之前有登入過或可能是新用戶');

                $.cookie("GUEST_EVENT_ID", eid);
                // togglePopup({ active: "open", element: "#popup-guest-mission-complete" });
                togglePopup({ active: "open", element: "#popup-end-mission-complete", isBonus: true ,isMarathon: false});
            }

            switch(eid) {
                case 'f4e000f9af6241fd88c66e3979210602':
                    eventTracker({category: "富邦人壽電子通知單"})
                    break;
                case '58862a251edc44ad83400fc7ccf689d1':
                    eventTracker({category: "富邦銀行電子帳單"})
                    break;
                case 'ce4eff4adb684f3da74d711ebef79d25':
                    eventTracker({category: "富邦產險綁定"})
                    break;
                case '72b0eb4d36574a19a25a2d96267abe66':
                    eventTracker({category: "富邦證券開戶"})
                    break;
                case 'c54ab0eda13a42fb987e6acebc2f9c4b':
                    eventTracker({category: "富邦人壽電子保單"})
                    break;
                case '9978199cd95d4d19b711c132b287bbb6':
                    eventTracker({category: "富邦銀行率能貸款"})
                    break;
                case '3a73995850764eafb51b38ade330d9aa':
                    eventTracker({category: "富邦加碼任務_富邦產險Noodoe Car"})
                    break;
                case 'c0d67b2a23f5405f925a5c5f42d3bf12':
                    eventTracker({category: "富邦證券電子對帳單"})
                    break;
            }

        })
    }

    $.ajax({
        type: 'POST',
        cache: 'false',
        url: API_DOMAIN + 'Eventlist2',
        dataType: 'json',
        headers: {
            'Authorization': 'Bearer ' + USER_DATA.API_TOKEN
        },
        success: function (resp) {
            if (resp && resp.rs == API_RESPONSE.OK) {
                var missions = resp.item;
                var template = $('#bonus-mission .item__template');
                for (i = 0; i < missions.length; i++) {
                    var mission = missions[i];
                    var item = template.clone();
                    item.attr('href', mission.CMPURL);
                    item.attr('data-eid', mission.EID);
                    item.attr('data-cnt', mission.cnt);
                    item.removeClass('item__template');
                    item.find('.item__title').text(mission.CMPNAM);
                    item.find('.item__description').text(mission.CMPTIT);
                    item.find('.item__content p').html(mission.CMPDESC);
                    if (!mission.ISACTIVE) {
                        item.addClass('item--inactive');
                    }
                    $('.bonus-mission .list').append(item);
                }
                template.remove();
                bonusEventBinding();
            }
        },
        error: function (resp) {
            console.log(resp);
        }
    });
}

var alreadyGotUserData = false;

// 抓取使用者資料
function getUserData() {

    if ($.cookie("API_TOKEN")) {
        USER_DATA.API_TOKEN = $.cookie("API_TOKEN");

        $.ajax({
            type: 'POST',
            cache: 'false',
            url: API_DOMAIN + 'GetProfile',
            dataType: "json",
            headers: {
                'Authorization': 'Bearer ' + USER_DATA.API_TOKEN
            },
            success: function (resp) {
                console.log(resp)
                if (resp && resp.rs == API_RESPONSE.OK) {
                    USER_DATA.ID = resp.item.COM_ID;
                    USER_DATA.LOGIN_TYPE = resp.item.COM_TYP;
                    USER_DATA.IMAGE = resp.item.COM_IMG;
                    USER_DATA.NAME = resp.item.COM_NAM;
                    var team = resp.item.EVENT1;
                    if (resp.item.ISACTIVE == 0) {
                        if (window.location.search.match("code") && window.location.search.match("line_login")) {
                            team = Number(window.location.search.split("line_login_team")[1].split("&")[0])
                        }
                    }
                    USER_DATA.TEAM = team;
                    USER_DATA.MISSION = resp.item.TASK;
                    USER_DATA.POINTS = resp.item.POINTS;
                    USER_DATA.IS_SHARE = resp.item.SHARE > 0;
                    USER_DATA.IS_ACTIVE = resp.item.ISACTIVE == 1;

                    if (resp.item.ISACTIVE == 1)
                    {
                        $.cookie("API_ISACTIVE", 1, {expires: 700 });
                    }
                    setUserData();

                    if (getParameterByName('page') === 'mission' && getParameterByName('join') === 'success' && !alreadyGotUserData) {
                        console.log('joined.');
                        alreadyGotUserData = true;
                        const cvOrder = resp.item.COM_TYP + '_' + resp.item.COM_ID;
                        freecoins_cvq = [{
                            "app": "FREECOINS_32310",
                            "domain": ".medialand.com.tw",
                            "cv": [
                                {
                                    action: "REGISTRATION",
                                    order: cvOrder,
                                    item: "MayCPA",
                                    t_price: "50",
                                    quantity: "1",
                                    memo: "MayCPA"
                                }
                            ]
                        }];

                        if (loadJS && typeof loadJS === 'function') {
                            loadJS('https://point-ads.line-apps.com/lfc5.js');
                        }

                        history.replaceState({}, '', '/?page=mission');

                    }

                }
            },
            error: function (resp) {
                // console.log(resp);
                // alert("系統錯誤，請稍後再試");
                // window.location.reload();
                USER_DATA.API_TOKEN = "";
                $.cookie("API_TOKEN", "")
                setUserData();
            }
        });
    } else {
        USER_DATA.API_TOKEN = "";
        $.cookie("API_TOKEN", "")
        setUserData();
    }
}

// 抓取目前排名
function getRank() {
    $.ajax({
        type: 'POST',
        cache: 'false',
        url: API_DOMAIN + 'Gettask1',
        dataType: 'json',
        success: function (resp) {
            if (resp && resp.rs == API_RESPONSE.OK) {
                var sortResp = resp.item;
                sortResp.sort(function (a, b) {
                    return b.count - a.count;
                });
                // 陳金鋒要在第一個
                var _resp = [], otherResp = [], chenRank = -1;
                for (var i = 0; i < sortResp.length; i++) {
                    sortResp[i].rank = (i + 1);
                    if (sortResp[i].team == API_TEAM_TYPE.CHEN) {
                        _resp.push(sortResp[i]);
                        chenRank = sortResp[i].rank;
                    } else {
                        otherResp.push(sortResp[i]);
                    }
                }
                var rankOrder = [[1, 2, 3], [2, 3, 1], [3, 1, 2]];
                for (var i = 0; i < rankOrder.length; i++) {
                    if (chenRank == rankOrder[i][0]) {
                        for (var j = 1; j < rankOrder[i].length; j++) {
                            for (var x = 0; x < otherResp.length; x++) {
                                if (rankOrder[i][j] == otherResp[x].rank) {
                                    _resp.push(otherResp[x]);
                                }
                            }
                        }
                    }
                }
                var tempResp = [..._resp];
                _resp = [null, null, null]
                for (var i = 0; i < tempResp.length; i++) {
                    if (tempResp[i].team === 2) {
                        _resp[0] = tempResp[i]
                    } else if (tempResp[i].team === 3) {
                        _resp[1] = tempResp[i]
                    } else if (tempResp[i].team === 1) {
                        _resp[2] = tempResp[i]
                    }
                }
                for (var i = 0; i < _resp.length; i++) {

                    //var isIOS = navigator.userAgent.match(/iPhone|iPad|iPod/i);
                    var isIOS = window.innerWidth >= 1024 ? 0 : 1;
                    var name = "", tag = "", slogan = "", iframe = "", className = "slide--";
                    var count = _resp[i].count.toLocaleString();
                    switch (Number(_resp[i].team)) {
                        case API_TEAM_TYPE.KUO:
                            name = KUO.NAME;
                            tag = KUO.TAG;
                            slogan = KUO.SLOGAN;
                            iframe = 'ascii/choice-kuo' + (isIOS ? "-ios" : "");
                            className += "kuo";

                            // 改版邏輯
                            $('.slide--kuo .index__choice__swiper__wrap__slide__text__inner__number span, .index__main__athlete__dialog.kuo .dialog__people-number').text(count);
                            $('.slide--kuo .index__choice__swiper__wrap__slide__text__inner__box__rank__number, .index__main__athlete__dialog.kuo .dialog__rank-number').text(_resp[i].rank);
                            break;
                        case API_TEAM_TYPE.CHEN:
                            name = CHEN.NAME;
                            tag = CHEN.TAG;
                            slogan = CHEN.SLOGAN;
                            iframe = 'ascii/choice-chen' + (isIOS ? "-ios" : "");
                            className += "chen";

                            // 改版邏輯
                            $('.slide--chen .index__choice__swiper__wrap__slide__text__inner__number span, .index__main__athlete__dialog.chen .dialog__people-number').text(count);
                            $('.slide--chen .index__choice__swiper__wrap__slide__text__inner__box__rank__number, .index__main__athlete__dialog.chen .dialog__rank-number').text(_resp[i].rank);
                            break;
                        case API_TEAM_TYPE.LIN:
                            name = LIN.NAME;
                            tag = LIN.TAG;
                            slogan = LIN.SLOGAN;
                            iframe = 'ascii/choice-lin' + (isIOS ? "-ios" : "");
                            className += "lin";

                            // 改版邏輯
                            $('.slide--lin .index__choice__swiper__wrap__slide__text__inner__number span, .index__main__athlete__dialog.lin .dialog__people-number').text(count);
                            $('.slide--lin .index__choice__swiper__wrap__slide__text__inner__box__rank__number, .index__main__athlete__dialog.lin .dialog__rank-number').text(_resp[i].rank);
                            break;
                    }

                    var sloganElement = "";
                    for (var j = 0; j < slogan.length; j++) {
                        var _slogan = slogan[j];
                        if (j == 0) {
                            _slogan = '“' + slogan[j];
                        } else if (j == slogan.length - 1) {
                            _slogan = slogan[j] + '“';
                        }
                        sloganElement += '<div class="index__choice__swiper__wrap__slide__text__inner__box__detail__row__slogan__line">' +
                            _slogan +
                            '</div>';
                    }
                    var element = '<div class="index__choice__swiper__wrap__slide ' + className + ' swiper-slide">' +
                        '<div class="index__choice__swiper__wrap__slide__text">' +
                        '<div class="index__choice__swiper__wrap__slide__text__inner">' +
                        '<div class="index__choice__swiper__wrap__slide__text__inner__number">' +
                        '當前隊伍人數 ' + count +
                        '</div>' +
                        '<div class="index__choice__swiper__wrap__slide__text__inner__box">' +
                        '<div class="index__choice__swiper__wrap__slide__text__inner__box__rank">' +
                        '<div class="index__choice__swiper__wrap__slide__text__inner__box__rank__text">' +
                        '排名' +
                        '</div>' +
                        '<div class="index__choice__swiper__wrap__slide__text__inner__box__rank__number">' +
                        _resp[i].rank +
                        '</div>' +
                        '</div>' +
                        '<div class="index__choice__swiper__wrap__slide__text__inner__box__detail">' +
                        '<div class="index__choice__swiper__wrap__slide__text__inner__box__detail__row">' +
                        '<div class="index__choice__swiper__wrap__slide__text__inner__box__detail__row__team">' +
                        name + '隊' +
                        '</div>' +
                        '<div class="index__choice__swiper__wrap__slide__text__inner__box__detail__row__tag">' +
                        tag +
                        '</div>' +
                        '</div>' +
                        '<div class="index__choice__swiper__wrap__slide__text__inner__box__detail__row">' +
                        '<div class="index__choice__swiper__wrap__slide__text__inner__box__detail__row__slogan">' +
                        sloganElement +
                        '</div>' +
                        '</div>' +
                        '</div>' +
                        '</div>' +
                        '</div>' +
                        '</div>' +
                        '<div class="index__choice__swiper__wrap__slide__img">' +
                        '<div id="frame-' + className + '" class="index__choice__swiper__wrap__slide__img__inner ' + (isIOS ? 'is-ios' : '') + '">' +
                        '<iframe src="' + iframe + '.html" scrolling="no"></iframe>' +
                        '</div>' +
                        '</div>' +
                        '</div>';
                    // $("#index-choice-swiper-wrap").append(element)
                }
                $('#frame-slide--chen').css('display', 'block')
                new Swiper("#index-choice-swiper", {
                    loop: true,
                    autoplay: {
                        delay: 3000,
                        disableOnInteraction: false,
                    },
                    speed: 500,
                    navigation: {
                        prevEl: "#index-choice-swiper-arrow-prev",
                        nextEl: "#index-choice-swiper-arrow-next"
                    },
                    initialSlide: 1,
                    on: {
                        init: setBtn,
                        slideChangeTransitionStart: setBtn,
                        // slideChangeTransitionStart: (swiper) => test(swiper.activeIndex),
                    }
                });

                function setBtn() {
                    var image = "";
                    if ($(".index__choice__swiper__wrap__slide.swiper-slide-active").hasClass("slide--kuo")) {
                        image = "kuo";
                    } else if ($(".index__choice__swiper__wrap__slide.swiper-slide-active").hasClass("slide--lin")) {
                        image = "lin";
                    } else if ($(".index__choice__swiper__wrap__slide.swiper-slide-active").hasClass("slide--chen")) {
                        image = "chen";
                    }
                    if (image) {
                        // $("#index-choice-swiper-btn-active").attr("src", IMAGE_DOMAIN + "choice-" + image + "-btn.png");
                        $("#index-choice-swiper-btn-active")
                            .removeClass('kuo lin chen')
                            .addClass(image);
                    }
                }
                function test(index) {
                    var idNameList = ['#frame-slide--lin', '#frame-slide--chen', '#frame-slide--kuo'];
                    // console.log(index)
                    // if (index === 0) {
                    //     idName = '#frame-slide--chen'
                    // }
                    // else if (index === 1) {
                    //     idName = '#frame-slide--lin'
                    // }
                    // else if (index === 2) {
                    //     idName = '#frame-slide--kuo'
                    // }
                    for (var i = 0; i <= idNameList.length; i++) {
                        // console.log($(idNameList[i]))
                        $(idNameList[i]).css('display', 'none')
                    }
                    $(idNameList[index]).css('display', 'block')
                }

                resize();
            } else {
                // alert("系統錯誤，請稍後再試");
                // window.location.reload();
            }
        },
        error: function (resp) {
            console.log(resp);
            // alert("系統錯誤，請稍後再試");
            // window.location.reload();
        }
    });
}

// 換隊伍
function sendTeam() {
    var choiceteam = -1;
    switch ($(".popup__main__box__main__choice__item__btn__check-box:checked").attr("data-team")) {
        case "kuo":
            choiceteam = API_TEAM_TYPE.KUO;
            break;
        case "chen":
            choiceteam = API_TEAM_TYPE.CHEN;
            break;
        case "lin":
            choiceteam = API_TEAM_TYPE.LIN;
            break;
    }
    var postData = {
        choiceteam: choiceteam
    };

    $.ajax({
        type: 'POST',
        cache: 'false',
        url: API_DOMAIN + 'ChangeTeam',
        data: postData,
        headers: {
            'Authorization': 'Bearer ' + USER_DATA.API_TOKEN
        },
        success: function (resp) {
            if (resp) {
                switch (resp.rs) {
                    case API_RESPONSE.OK:
                        USER_DATA.TEAM = choiceteam;
                        getUserData();
                        getShareLink("facebook");
                        getShareLink("line");
                        getGlobalShareLink();

                        setUserData();
                        togglePopup({ active: "close" });
                        break;
                    case API_RESPONSE.UNAUTH:
                    case API_RESPONSE.BAD:
                        alert("系統錯誤，請稍後再試");
                        window.location.reload();
                        break;
                }
            }
        },
        error: function (resp) {
            console.log(resp);
            // alert("系統錯誤，請稍後再試");
            // window.location.reload();
        }
    });
}

// 從 line 登入回來
function getLineLogin() {
    var redirectUri = DOMAIN;
    if (window.location.href.indexOf('greenpoints') < 0) {
        redirectUri = 'http://localhost:3030/';
    }
    $.ajax({
        method: "POST",
        dataType: 'json',
        url: "https://api.line.me/oauth2/v2.1/token",
        async: false,
        data: {
            grant_type: "authorization_code",
            code: window.location.search.split("code=")[1].split("&")[0],
            redirect_uri: redirectUri,
            client_id: LINE_CHANNEL_ID,
            client_secret: LINE_CHANNEL_SECRET
        },
        success: function (data) {
            console.log(data);
            var id_token = data.id_token;

            $.ajax({
                method: "POST",
                dataType: 'json',
                url: "https://api.line.me/oauth2/v2.1/verify",
                async: false,
                data: {
                    client_id: LINE_CHANNEL_ID,
                    id_token: id_token
                },
                success: function (data2) {
                    console.log(data2);
                    USER_DATA.TEAM = Number(window.location.search.split("line_login_team")[1].split("&")[0]);
                    USER_DATA.LOGIN_TYPE = API_LOGIN_TYPE.LINE;
                    USER_DATA.ID = data2.sub;
                    USER_DATA.IMAGE = data2.picture;
                    USER_DATA.NAME = data2.name;
                    sendSignup();
                },
                error: function (resp) {
                    console.log(resp);
                }
            });

        },
        error: function (resp) {
            console.log(resp);
        }
    });
}

function showSwiperNote(target, index) {
    $('#index-' + target + '-award-swiper-notes p').removeClass('show');
    $('#index-' + target + '-award-swiper-notes p:eq(' + index + ')').addClass('show');
}

function initSwiper() {
    var indexSwiper01 = new Swiper("#index-mission-award-swiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        initialSlide: 0,
        loop: true,
        speed: 600,
        autoplay: {
            delay: 1000,
            disableOnInteraction: false,
        },
        pagination: {
            el: "#index-mission-award-swiper-pagination",
            clickable: true
        },
        on: {
            init() {
                showSwiperNote('mission', 0);
            },
            slideChangeTransitionStart() {
                showSwiperNote('mission', this.realIndex);
            }
        }
    });

    var indexSwiper02 = new Swiper("#index-share-award-swiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        initialSlide: 0,
        loop: true,
        speed: 600,
        autoplay: {
            delay: 1000,
            disableOnInteraction: false,
            reverseDirection: true
        },
        pagination: {
            el: "#index-share-award-swiper-pagination",
            clickable: true
        },
        on: {
            init() {
                showSwiperNote('share', 0);
            },
            slideChangeTransitionStart() {
                showSwiperNote('share', this.realIndex);
            }
        }
    });

    var ruleSwiper01 = new Swiper("#rule-item01-swiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        initialSlide: 1,
        loop: true,
        speed: 600,
        autoplay: {
            delay: 1000
        },
        pagination: {
            el: "#rule-item01-swiper-pagination",
            clickable: true
        }
    });

    var ruleSwiper02 = new Swiper("#rule-item02-swiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        initialSlide: 1,
        loop: true,
        speed: 600,
        autoplay: {
            delay: 1000,
            reverseDirection: true
        },
        pagination: {
            el: "#rule-item02-swiper-pagination",
            clickable: true
        }
    });

    var ruleSwiper04 = new Swiper("#rule-item04-swiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        initialSlide: 1,
        loop: true,
        speed: 600,
        autoplay: {
            delay: 1000,
        },
        pagination: {
            el: "#rule-item04-swiper-pagination",
            clickable: true
        }
    });

    var ruleSwiper03 = new Swiper("#rule-item03-swiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        initialSlide: 1,
        loop: true,
        speed: 600,
        autoplay: {
            delay: 1000,
            reverseDirection: true,
        },
        pagination: {
            el: "#rule-item03-swiper-pagination",
            clickable: true
        }
    });

    setTimeout(function () {
        indexSwiper01.autoplay.start();
        indexSwiper02.autoplay.start();
        ruleSwiper01.autoplay.start();
        ruleSwiper02.autoplay.start();
        ruleSwiper04.autoplay.start();
        ruleSwiper03.autoplay.start();
    }, 2000);
}

var INIT_WIDTH = null;

function resize() {
    var isIOS = navigator.userAgent.match(/iPhone|iPad|iPod/i);

    if (isIOS) {
        // $("#index-main-kv-inner").addClass("use-bg");

        // for (var i = 0; i < $(".popup__main__box__main__choice__item__avatar__inner").length; i++) {
        //     $(".popup__main__box__main__choice__item__avatar__inner").eq(i).addClass("use-bg");
        // }

        // for (var i = 0; i < $(".mission__lists__item__box__main__img__inner").length; i++) {
        //     $(".mission__lists__item__box__main__img__inner").eq(i).addClass("use-bg");
        // }

        // for (var i = 0; i < $(".index__choice__swiper__wrap__slide__img__inner").length; i++) {
        //     $(".index__choice__swiper__wrap__slide__img__inner").eq(i).addClass("use-bg");
        // }

        var kvSrc = $("#index-main-kv-inner").find("iframe").attr("data-src");
        $("#index-main-kv-inner").find("iframe").attr("src", kvSrc + "-ios.html");

        for (var i = 0; i < $(".popup__main__box__main__choice__item__avatar__inner").length; i++) {
            var choiceSrc = $(".popup__main__box__main__choice__item__avatar__inner").eq(i).find("iframe").attr("data-src");
            $(".popup__main__box__main__choice__item__avatar__inner").eq(i).find("iframe").attr("src", choiceSrc + "-ios.html");
        }

        for (var i = 0; i < $(".mission__lists__item__box__main__img__inner").length; i++) {
            var missionSrc = $(".mission__lists__item__box__main__img__inner").eq(i).find("iframe").attr("data-src");
            $(".mission__lists__item__box__main__img__inner").eq(i).find("iframe").attr("src", missionSrc + "-ios.html");
        }
    } else {
        for (var i = 0; i < $(".index__choice__swiper__wrap__slide__img").length; i++) {
            var element = $(".index__choice__swiper__wrap__slide__img").eq(i).find(".index__choice__swiper__wrap__slide__img__inner");
            var choiceIframeScale = $(".index__choice__swiper__wrap__slide__img").eq(i).width() / element.width();
            element.css({ "transform": "scale(" + choiceIframeScale + ")" });
        }
    }

    var kvIframeScale = $(window).width() / $("#index-main-kv-inner").width();
    $("#index-main-kv-inner").css({ "transform": "scale(" + kvIframeScale + ")" });
    $("#index-main-kv").css({ height: kvIframeScale * $("#index-main-kv-inner").height() });

    for (var i = 0; i < $(".popup__main__box__main__choice__item").length; i++) {
        var element = $(".popup__main__box__main__choice__item").eq(i).find(".popup__main__box__main__choice__item__avatar__inner");
        var outerElement = $(".popup__main__box__main__choice__item").eq(i).find(".popup__main__box__main__choice__item__avatar");
        var kvAvatarIframeScale = outerElement.width() / element.width();
        element.css({ "transform": "scale(" + kvAvatarIframeScale + ")" });
    }

    for (var i = 0; i < $(".mission__lists__item__box__main__img").length; i++) {
        var element = $(".mission__lists__item__box__main__img").eq(i).find(".mission__lists__item__box__main__img__inner");
        var missionAvatarIframeScale = $(".mission__lists__item__box__main__img").eq(i).width() / element.width();
        element.css({ "transform": "scale(" + missionAvatarIframeScale + ")" });
    }
}

function checkIsBonusClicked() {
    if ($.cookie("BONUS_CLICKED") && $.cookie("BONUS_CLICKED") !== "" && !$.cookie('BONUS_EVENT_ENDED') === true) {
        if ($.cookie("GUEST_EVENT_ID")) {
            // togglePopup({ active: "open", element: "#popup-guest-mission-complete" });
            // $('#popup-guest-mission-complete').css({
            //     'background': 'url(/images/popup/guest-mission-complete.png) 0 0 no-repeat',
            //     'background-size': 'contain'
            // });
        } else {
            togglePopup({ active: "open", element: "#popup-member-mission-complete" });
        }
    }
    $.cookie("BONUS_CLICKED", "")
}

window.addEventListener('pageshow', function(event) {
    checkIsBonusClicked();
});

function getParameterByName(name) {
    name = name.replace(/[[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function getCookieParameterByName(name) {
    name = name.replace(/[[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec($.cookie("URL_PARAMS"));
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function randomLetters(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
    }
    return result;
}

$(function () {
    checkIsBonusClicked();
    // $.cookie("BONUS_CLICKED", "")
    var currentPage = "index";
    if (window.location.search.match("page=rule")) {
        currentPage = "rule";
        $.cookie("URL_PARAMS", "");
    } else if (window.location.search.match("page=member")) {
        currentPage = "member";
        $.cookie("URL_PARAMS", "");
    } else if (window.location.search.match("page=mission")) {
        currentPage = "mission";
        $.cookie("URL_PARAMS", "");
    } else if (window.location.search.match("page=bonus-mission")) {
        currentPage = "bonus-mission";
        $.cookie("URL_PARAMS", "");
    } else if (window.location.search.match("page=marathon")) {
        currentPage = "marathon";
        $.cookie("URL_PARAMS", "");
        if (getParameterByName('finalserial')) {
            $('#marathon .page__form__input').val(getParameterByName('finalserial') + randomLetters(5))
        };
    } else if (window.location.search.match("page=april-mission")) {
        currentPage = "april-mission";
        $.cookie("URL_PARAMS", "");
    } else if (window.location.search.match("page=may-mission")) {
        currentPage = "may-mission";
        $.cookie("URL_PARAMS", "");
    } else if (window.location.search.match("page=june-mission-quiz")) {
        currentPage = "june-mission-quiz";
        $.cookie("URL_PARAMS", "");
    } else if (window.location.search.match("page=june-mission-match")) {
        currentPage = "june-mission-match";
        $.cookie("URL_PARAMS", "");
    } else if (window.location.search.match("page=july-mission-quiz")) {
        currentPage = "july-mission-quiz";
        $.cookie("URL_PARAMS", "");
    } else if (window.location.search.match("page=august-mission-quiz")) {
        currentPage = "august-mission-quiz";
        $.cookie("URL_PARAMS", "");
    }

    if (window.location.search.match("code") && window.location.search.match("line_login")) getLineLogin();

    if (window.location.hash.match("goto=award")) {
        setTimeout(function () {
            $("html, body").animate({ scrollTop: $("#index-award").offset().top + 300 }, 300);
        }, 1000)
    } else if (window.location.hash.match("goto=choice")) {
        setTimeout(function () {
            $("html, body").animate({ scrollTop: $("#index-choice").offset().top }, 300);
        }, 1000)
    } else {
        /** 在測試 Start */
        // $("html, body").animate({ scrollTop: 0 });
        /** 在測試 End */
    }

    // getRank();
    // getUserData();
    // getEventList();
    // getEventList2();

    if ($.cookie("API_TOKEN")) {
        console.log('登入中');
    } else if ($.cookie("API_ISACTIVE")) {
        console.log('登入時效已過');
        $('#popup-guest-mission-complete').addClass('popup__main__box--registered');
    } else {
        console.log('無登入紀錄');
    }

    if (USER_DATA.API_TOKEN) {
        // 舊版邏輯 start
        // getEventList();
        // getEventList2();
        // 舊版邏輯 end
        getShareLink("facebook");
        getShareLink("line");
        getGlobalShareLink();
    } else {

        var search = window.location.search;
        switch (search) {
            case '?page=member':
            // case '?page=mission':
            // case '?page=bonus-mission':
            case '?page=april-mission':
            case '?page=may-mission':
            // case '?page=june-mission-quiz':
            // case '?page=june-mission-match':
            // case '?page=july-mission-quiz':
            // case '?page=july-mission-match':
                location.href = './'
                break;
        }

    }

    initSwiper();
    // const inexChoice = $("#index-choice");
    // var isIOS = navigator.userAgent.match(/iPhone|iPad|iPod/i);
    $(window).scroll(function() {
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop || 0;
        if (scrollTop + $(window).height() >= $('#index-choice').offset().top) {
            $('#index-main-btn-mission').addClass('hide');
        } else {
            $('#index-main-btn-mission').removeClass('hide');
        }
    });
/** 在測試 Start */
    // $(window)
    //     .scroll(function () {
    //         // b = $(this).scrollTop(); //頁面滾動的高度
    //         // c = inexChoice.offset().top; //元素距離文檔（document）頂部的高度
    //         // console.log(b, c)

    //         var awardTranslateY = (Math.floor($(this).scrollTop() * 0.5));
    //         var startAwardAnimatePoint = 260;
    //         if (awardTranslateY >= startAwardAnimatePoint) {
    //             awardTranslateY = startAwardAnimatePoint;
    //             $("#index-award").addClass("animate");
    //         }
    //         $("#index-award").css({ "transform": "translateY(" + awardTranslateY + "px)" });

    //         var choiceTranslateY = (Math.floor($(this).scrollTop() * 0.5));
    //         var startChoiceAnimatePoint = 730;
    //         if (choiceTranslateY >= startChoiceAnimatePoint) {
    //             choiceTranslateY = startChoiceAnimatePoint;
    //             $("#index-choice").addClass("animate");
    //         }
    //         $("#index-choice").css({ "transform": "translateY(" + (choiceTranslateY - ($("#index-award").height() * 0.5)) + "px)" });

    //     })
/** 在測試 End */
    // .resize(resize)
    // .resize(function () {
    //     if (isIOS) {
    //         clearTimeout(RESIZE_TIMER);
    //         $('.index__choice__swiper__wrap__slide__img__inner iframe').hide();
    //         RESIZE_TIMER = setTimeout(() => {
    //             $('.index__choice__swiper__wrap__slide__img__inner iframe').show();
    //             resize()
    //         }, 300);
    //     } else {
    //         resize()
    //     }
    // })

    if (!$.cookie("privacyIsShow") || $.cookie("privacyIsShow") == 1) {
        $("#privacy").addClass("privacy--show");
    }

    // if (!$.cookie("notShowLoading") || $.cookie("notShowLoading") == 0) {
    //     $("#loading").addClass("animate");
    //     $.cookie("notShowLoading", 1, { expires: 700 });
    //     setTimeout(function () {
    //         $("#index").addClass("animate");
    //     }, 5000);
    // } else {
        $("#index").addClass("animate");
    // }

    // if (window.navigator.userAgent.indexOf(' Line/') !== -1) {
    //     $('.popup__main__box__main__text--line').show();
    // }

    changePage(currentPage);
    resize();
    if ($.cookie("fb"))
    {
        FB.init({
            appId: FB_APP_ID,
            cookie: true,                     // Enable cookies to allow the server to access the session.
            xfbml: true,                     // Parse social plugins on this webpage.
            version: 'v16.0'           // Use this Graph API version for this call.
        });

        FB.getLoginStatus(function (response) {   // Called after the JS SDK has been initialized.
            console.log(response);
            if (response.status === 'connected') {
                USER_DATA.LOGIN_TYPE = API_LOGIN_TYPE.FACEBOOK;
                USER_DATA.ID = response.authResponse.userID;
                var accessToken = response.authResponse.accessToken;

                FB.api('/me', 'GET', { fields: 'name, email, picture', access_token: accessToken }, function (response2) {
                    console.log(response2)
                    USER_DATA.NAME = response2.name;
                    USER_DATA.EMAIL = response2.email;
                    // USER_DATA.IMAGE = response2.picture.data.url;

                    $.ajax({
                        type: 'POST',
                        cache: 'false',
                        url: 'https://graph.facebook.com/v15.0/me?access_token=' + accessToken + '&fields=name,%20email,%20picture.height(320).width(320)&method=get&pretty=0&sdk=joey&suppress_http_code=1',
                        success: function (response3) {
                            console.log(response3);
                            USER_DATA.IMAGE = response3.picture.data.url;
                            //console.log()
                            //getUserData();
                            //alert("fbAsyncInit=" + $.cookie("fb"));
                            if ($.cookie("fb"))
                            {
                                $.cookie("fb","");
                                sendSignup();
                            }else
                            {
                                getUserData();
                            }
                        },
                        error: function (resp) {
                            console.log(resp);
                            // alert("系統錯誤，請稍後再試");
                            // window.location.reload();
                        }
                    });
                });
            }
            // statusChangeCallback(response);        // Returns the login status.
        });

    
        fBLogin();
    }
});

$(window).on('load', function() {
    $('#loading').fadeOut(500, function() {
        $('#index-main').addClass('play');
    });
});

window.fbAsyncInit = function () {
    console.log("fb init");
    FB.init({
        appId: FB_APP_ID,
        cookie: true,                     // Enable cookies to allow the server to access the session.
        xfbml: true,                     // Parse social plugins on this webpage.
        version: 'v16.0'           // Use this Graph API version for this call.
    });

    FB.getLoginStatus(function (response) {   // Called after the JS SDK has been initialized.
        console.log(response);
        if (response.status === 'connected') {
            USER_DATA.LOGIN_TYPE = API_LOGIN_TYPE.FACEBOOK;
            USER_DATA.ID = response.authResponse.userID;
            var accessToken = response.authResponse.accessToken;

            FB.api('/me', 'GET', { fields: 'name, email, picture', access_token: accessToken }, function (response2) {
                console.log(response2)
                USER_DATA.NAME = response2.name;
                USER_DATA.EMAIL = response2.email;
                // USER_DATA.IMAGE = response2.picture.data.url;

                $.ajax({
                    type: 'POST',
                    cache: 'false',
                    url: 'https://graph.facebook.com/v15.0/me?access_token=' + accessToken + '&fields=name,%20email,%20picture.height(320).width(320)&method=get&pretty=0&sdk=joey&suppress_http_code=1',
                    success: function (response3) {
                        console.log(response3);
                        USER_DATA.IMAGE = response3.picture.data.url;
                        //console.log()
                        //getUserData();
                        //alert("fbAsyncInit=" + $.cookie("fb"));
                        if ($.cookie("fb"))
                        {
                            $.cookie("fb","");
                            sendSignup();
                        }else
                        {
                            getUserData();
                        }
                    },
                    error: function (resp) {
                        console.log(resp);
                        // alert("系統錯誤，請稍後再試");
                        // window.location.reload();
                    }
                });
            });
        }
        // statusChangeCallback(response);        // Returns the login status.
    });
};
