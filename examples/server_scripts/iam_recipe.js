ServerEvents.recipes(event => { 
	event.remove({ output: 'iammusicplayer:cassette_tape' })
	event.remove({ output: 'iammusicplayer:cassette_tape_glass' })
})