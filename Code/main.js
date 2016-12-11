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
var slime = new Enemy(50,200,16*scale,10*scale,10,1)
var apple = new Item(100,0,11*scale,12*scale,'Apple')

//Maps
cMap = 0
maps = []
maps.push(OMap.oneRoomMap)
maps.push(WMap.wastelandMap)
// maps.push(modernMap)
// maps.push(primalMap)
// maps.push(iceAgeMap)
// maps.push(magmaMap)



updoot = function(){

	var camX = Math.max(0,player.x - canvas.width/2)
	var camY = Math.max(0,player.y - canvas.height/2)
	c.save()
	c.clearRect(0,0,canvas.width,canvas.height);
	c.translate(Math.round(-camX), Math.round(-camY))
	//Drawing
	maps[0].drawMap()

	addVelo = true;
	//
	for(var i = 0; i < entities.length; i++){
		entities[i].draw()
		entities[i].update()
		if(entities[i] == player) continue
		if(futureCollision(entities[i], player)){
			addVelo = false;
		}



		// if(futureCollision(entities[i], player) == false){
		// 	console.log('doot')
		// 	player.addVel()
		// }
	}
	if (addVelo){
		player.addVel();
	}else{
		player.xVel = 0
		player.yVel = 0
	}

	c.restore()
}

this.setInterval(updoot, 20)
