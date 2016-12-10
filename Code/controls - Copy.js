

keys = []


Player.prototype.movement = function(){


		if(keys[38]){
			if(this.yVel > -1*this.speed){
				this.yVel--;
			}
		}

		if(keys[40]){
			if(this.yVel < this.speed){
				this.yVel++;
			}
		}

		if(keys[39]){
			if(this.xVel < this.speed){
				this.xVel++;
			}
		}

		if(keys[37]){
			if(this.xVel > -1*this.speed){
				this.xVel--;
			}
		}

	}




document.body.addEventListener('keydown', function (e) {
	keys[e.keyCode] = true;
})

document.body.addEventListener('keyup', function (e) {
	keys[e.keyCode] = false;
})
