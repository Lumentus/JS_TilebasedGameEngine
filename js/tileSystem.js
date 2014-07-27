/* global canvasContext*/
/* global tilesize*/
/* jshint eqnull: true */
if(canvasContext != null) {
    var Tileset = function(name, tilesetFilePath, width, height) { // class Tileset, width and heigth in tiles
        this.name = name; // what ever the tileset is called
        this.width = width;
        this.height = height;
        this.ready = false; // is the image loaded correctly

        var self = this; // context hack

        this.image = new Image(); // the image
        this.image.onload = function() {
            self.ready = true; // when loading is finished set ready to true
        };
        this.image.src = tilesetFilePath; // start the loading
    };

    Tileset.prototype.tilesize = tilesize; // TODO: check if this is needed
    Tileset.prototype.drawTile = function(tileX, tileY, posX, posY) { // draws a tile to the canvas, posX and posY in tiles
        if(tileX <= this.width && tileY <= this.height) {
            canvasContext.drawImage(this.image, tileX * this.tilesize, tileY * this.tilesize, this.tilesize, this.tilesize,
                posX * this.tilesize, posY * this.tilesize, this.tilesize, this.tilesize);
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
} else {
    alert("engine.js is not loaded, will not execute");
}