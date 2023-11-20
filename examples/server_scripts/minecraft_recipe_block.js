ServerEvents.recipes(event => { 
	event.custom({
	  type: 'create:mixing',
	  ingredients: [
		  Item.of('#c:stone').toJson(),
		  {"amount":81000,"fluid":"minecraft:lava","nbt":{}}
	  ],
	    results: [Item.of('minecraft:magma_block').toJson()]
    })
})