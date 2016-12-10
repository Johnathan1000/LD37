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
var player = new Player(50,50,10*scale,24*scale,100,5)
var slime = new Enemy(50,200,20,20,10,1)


//Collision
for(var i = 0; i < entities.length; i++){
	if(entities[i] == player) continue
	collision (entities[i], player)
}


updoot = function(){
	collision(slime, player)
	var camX = Math.max(0,player.x - canvas.width/2)
	var camY = Math.max(0,player.y - canvas.height/2)
	c.save()
	c.clearRect(0,0,canvas.width,canvas.height);
	c.translate(Math.round(-camX), Math.round(-camY))
	drawWastelandMap()
	player.update()
	slime.draw()
	player.draw()

	c.restore()
}

this.setInterval(updoot, 20)
