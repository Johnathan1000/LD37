
Item = function(x,y,width,height,name,map,sprNo){
	this.name = name
	this.x = x*scale
	this.y = y*scale
	this.width = width*scale
	this.height = height*scale
	this.spriteNo = sprNo
	this.sprite = [
		new Sprite(itemSprites, 0, 0, 16, 16) //0-Apple
	]

	this.world = map
	entities.push(this)
}

Item.prototype.draw = function () {
	c.fillStyle = 'yellow'
	c.fillRect(this.x, this.y, this.width, this.height)
};


Item.prototype.update = function (){
	if(this.world == currentMap){
		if(this.sprite[this.spriteNo] != null){
			this.sprite[this.spriteNo].render(this.x, this.y)
		}else{
			throw "Yo dude - You have an id that doesn't have a sprite. That's an issue."
		}
	}
};
