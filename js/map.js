/**
* usedTilesets: array of ids of the tilesets that are used in this Map
* graphicalElements: all Elements that will be drawn and are part of this map
* autostartEvents: array of functions that will be executed when the map is loaded(visible for the first time)(might be used to execute parallel processes)
*/
var GameMap = function(usedTilesets, graphicalElements, autostartEvents) {
    this.usedTilesets = usedTilesets;
    this.graphicalElements = graphicalElements;
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

GameMap.prototype.draw = function(startX, startY, width, height) {
    for(var i = 0; i < this.graphicalElements.length; i++) {
        this.graphicalElements[i].draw(startX, startY, width, height);
    }
};