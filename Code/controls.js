

keys = []
var direction

Player.prototype.movement = function(){


	//Down
	if(direction == 0){
		this.cubeX = this.x + this.width/2 - this.cube.width/2;
		this.cubeY = this.y + this.height;
	}
	//Up
	if(direction == 1){
		this.cubeX = this.x + this.width/2 - this.cube.width/2
		this.cubeY = this.y - this.cube.height
	}
	//Left
	if(direction == 2){
		this.cubeX = this.x - this.cube.width;
		this.cubeY = this.y + this.height/2 - this.cube.height/2;
	}
	//Right
	if(direction == 3){
		this.cubeX = this.x + this.width;
		this.cubeY = this.y + this.height/2 - this.cube.height/2;
	}

	var gap = 10
	var canShoot = true
	if(canShoot == true){
		if(keys[32]){
			if(this.cubeX < this.x){
				this.fistX = this.x - this.fistWidth - gap;
				this.fistY = this.y + this.height/2 - this.fistHeight/2;
				setTimeout(resetFist, 1000)
			}else if(this.cubeX + this.cube.width > this.x+this.width){
				this.fistX = this.x + this.width + gap;
				this.fistY = this.y + this.height/2 - this.fistHeight/2;
			}else if(this.cubeY < this.y){
				this.fistX = this.x + this.width/2 - this.fistWidth/2;
				this.fistY = this.y - this.fistHeight - gap;
			}else if(this.cubeY + this.cube.height > this.y + this.height){
				this.fistX = this.x + this.width/2 - this.fistWidth/2;
				this.fistY = this.y + this.height + gap;
			}
		}
	}

	if(keys[38]){
		if(this.yVel > -1*this.speed){
			this.sprite = this.spriteb
			direction = 1
			this.yVel = -this.speed;
		}
	}

	if(keys[40]){
		if(this.yVel < this.speed){
			this.sprite = this.spritef
			direction = 0
			this.yVel = this.speed;
		}
	}

	if(keys[39]){
		if(this.xVel < this.speed){
			this.sprite = this.spriter
			direction = 3
			this.xVel = this.speed;
		}
	}

	if(keys[37]){
		if(this.xVel > -1*this.speed){
			this.sprite = this.spritel
			direction = 2
			this.xVel = -this.speed;
		}
	}


}




document.body.addEventListener('keydown', function (e) {
	keys[e.keyCode] = true;
})

document.body.addEventListener('keyup', function (e) {
	keys[e.keyCode] = false;
})
