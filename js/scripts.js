(function ($) {
    "use strict";
    $(document).ready(function () {

        // // image popup ---------------------------
        // $(".popup img").click(function () {
	    //     var $src = $(this).attr("src");
	    //     $(".show").fadeIn();
	    //     $(".img-show img").attr("src", $src);
	    // });
	    
	    // $(".close, .overlay").click(function () {
	    //     $(".show").fadeOut();
	    // });



        // wow  animation ------------
        new WOW().init();




        
    });

})(jQuery);




// WebGL animation -------------------
(function () {

var unit = 50,
    canvas1, context1,
    canvas2, context2,
    height, width, xAxis, yAxis,
    draw;

/**
 * Init function.
 *
 * Initialize variables and begin the animation.
 */
function init() {
    canvas1 = document.querySelector(".sineCanvas");
    canvas1.width  = document.documentElement.clientWidth*1.5;
    canvas1.height = document.documentElement.clientHeight*1.5;
    context1 = canvas1.getContext("2d");

    canvas2 = document.querySelector(".sineCanvas2");
    canvas2.width  = document.documentElement.clientWidth*1.5;
    canvas2.height = document.documentElement.clientHeight*1.5;
    context2 = canvas2.getContext("2d");

    height = canvas1.height;
    width = canvas1.width;
    xAxis = Math.floor(height / 2);
    yAxis = 0;

    draw();
}

/**
 * Draw animation function.
 *
 * This function draws one frame of the animation for each canvas, waits 20ms, and then calls itself again.
 */
function draw() {
    // Clear canvas 1
    context1.clearRect(0, 0, width, height);
    // Draw animation for canvas 1
    drawWave(context1, '#1470AF', 0.3, 2, 220);

    // Clear canvas 2
    context2.clearRect(0, 0, width, height);
    // Draw animation for canvas 2
    drawWave(context2, '#1470AF', 0.3, 2, 100);

    // Update the time and draw again
    draw.seconds = draw.seconds + 0.014;
    draw.t = draw.seconds * Math.PI;
    setTimeout(draw, 60);
}

draw.seconds = 0;
draw.t = 0;

function drawWave(context, color, alpha, zoom, delay) {
    context.fillStyle = color;
    context.strokeStyle = color;
    context.globalAlpha = alpha;
    context.beginPath();
    drawSine(context, draw.t / 0.7, zoom, delay);
    context.stroke();
}

/**
 * Function to draw sine
 *
 * The sine curve is drawn in 10px segments starting at the origin.
 * drawSine
 */
function drawSine(context, t, zoom, delay) {
    var x = t;
    var y = Math.sin(x) / zoom;
    context.moveTo(yAxis, unit * y + xAxis);

    for (i = yAxis; i <= width + 10; i += 10) {
        x = t + (-yAxis + i) / unit / zoom;
        y = Math.sin(x - delay) / 3;
        context.lineTo(i, unit * y + xAxis);
    }
}

init();
})();
