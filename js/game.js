var w = window;
var requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

var Game = function(canvasContext) {
	this.activeScene = null;
    this.canvasContext = canvasContext;
}
/**
Processes inputs(might not be neccessary)
*/
Game.prototype.getInput = function() {

}
/**
Asks all objects to update their information
*/
Game.prototype.update = function(delta) {

}
/**
Asks the active scene to redraw the game with the updated information
*/
Game.prototype.redraw = function() {
    this.activeScene.drawScene(this.canvasContext);
}
/**
The main loop of the game, calls the above functions and processes time passed since the last call of this
function
*/
Game.prototype.mainLoop = function() {
    var now = Date.now();
    var then = then || now;
    var delta = now - then;

    Game.prototype.obj.getInput();
    Game.prototype.obj.update(delta / 1000);
    Game.prototype.obj.redraw();

    then = now;

    // Request to do this again ASAP
    requestAnimationFrame(Game.prototype.obj.mainLoop);
}
/**
Sets the scene, that will receive the inputs to process them and which is asked to draw and update itself
*/
Game.prototype.setActiveScene = function(scene) {
	this.activeScene = scene;
}
/**
Initilizes the game at the starting map, with a certain active Scene, that will be placed at
startX and startY
*/
Game.prototype.initialize = function(activeScene) {
	// set the activeScene
	this.activeScene = activeScene;
	// set eventhandler
    // save this object
    Game.prototype.obj = this;
}

Game.prototype.start = function() {
	// start game loop
    requestAnimationFrame(this.mainLoop);
}