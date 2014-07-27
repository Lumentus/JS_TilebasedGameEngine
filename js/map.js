/* global Tileset*/
/* jshint eqnull: true */
if(Tileset != null) {
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
    * tiles: two dimentional array with Tile objects
    * autostartEvents: array of functions that will be executed when the map is loaded(visible for the first time)(might be used to execute parallel processes)
    */
    var GameMap = function(usedTilesets, tiles, autostartEvents) {
        this.usedTilesets = usedTilesets;
        this.tiles = tiles;
        this.autostartEvents = autostartEvents; // these events will be called with the map object as first argument
        this.visible = false;
        this.wasLoaded = false;
    };

    GameMap.prototype.isVisible = function() {
        return this.visible;
    };

    GameMap.prototype.setVisible = function(visible) {
        this.visible = visible;
    };

    GameMap.prototype.loaded = function() {
        if(!this.wasLoaded) {
            this.wasLoaded = true;
            for(var i = 0; i < this.autostartEvents.length; i++) {
                this.autostartEvents[i](this);
            }
        }
    };
} else {
    alert("tileSystem.js is not loaded, will not execute");
}