$(function() {

    document.body.addEventListener('touchstart', function() {}, false)

    // 雪花
    if (!utils.isDev()) {
        INIT_FLAKES();
    }

    // 設定 CSS 變數
    SET_CSS_VARIABLE();

    // 開啟或關閉 header & footer
    TOGGLE_HEADER_AND_FOOTER();

    $(window).on('resize', function() {
        SET_CSS_VARIABLE();
    });

    // 開啟 menu
    $('.header__toggler').click(function(e) {

        e.preventDefault();

        $('#container__inner').css({ 'position': 'fixed', 'top': $('html, body').scrollTop() * -1 });
        $('#menu').show();
        $('html, body').scrollTop(0);

    });

    // 關閉 menu
    $('.menu__toggler').click(function(e) {

        e.preventDefault();

        var scrollY = parseInt($('#container__inner').css('top').replace('px', '')) * -1;
        $('#container__inner').css({ 'position': 'relative', 'top': 0 });
        $('html, body').scrollTop(scrollY);
        $('#menu').hide();

    });

    // 關閉 popup
    $('.pop__close').click(function(e) {
        e.preventDefault();
        CLOSE_POPUP();
    });

    // 複製文字
    $('body').on('click', '.btn-copy', () => {
        COPY_TO_PASTEBOARD();
    });

    // 回到最上方
    $('.go-to-top').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 350);
    });

    // 產生活動辦法表格內容
    if ($('#rule__table-game').length !== 0) CREATE_RULE_TABLE_FOR_GAME();
    if ($('#rule__table-draw').length !== 0) CREATE_RULE_TABLE_FOR_DRAW();

});

function INIT_FLAKES() {
    var snow;
    snow = new iseedSnow();
    snow.init('#flakes', '/assets/images/common/flake.png');
    snow.start();
}

function SET_CSS_VARIABLE() {
    var vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

function TOGGLE_HEADER_AND_FOOTER() {

    var pages = [
        'catalog',
        'oops',
        'comingsoon',
    ]

    for (var i = 0; i < pages.length; i++) {
        if ($('#main').find('#' + pages[i]).length !== 0) {
            $('#header').hide();
        }
    }

}

var QUEUED_POPUP = [];

function OPEN_POPUP(target, options) {

    // 開啟前執行
    if (options && typeof options.beforeOpen === 'function') {
        options.beforeOpen();
    }

    // 特殊樣式設定
    if ($(target).hasClass('pop__main--lottery')) {
        $('#pop').addClass('status--lottery');
    }

    if ($('.pop__main:visible').length === 0) { // 如果目前沒有開啟中的 popup，視為從頁面中開啟 popup
        $('#container__inner').css({ 'position': 'fixed', 'top': $('html, body').scrollTop() * -1 });
        $('#pop, ' + target).show();
    } else { // 如果有開啟中的 popup，隱藏現有 popup 將其加入佇列
        var currentPopup = $('.pop__main:visible');
        QUEUED_POPUP.push(currentPopup);
        currentPopup.hide();
        $(target).show();
    }

    // 回到最上方
    $('html, body').scrollTop(0);

}

function CLOSE_POPUP() {

    if (QUEUED_POPUP.length !== 0) {

        var lastPopup = QUEUED_POPUP.pop();

        $('.pop__main:visible').hide();
        lastPopup.show();

    } else {

        var scrollY = parseInt($('#container__inner').css('top').replace('px', '')) * -1;
        $('#container__inner').css({ 'position': 'relative', 'top': 0 });
        $('html, body').scrollTop(scrollY);
        $('#pop, .pop__main:visible').hide();
        $('#pop').removeClass();

        RESET_POPUP();

    }

}

function RESET_POPUP() {
    $('#pop-record_draw-completed .pop__rules li').hide();
}

function COPY_TO_PASTEBOARD() {

    const myInput = document.querySelector('#copyinput');
    // myInput.setAttribute('type', 'text'); // 不是 hidden 才能複製
    myInput.select();

    try {
        const successful = document.execCommand('copy');
        const msg        = successful ? '成功' : '失敗';
        const text       = `網址複製${msg}`;
        alert(`${text}`);
    } catch (err) {
        alert(`${text}`);
    }

    /* unselect the range */
    // myInput.setAttribute('type', 'hidden');
    window.getSelection().removeAllRanges();

}

function OPEN_GREETING_ANIMATION(isReceive) {

    if (typeof(isReceive) !== 'undefined') {
        $('#greeting-animation').toggleClass('receive', isReceive);
    }

    $('#container__inner').css({ 'position': 'fixed', 'top': $('html, body').scrollTop() * -1 });
    $('#greeting-animation').fadeIn(500, PLAY_GREETING_ANIMATION);
    $('html, body').scrollTop(0);

    setTimeout(() => {
        CLOSE_GREETING_ANIMATION()
    }, 4000);
}

function PLAY_GREETING_ANIMATION() {

    $('#greeting-animation').addClass('play');

}

function CLOSE_GREETING_ANIMATION() {

    // var scrollY = parseInt($('#container__inner').css('top').replace('px', '')) * -1;
    $('#container__inner').css({ 'position': 'relative', 'top': 0 });
    $('#greeting-animation').fadeOut(500, function() {
        $('html, body').scrollTop(0);
        $('#greeting-animation').removeClass('play');
    });

}

function SHOW_RULE(target, index) {

    var data = (target == 'exchange') ? exchangeData : drawData;

    $('#pop-rule .step').html(data[index].content);
    console.log(data[index].title);
    OPEN_POPUP('#pop-rule');

}

function CREATE_RULE_TABLE_FOR_GAME() {

    var data = [
        {
            quantity: 5,
            gift: '博客來$50元 E-coupon<span>(消費滿$499元且購物車內商品需有一項售價高於$100元方可折抵)</span>',
            duration: '2023/10/24(二)~2024/01/01(一) <span>(2024/01/30前需使用完畢)<br>(限量8,000張，兌換完畢為止)</span>',
            detailId: 'game-1',
        },
        {
            quantity: 5,
            gift: '康是美實體門市消費滿$500折$50好康優惠<span>(不累折，單筆發票限折乙次)</span>',
            duration: '2023/10/24(二)~2024/01/01(一)<span>(2024/01/01前需使用完畢)</span>',
            detailId: 'game-2',
        },
        {
            quantity: 10,
            gift: '21PLUS/21風味館 愛．Sharing分享餐優惠券',
            duration: '2023/10/24(二)~2024/01/01(一)<span>(2024/01/30前需使用完畢)<br>(限量10,000張，兌換完畢為止)</span>',
            detailId: 'game-3',
        },
        {
            quantity: 15,
            gift: '酷聖石【中杯經典冰淇淋+原味脆餅】買一送一優惠券<span>(中杯以上含桶裝；不含脆餅；價低者為優惠品項)</span>',
            duration: '2023/10/24(二)~2024/01/01(一)<span>(2024/01/30前需使用完畢)<br>(限量10,000張，兌換完畢為止)</span>',
            detailId: 'game-4',
        },
        {
            quantity: 10,
            gift: 'Semeur聖娜「雙起士可頌買1送1」優惠券',
            duration: '2023/10/24(二)~2024/01/01(一)<span>(2024/01/30前需使用完畢)<br>(限量10,000張，兌換完畢為止)</span>',
            detailId: 'game-5',
        },
        {
            quantity: 15,
            gift: '美研社玫瑰花果茶PET400ml',
            duration: '2023/10/24(二)~2023/10/30(一)<span>(每日限量兌換1,714瓶，送完為止)<br>(活動期間，每日上午10:00限量發送)<br>(2023/01/30前需使用完畢)<br>(每日每個Facebook帳號限兌換一次序號)</span>',
            detailId: 'game-6',
        },
        {
            quantity: 20,
            gift: '大補帖藥燉排骨(碗)',
            duration: '2023/10/24(二)~2023/10/30(一)<span>(每日限量714碗，送完為止)<br>(活動期間，每日上午10:00限量發送)<br>(2024/01/30前需使用完畢)<br>(每日每個Facebook帳號限兌換一次序號)</span>',
            detailId: 'game-7',
        },
        {
            quantity: 15,
            gift: '好勁道千羽拉麵320g/包',
            duration: '2023/10/31(二)~2023/11/06(一)<span>(每日限量714包，送完為止)<br>(活動期間，每日上午10:00限量發送)<br>(2024/01/30前需使用完畢)<br>(每日每個Facebook帳號限兌換一次序號)</span>',
            detailId: 'game-8',
        },
        {
            quantity: 20,
            gift: '統一麵包卡士達麵包',
            duration: '2023/11/07(二)~2023/11/13(一)<span>(每日限量1,428個，送完為止)<br>(活動期間，每日上午10:00限量發送)<br>(2024/01/30前需使用完畢) <br>(每日每個Facebook帳號限兌換一次序號)</span>',
            detailId: 'game-9',
        },
        {
            quantity: 20,
            gift: '瑞穗低脂鮮乳400ml',
            duration: '2023/11/07(二)~2023/11/13(一)<span>(每日限量714個，送完為止)<br>(活動期間，每日上午10:00限量發送)<br>(2024/01/30前需使用完畢)<br>(每日每個Facebook帳號限兌換一次序號)</span>',
            detailId: 'game-10',
        },
        {
            quantity: 15,
            gift: '巷口乾麵麻醬風味/包',
            duration: '2023/11/07(二)~2023/11/13(一)<span>(每日限量714包，送完為止)<br>(活動期間，每日上午10:00限量發送)<br>(2023/01/30前需使用完畢)<br>(每日每個Facebook帳號限兌換一次序號)</span>',
            detailId: 'game-11',
        },
        {
            quantity: 15,
            gift: '巷口乾麵炸醬風味/包',
            duration: '2023/11/07(二)~2023/11/13(一)<span>(每日限量714包，送完為止)<br>(活動期間，每日上午10:00限量發送)<br>(2024/01/30前需使用完畢)<br>(每日每個Facebook帳號限兌換一次序號)</span>',
            detailId: 'game-12',
        },
        {
            quantity: 10,
            gift: '統一時代百貨台北店滿千抵百券',
            duration: '2023/11/14(二)~2023/11/20(一)<span>(每日限量71張，送完為止)<br>(活動期間，每日上午10:00限量發送)<br>(2023/12/30前需使用完畢)<br>(每日每個Facebook帳號限兌換一次序號)</span>',
            detailId: 'game-13',
        },
        {
            quantity: 15,
            gift: '夢時代摩天輪貴賓券',
            duration: '2023/11/14(二)~2023/11/20(一)<span>(每日限量28張，送完為止)<br>(活動期間，每日上午10:00限量發送)<br>(2023/12/25前需使用完畢)<br>(每日每個Facebook帳號限兌換一次序號)</span>',
            detailId: 'game-14',
        },
        {
            quantity: 15,
            gift: '好勁道家常麵袋300g/包',
            duration: '2023/11/14(二)~2023/11/20(一)<span>(每日限量714包，送完為止)<br>(活動期間，每日上午10:00限量發送)<br>(2024/01/30前需使用完畢)<br>(每日每個Facebook帳號限兌換一次序號)</span>',
            detailId: 'game-15',
        },
        {
            quantity: 20,
            gift: '統一麵*小時光麵館 青蔬椒麻/碗',
            duration: '2023/11/21(二)~2023/11/27(一)<span>(每日限量357碗，送完為止)<br>(活動期間，每日上午10:00限量發送)<br>(2024/01/30前需使用完畢)<br>(每日每個Facebook帳號限兌換一次序號)</span>',
            detailId: 'game-16',
        },
        {
            quantity: 20,
            gift: '滿漢大餐Gold熗牛肉麵(碗)',
            duration: '2023/11/21(二)~2023/11/27(一)<span>(每日限量142碗，送完為止)<br>(活動期間，每日上午10:00限量發送)<br>(2024/01/30前需使用完畢)<br>(每日每個Facebook帳號限兌換一次序號)</span>',
            detailId: 'game-17',
        },
        {
            quantity: 20,
            gift: '滿漢大餐Gold金牛肉麵(碗)',
            duration: '2023/11/21(二)~2023/11/27(一)<span>(每日限量142碗，送完為止)<br>(活動期間，每日上午10:00限量發送)<br>(2024/01/30前需使用完畢)<br>(每日每個Facebook帳號限兌換一次序號)</span>',
            detailId: 'game-18',
        },
        {
            quantity: 30,
            gift: '星巴克好友分享券',
            duration: '2023/11/28(二)~2023/12/11(一)<span>(每日限量714張，送完為止)<br>(活動期間，每日上午10:00限量發送)<br>(2024/01/30前需使用完畢)<br>(每日每個Facebook帳號限兌換一次序號)</span>',
            detailId: 'game-19',
        },
        {
            quantity: 20,
            gift: '統一麵包菱格香菠蘿',
            duration: '2023/11/28(二)~2023/12/04(一)<span>(每日限量1,428個，送完為止)<br>(活動期間，每日上午10:00限量發送)<br>(2024/01/30前需使用完畢)<br>(每日每個Facebook帳號限兌換一次序號)</span>',
            detailId: 'game-20',
        },
        {
            quantity: 20,
            gift: '統一麵包起酥肉鬆麵包',
            duration: '2023/11/28(二)~2023/12/04(一)<span>(每日限量1,428個，送完為止)<br>(活動期間，每日上午10:00限量發送)<br>(2024/01/30前需使用完畢)<br>(每日每個Facebook帳號限兌換一次序號)</span>',
            detailId: 'game-21',
        },
        {
            quantity: 15,
            gift: 'Amelie’s Bagel切達起司貝果',
            duration: '2023/12/05(二)~2023/12/11(一)<span>(每日限量1,250個，送完為止)<br>(活動期間，每日上午10:00限量發送)<br>(2024/01/30前需使用完畢)<br>(每日每個Facebook帳號限兌換一次序號)</span>',
            detailId: 'game-22',
        },
        {
            quantity: 10,
            gift: '聖德科斯線上折價券$100元(滿千折百)',
            duration: '2023/12/12(二)~2023/12/18(一)<span>(每日限量142張，送完為止)<br>(活動期間，每日上午10:00限量發送)<br>(2024/01/30前需使用完畢)</span>',
            detailId: 'game-23',
        },
        {
            quantity: 20,
            gift: 'AB+無加糖優格',
            duration: '2023/12/12(二)~2023/12/18(一)<span>(每日限量357個，送完為止)<br>(活動期間，每日上午10:00限量發送)<br>(2024/01/30前需使用完畢)<br>(每日每個Facebook帳號限兌換一次序號)</span>',
            detailId: 'game-24',
        },
        {
            quantity: 20,
            gift: 'AB+綜合莓果優格',
            duration: '2023/12/12(二)~2023/12/18(一)<span>(每日限量357個，送完為止)<br>(活動期間，每日上午10:00限量發送)<br>(2024/01/30前需使用完畢)<br>(每日每個Facebook帳號限兌換一次序號)</span>',
            detailId: 'game-25',
        },
        {
            quantity: 15,
            gift: 'HIS CAFÉ醇熟咖啡',
            duration: '2023/12/19(二)~2023/12/25(一)<span>(每日限量342個，送完為止)<br>(活動期間，每日上午10:00限量發送)<br>(2024/01/30前需使用完畢)<br>(每日每個Facebook帳號限兌換一次序號)</span>',
            detailId: 'game-26',
        },
        {
            quantity: 15,
            gift: 'HIS CAFÉ純黑咖啡',
            duration: '2023/12/19(二)~2023/12/25(一)<span>(每日限量342個，送完為止)<br>(活動期間，每日上午10:00限量發送)<br>(2024/01/30前需使用完畢)<br>(每日每個Facebook帳號限兌換一次序號)</span>',
            detailId: 'game-27',
        },
        {
            quantity: 15,
            gift: 'Smile速邁樂加油中心免費洗車券',
            duration: '2023/12/26(二)~2024/01/01(一)<span>(每日限量42個，送完為止)<br>(活動期間，每日上午10:00限量發送)<br>(2024/01/30前需使用完畢)<br>(每日每個Facebook帳號限兌換一次序號)</span>',
            detailId: 'game-28',
        },
        {
            quantity: 20,
            gift: '統一麵*小時光麵館 花椒擔擔(碗)',
            duration: '2023/12/26(二)~2024/01/01(一)<span>(每日限量357碗，送完為止)<br>(活動期間，每日上午10:00限量發送)<br>(2024/01/30前需使用完畢)<br>(每日每個Facebook帳號限兌換一次序號)</span>',
            detailId: 'game-29',
        }
    ]

    data.forEach(function(item) {

        var clone = $('#rule__table-game .rule__template').clone();
        clone.find('td:eq(0)').text(item.quantity + '個');
        clone.find('td:eq(1)').html(item.gift);
        clone.find('td:eq(2)').html(item.duration);
        clone.find('.rule__detail').attr('data-detailId', item.detailId);
        clone.removeClass('rule__template');
        $('#rule__table-game').append(clone);

    })

    $('#rule__table-game .rule__template').remove();

}

function CREATE_RULE_TABLE_FOR_DRAW() {

    var data = [
        {
            quantity: 250,
            gift: 'OPEN POINT 點數66,666點 市價66,666元',
            quota: '1名<br><a class="rule__detail" href="#" id="draw-1" data-detailId="draw-1">領獎說明</a>'
        },
        {
            quantity: 130,
            gift: '心焙雞精/一盒(14入) 市價1,980元',
            quota: '100名'
        },
        {
            quantity: 80,
            gift: '巷口乾麵巷口拌麵紅油椒麻/一箱(24入) 市價1,194元',
            quota: '100名'
        },
        {
            quantity: 80,
            gift: '巷口乾麵巷口拌麵香辣厚麻醬/一箱(24入) 市價1,194元',
            quota: '100名'
        },
        {
            quantity: 75,
            gift: '美麗日記明星保養組：蜜若藍超能補水面膜5入+積雪草超能舒緩修復面膜5入+密集修護me安瓶7入 市價1,090元',
            quota: '5名'
        },
        {
            quantity: 60,
            gift: 'icash卡(卡面隨機)1,000元 市價1,000元',
            quota: '15名'
        },
        {
            quantity: 40,
            gift: '7-ELEVEN 500元禮券 市價500元',
            quota: '20名'
        },
        {
            quantity: 30,
            gift: '阿Q桶麵雞汁排骨風味/一箱(12入) 市價420元',
            quota: '100名'
        },
        {
            quantity: 30,
            gift: '科學麵原味/一箱(40入) 市價400元',
            quota: '120名'
        },
        {
            quantity: 30,
            gift: '科學麵香蔥雞汁風味/一箱(五合一，8入) 市價400元',
            quota: '100名'
        },
        {
            quantity: 25,
            gift: '來一客川辣牛肉12入 市價300元',
            quota: '120名'
        },
        {
            quantity: 25,
            gift: 'Ksolite滋潤精粹護手霜(香水薔薇香氛) 市價200元',
            quota: '30名'
        }
    ]

    data.forEach(function(item) {

        var clone = $('#rule__table-draw .rule__template').clone();
        clone.find('td:eq(0)').text(item.quantity + '個');
        clone.find('td:eq(1)').html(item.gift);
        clone.find('td:eq(2)').html(item.quota);
        clone.removeClass('rule__template');
        $('#rule__table-draw').append(clone);

    })

    $('#rule__table-draw .rule__template').remove();

}

function SET_EXCHANGE_DATA(id) {

    var popup = $('#pop-record_draw-exchange');
    var result = EXCHANGE_DATA.filter(function(item) {
        return item.id === id;
    })[0];

    if (!result) return;

    if (result.item) popup.find('.pop__table-item td').text(result.item);
    if (result.method) popup.find('.pop__table-method td').text(result.method);
    if (result.cellHeader) popup.find('.pop__table-code th').text(result.cellHeader + '：');
    if (result.code) popup.find('.pop__code').html(result.code);
    popup.find('.pop__table-code td').text(result.cellData);
    popup.find('.pop__buttons').toggle(result.showButton);
    popup.find('.pop__button-save').text('點選按鈕以儲存此畫面');

    if (result.method === 'i禮贈序號') popup.find('.pop__button-save').text('點選以複製 i 禮贈序號');

    if (result.method === 'i禮贈序號') {

        var iGiftHtml = 
            '<p class="pop__label"><span>歸戶</span></p>' +
            '<p>持愛．Sharing網站兌換之i禮贈序號→開啟「OPEN POINT」APP→點選首頁下方「會員中心」→點選「序號兌換」→點選「i禮贈」→輸入12碼序號→兌換完成→持兌換條碼至統一超商門市櫃台兌換商品。</p>' +
            '<p class="pop__title">1. 開啟「OPEN POINT」App，點選首頁下方「會員中心」</p>' +
            '<img src="/assets/images/exchange/op_step1.png">' +
            '<p class="pop__title">2. 點選「序號兌換」</p>' +
            '<img src="/assets/images/exchange/op_step2.png">' +
            '<p class="pop__title">3. 點選「i禮贈」</p>' +
            '<img src="/assets/images/exchange/op_step3.png">' +
            '<p class="pop__title">4. 輸入12碼序號後即可兌換完成，持兌換條碼至統一超商門市櫃台兌換商品。</p>' +
            '<img src="/assets/images/exchange/op_step4.png">' +
            '<p class="pop__label"><span>查詢</span></p>' +
            '<p>若沒有立即兌換，後續進入APP內請至兌換券內，點選活動券即可找到。<br>開啟 「OPEN POINT」 APP → 點選下方「服務」→點選票卷相關「兌換券」→點選「兌換券」→下方選擇要兌換的換好禮獎項→持兌換條碼至統一超商門市櫃台兌換商品。</p>' +
            '<img src="/assets/images/exchange/op_step5.png">' +
            '<img src="/assets/images/exchange/op_step6.png">' +
            '<img src="/assets/images/exchange/op_step7.png">' +
            '<img src="/assets/images/exchange/op_step8.png">' +
            ''
            ;
        if (result.content) popup.find('.pop__content').html(result.content + iGiftHtml);

    } else {

        if (result.content) popup.find('.pop__content').html(result.content);

    }

    // console.log(result);

}

function INIT_FIND_GAME() {

    var FIND_TIME = setTimeout(function() {
        $('.event__tips').addClass('event__tips--show')
    }, +$('.event__tips').data('duration'))

    $('.event__tips').click(function() {
        $('.event__circle').not('.event__circle--found').addClass('event__circle--hint');
    });

    $(document).on('click', '.event__circle', function() {
        var id = $(this).data('id')
        $('.event__circle[data-id="' + id + '"]').each(function(index, ele) {
            $(ele).removeClass('event__circle--hint').addClass('event__circle--found')
        });
        CHECK_CIRCLES();
    });

}

function CREATE_FIND_CIRCLES(result) {

    var template = $('<a class="event__circle"></a>');
    var circles = result.circles;

    $('.event__circle').remove();

    circles.forEach(function(circle, index) {
        var clone = template.clone();
        clone
            .css({
                'top': circle.top,
                'left': circle.left,
                'width': circle.width,
                'height': circle.height,
                'padding-bottom': circle.height ? 0 : circle.width
            })
            .attr('data-id', index);
        $('.event__circles').append(clone);
    });

}

function SET_FIND_DATA(id) {

    var result = FIND_DATA.filter(function(item) { return item.id === id })[0]
    
    if ($('.event__logo img').length !== 0) {
        $('.event__logo img').attr('src', result.logo)
        $('.event__image-top img').attr('src', result.images[0]);
        $('.event__image-bottom img').attr('src', result.images[1]);
    } else {
        $('.event__logo').append('<img src="' + result.logo + '">')
        $('.event__image-top').prepend('<img src="' + result.images[0] + '">');
        $('.event__image-bottom').prepend('<img src="' + result.images[1] + '">');
    }

    CREATE_FIND_CIRCLES(result);

}

function CHECK_CIRCLES() {
    var markerCircles = $('.event__image-top .event__circles-marker .event__circle--found');
    var sensorCircles = $('.event__image-top .event__circles-sensor .event__circle--found');
    if (markerCircles.length === 5 && sensorCircles.length === 5) {

        alert('任務完成');

    }
}

