/* jshint unused:false */
/* global Tileset */
/* global GameMap */
/* global Tile */
/* global View */
/* global Game */
var tilesize = 32; // the size in of one tile in pixels
var canvasWidth = 512;
var canvasHeight = 480;
var tilesets = new Array(1);
var maps = new Array(1);
// Create canvas
var canvas = document.createElement("canvas");
var canvasContext = canvas.getContext("2d"); // the context used to draw stuff on the canvas
canvas.width = canvasWidth;
canvas.height = canvasHeight;
document.body.appendChild(canvas);
// Add the tilesets
tilesets[0] = new Tileset("base", "tilesets/base.png", tilesize, 16, 12, canvasContext);
// Create the map objects
maps[0] = new GameMap([0], new Array(new Array(new Tile(0, 3, 3, null), new Tile(0, 3, 2, null)), new Array(new Tile(0, 2, 3, null), new Tile(0, 2, 2, null))), null);
// Create the view scene
var view = new View(tilesets, maps);
view.activateMap(0);
// Create the game object
var game = new Game(canvasContext);
// initialize and start the game
game.initialize(view);
game.start();