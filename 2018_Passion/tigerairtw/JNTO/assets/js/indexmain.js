$(function() {
    var winW = $(window).width();
    console.log(winW);
    var navH = $("#navbar").offset().top;
    $(window).scroll(function() {
        var scroH = $(this).scrollTop();
        if (scroH >= navH && winW < 1240) {
            $("#navbar").css({
                "position": "fixed",
                "top": 0
            });
        } else if (scroH < navH) {
            $("#navbar").css({
                "position": "static"
            });
        }
    })
})
$(function() {
    $(".mapcontainer").mapael({
        map: {
            name: "japantiger",
            // Set default plots and areas style
            defaultPlot: {
                attrs: {
                    fill: "#004a9b",
                    opacity: 0.6
                },
                attrsHover: {
                    opacity: 1
                },
                text: {
                    attrs: {
                        fill: "#505444"
                    },
                    attrsHover: {
                        fill: "#000"
                    }
                }
            },
            defaultArea: {
                attrs: {
                    fill: "#f4f4e8",
                    stroke: "#ced8d0"
                },
                attrsHover: {
                    fill: "#f4f4e8"
                },
                text: {
                    attrs: {
                        fill: "#505444"
                    },
                    attrsHover: {
                        fill: "#000"
                    }
                }
            },
            defaultLink: {
                factor: 0.4,
                attrsHover: {
                    stroke: "#a4e100"
                }
            }
        },

        // Add some plots on the map
        plots: {
            'Asahikawa': {
                type: "image",
                url: "./images/mapbtn01.svg",
                width: 73,
                height: 26,
                x: 470,
                y: 160,
                attrs: {
                    opacity: 1
                },
                attrsHover: {
                    src: "./images/mapbtn-hover01.svg",
                    width: 100,
                    height: 35,
                },
                // tooltip: {
                //     content: "<span style=\"font-weight:bold;\">City :</span> Lyon"
                // },
                href: "./asahikawa.html",
                target: "_blank"
            },
            'Hakodate': {
                type: "image",
                url: "./images/mapbtn02.svg",
                width: 73,
                height: 26,
                x: 400,
                y: 200,
                attrs: {
                    opacity: 1
                },
                attrsHover: {
                    // transform: "s1.5"/*變大*/,
                    src: "./images/mapbtn-hover02.svg",
                    width: 100,
                    height: 35,
                },
                href: "./hakodate.html",
                target: "_blank"
            },
            'Hanamaki': {
                type: "image",
                url: "./images/mapbtn03.svg",
                width: 73,
                height: 26,
                x: 450,
                y: 290,
                attrs: {
                    opacity: 1
                },
                attrsHover: {
                    src: "./images/mapbtn-hover03.svg",
                    width: 100,
                    height: 35,
                },
                href: "./hanamaki.html",
                target: "_blank"
            },
            'Sendai': {
                type: "image",
                url: "./images/mapbtn04.svg",
                width: 73,
                height: 26,
                x: 460,
                y: 330,
                attrs: {
                    opacity: 1
                },
                attrsHover: {
                    // transform: "s1.5"/*變大*/,
                    src: "./images/mapbtn-hover04.svg",
                    width: 100,
                    height: 35,
                },
                href: "./sendai.html",
                target: "_blank"
            },
            'Ibaraki': {
                type: "image",
                url: "./images/mapbtn05.svg",
                width: 73,
                height: 26,
                x: 450,
                y: 390,
                attrs: {
                    opacity: 1
                },
                attrsHover: {
                    src: "./images/mapbtn-hover05.svg",
                    width: 100,
                    height: 35,
                },
                href: "./ibaraki.html",
                target: "_blank"
            },
            'TokyoHaneda': {
                type: "image",
                url: "./images/mapbtn06.svg",
                width: 73,
                height: 26,
                x: 440,
                y: 440,
                attrs: {
                    opacity: 1
                },
                attrsHover: {
                    // transform: "s1.5"/*變大*/,
                    src: "./images/mapbtn-hover06.svg",
                    width: 100,
                    height: 35,
                },
                href: "./tokyo.html",
                target: "_blank"
            },
            'TokyoNarita': {
                type: "image",
                url: "./images/mapbtn07.svg",
                width: 73,
                height: 26,
                x: 450,
                y: 470,
                attrs: {
                    opacity: 1
                },
                attrsHover: {
                    src: "./images/mapbtn-hover07.svg",
                    width: 100,
                    height: 35,
                },
                href: "./tokyo.html",
                target: "_blank"
            },
            'Nagoya': {
                type: "image",
                url: "./images/mapbtn08.svg",
                width: 73,
                height: 26,
                x: 350,
                y: 500,
                attrs: {
                    opacity: 1
                },
                attrsHover: {
                    // transform: "s1.5"/*變大*/,
                    src: "./images/mapbtn-hover08.svg",
                    width: 100,
                    height: 35,
                },
                href: "./nagoya.html",
                target: "_blank"
            },
            'Osaka': {
                type: "image",
                url: "./images/mapbtn09.svg",
                width: 73,
                height: 26,
                x: 330,
                y: 530,
                attrs: {
                    opacity: 1
                },
                attrsHover: {
                    src: "./images/mapbtn-hover09.svg",
                    width: 100,
                    height: 35,
                },
                href: "./osaka.html",
                target: "_blank"
            },
            'Komatsu': {
                type: "image",
                url: "./images/mapbtn10.svg",
                width: 73,
                height: 26,
                x: 320,
                y: 410,
                attrs: {
                    opacity: 1
                },
                attrsHover: {
                    // transform: "s1.5"/*變大*/,
                    src: "./images/mapbtn-hover10.svg",
                    width: 100,
                    height: 35,
                },
                href: "./komatsu.html",
                target: "_blank"
            },
            'Okayama': {
                type: "image",
                url: "./images/mapbtn11.svg",
                width: 73,
                height: 26,
                x: 270,
                y: 455,
                attrs: {
                    opacity: 1
                },
                attrsHover: {
                    src: "./images/mapbtn-hover11.svg",
                    width: 100,
                    height: 35,
                },
                href: "./okayama.html",
                target: "_blank"
            },
            'Fukuoka': {
                type: "image",
                url: "./images/mapbtn12.svg",
                width: 73,
                height: 26,
                x: 220,
                y: 490,
                attrs: {
                    opacity: 1
                },
                attrsHover: {
                    // transform: "s1.5"/*變大*/,
                    src: "./images/mapbtn-hover12.svg",
                    width: 100,
                    height: 35,
                },
                href: "./fukuoka.html",
                target: "_blank"
            },
            'Saga': {
                type: "image",
                url: "./images/mapbtn13.svg",
                width: 73,
                height: 26,
                x: 200,
                y: 520,
                attrs: {
                    opacity: 1
                },
                attrsHover: {
                    src: "./images/mapbtn-hover13.svg",
                    width: 100,
                    height: 35,
                },
                href: "./saga.html",
                target: "_blank"
            },
            'Okinawa': {
                type: "image",
                url: "./images/mapbtn14.svg",
                width: 73,
                height: 26,
                x: 300,
                y: 600,
                attrs: {
                    opacity: 1
                },
                attrsHover: {
                    // transform: "s1.5"/*變大*/,
                    src: "./images/mapbtn-hover14.svg",
                    width: 100,
                    height: 35,
                },
                href: "./okinawa.html",
                target: "_blank"
            },
            'Taipei': {
                type: "image",
                url: "./images/mapbtn-taipei.svg",
                width: 73,
                height: 26,
                x: 120,
                y: 650,
                attrs: {
                    opacity: 1
                },
            },
            'Kaohsiung': {
                type: "image",
                url: "./images/mapbtn-Kaohsiung.svg",
                width: 73,
                height: 26,
                x: 90,
                y: 710,
                attrs: {
                    opacity: 1
                },
            },

        },
        links: {
            'TaipeiAsahikawa': {
                factor: -0.5,
                between: ['Taipei', 'Asahikawa'],
                attrs: {
                    stroke: "#3381C4",
                    "stroke-width": 1,
                    "stroke-linecap": "round",
                    opacity: 1
                }
            },
            'TaipeiHakodate': {
                factor: -0.4,
                between: ['Taipei', 'Hakodate'],
                attrs: {
                    stroke: "#3381C4",
                    "stroke-width": 1,
                    "stroke-linecap": "round",
                    opacity: 1
                }
            },
            'TaipeiHanamaki': {
                factor: 0.5,
                between: ['Taipei', 'Hanamaki'],
                attrs: {
                    stroke: "#3381C4",
                    "stroke-width": 1,
                    "stroke-linecap": "round",
                    opacity: 1
                }
            },
            'TaipeiSendai': {
                factor: 0.5,
                between: ['Taipei', 'Sendai'],
                attrs: {
                    stroke: "#3381C4",
                    "stroke-width": 1,
                    "stroke-linecap": "round",
                    opacity: 1
                }
            },
            'TaipeiIbaraki': {
                factor: 0.6,
                between: ['Taipei', 'Ibaraki'],
                attrs: {
                    stroke: "#3381C4",
                    "stroke-width": 1,
                    "stroke-linecap": "round",
                    opacity: 1
                }
            },
            'TaipeiTokyoHaneda': {
                factor: 0.7,
                between: ['Taipei', 'TokyoHaneda'],
                attrs: {
                    stroke: "#3381C4",
                    "stroke-width": 1,
                    "stroke-linecap": "round",
                    opacity: 1
                }
            },
            'TaipeiTokyoNarita': {
                factor: 0.7,
                between: ['Taipei', 'TokyoNarita'],
                attrs: {
                    stroke: "#3381C4",
                    "stroke-width": 1,
                    "stroke-linecap": "round",
                    opacity: 1
                }
            },
            'TaipeiNagoya': {
                factor: 0.2,
                between: ['Taipei', 'Nagoya'],
                attrs: {
                    stroke: "#3381C4",
                    "stroke-width": 1,
                    "stroke-linecap": "round",
                    opacity: 1
                }
            },
            'TaipeiOsaka': {
                factor: 0.2,
                between: ['Taipei', 'Osaka'],
                attrs: {
                    stroke: "#3381C4",
                    "stroke-width": 1,
                    "stroke-linecap": "round",
                    opacity: 1
                }
            },
            'TaipeiKomatsu': {
                factor: 0.4,
                between: ['Taipei', 'Komatsu'],
                attrs: {
                    stroke: "#3381C4",
                    "stroke-width": 1,
                    "stroke-linecap": "round",
                    opacity: 1
                }
            },
            'TaipeiOkayama': {
                factor: 0.4,
                between: ['Taipei', 'Okayama'],
                attrs: {
                    stroke: "#3381C4",
                    "stroke-width": 1,
                    "stroke-linecap": "round",
                    opacity: 1
                }
            },
            'TaipeiFukuoka': {
                factor: 0.4,
                between: ['Taipei', 'Fukuoka'],
                attrs: {
                    stroke: "#3381C4",
                    "stroke-width": 1,
                    "stroke-linecap": "round",
                    opacity: 1
                }
            },
            'TaipeiSaga': {
                factor: 0.4,
                between: ['Taipei', 'Saga'],
                attrs: {
                    stroke: "#3381C4",
                    "stroke-width": 1,
                    "stroke-linecap": "round",
                    opacity: 1
                }
            },
            'TaipeiOkinawa': {
                factor: 0.1,
                between: ['Taipei', 'Okinawa'],
                attrs: {
                    stroke: "#3381C4",
                    "stroke-width": 1,
                    "stroke-linecap": "round",
                    opacity: 1
                }
            },

            /*高雄航線*/
            'KaohsiungTokyoHaneda': {
                factor: 0.5,
                between: ['Kaohsiung', 'TokyoHaneda'],
                attrs: {
                    stroke: "#D70051",
                    "stroke-width": 1,
                    "stroke-linecap": "round",
                    opacity: 1
                }
            },

            'KaohsiungNagoya': {
                factor: 0.5,
                between: ['Kaohsiung', 'Nagoya'],
                attrs: {
                    stroke: "#D70051",
                    "stroke-width": 1,
                    "stroke-linecap": "round",
                    opacity: 1
                }
            },
            'KaohsiungOsaka': {
                factor: 0.5,
                between: ['Kaohsiung', 'Osaka'],
                attrs: {
                    stroke: "#D70051",
                    "stroke-width": 1,
                    "stroke-linecap": "round",
                    opacity: 1
                }
            },
            'KaohsiungOkinawa': {
                factor: 0.2,
                between: ['Kaohsiung', 'Okinawa'],
                attrs: {
                    stroke: "#D70051",
                    "stroke-width": 1,
                    "stroke-linecap": "round",
                    opacity: 1
                }
            },
            'KaohsiungFukuoka': {
                factor: 0.4,
                between: ['Kaohsiung', 'Fukuoka'],
                attrs: {
                    stroke: "#D70051",
                    "stroke-width": 1,
                    "stroke-linecap": "round",
                    opacity: 1
                }
            },

        }

    });
});