$('#menubtn').on('click', function(e) {
        e.preventDefault(); /*防止打開URL*/
        $('.mobilemenu').toggleClass('menu-show');
    });

$(document).ready(function() {
	$('#fullpage').fullpage({
		//options here
		autoScrolling:true,
		scrollHorizontally: true,
		// sectionsColor : ['#ccc', '#000','red','blue'],
		anchors: ['page1', 'page2', 'page3', 'page4'],
	    menu: '#menu',
	    lazyLoad: true
	});
	$('.owl-carousel').owlCarousel({
            autoplay:true,
            autoplaySpeed: 1000,
            autoplayTimeout: 3000,
            animateOut: 'fadeOut',
            loop: true,
            margin: 0,
            items: 1,
            dots: false,
    });
    $('.closemenu').on('click', function(e) {
        e.preventDefault(); /*防止打開URL*/
        $('.mobilemenu').toggleClass('menu-show');
    });
    $(window).resize(function() {
        $('iframe').attr('src', $('iframe').attr('src'));//重新載入
    });

    /*圖片切換*/
    $('#foodtabs').tabulous({
        effect: 'scale'
    }); 
     $('#viewtabs').tabulous({
        effect: 'scale'
    });  
     $('#movietabs').tabulousmovie({
        effect: 'scale'
    }); 
    $('.mobilemenu a').click(function(event) {
        $('.mobilemenu').toggleClass('menu-show');
    });
    if ($(window).height()< 560) {
        var liheight = $('#foodtabs li, #viewtabs li, #movietabs li');
        var winheight = $(window).height();
        var navheight = $('nav').height();
        var pageTTmheight = $('.pageTTm').height();

        liheight.height((winheight - navheight - pageTTmheight)/3.1);
    }
});