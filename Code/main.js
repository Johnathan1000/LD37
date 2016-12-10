var canvas = document.getElementById("canvas");
canvas.width = 480
canvas.height = 480
var c = canvas.getContext("2d")

c.mozImageSmoothingEnabled = false;
c.webkitImageSmoothingEnabled = false;
c.msImageSmoothingEnabled = false;
c.imageSmoothingEnabled = false;

var entities = []

//Defining Objects
var player = new Player(50,50,20,40,100,5)


updoot = function(){
	var camX = Math.max(0,player.x - canvas.width/2)
	var camY = Math.max(0,player.y - canvas.height/2)
	c.save()
	c.clearRect(0,0,canvas.width,canvas.height);
	c.translate(Math.round(-camX), Math.round(-camY))

	drawMap()

	player.update()

	c.restore()
}

this.setInterval(updoot, 20)
