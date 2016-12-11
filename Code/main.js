var canvas = document.getElementById("canvas");
canvas.width = 896
canvas.height = 704
var c = canvas.getContext("2d")

c.mozImageSmoothingEnabled = false;
c.webkitImageSmoothingEnabled = false;
c.msImageSmoothingEnabled = false;
c.imageSmoothingEnabled = false;

var entities = []
var inventory = []

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
var player = new Player(32,32,10,24,100,5)
var slime = new Enemy(64,16,16,10,10,1,0,0)
var apple = new Item(0,64,11,12,'Apple',0,0)

for(var i = 0; i < oMap.map[oMap.y].length; i++){
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
		//entities[i].draw()
		entities[i].update()

		if(entities[i] == player) continue
		if(entities[i].world == currentMap){
			//Stop moving when collidiong
			if(futureCollision(entities[i], player)){
				addVelo = false;
			}
			//Fist Collision With Items
			if(canFist == true){
				if(entities[i].name != null){
					if(collision(entities[i], player.cfist)){
						deactivateFists()
						if(bag.slot == null){
							putObjectInBag(entities[i]);
							entities.splice(i,1)
						}
					}
				}

				//Fist and Body Collision With Enemies
				if(entities[i].hp != null){
					if(collision(entities[i], player.cfist)){
						deactivateFists();
						playerAttack(entities[i], player)
					}
				}

			}

			if(iFrames = false){
				if(entities[i].hp != null){
					if(futureCollision(entities[i], player)){
						console.log('didi')
						entityAttack()
					}
				}
			}


		}//Affect those in the same map ^

		//Kill if HP is 0
		if(entities[i].hp != null){
			if(entities[i].hp <= 0){
				entities.splice(i,1)
			}
		}

	}//Afect entities in the for loop ^
	if (addVelo){
		player.addVel();
	}else{
		player.xVel = 0
		player.yVel = 0
	}

	c.restore()
}

this.setInterval(updoot, 20)
