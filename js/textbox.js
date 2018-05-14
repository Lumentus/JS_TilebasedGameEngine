/**
* A box that shows a text, all parameters besides canvasContext and text maybe omitted,
* which causes the Textbox to calculate its own diemsions and putting it in the top left corner of the canvas without any background(making it transparent effectivly)
* canvasContext: the context2d of the canvas that this Textbox shall be drawn on
* text: the text that is shown
* posX and posY: the position of the Textbox on the screen
* width and height: the dimensions of the message box
* background: an background image or a color code
* textStyle: the style the text fill be drawn with(any option possible for fillStyle might be given here), if omitted(or null) it will be written in black
*/
var Textbox = function(canvasContext, text, posX, posY, width, height, background, textStyle) {
    this.canvasContext = canvasContext;
    this.text = text;
    this.posX = posX;
    this.posY = posY;
    this.width = width;
    this.height = height;
    this.background = background;
    this.textStyle = textStyle;
    this.finished = false;
};

Textbox.prototype.processInput = function(keysDown) {

};
Textbox.prototype.draw = function() {
    textX = this.posX;
    textY = this.posY;
    width = (canvasContext.canvas.width <= (this.posX + this.width)) ? canvasContext.canvas.width : this.width;
    height = (canvasContext.canvas.height <= (this.posX + this.height)) ? canvasContext.canvas.height : this.height;
    if(this.background != null) { 
        // draw background
        // set x and y of the text if the background was an image and not just colors
    } 
    // draw the text
    if(this.textStyle) {
        canvasContext.fillStyle = this.textStyle;
    } else {
        canvasContext.fillStyle = "#000";
    }
    textHeight = getTextHeight(canvasContext.font);
    textWidth = canvasContext.measureText(this.text).width;
    lines = Math.ceil(textWidth/width);
    for(var i = 1; i < lines; i++) {

    }
    canvasContext.fillText(this.text, textX, textY);
};

var getTextHeight = function(font) {

/* Translate to normal java
  var text = $('<span>Hg</span>').css({ fontFamily: font });
  var block = $('<div style="display: inline-block; width: 1px; height: 0px;"></div>');

  var div = $('<div></div>');
  div.append(text, block);

  var body = $('body');
  body.append(div);

  try {

    var result = {};

    block.css({ verticalAlign: 'baseline' });
    result.ascent = block.offset().top - text.offset().top;

    block.css({ verticalAlign: 'bottom' });
    result.height = block.offset().top - text.offset().top;

    result.descent = result.height - result.ascent;

  } finally {
    div.remove();
  }

  return result;*/
  return 1000;
};