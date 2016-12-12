
Enemy = function (x,y,width,height,hp,dmg,name,map,sprNo){
	this.x = x*scale
	this.y = y*scale
	this.width = width*scale
	this.height = height*scale
	this.xVel = 0
	this.yVel = 0
	this.hp = hp
	this.maxHp = hp
	this.dmg = dmg
	this.spriteNo = sprNo
	this.name = name
	this.sprite = [
		new Sprite(enemySprites, 0,0,16,10) //0-Slime
	]
	this.world = map
	entities.push(this)
}

Enemy.prototype.draw = function(){
	c.fillStyle = 'red'
	c.fillRect(this.x, this.y, this.width, this.height)
}


Enemy.prototype.update = function(){
	if(this.world == currentMap){
		if(this.sprite[this.spriteNo] != null){
			this.sprite[this.spriteNo].render(this.x, this.y)
		}else{
			throw "Yo dude - You have an id that doesn't have a sprite. That's an issue."
		}
		this.x += this.xVel
		this.y += this.yVel

	}
}
