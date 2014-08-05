var View = function(tilesets, maps) {
    this.tilesets = tilesets;
    this.maps = maps;
    this.activeMap = null;
};

View.prototype = Scene;
View.prototype.constructor = View;

View.prototype.activateMap = function(mapID) {
    activeMap = mapID;
    for (var i = this.maps[mapID].usedTilesets.length - 1; i >= 0; i--) {
        this.maps[mapID].usedTilesets[i].load();
    }
};

View.prototype.update = function() {
    // what ever to do here:D
};
View.prototype.drawScene = function(canvasContext) {
    canvasContext.fill();
    this.activeMap.draw();
};