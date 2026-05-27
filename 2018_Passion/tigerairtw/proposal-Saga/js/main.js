$(document).ready(function(){
	$('#menubtn').on('click', function(e) {
        e.preventDefault(); /*防止打開URL*/
        $('.menu').toggleClass('menu-show');
    });
    $('.menuload').click(function(){
		$('#block02').fadeIn('slow');
		$('.tiger05').fadeIn('slow');
	});
	/*輪播*/
	var owl = $('.owl-carousel');
		owl.owlCarousel({
		    items:1,
		    loop:true,
		    margin:10,
		    // autoplay:true,
		    autoplayTimeout:3000,
		    animateOut: 'fadeOut',
		    mouseDrag:false,
		});

    /*menu換圖*/
	var munuitem = $('.menuload a li').size();//取得個數
　　
	function menuact(i) {
		//odd 奇數
		$('.menuload a li img:odd').eq(i-1).hover(/*i是1 -1才能抓到第0值*/
			function(){
				$(this).attr("src","images/menuload0" + i +"-hover.png")
			},
	　　　　function(){
	　　　　$(this).attr("src","images/menuload0" + i +".png")// src 離開的圖片路徑
	　　})
	}
	for (i=1; i < munuitem+1 ; i++) {
		menuact(i);
	}

	$('.block02left').click(function(){
		$('.postcard01').fadeIn('slow');
		$('.postcard02').fadeOut('slow');
	});
	$('.block02right').click(function(){
		$('.postcard02').fadeIn('slow');
		$('.postcard01').fadeOut('slow');
	});


	$('.postcard02').click(function() {
		$('.maskblock').fadeIn();
		$('body').css('overflow','hidden');
	});
	$('.btnfb').click(function() {
		$('.pop01block').css('display', 'none');
		$('.pop02block').fadeIn();
		$('body').css('overflow','hidden');
	});
	$('.btnreplay,.btnnext').click(function() {
		$('.maskblock').fadeOut();
		$('body').css('overflow','auto');
		$('#block02').css('display', 'none');
		$('.tiger05').css('display', 'none');
		$('.postcard02,.pop02block').fadeOut('slow');
		setTimeout(function(){ 
			$('.pop01block').fadeIn('slow');
		}, 2000);/*延遲兩秒再進入*/
		
	});
	
	/*異業合作*/
	$('.btncooperation').click(function() {
		$('.maskblock2').fadeIn();
		// $('body').css('overflow','hidden');
	});

	$('.closebox').click(function() {
		$('.maskblock').fadeOut();
		$('.maskblock2').fadeOut();
		$('body').css('overflow','auto');
	});
});