var View = function(tilesets, maps) {
    this.tilesets = tilesets;
    this.maps = maps;
    this.activeMap = null;
};

View.prototype = Scene;
View.prototype.constructor = View;

View.prototype.activateMap = function(mapID) {
    this.activeMap = maps[mapID];
    for (var i = this.maps[mapID].usedTilesets.length - 1; i >= 0; i--) {
        this.tilesets[this.maps[mapID].usedTilesets[i]].load();
    }
};

View.prototype.update = function() {
    // what ever to do here:D
};
View.prototype.drawScene = function(canvasContext) {
    canvasContext.fillRect(0, 0, canvasContext.canvas.width, canvasContext.canvas.height);
    this.activeMap.draw(0, 0, 16, 15, this);
};