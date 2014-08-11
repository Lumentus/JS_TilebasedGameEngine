var ObjectGraphics = function(name, objectGraphicsFilepath, width, height, canvasContext) {
    this.name = name; // what ever the tileset is called
    this.width = width;
    this.height = height;
    this.canvasContext = canvasContext;
    this.tilesetFilepath = objectGraphicsFilepath;
    this.ready = false; // is the image loaded correctly
    this.image = null;
}

ObjectGraphics.prototype = new Tileset();
ObjectGraphics.prototype.constructor = ObjectGraphics;

ObjectGraphics.prototype.drawObject = function(objectX, objectY, objectWidth, objectHeight, orientation, animationStep, posX, posY, drawFactor) {
    if(drawFactor == null || drawFactor <= 0) {
        drawFactor = 1.0;
    }
    if(this.ready) {
        startX = objectX + (animationStep * objectWidth);
        startY = objectY + (orientation * objectHeight);
        this.canvasContext.drawImage(this.image, startX * this.tilesize, startY * this.tilesize, this.tilesize * objectWidth, this.tilesize * objectHeight,
            posX * this.tilesize * drawFactor, posY * this.tilesize * drawFactor, this.tilesize * drawFactor * objectWidth, this.tilesize * drawFactor * objectHeight);
    }
};

ObjectGraphics.prototype.orientationRight = 0;
ObjectGraphics.prototype.orientationDown = 1;
ObjectGraphics.prototype.orientationLeft = 2;
ObjectGraphics.prototype.orientationUp = 3;