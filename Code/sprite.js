
function Sprite(image, Sx, Sy, width, height) {
  this.Sx = Sx;
  this.Sy = Sy;
  this.width = width;
  this.height = height;
  this.image = image;
}

var scale = 3

Sprite.prototype.render = function (x,y) {
  c.drawImage(this.image, this.Sx, this.Sy, this.width, this.height, x,y, this.width*scale, this.height*scale);
};

var playerF = new Image()
playerF.src = 'Images/PlayerSprites.png'
