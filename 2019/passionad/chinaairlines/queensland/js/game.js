var isMobile = false; //initiate as false
// device detection
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) isMobile = true;
// (function ($) {
  // $.UrlParam = function (name) {
    // var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    // var r = window.location.search.substr(1).match(reg);
    // if (r != null) return unescape(r[2]); return null;
  // }
// })(jQuery);
var ciq = {};
ciq.base_url = 'https://www.passion-ad.com/2019/0128ci_queensland/';
var db = [];
// ciq.op = $.UrlParam("op");
//alert(param);
var logs = function(e, ec, el){	
	//event, event_category, event_label
	var page = e + ec + el;
	if( $.cookie(page) == null ){		
		$.post('app/index.php/page/logs/', { e:e, ec:ec, el:el })
		.done(function(data) {
			$.cookie(page, 'true');
		});
	}
}
logs('inside', 'view', '1');//進入頁面
ciq.game = new Phaser.Game({	
		width:		1200,
		height:		630,
		parent:		'shareimg', 
		renderer:	Phaser.CANVAS,
		scaleMode: Phaser.ScaleManager.SHOW_ALL,  
		transparent: true,  
		state: {
			preload: preload, 
			create: create
		}
	});
function preload() {
	ciq.game.load.image('share01', 'images/share01.png');
	ciq.game.load.image('mask1_1', 'images/mask/mask1_1.png');//94, 152, 508, 399 (x, y, width, height)
	ciq.game.load.image('mask1_2', 'images/mask/mask1_2.png');//656, 274, 388, 277
	ciq.game.load.image('mask1_3', 'images/mask/mask1_3.png');//913, 31, 287, 409
	ciq.game.load.image('share02', 'images/share02.png');
	ciq.game.load.image('mask2_1', 'images/mask/mask2_1.png');//111, 343, 215, 214 (x, y, width, height)
	ciq.game.load.image('mask2_2', 'images/mask/mask2_2.png');//496, 360, 214, 215
	ciq.game.load.image('mask2_3', 'images/mask/mask2_3.png');//880, 319, 215, 215
	ciq.game.load.image('activityimg01', 'images/pic/activityimg01.jpg');
	ciq.game.load.image('activityimg02', 'images/pic/activityimg02.jpg');
	ciq.game.load.image('activityimg03', 'images/pic/activityimg03.jpg');
	ciq.game.load.image('activityimg04', 'images/pic/activityimg04.jpg');
	ciq.game.load.image('activityimg05', 'images/pic/activityimg05.jpg');
	ciq.game.load.image('activityimg06', 'images/pic/activityimg06.jpg');
	ciq.game.load.image('activityimg07', 'images/pic/activityimg07.jpg');
	ciq.game.load.image('activityimg08', 'images/pic/activityimg08.jpg');
	ciq.game.load.image('activityimg09', 'images/pic/activityimg09.jpg');
	ciq.game.load.image('activityimg10', 'images/pic/activityimg10.jpg');
}
function create() {	
	// ciq.game.add.image(0, 0, 'share02');
	// ciq.mask2_1 = ciq.game.make.bitmapData(215, 214);
	// ciq.mask2_1.alphaMask('activityimg01', 'mask2_1', {x:0, y:0, width:215, height:215});
	// ciq.game.add.image(111, 343, ciq.mask2_1);
	ciq.game.scale.compatibility.scrollTo = false;

}
//將陣列利用 sort 方式進行亂數排列
function shuffle(a,b) {
  var num = Math.random() > 0.5 ? -1:1;
  return num;
}
function random_item(items){  
	return items[Math.floor(Math.random()*items.length)];     
}
function update() {
	ciq.templates = [1, 2];
	ciq.shareRandom = random_item(ciq.templates);;
	ciq.shareSource = new Array();
	ciq.share = new Array();
	ciq.picsSource = new Array();
	ciq.pics = new Array();
	if( ciq.shareRandom == 1 ){
		ciq.game.add.image(0, 0, 'share01');		
		ciq.shareSource[0] = {src:'mask1_1', x:94, y:152, width:508, height:399};
		ciq.shareSource[1] = {src:'mask1_2', x:656, y:274, width:388, height:277};
		ciq.shareSource[2] = {src:'mask1_3', x:913, y:31, width:287, height:409};
	}
	if( ciq.shareRandom == 2 ){
		ciq.game.add.image(0, 0, 'share02');
		ciq.shareSource[0] = {src:'mask2_1', x:111, y:343, width:215, height:214};
		ciq.shareSource[1] = {src:'mask2_2', x:496, y:360, width:214, height:215};
		ciq.shareSource[2] = {src:'mask2_3', x:880, y:319, width:215, height:215};
	}
	ciq.share = ciq.shareSource.sort(shuffle);
	var picNo, pic, alphaMaskSourceRect;
	$('.activityimg .col5.active').each(function(index){
		ciq.picsSource[index] = $(this).index() + 1;
	});
	ciq.pics = ciq.picsSource.sort(shuffle);
	for(var i=0; i < 3; i++){
		if( ciq.pics[i] ){
			picNo = ciq.pics[i];
			if( picNo < 10 ){
				pic = 'activityimg0' + picNo;
			}else{
				pic = 'activityimg' + picNo;
			}
			ciq.mask = ciq.game.make.bitmapData(ciq.share[i].width, ciq.share[i].height);
			if( ciq.share[i].width >= ciq.share[i].height ){
				alphaMaskSourceRect = ciq.share[i].width;
			}else{
				alphaMaskSourceRect = ciq.share[i].height;
			}
			ciq.mask.alphaMask(pic, ciq.share[i].src, {x:0, y:0, width:alphaMaskSourceRect, height:alphaMaskSourceRect});
			ciq.game.add.image(ciq.share[i].x, ciq.share[i].y, ciq.mask);								
		}
	}
}
function render() {
}
var mainvisionClick = function(){
	$('.mainvision').fadeOut();
	// $('.mainvision').remove();
	$('article').fadeIn();
	$('bannerblock').fadeIn();
	$('.buybtn').fadeIn();
	$('body').css('overflow','auto');
	$('header').css('background','transparent');
	return false;
}
var fb_api_me = function(){
	FB.api('/me', function(response) {
		fblogin(response.id, response.name);
	});
}
var fb_login = function(){
	FB.login(function(response) {
	  if (response.authResponse) {
		fb_api_me();
	  } else {
		alert('登入Facebook並且授權取得姓名及大頭照, 即可馬上參加.');
	  }
	});
}
var resize = function(){
	ciq.winW = $(window).width();
	if( ciq.winW < 768 ){
		$('#form-success').css({width:ciq.winW*0.95, height:ciq.winW*0.95*0.5295815295815296});
	}
}
$(window).resize(function(){
	resize();
});
$(function(){

	resize();
	
	document.getElementById("mainbutton").addEventListener("click", mainvisionClick);
	// document.getElementById("activitybtn").addEventListener("click", mainvisionClick);
	
	$('.close-pop').on("click", function(){
		$('.pop').fadeOut("fast");
		return false;
	});	
	$('.activityimg .col5').on("click", function(){
		$(this).toggleClass("active");
	});
	
	//製作完美假期
	$('#btn-makeshow').on("click", function(){
		if($('.activityimg .col5.active').length > 2){
			var target = '#activityshareblock';
			// var target = '#activitydatablock';
			$(target).fadeIn();
			$("html, body").animate({
				scrollTop: $(target).offset().top
			}, 400);		
			update();
			$('#activityshareblock').show();
			$('#activitydatablock').show();
		}else{
			//alert("從10張昆士蘭圖片中，選出3張【你的完美假期】元素");
			$('#btn-makeshow-msg').animate({opacity:1}, 100, function(){
				setTimeout(function(){
					$('#btn-makeshow-msg').css({opacity:0});
				}, 3000);
			});
		}
		return false;
	});
	
	//送出表單
	/*
	$('#btn-submit').on("click", function(){
		//ciq.user_state = "start";
		//if( ciq.user_state == "start"){
			var resizedCanvas = document.createElement("canvas");
			var resizedContext = resizedCanvas.getContext("2d");
			resizedCanvas.width = "1200";
			resizedCanvas.height = "630";
			var canvasSrc = $('#shareimg canvas')[0];
			var contextSrc = canvasSrc.getContext("2d");
			resizedContext.drawImage(canvasSrc, 0, 0, 1200, 630);
			ciq.shareimg = resizedCanvas.toDataURL();
		//}
		
		//file_upload(); 上傳檔案
		$.ajax({
			url: "app/index.php/page/upload_photo",
			type: "POST",
			dataType: "json",
			data: {
				imgdata: ciq.shareimg, id:ciq.shareRandom
			}
		}).done(function(response){
			post_data();//送出資料
			
			//fbShare(response.state, response.url);			
		});
		
		
		return false;
	});	
	*/
	$('#btn-submit').on("click", function(){
		
		//upload_photo 取得合成圖片
		var resizedCanvas = document.createElement("canvas");
		var resizedContext = resizedCanvas.getContext("2d");
		resizedCanvas.width = "1200";
		resizedCanvas.height = "630";
		var canvasSrc = $('#shareimg canvas')[0];
		var contextSrc = canvasSrc.getContext("2d");
		resizedContext.drawImage(canvasSrc, 0, 0, 1200, 630);
		ciq.shareimg = resizedCanvas.toDataURL();
		
		//送出資料
		post_data();
		
		/*
		//上傳
		$.ajax({
			url: "app/index.php/page/upload_photo",
			type: "POST",
			dataType: "json",
			data: {
				imgdata: ciq.shareimg, id:ciq.shareRandom
			}
		}).done(function(response){
			// fbShare(response.state, response.url);
			
			//送出資料
			post_data();
		});
		*/
	});	
	
	$('#btn-share').on("click", function(){
		/*
		if( ciq.user_state == "start"){
			var resizedCanvas = document.createElement("canvas");
			var resizedContext = resizedCanvas.getContext("2d");
			resizedCanvas.width = "1200";
			resizedCanvas.height = "630";
			var canvasSrc = $('#shareimg canvas')[0];
			var contextSrc = canvasSrc.getContext("2d");
			resizedContext.drawImage(canvasSrc, 0, 0, 1200, 630);
			ciq.shareimg = resizedCanvas.toDataURL();
		}
		file_upload();
		*/
		fbShare();
		return false;
	});
	


	
	//複製連結到剪貼簿	
	$('.btn-copy').on("click", function(){
		const input = document.createElement('input');
		document.body.appendChild(input);
		input.setAttribute('value', '#華航布里斯本 #我的完美假期 #visitqueensland');
		input.select();
		if (document.execCommand('copy')) {
			document.execCommand('copy');
			// alert("已複製連結");
			$('.btn-copy').html('<img src="images/btn-copyact.png">');
		}
		document.body.removeChild(input);
		return false;
	});
	
	//Test
	// mainvisionClick();
	// $('#activityshareblock').show();
	// $('#overlay').show();
	// $('#form-success').show();
	
});
var formInit = function(){
	$('#activitydatablock .db').each(function( index ) {
		$(this).val("");
	});	 
}
var post_data = function(){		
	 var msg = "";
	 var msg2 = "";
	 $('#activitydatablock .msg').html("");
	$("#activitydatablock .db").each(function(){  
		var input = $(this);
		if( input.val() == "" ){
			msg = msg + input.attr('attr') + '<br />';
		}else{
			if(input.attr('name') == 'email'){
				emailRule = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;	
				if( input.val().search(emailRule) == -1 ){
					msg2 = '請確認E-mail格式';				
				}else{
					db[input.attr('name')] = input.val();
				}					
			}else{
				db[input.attr('name')] = input.val();
			}
		}
	});	
	if( msg == "" &&  msg2 == "" ){
		logs('inside', 'view', '9');
		
		$.ajax({
			url: "app/index.php/page/post_data",
			beforeSend: function( xhr ) {
			},
			type: "POST",
			dataType: "json",
			data: {
				name:db['name'], phone:db['phone'], email:db['email'], address:db['address'],
				imgdata: ciq.shareimg, id:ciq.shareRandom
			}
		}).done(function(response) {
				if(response.code=="success"){
					ciq.shareurl = response.url;
					
					logs('inside', 'view', '10');
					formInit();
					 $('#activitydatablock .success').html("資料送出成功，立即分享抽好禮 !");
					 $('#activitydatablock .error').html("");
					 $('#overlay').show();
					 $('#form-success').fadeIn();
					 
					 
					 $('#activitydatablock').hide();
					 $('.sectionblock-btns').show();
					 
				}
				if(response.code=="repeat"){
					 $('#activitydatablock .success').html("");
					 $('#activitydatablock .error').html(response.msg);					
				}
				if(response.code=="error"){
					$('#activitydatablock .success').html("");
					$('#activitydatablock .error').html("所有欄位必填。");
				}				
		});	
	}else{
		$('#activitydatablock .success').html("");
		if( msg != "" ){
			msg = '所有欄位必填。';
		}
		$('#activitydatablock .error').html(msg + msg2);
	}
}

function fbShare(){
	if(isMobile){
		location.href = 'https://www.facebook.com/sharer/sharer.php?u=' + ciq.shareurl;
	}else{
		FB.ui({
		  method:'share',
		  mobile_iframe: true,
		  href: ciq.shareurl
		}, function(response){
			// if(state=="start" || state=="continue"){
				// var target = '#activitydatablock';
				// $(target).fadeIn();
				// $("html, body").animate({
					// scrollTop: $(target).offset().top
				// }, 400);
			// }
		});
	}	
}

function file_upload(){		
	
	$.ajax({
		url: "app/index.php/page/upload_photo",
		type: "POST",
		dataType: "json",
		data: {
			imgdata: ciq.shareimg, id:ciq.shareRandom
		}
	}).done(function(response){
		fbShare(response.state, response.url);
	});
	/*
	if(ciq.user_state == "start"){
		$.ajax({
			url: "app/index.php/page/upload_photo",
			type: "POST",
			dataType: "json",
			data: {
				imgdata: ciq.shareimg, id:ciq.shareRandom
			}
		}).done(function(response){
			fbShare(response.state, response.url);
		});
	}else{
		$.ajax({
			url: "app/index.php/page/upload_photo",
			type: "POST",
			dataType: "json",
			data: {
				imgdata:"", id:""
			}
		}).done(function(response){
			fbShare(response.state, response.url);
		});
	}
	*/
	return false;
}


/*
function fbShare(state, url){
	// if(isMobile){
		// location.href = 'https://www.facebook.com/sharer/sharer.php?u=' + url;
	// }else{
		// FB.ui({
		  // method:'share',
		  // mobile_iframe: true,
		  // href: url
		// }, function(response){
			// if(state=="start" || state=="continue"){
				// var target = '#activitydatablock';
				// $(target).fadeIn();
				// $("html, body").animate({
					// scrollTop: $(target).offset().top
				// }, 400);
			// }
		// });
	// }
	
	
	FB.ui({
	  method:'share',
	  mobile_iframe: true,
	  href: url
	}, function(response){
		//if(state=="start" || state=="continue"){
			logs('inside', 'view', '8');
			
			// var target = '#activitydatablock';
			// $(target).fadeIn();
			// $("html, body").animate({
				// scrollTop: $(target).offset().top
			// }, 400);
		//}
	});
	
}
*/

function fblogin(id, name){
	
	$.ajax({
		url: "app/index.php/page/fblogin",
		type: "POST",
		dataType: "json",
		data: {
			id:id, name:name
		}
	}).done(function(response) {		
		ciq.user_state = response.code;
		if(response.code == "final"){
			mainvisionClick();
			$('#activityimgblock').hide();
			$('#shareimg').html('<img src="' + response.share_img + '" />');
			$('#activityshareblock').show();
		}
		if(response.code == "continue"){
			mainvisionClick();
			$('#activityimgblock').hide();
			$('#shareimg').html('<img src="' + response.share_img + '" />');
			$('#activityshareblock').show();
			$('#activitydatablock').show();
		}
		if(response.code == "start"){
			mainvisionClick();
		}
		if(response.code == "error"){
			alert("操作錯誤");
		}		
	});
	
	return false;
}

