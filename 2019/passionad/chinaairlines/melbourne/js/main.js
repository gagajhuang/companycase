$(document).ready(function(){
	$('body').css('overflow','hidden');
	
	$('#buttoncompany').click(function() {
		$('.maskblock2').fadeIn();
		$('body').css('overflow','hidden');
	});
	$('.mainvision').click(function() {
		$('.mainvision').fadeOut();
		$('article').fadeIn();
		$('body').css('overflow','auto');

		setTimeout(function(){
	        $('.Titlepop01').fadeIn();
	    },500);
	    setTimeout(function(){
	        $('.Titlepop02').fadeIn();
	    },1000);
	    setTimeout(function(){
	        $('.Titlepop03').fadeIn(function(){
				start();
			});
	    },1500);

	});
});

/* barblock 代碼段 */
var cmObj = {};
cmObj.secs = 0;
cmObj.secsTotal = 560;//09:20 = 9*60 + 20
cmObj.fadeImgNum = 12;//輪播照片數量
function Check_Time() {
	cmObj.secs += 1;	
	cmObj.secsTmp = cmObj.secs * ( (cmObj.secsTotal/cmObj.fadeImgNum)/3);
	cmObj.hr = Math.floor(cmObj.secs / 3600);
	cmObj.hrTmp = Math.floor(cmObj.secsTmp / 3600);
	cmObj.min = Math.floor((cmObj.secs - (cmObj.hr * 3600)) / 60);
	cmObj.minTmp = Math.floor((cmObj.secsTmp - (cmObj.hrTmp * 3600)) / 60);
	cmObj.sec = parseInt( cmObj.secs - (cmObj.hr * 3600) - (cmObj.min * 60));
	cmObj.secTmp = parseInt( cmObj.secsTmp - (cmObj.hrTmp * 3600) - (cmObj.minTmp * 60));
	if (cmObj.minTmp < 10) { cmObj.minTmp = '0' + cmObj.minTmp; }
	if (cmObj.secTmp < 10) { cmObj.secTmp  = '0' + cmObj.secTmp; }
	cmObj.Check_i = document.getElementById("endtime");
	cmObj.Check_i.innerHTML = cmObj.minTmp + ':' + cmObj.secTmp;
	if( cmObj.secs == 6){
		$('.character img:eq(0)').hide();
		$('.character img:eq(1)').show();
	}
	if( cmObj.secsTmp >= cmObj.secsTotal){
		clearInterval(cmObj.mm);
		setTimeout(function(){
			cmObj.secs = 0;
			start();
		}, 3000);
	}	
}
function timebarPlayFunction() {
	$('.bar').attr('style', 'animation-play-state: running;animation-duration: ' + ((cmObj.fadeImgNum*3)-1) + 's;');
	cmObj.mm = window.setInterval("Check_Time()", 1000);
}
function timebarPauseFunction() {
	$('.bar').attr('style', 'animation-play-state: paused;animation-duration: ' + ((cmObj.fadeImgNum*3)-1) + 's;');
	clearInterval(cmObj.mm);
}
function start(){
	$('.character img:eq(0)').show();
	$('.character img:eq(1)').hide();
	$('.fade').cycle('goto', 0);
	$('.fade').cycle('resume');
	$('.bar').attr("style", "animation-duration: " + ((cmObj.fadeImgNum*3)-1) + "s;");
	$('.bar').removeClass("start");
	setTimeout(function(){
		$('.bar').addClass("start");
	},0);
	cmObj.mm = window.setInterval("Check_Time()", 1000);
}
$(function(){
	$('.fade').cycle({
		fx: 'fade',
		paused:true,
		log: false, 
		slides : '> div',
		speed: 1000,
		timeout: 2000
	}).on( 'cycle-update-view', function( event, optionHash, slideOptionsHash, currentSlideEl) {		
		if( optionHash.currSlide == (cmObj.fadeImgNum-1)){			
			$('.fade').cycle('pause');
		}
	});	
	//start();
	$('.picbutton > img').click(function() {
		$('body').css('overflow','hidden');
		$('.fade').cycle('pause');
		$('.maskblock:eq(' + $('.fade').data("cycle.opts").currSlide + ')').fadeIn();		
		timebarPauseFunction();
	});
	$('.buttonclose').click(function() {
		$('.maskblock').fadeOut();
		$('.maskblock2').fadeOut();
		$('body').css('overflow','auto');
		$('.fade').cycle('resume');
		timebarPlayFunction();
	});


});
/* //barblock 代碼段 */