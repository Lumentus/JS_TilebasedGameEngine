var Tileset = function(name, tilesetFilepath, width, height, canvasContext) { // class Tileset, width and heigth in tiles
    this.name = name; // what ever the tileset is called
    this.width = width;
    this.height = height;
    this.canvasContext = canvasContext;
    this.tilesetFilepath = tilesetFilepath;
    this.ready = false; // is the image loaded correctly
    this.image = null;
};

Tileset.prototype.drawTile = function(tileX, tileY, posX, posY, drawFactor) { // draws a tile to the canvas, posX and posY in tiles
    if(drawFactor == null || drawFactor <= 0) {
        drawFactor = 1.0;
    }
    if(this.ready && tileX <= this.width && tileY <= this.height) {
        this.canvasContext.drawImage(this.image, tileX * this.tilesize, tileY * this.tilesize, this.tilesize, this.tilesize,
            posX * this.tilesize * drawFactor, posY * this.tilesize * drawFactor, this.tilesize * drawFactor, this.tilesize * drawFactor);
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
Tileset.prototype.setTilesize = function(tilesize) {
    if(Tileset.prototype.tilesize == null) {
        Tileset.prototype.tilesize = tilesize;
    }
};