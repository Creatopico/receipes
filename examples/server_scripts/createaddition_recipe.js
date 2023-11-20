ServerEvents.recipes(event => { 
	event.custom({
	  type: 'create:mixing',
	  heatRequirement:'heated',
	  ingredients: [
		{tag: 'minecraft:logs'},
		{"amount":16200,"fluid":"create:potion","nbt":{"Bottle":"REGULAR","Potion":"minecraft:awkward"}},
		{tag: 'c:crops'}
	  ],
	  results: [Item.of('createaddition:biomass').toJson()]
    })
})
