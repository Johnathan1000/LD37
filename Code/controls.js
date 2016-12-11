

keys = []
var canMove = true




Player.prototype.movement = function(){

	var direction

	if(canMove == true){
		//Down
		if(direction == 0){
			player.cubeX = player.x + player.width/2 - player.cube.width/2;
			player.cubeY = player.y + player.height;
		}
		//Up
		if(direction == 1){
			player.cubeX = player.x + player.width/2 - player.cube.width/2
			player.cubeY = player.y - player.cube.height
		}
		//Left
		if(direction == 2){
			player.cubeX = player.x - player.cube.width;
			this.cubeY = player.y + player.height/2 - player.cube.height/2;
		}
		//Right
		if(direction == 3){
			player.cubeX = player.x + player.width;
			player.cubeY = player.y + player.height/2 - player.cube.height/2;
		}




		if(keys[38]){
			if(this.yVel > -1*this.speed){
				player.sprite = player.spriteb
				direction = 1
				this.yVel = -this.speed;
			}
		}

		if(keys[40]){
			if(this.yVel < this.speed){
				player.sprite = player.spritef
				direction = 0
				this.yVel = this.speed;
			}
		}

		if(keys[39]){
			if(this.xVel < this.speed){
				player.sprite = player.spriter
				direction = 3
				this.xVel = this.speed;
			}
		}

		if(keys[37]){
			if(this.xVel > -1*this.speed){
				player.sprite = player.spritel
				direction = 2
				this.xVel = -this.speed;
			}
		}
	}

}




document.body.addEventListener('keydown', function (e) {
	keys[e.keyCode] = true;
})

document.body.addEventListener('keyup', function (e) {
	keys[e.keyCode] = false;
})
