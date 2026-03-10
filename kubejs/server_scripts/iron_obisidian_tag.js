ServerEvents.tags('block', event => {
	event.get('minecraft:needs_diamond_tool')
		.remove('minecraft:obsidian')
		.remove('blockbox:polished_obsidian')
})