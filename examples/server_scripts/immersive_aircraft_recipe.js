ServerEvents.recipes(event => { 
	event.remove({ output: 'immersive_aircraft:hull' })
	event.remove({ output: 'immersive_aircraft:propeller' })
	event.remove({ output: 'immersive_aircraft:engine' })
	event.remove({ output: 'immersive_aircraft:boiler' })
	event.remove({ output: 'immersive_aircraft:quadrocopter' })
	event.remove({ output: 'immersive_aircraft:gyrodyne' })
	
	event.shaped(
	  Item.of('immersive_aircraft:hull', 1), // arg 1: output
	  [ 
		'AAA', 
		'BBB', // arg 2: the shape (array of strings)
		'AAA'  
	  ],
	  {
		A: '#minecraft:logs', 
		B: 'anim_guns:hardened_iron_ingot'	
	  }
	)
	
	event.shaped(
	  Item.of('immersive_aircraft:propeller', 1), // arg 1: output
	  [ 
		'AA ', 
		' B ', // arg 2: the shape (array of strings)
		' AA'  
	  ],
	  {
		A: 'anim_guns:hardened_iron_ingot', 
		B: 'create:sturdy_sheet'	
	  }
	)
	
	event.shaped(
	  Item.of('immersive_aircraft:engine', 1), // arg 1: output
	  [ 
		' A ', 
		'BCB', // arg 2: the shape (array of strings)
		'BDB'  
	  ],
	  {
		A: 'create:shaft', 
		B: 'anim_guns:hardened_iron_ingot',
		C: 'create:steam_engine',
		D: 'immersive_aircraft:boiler'
	  }
	)
	
	event.shaped(
	  Item.of('immersive_aircraft:boiler', 1), // arg 1: output
	  [ 
		'AAA', 
		'ABA', // arg 2: the shape (array of strings)
		'ACA'  
	  ],
	  {
		A: 'create:copper_sheet', 
		B: 'create:fluid_tank',
		C: 'create:blaze_burner'
	  }
	)
	
	event.shaped(
	  Item.of('immersive_aircraft:quadrocopter', 1), // arg 1: output
	  [ 
		'A A', 
		'BCB', // arg 2: the shape (array of strings)
		'A A'  
	  ],
	  {
		A: 'immersive_aircraft:propeller', 
		B: 'createaddition:electric_motor',
		C: '#create:seats'
	  }
	)
})