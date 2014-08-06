/**
* tilesetID: the id of the tileset that contains the tiles image
* tilesetX+tilesetY: the position of the tiles image in the tileset
* events: an object with functions called onAction and onOver(one or both of those might be omitted)(null might be given instead of an object)
*/
var Tile = function(tileset, tilesetX, tilesetY, posX, posY) {
    this.tileset = tileset;
    this.tilesetX = tilesetX;
    this.tilesetY = tilesetY;
    this.posX = posX;
    this.posY = posY;
};

Tile.prototype.draw = function(startX, startY, width, height) {
    if(startX <= this.posX && this.posX < (startX+width) && startY <= this.posY && this.posY < (startY+height)) {
        this.tileset.drawTile(this.tilesetX, this.tilesetY, this.posX, this.posY, null);
    }
};

var TileRect = function(tileset, tilesetX, tilesetY, posX, posY, width, height) {
    this.tileset = tileset;
    this.tilesetX = tilesetX;
    this.tilesetY = tilesetY;
    this.posX = posX;
    this.posY = posY;
    this.width = width;
    this.height = height;
};

TileRect.prototype.draw = function(startX, startY, width, height) {
    if(this.tileset.ready) {
        var endX = (startX+width<=this.posX+this.width) ? startX+width : this.posX+this.width;
        var endY = (startY+width<=this.posY+this.height) ? startX+height : this.posY+this.height;
        var startX = (startX >= this.posX) ? startX : this.posX;
        var startY = (startY >= this.posY) ? startY : this.posY;
        for(var x = startX; x < endX; x++) {
            for(var y = startY; y < endY; y++) {
                this.tileset.drawTile(this.tilesetX, this.tilesetY, x, y, null);
            }
        }
    }
}