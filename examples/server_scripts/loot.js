LootJS.modifiers((event) => {
    event
    .addLootTypeModifier(LootType.ENTITY)
    .removeLoot('minecraft:iron_ingot')
	
	event
    .addLootTypeModifier(LootType.ENTITY)
    .removeLoot('minecraft:gold_nugget')
	  .removeLoot('minecraft:golden_sword')
	  .removeLoot('minecraft:gold_ingot')
	
	event 
    .addLootTypeModifier(LootType.CHEST)
    .removeLoot('iammusicplayer:parabolic_antenna')
	  .removeLoot('iammusicplayer:radio_antenna')
})

