
Enemy = function (x,y,width,height,hp,dmg){
	this.x = x
	this.y = y
	this.width = width
	this.height = height
	this.hp = hp
	this.dmg = dmg
	this.slimeSprite = new Sprite(enemySprites, 0,0,16,10)
	entities.push(this)
	this.name = "b0000bs yum"
}

Enemy.prototype.draw = function(){
	c.fillStyle = 'red'
	c.fillRect(this.x, this.y, this.width, this.height)
}

Enemy.prototype.update = function(){
	this.slimeSprite.render(this.x, this.y)
}
