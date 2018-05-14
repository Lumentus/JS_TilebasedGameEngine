var View = function(tilesets, maps) {
    this.tilesets = tilesets;
    this.maps = maps;
    this.activeMap = null;
    this.activeObject = null;
    this.savedObject = null;
    this.showingTextbox = false;
    this.setObject(this);
};

View.prototype = Scene;
View.prototype.constructor = View;

View.prototype.activateMap = function(mapID) {
    this.activeMap = maps[mapID];
    for (var i = this.maps[mapID].usedTilesets.length - 1; i >= 0; i--) {
        this.tilesets[this.maps[mapID].usedTilesets[i]].load();
    }
};
View.prototype.update = function(delta) {
    if(this.showingTextbox) {
        if(this.activeObject.finished) {
            this.activeObject = this.saveObject;
            this.showingTextbox = false;
        }
    } else {
        this.activeMap.update(delta);
    }
};
View.prototype.processInput = function(keysDown) {
    this.activeObject.processInput(keysDown);

};
View.prototype.drawScene = function(canvasContext) {
    canvasContext.fillRect(0, 0, canvasContext.canvas.width, canvasContext.canvas.height);
    this.activeMap.draw(0, 0, canvasContext.canvas.width/Tileset.prototype.tilesize, canvasContext.canvas.height/Tileset.prototype.tilesize);
    if(this.showingTextbox) {
        this.activeObject.canvasContext = canvasContext;
        this.activeObject.draw();
    }
};
View.prototype.getObject = function() {
    return View.prototype.obj;
};
View.prototype.setObject = function(obj) {
    View.prototype.obj = obj;
};
View.prototype.showTextbox = function(text, posX, posY, width, height, background, textStyle) {
    this.savedObject = this.activeObject;
    this.activeObject = new Textbox(null, text, posX, posY, width, height, background, textStyle);
    this.showingTextbox = true;
};