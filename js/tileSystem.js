var Tileset = function(name, tilesetFilepath, tilesize, width, height, canvasContext) { // class Tileset, width and heigth in tiles
    this.name = name; // what ever the tileset is called
    this.width = width;
    this.height = height;
    this.canvasContext = canvasContext;
    this.tilesetFilepath = tilesetFilepath;
    this.tilesize = tilesize;
    this.ready = false; // is the image loaded correctly
    this.image = null;
};

Tileset.prototype.drawTile = function(tileX, tileY, posX, posY, drawSize) { // draws a tile to the canvas, posX and posY in tiles
    if(drawSize == null || drawSize <= 0) {
        drawSize = this.tilesize;
    }
    if(this.ready && tileX <= this.width && tileY <= this.height) {
        this.canvasContext.drawImage(this.image, tileX * this.tilesize, tileY * this.tilesize, this.tilesize, this.tilesize,
            posX * drawSize, posY * drawSize, drawSize, drawSize);
    }
};
Tileset.prototype.load = function() {
    if(!this.ready) {
        var self = this; // context hack
        this.image = new Image(); // the image
        this.image.onload = function() {
            self.ready = true; // when loading is finished set ready to true
        };
        this.image.src = this.tilesetFilepath; // start the loading
    }
};

// TODO: think of a different way to execute custom event code(without eval)
var EventTile = function(code, triggerAction, triggerTouch, triggerNearby) {
    this.triggerAction = triggerAction;
    this.triggerTouch = triggerTouch;
    this.triggerNearby = triggerNearby;
    this.code = code;
};

EventTile.prototype.executeEvent = function() {
    eval(this.code);
};

var AutostartEvent = function(code) {
    "use strict";
    this.code = code;
};

AutostartEvent.prototype.executeEvent = function() {
    eval(this.code);
};

var ParallelEvent = function(code) {
    this.code = code;
};

ParallelEvent.prototype.executeEvent = function() {
    eval(this.code);
};