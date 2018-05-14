/* jshint unused:false */
/* global Tileset */
/* global GameMap */
/* global Tile */
/* global TileRect */
/* global View */
/* global Game */
Tileset.prototype.setTilesize(32); // the size in of one tile in pixels
var canvasWidth = 512;
var canvasHeight = 480;
var tilesets = new Array(1);
var maps = new Array(1);
var graphicalElements = new Array(1);
// Create canvas
var canvas = document.createElement("canvas");
var canvasContext = canvas.getContext("2d"); // the context used to draw stuff on the canvas
canvas.width = canvasWidth;
canvas.height = canvasHeight;
document.body.appendChild(canvas);
canvasContext.font = "20px Georgia";
// Add the tilesets
tilesets[0] = new ObjectGraphics("base", "tilesets/base.png", 16, 12, canvasContext);
tilesets[1] = new ObjectGraphics("testActors", "tilesets/testActors.png", 12, 8, canvasContext);
// Create the map objects
graphicalElements[0] = new Array();
graphicalElements[0].push(new TileRect(tilesets[0], 10, 10, 0, 0, 16, 15));
var objects = new Array(new PlayerControledObject(0, 0, true, 1, 1, tilesets[1], 0, 0, 0, 3, 1), new GameObject(1, 1, true, 2, 2, tilesets[0], 2, 2, 0, 0, 1, false, null));
maps[0] = new GameMap(16, 15, [0], graphicalElements[0], objects, null);
// Create the view scene
var view = new View(tilesets, maps);
view.activateMap(0);
view.activeObject = objects[0];
// Create the game object
var game = new Game(canvasContext);
// initialize and start the game
game.initialize(view);
game.start();