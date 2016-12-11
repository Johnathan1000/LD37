

keys = []
var direction
var canFist = true


function deactivateFists(){
	canFist = false
	setTimeout(resetFists, 1000)
}

function resetFists(){
	canFist = true
}

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

	var resetTime = 1
	var gap = 10


	if(canFist == true){
		if(keys[32]){
			if(this.cubeX < this.x){
				this.cfist.x = this.x - this.fist.width - gap;
				this.cfist.y = this.y + this.height/2 - this.fist.height/2;
				setTimeout(resetFist, resetTime)
			}else if(this.cubeX + this.cube.width > this.x+this.width){
				this.cfist.x = this.x + this.width + gap;
				this.cfist.y = this.y + this.height/2 - this.fist.height/2;
				setTimeout(resetFist, resetTime)
			}else if(this.cubeY < this.y){
				this.cfist.x = this.x + this.width/2 - this.fist.width/2;
				this.cfist.y = this.y - this.fist.height - gap;
				setTimeout(resetFist, resetTime)
			}else if(this.cubeY + this.cube.height > this.y + this.height){
				this.cfist.x = this.x + this.width/2 - this.fist.width/2;
				this.cfist.y = this.y + this.height + gap;
				setTimeout(resetFist, resetTime)
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
