var GameObject = function(posX, posY, passable, image, imageX, imageY, imageWidth, imageHeight, orientation, isPlayerControled, events) {
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
    this.events = events;
};

GameObject.prototype.draw = function() {
    if(this.image != null) {
        this.image.draw(this.imageX, this.imageY, this.orientation, this.animationStep, this.posX, this.posY);
    }
};

GameObject.prototype.update = function(delta) {

};

GameObject.prototype.processInput = function() {

};