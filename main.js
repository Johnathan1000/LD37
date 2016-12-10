var canvas = document.getElementById("canvas");
canvas.width = 480
canvas.height = 480
var c = canvas.getContext("2d")

var entities = []

var player = new Player(50,50,20,40,100,5)


updoot = function(){
	// var camX = player.x - canvas.width/2
	// var camY = player.y - canvas.height/2
	// c.save()
	// c.translate(-camX, -camY)

	c.clearRect(0,0,canvas.width,canvas.height);

	player.movement()


	drawMap()
	//c.restore()
}

this.setInterval(updoot, 20)
