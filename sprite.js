
function Sprite(image, Sx, Sy, Dx, Dy, width, height) {
  this.Sx = Sx;
  this.Sy = Sy;
  this.Dx = Dx;
  this.Dy = Dy;
  this.width = width;
  this.height = height;
  this.image = image;
}

Sprite.prototype.render = function () {
  c.drawImage(this.image, this.Sx, this.Sy, this.width, this.height, this.Dx, this.Dy, this.width, this.height);
};

var playerF = new Image()
playerF.src = 'Images/playerF.png'

var fPlayer = new Sprite(playerF, 0, 0, player.y, player.x, 10, 24)
