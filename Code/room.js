
Array.prototype.drawWalls = function () {
			var i = maps[currentMap]
			var ylength = i.map.length -1
			var xlength = i.map[0].length -1

			for(var j = 0; j < ylength; j++){
				if(j == 0) continue;
				if(j >= 1){
					var vWallsL = new Wall(0,16*j,16,16,currentMap,5)
					var vWallsR = new Wall(xlength*16,j*16,16,16,currentMap,5)
				}
			}

			for(var j = 0; j < xlength; j++){
				if(j == 0){
					var tLWallTile = new Wall(0,0,16,16,currentMap,0)
					var blWallTile = new Wall(0,ylength*16,16,16,currentMap,2)
					var trWallTile = new Wall(xlength*16,0,16,16,currentMap,1)
					var trWallTile = new Wall(xlength*16,ylength*16,16,16,currentMap,3)
					continue;
				}
				if(j >= 1){
					var hWallsL = new Wall(j*16,0,16,16,currentMap,4)
					var hWallsL = new Wall(j*16,(ylength)*16,16,16,currentMap,4)

				}
			}

		}
