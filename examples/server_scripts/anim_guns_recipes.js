ServerEvents.recipes(event => { 
	event.remove({ output: 'anim_guns:hardened_iron_ingot' })
	event.custom({
	  type: 'create:mixing',
	  heatRequirement:'heated',
	  ingredients: [
		Item.of('create:iron_sheet').toJson(),
		Item.of('create:sturdy_sheet').toJson()
	  ],
	  results: [Item.of('anim_guns:hardened_iron_ingot').toJson()]
  })
  
  event.blasting('2x anim_guns:hardened_iron_nugget', 'minecraft:iron_ingot', )
	
	event.remove({ output: 'anim_guns:plastic' })
	event.custom({
	  type: 'create:compacting',
	  heatRequirement:'heated',
	  ingredients: [
		Item.of('createaddition:biomass').toJson(),
		{"amount":16200,"fluid":"create:potion","nbt":{"Bottle":"REGULAR","Potion":"minecraft:awkward"}}
	  ],
	  results: [Item.of('anim_guns:plastic').toJson()]
    })
})