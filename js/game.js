var Game = function() {
	this.activeScene = null;
}
/**
Processes inputs(might not be neccessary)
*/
Game.prototype.getInput = function() {

}
/**
Asks all objects to update their information
*/
Game.prototype.update = function() {

}
/**
Clears the screen and then draws everything that is in view
*/
Game.prototype.redraw = function() {

}
/**
The main loop of the game, calls the above functions and processes time passed since the last call of this
function
*/
Game.prototype.mainLoop = function() {

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
	this.setActiveScene(activeScene);
	// set eventhandler
}

Game.prototype.start = function() {
	// start game loop
}