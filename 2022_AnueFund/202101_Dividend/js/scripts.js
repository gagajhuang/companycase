(function($){
  "use strict";

  $(window).on('load', function() {
    // 開戶
    $('.opentrack').on('click',function(e) {
      window.launch_Registration_Appier(window.location.href,'https://www.anuefund.com/FundSpec/OpenAcct/');
      setTimeout(window.open('https://www.anuefund.com/FundSpec/OpenAcct/', '_blank'),500);
    });
    // 各基金
    $('.fundtrack').on('click', function(e) {
      var fundId = $(this).data('fundid');
      // console.log(fundId);
      window.launch_Addtocart_Appier(window.location.href, fundId);
      setTimeout(window.open('https://www.anuefund.com/FundSpec/redr/?FundID=' + fundId , '_blank'),500);
    });

    // Preloader
    $('.loader').fadeOut();
    $('.loader-mask').delay(350).fadeOut('slow');

    $(window).trigger("resize");
    initCounters();

  });
  const lumpSum = document.getElementById('lump_sum');
const result = document.querySelector('.result');
const selectOption = document.getElementById('select-fund');
// const btn = document.querySelector('button');

function countAct(e){
  let fundRate;
  switch(selectOption.value) {
    case '鋒裕':
      fundRate = 7.66
      break;
    case '摩根':
      fundRate = 9.00
      break;
    case 'NN':
      fundRate = 9.91
      break;
    case '法巴':
      fundRate = 8.24
      break;
    case '路博邁':
      fundRate = 6.91
      break;
    case '群益':
      fundRate = 6.00
      break;
    case '安聯':
      fundRate = 5.86
      break;
    case '瑞銀':
      fundRate = 5.97
      break;
    case '貝萊德':
      fundRate = 5.74
      break;
    case '景順':
      fundRate = 3.96
      break;
    case '第一金':
      fundRate = 5.01
      break;
    case '駿利亨':
      fundRate = 4.21
      break;
    case '首源':
      fundRate = 4.00
      break;
  }

  if(lumpSum.value >= 30000001) {
    alert('請輸入正確金額！\n因應電子交易法規定每一客戶每天申購金額不得超過新台幣 3 千萬，請輸入 ≦ 30,000,000 之金額。');
    lumpSum.value = '30000000';
    result.innerHTML = Math.floor(lumpSum.value * fundRate/100/12);
  }else if(lumpSum.value <= 0 && lumpSum.value != ''){
    alert('請輸入正確金額！\n單筆每次最低扣款門檻為新台幣 3,000 元，請輸入 ≧ 3,000 之金額。');
    lumpSum.value = '3000';
    result.innerHTML = Math.floor(lumpSum.value * fundRate/100/12);
  };
  
  if (lumpSum.value != '') {
    let sum = Math.floor(lumpSum.value * fundRate/100/12);
    result.innerHTML = toThousands(sum)+'元';
  }else{
    result.innerHTML = '???元';
  }
}

lumpSum.addEventListener('keyup', function(e){
  countAct(e);
})
selectOption.addEventListener('change', function(e){
  countAct(e);
})

//判斷加入逗號
function toThousands(num) {
  let result = '', counter = 0;
  num = (num || 0).toString();
  for (let i = num.length - 1; i >= 0; i--) {
    counter++;
    result = num.charAt(i) + result;
    if (!(counter % 3) && i != 0) { result = ',' + result; }
  }
  return result;
}

  // Init
  initOwlCarousel();
  initTextrotator();
  initMasonry();


  // Resize  
  $(window).resize(function(){
    
    containerFullHeight();
    initMasonry();

  });


  /* Detect Browser Size
  -------------------------------------------------------*/
  var minWidth;
  if (Modernizr.mq('(min-width: 0px)')) {
    // Browsers that support media queries
    minWidth = function (width) {
      return Modernizr.mq('(min-width: ' + width + 'px)');
    };
  }
  else {
    // Fallback for browsers that does not support media queries
    minWidth = function (width) {
      return $(window).width() >= width;
    };
  }

  /* Mobile Detect
  -------------------------------------------------------*/
  if (/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(navigator.userAgent || navigator.vendor || window.opera)) {
     $("html").addClass("mobile");
     $('.dropdown-toggle').attr('data-toggle', 'dropdown');
  }
  else {
    $("html").removeClass("mobile");
  }

  /* IE Detect
  -------------------------------------------------------*/
  if(Function('/*@cc_on return document.documentMode===10@*/')()){ $("html").addClass("ie"); }


  /* Sticky Navigation
  -------------------------------------------------------*/
  $(window).scroll(function(){

    scrollToTop();
    var $stickyNav = $('.nav--sticky');

    if ($(window).scrollTop() > 2 & minWidth(992)) {
      $stickyNav.addClass('sticky');
      $('.nav').addClass('sticky');
    } else {
      $stickyNav.removeClass('sticky');
      $('.nav').removeClass('sticky');
    }

  });

  function stickyNavRemove() {
    if (!minWidth(992)) {
      $('.nav--sticky').removeClass('sticky');
    }
  } 


  // Onepage Nav        
  $('#onepage-nav').on('click', 'li > a', function() {
    $("#navbar-collapse").collapse('hide');
  });


  // Smooth Scroll Navigation
  $('.local-scroll').localScroll({offset: {top: -60},duration: 1500,easing:'easeInOutExpo'});
  $('.local-scroll-no-offset').localScroll({offset: {top: 0},duration: 1500,easing:'easeInOutExpo'});


  /* Mobile Navigation
  -------------------------------------------------------*/
  var $dropdownTrigger = $('.nav__dropdown-trigger');
  $dropdownTrigger.on('click', function() {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
    }
    else {
      $(this).addClass("active");
    }
  });
  

  if ( $('html').hasClass('mobile') ) {
    $('body').on('click',function() {
      $('.nav__dropdown-menu').addClass('hide-dropdown');
    });

    $('.nav__dropdown').on('click', '> a', function(e) {
      e.preventDefault();
    });

    $('.nav__dropdown').on('click',function(e) {
      e.stopPropagation();
      $('.nav__dropdown-menu').removeClass('hide-dropdown');
    });
  }


  /* Search
  -------------------------------------------------------*/
  var $navSearchWrap = $('.nav__search-wrap');
  var $navSearchTrigger = $('#nav__search-trigger');
  var $navSearchClose = $('#nav__search-close');

  $navSearchTrigger.on('click',function(e){
    e.preventDefault();
    $navSearchWrap.animate({opacity: 'toggle'},500);
    $navSearchTrigger.add($navSearchClose).addClass("open");
    $('.nav__search-input').focus();
  });

  $navSearchClose.on('click',function(e){
    e.preventDefault();
    $navSearchWrap.animate({opacity: 'toggle'},500);
    $navSearchTrigger.add($navSearchClose).removeClass("open");
  });

  function closeSearch(){
    $navSearchWrap.fadeOut(200);
    $navSearchTrigger.add($navSearchClose).removeClass("open");
  }
    
  $(document.body).on('click',function(e) {
    closeSearch();
  });

  $("#nav__search-trigger, .nav__search-input").on('click',function(e) {
    e.stopPropagation();
  });



  /* Text Rotator
  -------------------------------------------------------*/
  function initTextrotator(){

    $(".rotate").textrotator({
      animation: "dissolve", // You can pick the way it animates when rotating through words. Options are dissolve (default), fade, flip, flipUp, flipCube, flipCubeUp and spin.
      separator: ",",
      speed: 3000 
    });
  }


  /* Isotope Filter
  -------------------------------------------------------*/
  var $portfolioFilter = $('#project-grid, #masonry-grid');
  $('.project-filter').on( 'click', 'a', function(e) {
    e.preventDefault();
    var filterValue = $(this).attr('data-filter');
    $portfolioFilter.isotope({ filter: filterValue });
    $('.project-filter a').removeClass('active');
    $(this).closest('a').addClass('active');
  });


  /* Portfolio
  -------------------------------------------------------*/
  var $portfolio = $('#project-grid');
  $portfolio.imagesLoaded( function() {
    $portfolio.isotope({
      itemSelector: '.project',
      layoutMode: 'fitRows',
      percentPosition: true
    });
  });


  /* Masonry
  -------------------------------------------------------*/

  function initMasonry(){

    var $masonry = $('#masonry-grid');
    $masonry.imagesLoaded( function() {
      $masonry.isotope({
        itemSelector: '.project',
        layoutMode: 'masonry',
        percentPosition: true,
        masonry: {
          columnWidth: '.isotope-small'
        }
      });        
    });
  }


  /* Counters
  -------------------------------------------------------*/
  function initCounters() {
    $('.counter').appear(function() {
      $('.counter__timer').countTo({
        speed: 4000,
        refreshInterval: 60,
        formatter: function (value, options) {
          return value.toFixed(options.decimals);
        }
      });      
    });
  }


  /* Progress Bars
  -------------------------------------------------------*/
  $('#animated-skills').appear(function() {
  
    function loadDaBars() {
      var bar = $('.progress__bar');
      var bar_width = $(this);
      $(function(){
        $(bar).each(function(){
        bar_width = $(this).attr('aria-valuenow');
        $(this).width(bar_width + '%');
        });
      });
    }
    loadDaBars();
  });


  /* Pie Charts
  -------------------------------------------------------*/
  $(function() {
    $('.chart').appear(function() {

      $('.chart').easyPieChart({

        animate:{
        duration:1500,
        enabled:true
        },
        scaleColor:false,
        trackColor:'#f7f9fa',
        lineWidth: 5,
        size: 180,
        lineCap: 'square',

        onStep: function(from, to, percent) {
          $(this.el).find('.percent').text(Math.round(percent));
        }
      });
      var chart = window.chart = $('.chart').data('easyPieChart');
      $('.js_update').on('click', function() {
        chart.update(Math.random()*200-100);
      });
    });
  });


  /* Accordion
  -------------------------------------------------------*/
  function toggleChevron(e) {
    $(e.target)
      .prev('.accordion-panel__heading')
      .find("a")
      .toggleClass('plus minus');
  }
  $('#accordion').on('hide.bs.collapse', toggleChevron);
  $('#accordion').on('show.bs.collapse', toggleChevron);



  /* Tabs
  -------------------------------------------------------*/
  $('.tabs__link').on('click', function(e) {
    var currentAttrValue = $(this).attr('href');
    $('.tabs__content ' + currentAttrValue).stop().fadeIn(1000).siblings().hide();
    $(this).parent('li').addClass('active').siblings().removeClass('active');
    e.preventDefault();
  });



  /* Lightbox popup
  -------------------------------------------------------*/

  $('.lightbox-img, .lightbox-video').magnificPopup({
    callbacks: {
      elementParse: function(item) {
      if(item.el.context.className == 'lightbox-video') {
          item.type = 'iframe';
        } else {
          item.type = 'image';
        }
      }
    },
    type: 'image',
    closeBtnInside:false,
    gallery: {
      enabled:true
    },
    image: {
      titleSrc: 'title',
      verticalFit: true
    }
  });

  // Single video lightbox
  $('.single-video-lightbox').magnificPopup({
    type: 'iframe',
    closeBtnInside:false,
    tLoading: 'Loading image #%curr%...'
  });
  

  /* Owl Carousel
  -------------------------------------------------------*/
  function initOwlCarousel(){
    (function($){
      "use strict";

      // Partners
      $("#owl-partners").owlCarousel({
        autoPlay: 3000,
        pagination: false,
        itemsCustom: [
          [0, 2],      
          [450, 2],
          [700, 3],
          [1000, 3],
          [1200, 4],
          [1400, 5],
          [1600, 6]
        ],
      })


      // Featured Works
      $("#owl-featured-works").owlCarousel({
        pagination: false,
        itemsCustom: [
          [0, 1],      
          [550, 2],
          [700, 2],
          [850, 3],
          [1000, 3],
          [1200, 4],
          [1600, 5]
        ],
      })


      // Featured Works (4 items)
      $("#owl-featured-works-4").owlCarousel({
        pagination: true,
        itemsCustom: [
          [0, 1],      
          [550, 2],
          [700, 2],
          [850, 3],
          [1000, 3],
          [1200, 4],
          [1600, 4]
        ],
      })

      // Owl Single
      $("#owl-single").owlCarousel({

        slideSpeed: 300,
        singleItem: true,
        paginationSpeed: 200,
        pagination: true,
        paginationNumbers: true

      });

      // Promo Section
      var owlPromo = $("#owl-promo");
      owlPromo.owlCarousel({
     
        slideSpeed: 300,
        pagination: false,
        paginationSpeed: 400,
        singleItem: true
     
      });

      // Blog Gallery Post
      var owlBlog = $("#owl-blog");
      owlBlog.owlCarousel({
      
        slideSpeed: 300,
        pagination: false,
        paginationSpeed: 400,
        itemsCustom: [
          [0, 1],      
          [450, 1],
          [1200, 2],
        ],
      
      });


      var owlRelated = $("#owl-related-projects"); 
      owlRelated.owlCarousel({

        slideSpeed: 300,
        paginationSpeed: 400,
        items: 3,
        itemsDesktop: [1199,3],
        itemsDesktopSmall: [979,3],
        pagination: false

      });

      // Custom Navigation Events
      $(".owl-custom-navigation__next").on('click',function(){
        owlPromo.trigger('owl.next');
        owlBlog.trigger('owl.next');
        owlRelated.trigger('owl.next');
      })
      $(".owl-custom-navigation__prev").on('click',function(){
        owlPromo.trigger('owl.prev');
        owlBlog.trigger('owl.prev');
        owlRelated.trigger('owl.prev');
      });
      

      // Testimonials
      $("#owl-testimonials").owlCarousel({
     
        navigation: false,
        slideSpeed: 300,
        pagination: true,
        paginationSpeed: 400,
        singleItem: true,
        autoPlay: false,
        stopOnHover: true
     
      });

      // Owl Hero Slider
      $("#owl-single-project").owlCarousel({
        transitionStyle: "fadeUp",
        autoHeight: true,
        navigation: true,
        slideSpeed: 300,
        singleItem: true,
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
     
      });


    })(jQuery);
  };


  /* Flexslider / Blog Masonry
  -------------------------------------------------------*/

  $('#flexslider-single').flexslider({
    animation: "slide",
    directionNav: true,
    touch: true,
    slideshow: false,
    prevText: ["<i class='fa fa-angle-left'></i>"],
    nextText: ["<i class='fa fa-angle-right'></i>"],
    start: function(){
      var $container = $('.masonry');
      $container.imagesLoaded( function() {
        $container.isotope({
          itemSelector: '.masonry-item',
          layoutMode: 'masonry'
        });
      });
    }
  });


  /* Full Height Container
  -------------------------------------------------------*/

  function containerFullHeight(){
    (function($){
      $(".container-full-height").height($(window).height());
    })(jQuery);
  }


  /* Wow Animations
  -------------------------------------------------------*/

  var wow = new WOW({
    offset: 50,
    mobile: false
  });

  wow.init();


  /* ---------------------------------------------------------------------- */
  /*  Contact Form
  /* ---------------------------------------------------------------------- */

  var submitContact = $('#submit-message'),
    message = $('#msg');

  submitContact.on('click', function(e){
    e.preventDefault();

    var $this = $(this);
    
    $.ajax({
      type: "POST",
      url: 'contact.php',
      dataType: 'json',
      cache: false,
      data: $('#contact-form').serialize(),
      success: function(data) {

        if(data.info !== 'error'){
          $this.parents('form').find('input[type=text],input[type=email],textarea,select').filter(':visible').val('');
          message.hide().removeClass('success').removeClass('error').addClass('success').html(data.msg).fadeIn('slow').delay(5000).fadeOut('slow');
        } else {
          message.hide().removeClass('success').removeClass('error').addClass('error').html(data.msg).fadeIn('slow').delay(5000).fadeOut('slow');
        }
      }
    });
  });


  /* Scroll to Top
  -------------------------------------------------------*/
  function scrollToTop() {
    var scroll = $(window).scrollTop();
    var $backToTop = $("#back-to-top");
    if (scroll >= 50) {
      $backToTop.addClass("show");
    } else {
      $backToTop.removeClass("show");
    }
  }

  $('a[href="#top"]').on('click',function(){
    $('html, body').animate({scrollTop: 0}, 1350, "easeInOutQuint");
    return false;
  });

})(jQuery);