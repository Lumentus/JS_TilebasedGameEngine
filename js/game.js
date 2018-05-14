var w = window;
var requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

var Game = function(canvasContext) {
	this.activeScene = null;
    this.canvasContext = canvasContext;
    this.keysDown = new Array();
    // save this object
    this.setObject(this);
}
/**
Asks all objects to update their information
*/
Game.prototype.update = function(delta) {
    this.activeScene.processInput(this.keysDown);
    this.activeScene.update(delta);
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
    Game.prototype.obj.then = Game.prototype.getObject().then != null ? Game.prototype.getObject().then : now;
    var delta = now - Game.prototype.getObject().then;

    Game.prototype.getObject().update(delta);
    Game.prototype.getObject().redraw();

    Game.prototype.getObject().then = now;

    // Request to do this again ASAP
    requestAnimationFrame(Game.prototype.getObject().mainLoop);
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
    // Context hack
    var self = this;
    // set eventhandler
    addEventListener("keydown", function (e) {
        self.keysDown[e.keyCode] = true;
    }, false);

    addEventListener("keyup", function (e) {
        delete self.keysDown[e.keyCode];
    }, false);
}

Game.prototype.start = function() {
	// start game loop
    requestAnimationFrame(this.mainLoop);
}
Game.prototype.getObject = function() {
    return Game.prototype.obj;
};
Game.prototype.setObject = function(obj) {
    Game.prototype.obj = obj;
}