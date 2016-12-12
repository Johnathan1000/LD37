var maps = []
Array.prototype.drawWalls = function () {
	for(var i = 0; i < this.length; i++){
		if(i == currentMap){
			for(var j = 0; j < this[i].map[this[i].y].length-1; j++){
				if(j == 0){
					var tLWallTile = new Wall(0,0,16,16,currentMap,0)
					var blWallTile = new Wall(0,(this[i].map.length-1)*16,16,16,currentMap,2)
					var trWallTile = new Wall((this[i].map[this[i].y].length-1)*16,0,16,16,currentMap,1)
					var trWallTile = new Wall((this[i].map[this[i].y].length-1)*16,(this[i].map.length-1)*16,16,16,currentMap,3)
					continue;
				}
				if(j >= 1){
					var hWallsT = new Wall(16*j,0,16,16,currentMap,4)
					var hWallsB = new Wall(16*j,(this[i].map.length-1)*16,16,16,currentMap,4)
				}
			}

			for(var j = 0; j < this[i].map.length-1; j++){
				if(j == 0) continue;
				if(j >= 1){
					var vWallsL = new Wall(0,16*j,16,16,currentMap,5)
					var vWallsR = new Wall((this[i].map[this[i].y].length-1)*16,j*16,16,16,currentMap,5)
				}
			}
		}
	}
}
