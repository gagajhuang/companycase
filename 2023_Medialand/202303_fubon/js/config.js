var DOMAIN = 'https://greenpoints-test.medialand.com.tw/';
var IMAGE_DOMAIN = "/images/";
var API_DOMAIN = "/api/R4G/";

// FB 相關
var FB_APP_ID = "257744813525425";
var FB_NO_IMAGE_DOMAIN = "https://static.xx.fbcdn.net/";

// LINE 相關
var LINE_CHANNEL_ID = "1660769734";
var LINE_CHANNEL_SECRET = "99ec485968c98bd33aa2616e9b6fd0b7";

var CHOOSED_TEAM = 0;
var IS_NEED_CLOSE = false;
var IS_NEW_MEMBER = false;

// 視覺相關
var KUO = {
    NAME: "郭婞淳",
    TAG: "友善土地",
    SLOGAN: [ "我支持小農的友善農耕", "追求低碳蔬食和零剩食" ]
};
var CHEN = {
    NAME: "陳金鋒",
    TAG: "綠色能源",
    SLOGAN: [ "我提倡節能省電", "大力支持再生能源" ]
};
var LIN = {
    NAME: "林志傑",
    TAG: "責任消費",
    SLOGAN: [ "我選擇有環保標章的商品", "以負責的消費行為實踐永續發展" ]
};

// API 相關
// 傳送給後端的參數
var API_LOGIN_TYPE = {
    FACEBOOK: 0,
    LINE: 1
};
var API_TEAM_TYPE = {
    KUO: 1,
    LIN: 2,
    CHEN: 3
};

// 後端回傳的參數
var API_RESPONSE = {
    OK: "OK",
    UNAUTH: "Unauthorized",
    BAD: "BadRequest",
    ACCEPTED: "Accepted",
}

// 後端回傳的四月任務的 EID
var APRIL_EID = "BB87CFDC62CF4F7B9F53D964F1B68633";

// 五月任務的 EID
var MAY_EID = "R83TFQESY8G8PB9DAWT3LJ7SNBX9C6QQ";

// 六月任務的 EID
var JUNE_EID = "WRETCR87POADDYSTT1ZUZQX02VESW6U6";

// 七月任務的 EID
var JULY_EID = "9DB8USITVSI3T52ZG1W8LSEL4WILYE3X";

// 八月任務的 EID
var AUGUST_EID = "H1JU7L1ZNHLZIEVALADDY7X1H317WYTU";