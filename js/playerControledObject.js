var PlayerControledObject = function(posX, posY, passable, objectWidth, objectHeight, image, imageX, imageY, orientation, numberAnimationSteps, movespeedDivider) {
    this.posX = posX;
    this.posY = posY;
    this.passable = passable;
    this.image = image;
    this.imageX = imageX;
    this.imageY = imageY;
    this.objectWidth = objectWidth;
    this.objectHeight = objectHeight;
    this.orientation = orientation;
    this.isPlayerControled = true;
    this.animationStep = 0;
    this.numberAnimationSteps = numberAnimationSteps;
    this.movespeedDivider = movespeedDivider != null ? movespeedDivider : 1;
    this.timePerMove = 500 / this.movespeedDivider;
    this.events = null;
    this.inMove = false;
    this.rangeLeft = 0;
    this.passedTimeSinceLastAnimStep = 0;
}

PlayerControledObject.prototype = new GameObject();
PlayerControledObject.prototype.constructor = PlayerControledObject;

PlayerControledObject.prototype.processInput = function(keysDown) {
    if(!this.inMove) {
        if(keysDown[38] || keysDown[87]) { // Up Arrow and W Key
            // initiate move to the top
            this.move(ObjectGraphics.prototype.orientationUp);
        } else if(keysDown[37] || keysDown[65]) { // Left Arrow and A Key
            // initiate move to the left
            this.move(ObjectGraphics.prototype.orientationLeft);
        } else if(keysDown[40] || keysDown[83]) { // Down Arrow and S Key
            // initiate move to the bottom
            this.move(ObjectGraphics.prototype.orientationDown);
        } else if(keysDown[39] || keysDown[68]) { // Right Arrow and D Key
            // initiate move to the right
            this.move(ObjectGraphics.prototype.orientationRight);
        } else if(keysDown[13]) { // Enter Key
            // interact with object in fron
            View.prototype.getObject().showTextbox("Hallo!\nTest!", 10, 10);
        }
    }
};