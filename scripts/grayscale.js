// function draw() {
//     var canvas = document.getElementById("draw-in-me");
//     if (canvas.getContext) {
//         var ctx = canvas.getContext('2d');
//         ctx.beginPath();
//         ctx.moveTo(120.0, 32.0);
//         ctx.bezierCurveTo(120.0, 36.4, 116.4, 40.0, 112.0, 40.0);
//         ctx.lineTo(8.0, 40.0);
//         ctx.bezierCurveTo(3.6, 40.0, 0, 36.4, 0.0, 32.0);
//         ctx.lineTo(0.0, 8.0);
//         ctx.bezierCurveTo(0.0, 3.6, 3.6, 0.0, 8.0, 0.0);
//         ctx.lineTo(112.0, 0.0);
//         ctx.bezierCurveTo(116.4, 0.0, 120.0, 3.6, 120.0, 8.0);
//         ctx.lineTo(120.0, 32.0);
//         ctx.closePath();
//         ctx.fill();
//         ctx.lineWidth = 2.0;
//         ctx.strokeStyle = "rgb(255, 255, 255)";
//         ctx.stroke();
//     }
// }
// addLoadEvent(draw);
//矢量路径
function convertToGS(img) {
    if (!Modernizr.canvas) return;
    img.color = img.src;
    img.grayscale = createGSCanvas(img);
    img.onmouseover = function () {
        this.src = this.color;
    }
    img.onmouseout = function () {
        this.src = this.grayscale;
    }
    img.onmouseout();
}
function createGSCanvas(img) {
    
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    
    var ctx = canvas.getContext("2d");

    // 灰度过滤器
    var imageData,data,
    i, len, average,
    red, green, blue, alpha;

    ctx.drawImage(img,0,0);
    imageData = ctx.getImageData(0,0,img.width,img.height);
    data = imageData.data;

    for (i = 0, len = data.length; i < len; i+=4) {
        red = data[i];
        green = data[i+1];
        blue = data[i+2];
        alpha = data[i+3];
        average = Math.floor((red + green + blue)/3);
        data[i] = data[i+1] = data[i+2] = average;
    }

    imageData.data = data;
    ctx.putImageData(imageData, 0, 0);    

    return canvas.toDataURL();
}

addLoadEvent(function(){
    convertToGS(document.getElementById("avatar"));
})