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

GameObject.prototype.draw = function(startX, startY, width, height) {
    if(this.image != null) {
        if(!this.image.ready) {
            this.image.load();
        } else {
            this.image.drawObject(this.imageX, this.imageY, this.imageWidth, this.imageHeight, this.orientation, this.animationStep, this.posX, this.posY-this.imageHeight+1);
        }
    }
};
GameObject.prototype.update = function(delta) {

};
GameObject.prototype.processInput = function() {

};