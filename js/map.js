/**
* tilesetID: the id of the tileset that contains the tiles image
* tilesetX+tilesetY: the position of the tiles image in the tileset
* events: an object with functions called onAction and onOver(one or both of those might be omitted)(null might be given instead of an object)
*/
var Tile = function(tilesetID, tilesetX, tilesetY, events) {
    this.tilesetID = tilesetID;
    this.tilesetX = tilesetX;
    this.tilesetY = tilesetY;
    this.events = events; // these functions will be called with the triggering objects as first argument
};

Tile.prototype.hasEventOnAction = function() {
    return this.events != null && this.events.onAction != null;
};

Tile.prototype.hasEventOnOver = function() {
    return this.events != null && this.events.onOver != null;
};

/**
* usedTilesets: array of ids of the tilesets that are used in this Map
* tiles: two dimentional array with Tile objects(tiles[x][y])
* autostartEvents: array of functions that will be executed when the map is loaded(visible for the first time)(might be used to execute parallel processes)
*/
var GameMap = function(usedTilesets, tiles, autostartEvents) {
    this.usedTilesets = usedTilesets;
    this.tiles = tiles;
    this.autostartEvents = autostartEvents; // these events will be called with the map object as first argument
    this.triggered = false;
};

GameMap.prototype.triggerAutostartEvents = function() {
    if(!this.triggered) {
        this.triggered = true;
        if(this.autostartEvents != null) {
            for(var i = 0; i < this.autostartEvents.length; i++) {
                this.autostartEvents[i](this);
            }
        }
    }
};

GameMap.prototype.draw = function(startX, startY, width, height, view) {
    if((startX+width) > this.tiles.length) {
        width = this.tiles.length-startX;
    }
    if((startY+height) > this.tiles[0].length) {
        height = this.tiles[0].length-startY;
    }
    var tile = null;
    for(var x = startX; x < (startX+width); x++) {
        for(var y = startY; y < (startY+height); y++) {
            tile = this.tiles[x][y];
            view.tilesets[tile.tilesetID].drawTile(tile.tilesetX, tile.tilesetY, x, y, null);
        }
    }
};