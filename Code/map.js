
//WASTELAND
var oneRoomMap = [
  [0,1,0,0,0,0],
  [0,0,0,0,0,1],
  [0,0,1,0,1,0],
  [0,0,1,0,0,1],
  [0,0,1,0,0,0],
  [1,0,0,0,0,0]

];

var tileMap = new Image()
tileMap.src = 'Images/Tiles.png'

var tileScale = 4

var posX = 0
var posY = 0

function drawoneRoomMap(){

	for (var y = 0; y < oneRoomMap.length; y++){
	  for(var x = 0; x < oneRoomMap[y].length; x++){

	    if(oneRoomMap[y][x] == 0){
	      c.drawImage(tileMap, 0, 0, 16, 16, x*16*tileScale, y*16*tileScale, 16*tileScale, 16*tileScale);
	    }

		if(oneRoomMap[y][x] == 1){
		  c.drawImage(tileMap, 0, 16, 16, 16, x*16*tileScale, y*16*tileScale, 16*tileScale, 16*tileScale);
		}

	  }
	}
}



//WASTELAND
var wastelandMap = [
  [0,1,0,0,0,0],
  [0,0,0,0,0,1],
  [0,0,1,0,1,0],
  [0,0,1,0,0,1],
  [0,0,1,0,0,0],
  [1,0,0,0,0,0]

];

var tileMap = new Image()
tileMap.src = 'Images/Tiles.png'

var tileScale = 4

var posX = 0
var posY = 0

function drawWastelandMap(){

	for (var y = 0; y < wastelandMap.length; y++){
	  for(var x = 0; x < wastelandMap[y].length; x++){

	    if(wastelandMap[y][x] == 0){
	      c.drawImage(tileMap, 0, 0, 16, 16, x*16*tileScale, y*16*tileScale, 16*tileScale, 16*tileScale);
	    }

		if(wastelandMap[y][x] == 1){
		  c.drawImage(tileMap, 0, 16, 16, 16, x*16*tileScale, y*16*tileScale, 16*tileScale, 16*tileScale);
		}

	  }
	}
}
