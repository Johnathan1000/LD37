
function collision (entity,entity2) {
	if (entity2.x < entity.x + entity.width &&
	entity2.x + entity2.width > entity.x &&
	entity2.y <entity.y + entity.height &&
	entity2.height + entity2.y > entity.y) {

		console.log('actual collision')
	}
}

function futureCollision (entity,entity2) {
	return(entity2.x + entity2.xVel < entity.x + entity.width &&
	entity2.x + entity2.xVel+ entity2.width + entity2.xVel > entity.x &&
	entity2.y + entity2.yVel <entity.y + entity.height &&
	entity2.height + entity2.yVel + entity2.y + entity2.yVel > entity.y)
}
