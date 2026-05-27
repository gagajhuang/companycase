$(function() {

    let imageFile   = null, // 使用者選擇的圖檔
        asciiImage  = null; // 圖片，html2canvas 生成的 canvas 轉換而成

    // 將圖檔轉換成 ascii 並再使用 html2canvas 轉為 canvas
    async function convertToAscii() {
        let ascii = new imgToAscii(imageFile, 0.1745);
        await ascii.display();
        html2canvas(document.querySelector('.mission__ascii-canvas'), {
            scale: 1
        }).then(canvas => {
            $('#april-mission .center').removeClass('step-1').addClass('step-2');
            const dataurl = canvas.toDataURL();
            asciiImage = new Image;
            asciiImage.onload = generateAvatar;
            asciiImage.src = dataurl;
        });
    }

    // 加工處理（壓漸層和 logo）生成大頭貼
    function generateAvatar() {

        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        canvas.width = asciiImage.width;
        canvas.height = asciiImage.width;
        
        ctx.drawImage(asciiImage, 0, 0, asciiImage.width, asciiImage.width)

        const drawGradient = () => {
            const gradient = new Image;
            gradient.onload = () => {
                ctx.save();
                ctx.globalCompositeOperation = 'screen';
                ctx.drawImage(gradient, 0, 0, asciiImage.width, asciiImage.width);
                ctx.restore();
                drawLogo();
            }
            gradient.src = './images/mission/april/mission-gradient.jpg';
        }

        const drawLogo = () => {
            const logo = new Image;
            logo.onload = () => {
                ctx.drawImage(logo, 0, 0, asciiImage.width, asciiImage.width);
                $('#april-mission .mission__avatar').html('').append(canvas);

                const dataURL = canvas.toDataURL('image/png');
                $('#april-mission .mission__avatar').append('<img style="position: absolute; top: 0; left: 0;" src="' + dataURL + '">');
                $('#april-mission .mission__button--download').attr('href', dataURL);

                $('.mission__generating').fadeOut(450, function() {
                    togglePopup({ active: "open", element: "#popup-april-mission-complete", isShowBtnClose: true });
                    $.ajax({
                        type: 'POST',
                        cache: 'false',
                        url: API_DOMAIN + 'Eventjoin',
                        // dataType : 'json',
                        data: {
                            EID: APRIL_EID,
                        },
                        headers: {
                            'Authorization': 'Bearer ' + USER_DATA.API_TOKEN
                        },
                        success: function(resp) {
                            // if (resp && resp.rs == API_RESPONSE.OK) {
                            //     togglePopup({ active: "open", element: "#popup-april-mission-complete", isShowBtnClose: true });
                            // }
                        },
                        error: function(resp) {
                            // togglePopup({ active: "open", element: "#popup-april-mission-complete", isShowBtnClose: true });
                            // alert('發生錯誤，錯誤訊息：\n' + JSON.stringify(resp));
                            // console.log(resp);
                            // var respJSON = JSON.parse(resp.responseText)
                            // alert(respJSON.msg);
                            // console.log(respJSON);
                            // if (respJSON && respJSON.rs == API_RESPONSE.BAD) {
                            //     alert(respJSON.msg);
                            // }
                            // alert("系統錯誤，請稍後再試");
                            // window.location.reload();
                        }
                    });
                })

            }
            logo.src = './images/mission/april/mission-logo.png';
        }

        drawGradient();

    }

    var transfer = function(img) {
        if (!(img.src || img instanceof HTMLCanvasElement)) {
            alert('圖檔載入失敗');
        } else {
            imageFile = img.src || img.toDataURL('image/jpeg');
            convertToAscii();
        }
    },
    checkFile = function (file, options) {
        if (!loadImage(file, transfer, options)) { alert('您的瀏覽器不支援 URL 或 FileReader API，建議使用系統預設並更新到最新版本的瀏覽器'); }
    };

// Step 3 點擊上傳照片後，處理圖片(處理 EXIF 旋轉)
    $('#april-mission .mission__file').change(function(e) {
        e.preventDefault();
        $('.ascii-sample').remove();
        $('.mission__generating').fadeIn(450)
        imageFile = null;
        e = e.originalEvent;
        var target = e.dataTransfer || e.target,
            file = target && target.files && target.files[0],
            options = {
                maxWidth: 500,
                maxHeight: 500,
                // minWidth: 256,
                // minHeight: 256,
                canvas: true,
                crop: true
            };
        if (!file) { return; }
        loadImage.parseMetaData(file, function (data) {
            if (data.exif) { options.orientation = data.exif.get('Orientation'); }
            checkFile(file, options);
        });
    });

    const uploadPhoto = () => {
        $('#april-mission .mission__file').trigger('click');
    }

    $('#april-mission .mission__upload').on('click', (e) => {
        e.preventDefault();
        uploadPhoto();
    })

    $('#april-mission .mission__button--upload, #april-mission .mission__button--change').on('click', (e) => {
        e.preventDefault();
        uploadPhoto();
    })

    // $('#april-mission .mission__button--download').on('click', (e) => {})

    // $('#popup-april-mission-complete-btn-to-list').on('click', () => {
    //     window.location.search = "page=mission";
    // })

    $('#april-mission .mission__button--share').on('click', () => {
        IS_NEED_CLOSE = true;
        togglePopup({ active: "open", element: "#popup-share", isShowBtnClose: true });
    })

    // $('#popup-april-mission-complete-btn-share').on('click', () => {
    //     togglePopup({ active: "open", element: "#popup-share", isShowBtnClose: true });
    // })

    // togglePopup({ active: "open", element: "#popup-april-mission-complete", isShowBtnClose: false });

})

$(window).on('load', function() {
    $('#april-mission').addClass('loaded');
})