ServerEvents.recipes(event => { 
	event.shaped(
	  Item.of('chunk_have_ore_too:ore_detector', 1), // arg 1: output
	  [ 
		'AB ', 
		'   ', // arg 2: the shape (array of strings)
		'   '  
	  ],
	  {
		A: 'computercraft:pocket_computer_normal',
		B: 'minecraft:compass'
	  }
	)
	
	event.shaped(
	  Item.of('chunk_have_ore_too:block_ore_detector', 1), // arg 1: output
	  [ 
		'AB ', 
		'   ', // arg 2: the shape (array of strings)
		'   '  
	  ],
	  {
		A: 'chunk_have_ore_too:ore_detector',
		B: 'create:brass_casing'
	  }
	)
})
