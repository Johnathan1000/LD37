
Player  = function (x,y,width,height,hp,dmg){
	this.x = x
	this.y = y
	this.VelX = 0
	this.VelY = 0
	this.width = width
	this.height = height
	this.hp = hp
	this.dmg = dmg
	entities.push(this)
}

Player.prototype.speed = function(){
	this.x += this.VelX
	this.y += this.VelY
}


playerSprite = fPlayer

Player.prototype.update = function(){
	playerSprite.render()
	player.movement
}
