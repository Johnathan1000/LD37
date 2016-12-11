
playerAttack = function(a,b){
	a.hp -= b.dmg
	console.log(a+' took '+b.dmg+' damage.')
}

entityAttack = function(a,b){
	b.hp -= a.dmg
	console.log('player took'+a.dmg+" damage.")
	giveIFrames()
}

var iFrames = false

giveIFrames = function(){
	iFrames = true
	setTimeout(resetIFrames, 100);
}

resetIFrames = function(){
	iFrames = false
}
