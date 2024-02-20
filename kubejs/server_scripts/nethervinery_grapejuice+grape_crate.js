ServerEvents.recipes(event => {
	event.remove({ output: 'nethervinery:crimson_grape' })
	event.shaped(
		Item.of('nethervinery:crimson_grape', 9),
		[
		  '   ',
		  ' A ',
		  '   '
		],
		{
		  A: 'nethervinery:crimson_grape_crate'
		}
	)
	event.remove({ output: 'nethervinery:warped_grape'  })
	event.shaped(
		Item.of('nethervinery:warped_grape', 9),
		[
		  '   ',
		  ' A ',
		  '   '
		],
		{
		  A: 'nethervinery:crimson_warped_crate'
		})
	
	event.remove({ output: 'nethervinery:crimson_grapejuice' })
	event.custom({
	  type: 'create:mixing',
	  ingredients: [
		Item.of('nethervinery:crimson_grape', 6).toJson(),
		Item.of('vinery:vine_bottle', 2).toJson(),
	  ],
	  results: [Item.of('nethervinery:crimson_grapejuice', 2).toJson()]
    })

	event.remove({ output: 'nethervinery:warped_grapejuice' })
	event.custom({
	  type: 'create:mixing',
	  ingredients: [
		Item.of('nethervinery:warped_grape', 6).toJson(),
		Item.of('vinery:vine_bottle', 2).toJson(),
	  ],
	  results: [Item.of('nethervinery:warped_grapejuice', 2).toJson()]
    })
})
