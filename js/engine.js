"use strict";

var canvasContext = null;
/* jshint unused:false */
var tilesize = 16; // the size in of one tile in pixels

function createCanvas() {
    // Create the canvas
    var canvas = document.createElement("canvas");
    canvasContext = canvas.getContext("2d"); // the context used to draw stuff on the canvas
    canvas.width = 512;
    canvas.height = 480;
    document.body.appendChild(canvas);
}

createCanvas();