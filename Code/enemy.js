
Enemy = function (x,y,width,height,hp,dmg,map){
	this.x = x
	this.y = y
	this.width = width
	this.height = height
	this.hp = hp
	this.dmg = dmg
	this.slimeSprite = new Sprite(enemySprites, 0,0,16,10)
	this.world = map
	entities.push(this)
}

Enemy.prototype.draw = function(){
	c.fillStyle = 'red'
	c.fillRect(this.x, this.y, this.width, this.height)
}

Enemy.prototype.update = function(){
	if(this.world == currentMap){
		this.slimeSprite.render(this.x, this.y)
	}
}
