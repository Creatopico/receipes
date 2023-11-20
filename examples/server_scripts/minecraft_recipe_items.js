ServerEvents.recipes(event => { 
	event.remove({ output: 'minecraft:netherite_ingot' })
	
	event.custom({
	  type: 'create:compacting',
	  heatRequirement:'superheated',
	  ingredients: [
		Item.of('minecraft:netherite_scrap').toJson(),
		Item.of('minecraft:netherite_scrap').toJson(),
		Item.of('minecraft:netherite_scrap').toJson(),
		Item.of('minecraft:netherite_scrap').toJson(),
		Item.of('create:golden_sheet').toJson(),
		Item.of('create:sturdy_sheet').toJson(),
		Item.of('create:sturdy_sheet').toJson(),
		Item.of('create:sturdy_sheet').toJson(),
		Item.of('create:sturdy_sheet').toJson()
	  ],
	  results: [Item.of('minecraft:netherite_ingot').toJson()]
    })
	
	event.remove({ output: 'minecraft:blaze_powder' })
	event.custom({
	  type: 'create:mixing',
	  ingredients: [
		Item.of('minecraft:blaze_rod').toJson(),
		Item.of('minecraft:gunpowder').toJson()
	  ],
	  results: [Item.of('minecraft:blaze_powder').toJson()]
    })
	
	event.remove({ output: 'minecraft:charcoal' })
	event.custom({
	  type: 'create:compacting',
	  heatRequirement:'heated',
	  ingredients: [
		Item.of('createaddition:biomass_pellet').toJson(),
		Item.of('create:cinder_flour').toJson()
	  ],
	  results: [Item.of('minecraft:charcoal').toJson()]
    })
	
	event.remove({ output: 'minecraft:netherite_scrap' })
	event.custom({
	  type: 'create:compacting',
	  heatRequirement:'heated',
	  ingredients: [
		Item.of('minecraft:ancient_debris').toJson(),
		{"amount":81000,"fluid":"minecraft:water","nbt":{}}
	  ],
	  results: [Item.of('minecraft:netherite_scrap').toJson()]
    })

})