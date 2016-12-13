
TeleBox = function (x,y,width,height){
	this.x = x*scale
	this.y = y*scale
	this.width = width*scale
	this.height = height*scale
	this.world = currentMap
	this.sprite = new Sprite(wallSprites,32,16,12,15)
	entities.push(this)
}

TeleBox.prototype.draw = function(){
	c.fillStyle = 'white'
    c.fillRect(this.x, this.y, this.width, this.height)
}


TeleBox.prototype.update = function(){
	this.sprite.render(this.x, this.y)
}
