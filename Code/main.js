var canvas = document.getElementById("canvas");
canvas.width = 896
canvas.height = 704
var c = canvas.getContext("2d")

c.mozImageSmoothingEnabled = false;
c.webkitImageSmoothingEnabled = false;
c.msImageSmoothingEnabled = false;
c.imageSmoothingEnabled = false;


var completable = false
var entities = []
var inventory = []

//Maps
currentMap = 0
var dMap = new Map()
var dMap = new Map2()
var dMap = new Map3()
var dMap = new Map4()
var dMap = new Map5()
var dMap = new Map6()

//Defining Objects
var player = new Player(80,64,10,24,100,5)
var slime = new Enemy(64,32,16,10,10,1,'Slime',3,0)
var apple = new Item(146,146,11,12,'Apple',0,0)
var wastelandElement = new Item(32,64,11,12,'Radioactive Element',1,1)
var modernElement = new Item(32,64,11,12,'Mechanical Parts',2,2)
//Venom is dropped by sime
var iceageElement = new Item(32,64,11,12,'Ice Absolute Zero Ice',4,4)
var magmaElement= new Item(32,64,11,12,'Magma Gem',5,5)
magmaElement.isMagma = true
var oldMan = new Wall(32,80,11,24,0,7)
var button = new TeleBox(32,32,12,15)

maps.drawWalls()




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
			//Stop moving when colliding
			if(futureCollision(entities[i], player)){
				addVelo = false;
			}
			if(futureCollision(button, player)){
				addVelo = false;
			}
			//Fist Collision With Items
			if(canFist == true){
				if(entities[i].isItem == true){
					if(collision(entities[i], player.cfist)){
						deactivateFists()
						if(entities[i].isMagma == true){
							completable = true
						}
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
					if(plusCollision(entities[i], player)){
						console.log('enemy attacked player')
						entityAttack()
					}
				}
			}


		}//Affect those in the same map ^

		//Kill if HP is 0     Also draw Hp bar
		if(entities[i].hp != null){
			HealthNotSurpasMax(entities[i])
			HealthNotSurpasMax(player)
			drawEHealthBar(entities[i])
			drawHealthBar(player)

			if(slime.hp <= 0){
				console.log(entities[i].name+' has been slain.')
				entities.splice(i,1)
				var primativeElement = new Item(64,32,11,12,'Titanoboa Venom',3,3)

			}
		}

	}//Afect entities in the for loop ^
	if(canFist == true){
	if(collision(button, player.cfist)){
		deactivateFists()
		if(currentMap <= 4){
			newWorld(currentMap+=1)
		}else{
			newWorld(0)
		}
	}


	if(collision(oldMan, player.cfist)){
		if(oldMan.world == currentMap){
		deactivateFists()
			if(completable == false){
				document.getElementById('text').innerHTML = "They say that this is the last Translocation room in existance. A room that can be used to venture through time. Centuries ago there were thousands of theses things all over the world, but now, there's just one. Say, you look like a spritely young fellow, do you recon you could press that button there a few times and find me some ingredients? Come back when you're done."
			}
			if(completable == true){
				console.log('Game Win') 
				document.getElementById('text').innerHTML = 'Hey! You did it! congratulations son, now how about you leave now, you will not like what you see next.'
			}
		}
		}
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
