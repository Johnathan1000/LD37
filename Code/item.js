
Item = function(x,y,width,height,name){
	this.name = name
	this.x = x
	this.y = y
	this.width = width
	this.height = height
	this.appleSprite = new Sprite(itemSprites, 0, 0, 16, 16)
	entities.push(this)
}

Item.prototype.draw = function () {
	c.fillStyle = 'yellow'
	c.fillRect(this.x, this.y, this.width, this.height)
};


Item.prototype.update = function () {
	this.appleSprite.render(this.x, this.y)
};
