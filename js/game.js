var Game = function() {
	this.activeScene = null;
    this.canvasContext = null;
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
    var delta = now - then;

    this.getInput();
    this.update(delta / 1000);
    this.redraw();

    then = now;

    // Request to do this again ASAP
    requestAnimationFrame(this.mainLoop);
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
    var canvas = document.createElement("canvas");
    this.canvasContext = canvas.getContext("2d"); // the context used to draw stuff on the canvas
    canvas.width = 512;
    canvas.height = 480;
    document.body.appendChild(canvas);
	// set the activeScene
	this.activeScene = activeScene;
	// set eventhandler
}

Game.prototype.start = function() {
	// start game loop
    requestAnimationFrame(this.mainLoop);
}