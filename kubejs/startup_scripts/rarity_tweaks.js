ItemEvents.modification(event => {
    event.modify([
        "modestmagic:enchantment_tablet_light",
        "modestmagic:enchantment_tablet_aquatic",
        "modestmagic:enchantment_tablet_enduring",
        "modestmagic:enchantment_tablet_everlasting",
        "modestmagic:enchantment_tablet_glacial",
        "modestmagic:enchantment_tablet_haunted",
        "modestmagic:enchantment_tablet_secure",
        "modestmagic:enchantment_tablet_serrated",
        "modestmagic:enchantment_tablet_lucky",
        "modestmagic:enchantment_tablet_heavy",
        "modestmagic:enchantment_tablet_puncturing",
        "modestmagic:enchantment_tablet_cyclic",
        "modestmagic:enchantment_tablet_recollection",
        "modestmagic:enchantment_tablet_swift",
        "modestmagic:enchantment_tablet_fiery",
        "irons_jewelry:ring",
        "irons_jewelry:necklace"
        ], item => {
        item.rarity = 'UNCOMMON'
    })
})