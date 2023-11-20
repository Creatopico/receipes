ServerEvents.recipes(event => { 
	event.remove({ output: 'minecraft:iron_sword' })
	event.remove({ output: 'minecraft:iron_pickaxe' })
	event.remove({ output: 'minecraft:iron_shovel' })
	event.remove({ output: 'minecraft:iron_axe' })
	event.remove({ output: 'minecraft:iron_hoe' })
	
	event.remove({ output: 'minecraft:iron_helmet' })
	event.remove({ output: 'minecraft:iron_chestplate' })
	event.remove({ output: 'minecraft:iron_leggings' })
	event.remove({ output: 'minecraft:iron_boots' })
	
	
	event.remove({ output: 'minecraft:diamond_sword' })
	event.remove({ output: 'minecraft:diamond_pickaxe' })
	event.remove({ output: 'minecraft:diamond_shovel' })
	event.remove({ output: 'minecraft:diamond_axe' })
	event.remove({ output: 'minecraft:diamond_hoe' })
	
	event.remove({ output: 'minecraft:diamond_helmet' })
	event.remove({ output: 'minecraft:diamond_chestplate' })
	event.remove({ output: 'minecraft:diamond_leggings' })
	event.remove({ output: 'minecraft:diamond_boots' })
	
	event.shaped(
	  Item.of('minecraft:iron_sword', 1), // arg 1: output
	  [ 
		' A ', 
		' A ', // arg 2: the shape (array of strings)
		' B '  
	  ],
	  {
		A: 'anim_guns:hardened_iron_ingot', 
		B: 'minecraft:stick'
	  }
	)
	
	event.shaped(
	  Item.of('minecraft:iron_pickaxe', 1), // arg 1: output
	  [ 
		'AAA', 
		' B ', // arg 2: the shape (array of strings)
		' B '  
	  ],
	  {
		A: 'anim_guns:hardened_iron_ingot', 
		B: 'minecraft:stick'
	  }
	)
	
	event.shaped(
	  Item.of('minecraft:iron_shovel', 1), // arg 1: output
	  [ 
		' A ', 
		' B ',
		' B '  
	  ],
	  {
		A: 'anim_guns:hardened_iron_ingot', 
		B: 'minecraft:stick'
	  }
	)
	
	event.shaped(
	  Item.of('minecraft:iron_axe', 1), // arg 1: output
	  [ 
		'AA ', 
		'AB ', // arg 2: the shape (array of strings)
		' B '  
	  ],
	  {
		A: 'anim_guns:hardened_iron_ingot', 
		B: 'minecraft:stick'
	  }
	)
	
	event.shaped(
	  Item.of('minecraft:iron_hoe', 1), // arg 1: output
	  [ 
		' AA', 
		' B ', // arg 2: the shape (array of strings)
		' B '  
	  ],
	  {
		A: 'anim_guns:hardened_iron_ingot', 
		B: 'minecraft:stick'
	  }
	)
	
	event.shaped(
	  Item.of('minecraft:iron_helmet', 1), // arg 1: output
	  [ 
		'AAA', 
		'A A', // arg 2: the shape (array of strings)
		'   '  
	  ],
	  {
		A: 'anim_guns:hardened_iron_ingot'
	  }
	)
	
	event.shaped(
	  Item.of('minecraft:iron_chestplate', 1), // arg 1: output
	  [ 
		'A A', 
		'AAA', // arg 2: the shape (array of strings)
		'AAA'  
	  ],
	  {
		A: 'anim_guns:hardened_iron_ingot'
	  }
	)
	
	event.shaped(
	  Item.of('minecraft:iron_leggings', 1), // arg 1: output
	  [ 
		'AAA', 
		'A A', // arg 2: the shape (array of strings)
		'A A'  
	  ],
	  {
		A: 'anim_guns:hardened_iron_ingot'
	  }
	)
	
	event.shaped(
	  Item.of('minecraft:iron_boots', 1), // arg 1: output
	  [ 
		'A A', 
		'A A', // arg 2: the shape (array of strings)
		'   '  
	  ],
	  {
		A: 'anim_guns:hardened_iron_ingot'
	  }
	)
	
	
	
	event.shaped(
	  Item.of('minecraft:diamond_sword', 1), // arg 1: output
	  [ 
		'   ', 
		'ABA', // arg 2: the shape (array of strings)
		'   '  
	  ],
	  {
		A: 'createaddition:diamond_grit',
		B: 'minecraft:iron_sword'
	  }
	)
	
	event.shaped(
	  Item.of('minecraft:diamond_pickaxe', 1), // arg 1: output
	  [ 
		' A ', 
		'ABA', // arg 2: the shape (array of strings)
		'   '  
	  ],
	  {
		A: 'createaddition:diamond_grit',
		B: 'minecraft:iron_pickaxe'
	  }
	)
	
	event.shaped(
	  Item.of('minecraft:diamond_shovel', 1), // arg 1: output
	  [ 
		' A ', 
		' B ', // arg 2: the shape (array of strings)
		'   '  
	  ],
	  {
		A: 'createaddition:diamond_grit',
		B: 'minecraft:iron_shovel'
	  }
	)
	
	event.shaped(
	  Item.of('minecraft:diamond_axe', 1), // arg 1: output
	  [ 
		' A ', 
		'ABA', // arg 2: the shape (array of strings)
		'   '  
	  ],
	  {
		A: 'createaddition:diamond_grit',
		B: 'minecraft:iron_axe'
	  }
	)
	
	event.shaped(
	  Item.of('minecraft:diamond_hoe', 1), // arg 1: output
	  [ 
		'   ', 
		'ABA', // arg 2: the shape (array of strings)
		'   '  
	  ],
	  {
		A: 'createaddition:diamond_grit',
		B: 'minecraft:iron_hoe'
	  }
	)
	
	event.shaped(
	  Item.of('minecraft:diamond_helmet', 1), // arg 1: output
	  [ 
		'AAA', 
		'ABA', // arg 2: the shape (array of strings)
		'   '  
	  ],
	  {
		A: 'createaddition:diamond_grit',
		B: 'minecraft:iron_helmet'
	  }
	)
	
	event.shaped(
	  Item.of('minecraft:diamond_chestplate', 1), // arg 1: output
	  [ 
		'AAA', 
		'ABA', // arg 2: the shape (array of strings)
		'AAA'  
	  ],
	  {
		A: 'createaddition:diamond_grit',
		B: 'minecraft:iron_chestplate'
	  }
	)
	
	event.shaped(
	  Item.of('minecraft:diamond_leggings', 1), // arg 1: output
	  [ 
		'AAA', 
		'ABA', // arg 2: the shape (array of strings)
		'A A'  
	  ],
	  {
		A: 'createaddition:diamond_grit',
		B: 'minecraft:iron_leggings'
	  }
	)
	
	event.shaped(
	  Item.of('minecraft:diamond_boots', 1), // arg 1: output
	  [ 
		'ABA', 
		'A A', // arg 2: the shape (array of strings)
		'   '  
	  ],
	  {
		A: 'createaddition:diamond_grit',
		B: 'minecraft:iron_boots'
	  }
	)
})