ServerEvents.recipes(event => { 
	event.remove({ output: 'create:mechanical_drill' })
	event.shaped(
	  Item.of('create:mechanical_drill', 1), // arg 1: output
	  [ 
		' A ', 
		'ABA', // arg 2: the shape (array of strings)
		' C '  
	  ],
	  {
		A: 'minecraft:diamond', 
		B: 'anim_guns:hardened_iron_ingot',  //arg 3: the mapping object
		C: 'create:andesite_casing'
	  }
	)

	event.remove({ output: 'create:andesite_alloy' })
	event.shaped(
	  Item.of('create:andesite_alloy', 1), // arg 1: output
	  [ 
		'AB ', 
		'BA ', // arg 2: the shape (array of strings)
		'   '  
	  ],
	  {
		A: 'create:zinc_nugget', 
		B: 'minecraft:andesite'	
	  }
	)
	
	event.shaped(
	  Item.of('create:andesite_alloy', 1), // arg 1: output
	  [ 
		'AAB', 
		'ABA', // arg 2: the shape (array of strings)
		'BAA'  
	  ],
	  {
		A: 'minecraft:iron_nugget', 
		B: 'minecraft:andesite'	
	  }
	)
	
	event.custom({
	  type: 'create:mixing',
	  heatRequirement:'heated',
	  ingredients: [
		Item.of('minecraft:andesite').toJson(),
		Item.of('minecraft:andesite').toJson(),
		Item.of('anim_guns:hardened_iron_nugget').toJson(),
		Item.of('anim_guns:hardened_iron_nugget').toJson()
	  ],
	  results: [Item.of('create:andesite_alloy').toJson()]
    })
	
	event.custom({
	  type: 'create:mixing',
	  ingredients: [
		Item.of('minecraft:andesite').toJson(),
		Item.of('create:zinc_nugget').toJson()
	  ],
	  results: [Item.of('create:andesite_alloy').toJson()]
    })
	
	event.remove({ output: 'create:brown_toolbox' })
	event.shaped(
	  Item.of('create:brown_toolbox', 1), // arg 1: output
	  [ 
		'ECE', 
		'BAB', // arg 2: the shape (array of strings)
		'DDD'  
	  ],
	  {
		A: '#c:wooden_chests', 
		B: 'anim_guns:plastic',
		C: 'create:brass_sheet',
		D: 'minecraft:leather',
		E: 'create:cogwheel'
	  }
	)
	
})