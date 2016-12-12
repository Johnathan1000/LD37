
playerAttack = function(a,b){
	a.hp -= b.dmg
	console.log(a.name+' took '+b.dmg+' damage.')
}

entityAttack = function(a,b){
	b.hp -= a.dmg
	console.log('player took'+a.dmg+" damage.")
	giveIFrames()
}

HealthNotSurpasMax = function(a){
	if(a.hp > a.maxHp){
		a.hp = a.maxHp
	}
}

var iFrames = false

giveIFrames = function(){
	iFrames = true
	setTimeout(resetIFrames, 100);
}

resetIFrames = function(){
	iFrames = false
}

var hpGapUp = 7
var EhpGapUp = 6
var hpLength = 2
var EhpLength = 3

drawHealthBar = function(a){
	c.fillStyle = 'red'
	c.fillRect(a.x - a.width/hpLength, a.y - hpGapUp*2, a.width/hpLength*4, hpGapUp)
	c.fillStyle = 'green'
	c.fillRect(a.x - a.width/hpLength, a.y - hpGapUp*2, (a.width/hpLength*4)*(a.hp/a.maxHp), hpGapUp)

}

drawEHealthBar = function(a){
	c.fillStyle = 'red'
	c.fillRect(a.x - a.width/EhpLength, a.y - EhpGapUp*2, a.width/EhpLength*4, EhpGapUp)
	c.fillStyle = 'green'
	c.fillRect(a.x - a.width/EhpLength, a.y - EhpGapUp*2, (a.width/EhpLength*4)*(a.hp/a.maxHp), EhpGapUp)

}
