/*!
 * strength.js
 * Original author: @aaronlumsden
 * Further changes, comments: @aaronlumsden
 * Licensed under the MIT license
 */
;(function ( $, window, document, undefined ) {

    var pluginName = "tabulousmovie",
        defaults = {
            effect: 'scale'
        };

       // $('<style>body { background-color: red; color: white; }</style>').appendTo('head');

    function Plugin( element, options ) {
        this.element = element;
        this.$elem = $(this.element);
        this.options = $.extend( {}, defaults, options );
        this._defaults = defaults;
        this._name = pluginName;
        this.init();
    }

    Plugin.prototype = {

        init: function() {

            var links = this.$elem.find('a');
            var firstchild = this.$elem.find('li:first-child').find('a');
            var lastchild = this.$elem.find('li:last-child').after('<span class="tabulousclear"></span>');

            if (this.options.effect == 'scale') {
                tab_content = this.$elem.find('div.tabs_container .moviefun').not(':first').not(':nth-child(1)').addClass('hidescale');
                tab_content = this.$elem.find('div.btnclose').addClass('hidescale');
                if ($(window).width()<769){
                        tab_content = this.$elem.find('div.tabs_container .moviefun').addClass('hidescale');
                    }
                // /*多增加funact的關係，是因為多增加一個必須先出現div.pageTT，會直接影響到!所以必須區隔*/
                // tab_content = this.$elem.find('div.funact').addClass('hidescale');
                // $(window).resize(function(event) {
                //     if ($(window).width()<769){
                //         $('div.pageTT').removeClass('showscale');
                //     }else{
                //         $('div.pageTT').addClass('showscale');
                //     }
                // });
            } else if (this.options.effect == 'slideLeft') {
                 tab_content = this.$elem.find('div').not(':first').not(':nth-child(1)').addClass('hideleft');
            } else if (this.options.effect == 'scaleUp') {
                 tab_content = this.$elem.find('div').not(':first').not(':nth-child(1)').addClass('hidescaleup');
            } else if (this.options.effect == 'flip') {
                 tab_content = this.$elem.find('div').not(':first').not(':nth-child(1)').addClass('hideflip');
            }

            var firstdiv = this.$elem.find('.tabs_container');
            var firstdivheight = firstdiv.find('div:first').height();
            var alldivs = this.$elem.find('div.moviedownblock').find('div.moviefun');/*movietabs 第一個div之下的所有class=moviefun*/
            /*.find('div') 如果只使用div 會抓到裡面全部內容，導致click時候全部隱藏，所以只須隱藏外層div.moviefun*/

            console.log(alldivs);
            // alldivs.css({'position': 'absolute','top':'40px'});

            // firstdiv.css('height',firstdivheight+'px');

            firstchild.addClass('tabulous_active');


            links.bind('click', {myOptions: this.options}, function(e) {
                e.preventDefault();

                var $options = e.data.myOptions;
                var effect = $options.effect;

                var mythis = $(this);/*這裡是a*/
                /*更改的地方*/
                var thisform = mythis.parent().parent().parent().parent();/*div#movietabs，因堆加了2層div，所以要多往上一個父層級*/
                var thislink = mythis.attr('href');


                firstdiv.addClass('transition');

                links.removeClass('tabulous_active');
                mythis.addClass('tabulous_active');
                thisdivwidth = thisform.find('div'+thislink).height();

                if (effect == 'scale') {
                    alldivs.removeClass('showscale').addClass('make_transist').addClass('hidescale');
                    thisform.find('div.moviefun'+thislink).addClass('make_transist').addClass('showscale');
                    /*----手機板----*/
                    if ($(window).width()<769){
                        thisform.find('div.funact'+thislink).addClass('make_transist').addClass('showscale');
                        thisform.find('div.btnclose').removeClass('hidescale').addClass('showscale');
                        thisform.find('div.btnclose').click(function(event) {
                            thisform.find('div.funact'+thislink).removeClass('showscale').addClass('make_transist').addClass('hidescale');
                        });
                    }
                    $(window).resize(function() {/*確保有人玩視窗*/
                        if ($(window).width()<769){
                            thisform.find('div.btnclose').removeClass('hidescale').addClass('showscale');
                            thisform.find('div.btnclose').click(function(event) {
                                thisform.find('div.funact'+thislink).removeClass('showscale').addClass('make_transist').addClass('hidescale');
                            });
                        }else{
                            thisform.find('div.btnclose').removeClass('showscale').addClass('hidescale');
                            $('div.pageTT').removeClass('showscale');
                        }
                    });
                    
                    
                } else if (effect == 'slideLeft') {
                    alldivs.removeClass('showleft').addClass('make_transist').addClass('hideleft');
                    thisform.find('div'+thislink).addClass('make_transist').addClass('showleft');
                } else if (effect == 'scaleUp') {
                    alldivs.removeClass('showscaleup').addClass('make_transist').addClass('hidescaleup');
                    thisform.find('div'+thislink).addClass('make_transist').addClass('showscaleup');
                } else if (effect == 'flip') {
                    alldivs.removeClass('showflip').addClass('make_transist').addClass('hideflip');
                    thisform.find('div'+thislink).addClass('make_transist').addClass('showflip');
                }


                // firstdiv.css('height',thisdivwidth+'px');

                


            });

           
            // $(window).resize(function() {/*確保有人玩視窗*/
            //     if ($(window).width()<769){
            //         $('div.pageTT').addClass('hidescale');
            //     }else{
                   
            //     }
            // });


         
            
        },

        yourOtherFunction: function(el, options) {
            // some logic
        }
    };

    // A really lightweight plugin wrapper around the constructor,
    // preventing against multiple instantiations
    $.fn[pluginName] = function ( options ) {
        return this.each(function () {
            new Plugin( this, options );
        });
    };

})( jQuery, window, document );


