/**
* usedTilesets: array of ids of the tilesets that are used in this Map
* graphicalElements: all elements that will be drawn and are part of this map
* autostartEvents: array of functions that will be executed when the map is loaded(visible for the first time)(might be used to execute parallel processes)
*/
var GameMap = function(width, height, usedTilesets, graphicalElements, objects, autostartEvents) {
    this.width = width;
    this.height = height;
    this.usedTilesets = usedTilesets;
    this.graphicalElements = graphicalElements;
    this.objects = objects;
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
    if(this.graphicalElements != null) {
        for(var i = 0; i < this.graphicalElements.length; i++) {
            this.graphicalElements[i].draw(startX, startY, width, height);
        }
    }
    if(this.objects != null) {
        for(var i = 0; i < this.objects.length; i++) {
            this.objects[i].draw(startX, startY, width, height);
        }
    }
};
GameMap.prototype.addObject = function(object) {
    this.objects.push(object);
};
GameMap.prototype.removeObject = function(object) {
    for(var i = 0; i < this.objects.length; i++) {
        if(this.objects[i] == object) {
            this.objects.splice(i, 1);
        }
    }
};
GameMap.prototype.update = function(delta) {
    for(var i = 0; i < this.objects.length; i++) {
        this.objects[i].update(delta);
    }
};
GameMap.prototype.isBlocked = function(x, y) {
    if(x < 0 || y < 0 || x >= this.width || y >= this.height) {
        return true;
    }
    for(var i = 0; i < this.objects.length; i++) {
        if(this.objects[i].blocking(x, y)) {
            console.log("Test2");
            return true;
        }
    }
    return false;
}