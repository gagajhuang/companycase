/* eslint-disable max-len */
/* $( document ).ready(function() {
    var snow =new iseedSnow();
    snow.init("snowClip","/images/snow.png"); //canvas 的 id,雪的圖片路徑
    snow.start();
});  */

/*!
* VERSION: 1.0.1
* DATE: 2016-09-08
*
* @url:http://www.i-seedesign.com/
*
* @author: Cyrus,Shiuan
* */

const a = {
    status: 200,
    content: {
    result: 'success',
    item: false,
    },
};

function iseedSnow() {
    this.snowCanvas = null;
    this.snowCtx = null;
    this.W = 0;
    this.H = 0;
    this.snowImg = null;
    this.mp = 40;
    this.particles = [];
}

// objName=canvas 的 id,snowImgURL:雪的圖片路徑
iseedSnow.prototype.init = function (objName, snowImgURL) {
    const snow = document.querySelector(objName);
    const canvasSnow = document.createElement('canvas');
    snow.appendChild(canvasSnow);
    this.snowCanvas = canvasSnow;
    const { style } = canvasSnow;
    style.display = 'block'; // 樣式設定
    style.position = 'fixed';
    style.height = '100%';
    style.width = '100%';
    style.zIndex = '999';
    style.pointerEvents = 'none';

    this.snowCtx = canvasSnow.getContext('2d');
    this.W = window.innerWidth;
    this.H = window.innerHeight;
    this.snowImg = new Image();
    this.mp = 40;
    this.time = undefined;
    this.particles = [];

    this.snowImg.width = 100;
    this.snowImg.height = 100;
    this.snowImg.src = snowImgURL;

    canvasSnow.width = this.W;
    canvasSnow.height = this.H;

    const main = this;

    if (this.W > 1000) {
    this.mp = 40;
    } else if (this.W > 500) {
    this.mp = 20;
    } else {
    this.mp = 10;
    }

    for (let i = 0; i < this.mp; i++) {
    this.particles.push({
        x: Math.random() * this.W, // x-coordinate
        y: Math.random() * this.H, // y-coordinate
        s: Math.random() * 0.75,
        sd: Math.random() * 5,
        psize: 0,
        r: Math.floor(Math.random() * (180 - 0 + 1)) + 0,
    });
    }

    window.addEventListener('resize', () => {
    window.cancelAnimationFrame(main.time);
    main.resizeCanvas();
    }, false);
};

iseedSnow.prototype.start = function () {
    const main = this;
    // 雪花繪製
    // handle multiple browsers for requestAnimationFrame()
    // console.log("start");
    window.requestAFrame = (function () {
    return window.requestAnimationFrame
                || window.webkitRequestAnimationFrame
                || window.mozRequestAnimationFrame
                || window.oRequestAnimationFrame
                // if all else fails, use setTimeout
                || function (callback) {
                    return window.setTimeout(callback, 1000 / 60); // shoot for 60 fps
                };
    }());

    // handle multiple browsers for cancelAnimationFrame()
    window.cancelAFrame = (function () {
    return window.cancelAnimationFrame
                || window.webkitCancelAnimationFrame
                || window.mozCancelAnimationFrame
                || window.oCancelAnimationFrame
                || function (id) {
                    window.clearTimeout(id);
                };
    }());

    // this.resizeCanvas();
    function renderLoop() {
    main.drawSnow();
    main.time = window.requestAnimationFrame(renderLoop);
    }

    renderLoop();
};

iseedSnow.prototype.drawSnow = function () {
    // 雪花更新參數
    for (let i = 0; i < this.mp; i++) {
    const p = this.particles[i];
    p.y += 1;
    p.x += -0.1;
    p.sd += 0.02;
    p.psize = p.s * 50 + p.s * 25 * Math.sin(p.sd);

    if (p.x > this.W + 5 || p.x < -p.psize || p.y > this.H) {
        p.s = Math.random() * 0.75;

        if (p.y > this.H) // Enter from the top
        {
        this.particles[i] = { x: Math.random() * this.W, y: -100, s: p.s, sd: p.sd, psize: p.psize, r: p.r };
        } else if (p.x > this.W + 5) // Enter from the left
        {
        this.particles[i] = { x: -p.psize, y: Math.random() * this.H, s: p.s, sd: p.sd, psize: p.psize, r: p.r };
        } else // Enter from the right
        {
        this.particles[i] = { x: this.W + 5, y: Math.random() * this.H, s: p.s, sd: p.sd, psize: p.psize, r: p.r };
        }
    }
    }

    this.snowCtx.clearRect(0, 0, this.W, this.H);

    for (let i = 0; i < this.mp; i++) {
    const p = this.particles[i];
    let palpha = 0.8 - (p.psize / 70 * 0.5 + p.y / this.H * 0.7);
    if (palpha < 0) {
        palpha = 0;
    }
    this.snowCtx.save();
    this.snowCtx.globalAlpha = palpha;
    this.snowCtx.translate(p.x, p.y);
    this.snowCtx.translate(p.psize / 2, p.psize / 2);
    this.snowCtx.rotate(p.r);
    this.snowCtx.drawImage(this.snowImg, -p.psize / 2, -p.psize / 2, p.psize, p.psize);
    this.snowCtx.restore();
    }
};

iseedSnow.prototype.resizeCanvas = function () {
    this.W = window.innerWidth;
    this.H = window.innerHeight;
    this.snowCanvas.width = this.W;
    this.snowCanvas.height = this.H;
    this.particles = [];

    if (this.W > 1000) {
    this.mp = 40;
    } else if (this.W > 500) {
    this.mp = 20;
    } else {
    this.mp = 10;
    }

    for (let i = 0; i < this.mp; i++) {
    this.particles.push({
        x: Math.random() * this.W, // x-coordinate
        y: Math.random() * this.H, // y-coordinate
        s: Math.random() * 0.75,
        sd: Math.random() * 5,
        psize: 0,
        r: Math.floor(Math.random() * (180 - 0 + 1)) + 0,
    });
    }

    this.start();
};
