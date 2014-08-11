var GameObject = function(posX, posY, passable, image, imageX, imageY, imageWidth, imageHeight, orientation, numberAnimationSteps, isPlayerControled, events) {
    this.posX = posX;
    this.posY = posY;
    this.passable = passable;
    this.image = image;
    this.imageX = imageX;
    this.imageY = imageY;
    this.imageWidth = imageWidth;
    this.imageHeight = imageHeight;
    this.orientation = orientation;
    this.isPlayerControled = isPlayerControled == null ? false : isPlayerControled;
    this.animationStep = 0;
    this.numberAnimationSteps = numberAnimationSteps;
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
            this.image.drawObject(this.imageX, this.imageY, this.imageWidth, this.imageHeight, this.orientation, this.animationStep, this.posX, this.posY);
        }
    }
};
GameObject.prototype.update = function(delta) {
    // Animate movement
    if(this.inMove) {
        this.passedTimeSinceLastAnimStep += delta;
        if(this.passedTimeSinceLastAnimStep > (1000/this.numberAnimationSteps)) {
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
        if(xMargin >= 0 && xMargin < this.imageWidth && yMargin >= 0 && yMargin < this.imageHeight) {
            console.log("Test");
            return true;
        }
    }
    return false;
};
GameObject.prototype.move = function(direction, range) {
    range = range != null ? range : 1;
    this.orientation = direction;
    if(!View.prototype.obj.activeMap.isBlocked(this.posX+Math.ceil(Math.cos(Math.PI*direction/2.0)), this.posY+Math.floor(Math.sin(Math.PI*direction/2.0)))) {
        this.rangeLeft = range;
        this.inMove = true;
    }
}