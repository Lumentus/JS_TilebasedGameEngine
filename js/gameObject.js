/**
* This is the general object in the game(everything other object is inheriting from this one)
* posX and posY: the position of the object(if it is biggen than 1x1, it is the top left tile)
* objectWidth and objectHeight: the width and height of the object(width is to the left and height to the bottom)
* passable: whether this object is passable or not, maybe a boolean or an two dimensional array of booleans that holds a boolean for every single tile of the object
* image: the image that contains the objects image
* imageX and imageY: the objects image position in the image(the top left corner of the objects image)
* orientation: the orientation of the object, the numbers corresponding to the directions are defined in objectGraphics.js
* numberAnimationSteps: the number of animation steps the object has(the number of images one move in any direction consists of)
* isPlayerControled: whether this object is controled by the player
* events: an object that has the following methods(any of these maybe omitted): 
*       onInteract: what happens when the player wants to interact with the object
*       onOver: what happens when something moves onto this object
*       onTouched: what happens when something "moved" against the object, 
*       any of these methods get the triggering object as the first argument
*/
var GameObject = function(posX, posY, passable, objectWidth, objectHeight, image, imageX, imageY, orientation, numberAnimationSteps, movespeedDivider, isPlayerControled, events) {
    this.posX = posX;
    this.posY = posY;
    this.passable = passable;
    this.image = image;
    this.imageX = imageX;
    this.imageY = imageY;
    this.objectWidth = objectWidth;
    this.objectHeight = objectHeight;
    this.orientation = orientation;
    this.isPlayerControled = isPlayerControled == null ? false : isPlayerControled;
    this.animationStep = 0;
    this.numberAnimationSteps = numberAnimationSteps;
    this.movespeedDivider = movespeedDivider != null ? movespeedDivider : 1;
    this.timePerMove = 500 / this.movespeedDivider;
    this.events = events;
    this.inMove = false;
    this.rangeLeft = 0;
    this.passedTimeSinceLastAnimStep = 0;
};

GameObject.prototype.draw = function(startX, startY, width, height) {
    if(this.image != null) {
        if(!this.image.ready) {
            this.image.load();
        } else {
            if(this.inMove) {
                this.image.drawObject(this.imageX, this.imageY, this.objectWidth, this.objectHeight, this.orientation, this.animationStep, this.drawPosX, this.drawPosY);
            } else {
                this.image.drawObject(this.imageX, this.imageY, this.objectWidth, this.objectHeight, this.orientation, this.animationStep, this.posX, this.posY);
            }
        }
    }
};
GameObject.prototype.update = function(delta) {
    // Animate movement
    if(this.inMove) {
        this.passedTimeSinceLastAnimStep += delta;
        this.drawPosX += Math.ceil(Math.cos(Math.PI*this.orientation/2.0)) * delta / this.timePerMove;
        this.drawPosY += Math.floor(Math.sin(Math.PI*this.orientation/2.0)) * delta / this.timePerMove;
        if(this.passedTimeSinceLastAnimStep > (this.timePerMove/this.numberAnimationSteps)) {
            this.passedTimeSinceLastAnimStep = 0;
            this.animationStep = (this.animationStep+1) % this.numberAnimationSteps;
            if(this.animationStep == 0) {
                // set new position
                this.posX += Math.ceil(Math.cos(Math.PI*this.orientation/2.0));
                this.posY += Math.floor(Math.sin(Math.PI*this.orientation/2.0));
                this.rangeLeft--;
                if(this.rangeLeft == 0) {
                    this.inMove = false;
                } else {
                    if(!View.prototype.obj.activeMap.isBlocked(this.posX+Math.ceil(Math.cos(Math.PI*this.orientation/2.0)), this.posY+Math.floor(Math.sin(Math.PI*this.orientation/2.0)))) {
                        this.rangeLeft = 0;
                        this.inMove = false;
                    }
                }
            }
        }
    }
};
GameObject.prototype.processInput = function(keysDown) {
    
};
GameObject.prototype.blocking = function(x, y) {
    if(!this.passable) {
        return false;
    }
    if((typeof this.passable) == "object") {
        xMargin = x - this.posX;
        yMargin = y - this.posY;
        if(this.passable[xMargin][yMargin] != null) {
            return this.passable[xMargin][yMargin];
        }
    } else {
        xMargin = x - this.posX;
        yMargin = y - this.posY;
        if(xMargin >= 0 && xMargin < this.objectWidth && yMargin >= 0 && yMargin < this.objectHeight) {
            return true;
        }
    }
    return false;
};
GameObject.prototype.move = function(direction, range) {
    range = range != null ? range : 1;
    this.orientation = direction;
    if(!View.prototype.obj.activeMap.isBlocked(this.posX+Math.ceil(Math.cos(Math.PI*direction/2.0)), this.posY+Math.floor(Math.sin(Math.PI*direction/2.0)))) {
        this.drawPosX = this.posX;
        this.drawPosY = this.posY;
        this.rangeLeft = range;
        this.inMove = true;
    }
};
GameObject.prototype.interact = function(obj) {
    this.events.onInteract(obj);
};
GameObject.prototype.over = function(obj) {
    this.events.onOver(obj);
};
GameObject.prototype.touch = function(obj) {
    this.events.onTouch(obj);
};
GameObject.prototype.hasOnInteract = function() {
    return this.events.onInteract != null;
};
GameObject.prototype.hasOnOver = function() {
    return this.events.onOver != null;
};
GameObject.prototype.hasOnTouched = function() {
    return this.events.onTouched != null;
};