
Item = function(x,y,width,height,name,map){
	this.name = name
	this.x = x
	this.y = y
	this.width = width
	this.height = height
	this.appleSprite = new Sprite(itemSprites, 0, 0, 16, 16)
	this.tlCornerTile = new Sprite(wallSprites, 0, 16, 16,16)
	this.trCornerTile = new Sprite(wallSprites, 16, 16, 16,16)
	this.blCornerTile = new Sprite(wallSprites, 0, 0, 16,16)
	this.brCornerTile = new Sprite(wallSprites, 32, 0, 16,16)
	this.horizontalTile = new Sprite(wallSprites, 16, 0, 16,16)
	this.verticleTile = new Sprite(wallSprites, 48, 0, 16,16)
	this.doorTile = new Sprite(wallSprites, 64, 0, 16,16)
	this.world = map
	entities.push(this)
}

Item.prototype.draw = function () {
	c.fillStyle = 'yellow'
	c.fillRect(this.x, this.y, this.width, this.height)
};


Item.prototype.update = function (){
	if(this.world == currentMap){
		this.appleSprite.render(this.x, this.y)
	}
};
