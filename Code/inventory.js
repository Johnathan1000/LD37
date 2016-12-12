bag = [
	//{ object: "A String With The Name Of The Object", quantity: 0}
]

function getItemFromBagByName (name){
	for (var i = 0; i < bag.length; i++){
		if (bag[i].object == name){
			return bag[i];
		}
	}
	return null;
}

function putObjectInBag (object) {
	console.log(object.name+' has been aquired')

	/*
		3 part process to putting something in the bag.

		1) Get the name of the object that we will be putting into the bag. It's important.
		2) See if there is a 'slot' for objects with this name in the inventory.
		   If there is, just increase the quantity of it.
		3)Step three will only run IF THERE IS NO SLOT IN THE BAG WITH THE OBJECTS NAME. It will create
		  a new slot.

	 */
	var name = object.name;

	for (var i = 0; i < bag.length; i++){
		if (bag[i].object == object.name){
			//Found a slot for this type of item in the bag.
			//Instead of adding a new element to the array, increase the quantity of this
			bag[i].quantity++;
			return; //Return means the rest of this function WILL NOT RUN.
		}
	}

	//No slot was found with the name of this object.
	bag.push({ object: name, quantity: 1});
}
