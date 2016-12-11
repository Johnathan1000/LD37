function newWorld(cm){
    currentMap = cm
}

var tileScale = 4
tileMap = new Image()
tileMap.src = 'Images/Tiles.png'


Map = function(){
    this.map = [
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,1,1,1,1,1,1,0,0,0,0],
        [0,0,0,0,1,1,1,1,1,1,0,0,0,0],
        [0,0,0,0,1,1,1,1,1,1,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    ];

    this.y = 0
    this.x = 0

    maps.push(this)
}
Map.prototype.drawMap = function(){

    for (this.y = 0; this.y < this.map.length; this.y++){
        for(this.x = 0; this.x < this.map[this.y].length; this.x++){

            if(this.map[this.y][this.x] == 0){
                c.drawImage(tileMap, 0, 16*4, 16, 16, this.x*16*tileScale, this.y*16*tileScale, 16*tileScale, 16*tileScale);
            }

            if(this.map[this.y][this.x] == 1){
                c.drawImage(tileMap, 16, 16*4, 16, 16, this.x*16*tileScale, this.y*16*tileScale, 16*tileScale, 16*tileScale);
            }

        }
    }
}

Map2 = function(){
    this.map = [
        [0,1,0,0,0,0],
        [0,0,0,0,0,1],
        [0,0,1,0,1,0],
        [0,0,1,0,0,1],
        [0,0,1,0,0,0],
        [1,0,0,0,0,0]

    ];

    this.posX = 0
    this.posY = 0
    maps.push(this)
}
Map2.prototype.drawMap = function(){

    for (var y = 0; y < this.map.length; y++){
        for(var x = 0; x < this.map[y].length; x++){

            if(this.map[y][x] == 0){
                c.drawImage(tileMap, 0, 0, 16, 16, x*16*tileScale, y*16*tileScale, 16*tileScale, 16*tileScale);
            }

            if(this.map[y][x] == 1){
                c.drawImage(tileMap, 0, 16, 16, 16, x*16*tileScale, y*16*tileScale, 16*tileScale, 16*tileScale);
            }

        }
    }
}

Map3 = function(){
    this.map = [
        [0,0,0,0,0,0],
        [0,0,0,0,0,0],
        [0,0,0,0,0,0],
        [0,0,0,0,0,0],
        [0,0,0,0,0,0],
        [0,0,0,0,0,0]

    ];

    this.posX = 0
    this.posY = 0
    maps.push(this)
}
Map3.prototype.drawMap = function(){

    for (var y = 0; y < this.map.length; y++){
        for(var x = 0; x < this.map[y].length; x++){

            if(this.map[y][x] == 0){
                c.drawImage(tileMap, 16, 0, 16, 16, x*16*tileScale, y*16*tileScale, 16*tileScale, 16*tileScale);
            }

            // if(this.map[y][x] == 1){
            //     c.drawImage(tileMap, 16, 16, 16, 16, x*16*tileScale, y*16*tileScale, 16*tileScale, 16*tileScale);
            // }

        }
    }
}

Map4 = function(){
    this.map = [
        [0,0,0,0,0,0],
        [0,0,0,0,0,0],
        [0,0,0,0,0,0],
        [0,0,0,0,0,0],
        [0,0,0,0,0,0],
        [0,0,0,0,0,0]

    ];

    this.posX = 0
    this.posY = 0
    maps.push(this)
}
Map4.prototype.drawMap = function(){

    for (var y = 0; y < this.map.length; y++){
        for(var x = 0; x < this.map[y].length; x++){

            if(this.map[y][x] == 0){
                c.drawImage(tileMap, 16*2, 0, 16, 16, x*16*tileScale, y*16*tileScale, 16*tileScale, 16*tileScale);
            }

            // if(this.map[y][x] == 1){
            //     c.drawImage(tileMap, 16*2, 16, 16, 16, x*16*tileScale, y*16*tileScale, 16*tileScale, 16*tileScale);
            // }

        }
    }
}

Map5 = function(){
    this.map = [
        [0,0,0,0,0,0],
        [0,0,0,0,0,0],
        [0,0,0,0,0,0],
        [0,0,0,0,0,0],
        [0,0,0,0,0,0],
        [0,0,0,0,0,0]

    ];

    this.posX = 0
    this.posY = 0
    maps.push(this)
}
Map5.prototype.drawMap = function(){

    for (var y = 0; y < this.map.length; y++){
        for(var x = 0; x < this.map[y].length; x++){

            if(this.map[y][x] == 0){
                c.drawImage(tileMap, 16*3, 0, 16, 16, x*16*tileScale, y*16*tileScale, 16*tileScale, 16*tileScale);
            }

            // if(this.map[y][x] == 1){
            //     c.drawImage(tileMap, 16*3, 16, 16, 16, x*16*tileScale, y*16*tileScale, 16*tileScale, 16*tileScale);
            // }

        }
    }
}

Map6 = function(){
    this.map = [
        [0,0,0,0,0,0],
        [0,0,0,0,0,0],
        [0,0,0,0,0,0],
        [0,0,0,0,0,0],
        [0,0,0,0,0,0],
        [0,0,0,0,0,0]

    ];

    this.posX = 0
    this.posY = 0
    maps.push(this)
}
Map6.prototype.drawMap = function(){

    for (var y = 0; y < this.map.length; y++){
        for(var x = 0; x < this.map[y].length; x++){

            if(this.map[y][x] == 0){
                c.drawImage(tileMap, 16*4, 0, 16, 16, x*16*tileScale, y*16*tileScale, 16*tileScale, 16*tileScale);
            }

            // if(this.map[y][x] == 1){
            //     c.drawImage(tileMap, 16*4, 16, 16, 16, x*16*tileScale, y*16*tileScale, 16*tileScale, 16*tileScale);
            // }

        }
    }
}
