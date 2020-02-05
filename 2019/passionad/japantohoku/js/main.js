$(document).ready(function(){
	$('#menubtn').on('click', function(e) {
        e.preventDefault(); /*防止打開URL*/
        $('nav').toggleClass('menu-show');
    });

	/*移入停止，移出啟動*/
	$(".circleblock").hover(function(){
	  	$('.circleblock').css('animation-play-state', 'paused');
		$('img').css('animation-play-state', 'paused');
	    },function(){
	    $('.circleblock').css('animation-play-state', 'running');
		$('img').css('animation-play-state', 'running');
	});

  /*menu換圖*/
	var munuitem = $('#menu li').size();//取得個數
　　
	function menuact(i) {
		$('#menu li a img').eq(i-1).hover(/*i是1 -1才能抓到第0值*/
			function(){
				$(this).attr("src","images/hover-icon0" + i +".png")
			},
	　　　　function(){
	　　　　$(this).attr("src","images/menu-icon0" + i +".png")// src 離開的圖片路徑
	　　})
	}
	for (i=1; i < munuitem+1 ; i++) {
		menuact(i);
	}

	// $(".circleimage").click(function(){
	//     alert("Coming Soon!");
	// });
	// $("#menu li:not(:last-child)").click(function(){
	//     alert("Coming Soon!");
	// });

	$(".circleblock img:nth-child(4)").click(function(){
	    window.location.href="schedule.html";
	});
	$(".circleblock img:nth-child(6)").click(function(){
	    window.location.href="map.html";
	});
	$(".circleblock img:nth-child(8)").click(function(){
	    window.location.href="activitytime.html";
	});
	$(".circleblock img:nth-child(12)").click(function(){
	    window.location.href="content.html";
	});
	$(".circleblock img:nth-child(14)").click(function(){
	    window.location.href="gift.html";
	});
	$(".circleblock img:nth-child(16)").click(function(){
	    window.location.href="sixplace.html";
	});

});
