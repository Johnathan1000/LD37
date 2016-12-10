
Player = function (x,y,width,height,hp,dmg){
	this.x = x
	this.y = y
	this.xVel = 0
	this.yVel = 0
	this.speed = 3
	this.width = width
	this.height = height
	this.hp = hp
	this.dmg = dmg
	this.spritef = new Sprite(playerF, 0, 0, 10, 24)
	this.spriteb = new Sprite(playerF, 10, 0, 10, 24)
	this.spritel = new Sprite(playerF, 20, 0, 10, 24)
	this.spriter = new Sprite(playerF, 30, 0, 10, 24)
	this.sprite = this.spritef
	entities.push(this)
}



Player.prototype.addVel = function(){
	this.x += this.xVel
	this.y += this.yVel
	this.xVel*=0.85
	this.yVel*=0.85
}

Player.prototype.update = function(){
	this.sprite.render(this.x,this.y)
	player.movement()
	player.addVel()

}
