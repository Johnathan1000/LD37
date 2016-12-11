var canvas = document.getElementById("canvas");
canvas.width = 896
canvas.height = 704
var c = canvas.getContext("2d")

c.mozImageSmoothingEnabled = false;
c.webkitImageSmoothingEnabled = false;
c.msImageSmoothingEnabled = false;
c.imageSmoothingEnabled = false;

var entities = []

//Maps
currentMap = 0
maps = []
var oMap = new Map()
var wMap = new Map2()
var cMap = new Map3()
var pMap = new Map4()
var iMap = new Map5()
var mMap = new Map6()

//Defining Objects
var player = new Player(50,50,10*scale,24*scale,100,5)
var slime = new Enemy(80,200,16*scale,10*scale,10,1,0)
var apple = new Item(100,300,11*scale,12*scale,'Apple',0)

for(var i = 0; i < oMap.map[oMap.y].length; i++){
	console.log("b00bs")
	if(i == 0){
		var tLWallTile = new Wall(0,0,16*scale,16*scale,0,0)
		continue;
	}
	if(i >= 1){
		var hWalls = new Wall(16*scale*i,0,16*scale,16*scale,0,4)
	}
}



updoot = function(){

	var camX = Math.max(0,player.x - canvas.width/2)
	var camY = Math.max(0,player.y - canvas.height/2)
	c.save()
	c.clearRect(0,0,canvas.width,canvas.height);
	c.translate(Math.round(-camX), Math.round(-camY))
	//Drawing
	maps[currentMap].drawMap()
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
