ServerEvents.tags('block', event => {
	event.get('minecraft:needs_stone_tool')
		.remove('minecraft:copper_ore')
		.remove('minecraft:deepslate_copper_ore')
})