
Player = function (x,y,width,height,hp,dmg){
	this.x = x*scale
	this.y = y*scale
	this.xVel = 0
	this.yVel = 0
	this.speed = 7
	this.width = width*scale
	this.height = height*scale
	this.hp = hp
	this.dmg = dmg
	this.spritef = new Sprite(playerSprites, 0, 0, 10, 24)
	this.spriteb = new Sprite(playerSprites, 10, 0, 10, 24)
	this.spritel = new Sprite(playerSprites, 20, 0, 10, 24)
	this.spriter = new Sprite(playerSprites, 30, 0, 10, 24)
	this.cube = new Cube(10,10)
	this.fist = new Cube(15,15)
	this.fistX = 0
	this.fistY = 0
	this.fistWidth = this.fist.width
	this.fistHeight = this.fist.height
	this.cubeX = this.x + this.width/2
	this.cubeY = this.y + this.width/2
	this.sprite = this.spritef
	entities.push(this)
}

Player.prototype.draw = function (){
	c.fillStyle = 'blue'
	c.fillRect(this.x, this.y, this.width, this.height)
}

Player.prototype.addVel = function(){
	this.x += this.xVel
	this.y += this.yVel
}

Player.prototype.addFric = function(){
	this.xVel*=0.80
	this.yVel*=0.80
}

resetFist = function(){
	this.fistX = 0
	this.fistY = 0
	console.log('is reset')
}


Player.prototype.update = function(){
	this.fist.draw(this.fistX, this.fistY)
	this.cube.draw(this.cubeX, this.cubeY)
	this.sprite.render(this.x,this.y)
	player.movement()

	player.addFric()

}
