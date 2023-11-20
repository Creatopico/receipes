ServerEvents.recipes(event => { 
	event.replaceInput(
		{ mod: 'computercraft' },
		'#c:stone',
		Ingredient.of('anim_guns:plastic')
	)
	
	event.replaceInput(
		{ mod: 'computercraft' },
		'minecraft:golden_apple',
		Ingredient.of('create:electron_tube')
	)
	
	event.replaceInput(
		{ mod: 'computercraft' },
		'minecraft:redstone',
		Ingredient.of('create:electron_tube')
	)
 
 event.shaped(
	  Item.of('computercraft:computer_normal', 1), // arg 1: output
	  [ 
		'A  ', 
		'   ', // arg 2: the shape (array of strings)
		'   '  
	  ],
	  {
		A: 'computercraft:pocket_computer_normal'
	  }
	)
 
 event.shaped(
	  Item.of('computercraft:pocket_computer_normal', 1), // arg 1: output
	  [ 
		'A  ', 
		'   ', // arg 2: the shape (array of strings)
		'   '  
	  ],
	  {
		A: 'computercraft:computer_normal'
	  }
	)
 
  event.shaped(
	  Item.of('computercraft:pocket_computer_advanced', 1), // arg 1: output
	  [ 
		'A  ', 
		'   ', // arg 2: the shape (array of strings)
		'   '  
	  ],
	  {
		A: 'computercraft:computer_advanced'
	  }
	)
 
  event.shaped(
	  Item.of('computercraft:computer_advanced', 1), // arg 1: output
	  [ 
		'A  ', 
		'   ', // arg 2: the shape (array of strings)
		'   '  
	  ],
	  {
		A: 'computercraft:pocket_computer_advanced'
	  }
	)
})