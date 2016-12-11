function newWorld(){

}

var tileScale = 4

//ONEROOM
OMap = function(){
    this.oneRoomMap = [
        [0,1,0,0,0,0],
        [0,0,0,0,0,1],
        [0,0,1,0,1,0],
        [0,0,1,0,0,1],
        [0,0,1,0,0,0],
        [1,0,0,0,0,0]

    ];

    this.tileMap = new Image()
    tileMap.src = 'Images/Tiles.png'

    this.posX = 0
    this.posY = 0
}

OMap.prototype.drawMap = function(){

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
WMap = function(){
    this.wastelandMap = [
        [0,1,0,0,0,0],
        [0,0,0,0,0,1],
        [0,0,1,0,1,0],
        [0,0,1,0,0,1],
        [0,0,1,0,0,0],
        [1,0,0,0,0,0]

    ];

    this.tileMap = new Image()
    tileMap.src = 'Images/Tiles.png'

    this.posX = 0
    this.posY = 0
}

WMap.prototype.drawMap = function(){
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
