
Wall = function(x,y,width,height,map,spNo){
	this.name = name
	this.x = x
	this.y = y
	this.width = width
	this.height = height
	this.spriteNo = spNo
	this.tiles = [
		new Sprite(wallSprites, 0, 16, 16,16),		//0-TLC
		new Sprite(wallSprites, 16, 16, 16,16),		//1-TRC
		new Sprite(wallSprites, 0, 0, 16,16),		//2-BLC
		new Sprite(wallSprites, 32, 0, 16,16),		//3-BRC
		new Sprite(wallSprites, 16, 0, 16,16),		//4-HORIZONTAL WALL
		new Sprite(wallSprites, 48, 0, 16,16),		//5-VERTICAL WALL
		new Sprite(wallSprites, 64, 0, 16,16)		//6-DOOR

	]
	this.world = map
	entities.push(this)
}

Wall.prototype.draw = function () {
	c.fillStyle = 'yellow'
	c.fillRect(this.x, this.y, this.width, this.height)
};


Wall.prototype.update = function (){
	if(this.world == currentMap){
		for(var i = 0; i < this.tiles.length; i++){
			if(this.spriteNo == i){
				this.tiles[i].render(this.x, this.y)
			}
		}
	}
};
