
function collision (entity,entity2) {
	if (entity2.x < entity.x + entity.width &&
	entity2.x + entity2.width > entity.x &&
	entity2.y <entity.y + entity.height &&
	entity2.height + entity2.y > entity.y) {
		console.log('collision')
	}
}
