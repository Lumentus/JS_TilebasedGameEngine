var View = function(tilesets, maps, loadlessMap) {
    this.tilesets = tilesets;
    this.maps = maps;
    this.loadlessMap = loadlessMap;
    this.activeMap = null;
};

View.prototype = Scene;
View.prototype.constructor = View;

View.prototype.activateMap = function(mapID) {
    activeMap = mapID;
    for (var i = this.maps[mapID].usedTilesets.length - 1; i >= 0; i--) {
        this.maps[mapID].usedTilesets[i].load();
    }
    if(loadlessMap == true) {
        for (i = this.maps[mapID].adjacentMaps.length - 1; i >= 0; i--) {
            for (var j = this.maps[this.maps[mapID].adjacentMaps[i]].usedTilesets.length - 1; j >= 0; j--) {
                if(this.maps[mapID].adjacentMaps[i] != null) {
                    this.maps[this.maps[mapID].adjacentMaps[i]].usedTilesets.load();
                }
            }
        }
    }
};

View.prototype.update = function() {

};
View.prototype.drawScene = function() {

};