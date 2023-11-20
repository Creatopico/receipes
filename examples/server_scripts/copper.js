ServerEvents.tags('block', event => {
    event.remove('minecraft:needs_iron_tool', 'create:zinc_ore')
    event.remove('minecraft:needs_iron_tool', 'create:deepslate_zinc_ore')
    event.remove('minecraft:needs_iron_tool', 'minecraft:redstone_ore')
    event.remove('minecraft:needs_iron_tool', 'minecraft:deepslate_redstone_ore')
    //event.removeAllTagsFrom('create:zinc_ore')
    //event.add(''minecraft:mineable/pickaxe')
})