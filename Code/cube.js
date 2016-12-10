
Cube = function(width,height){
	this.width = width
	this.height = height
}

Cube.prototype.draw = function(x,y){
	c.fillStyle = 'green'
	c.fillRect(x, y, this.width, this.height)
}
