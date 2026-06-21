ItemEvents.modifyTooltips(tooltip => {


//Equipment & Armory
    tooltip.add(['caverns_and_chasms:aegis'], "§7Grants high defense but is unable to parry.")
    tooltip.modify('caverns_and_chasms:aegis', tooltip => {
        tooltip.removeLine(5)
    })

//Audio Listeners, Love Ya' To Death
    tooltip.add(['artifacts:everlasting_beef'], '§7"Would you rather have..."')
    tooltip.add(['artifacts:eternal_steak'], '§7"The final ingredient, was all of you."')

//Utilities & Tools
    tooltip.add(['minecraft:experience_bottle'], "§7Shatters into souls.")
    tooltip.add(['supplementaries:wrench'], "§7Can rotate blocks and hang from a zipline.")
    tooltip.add(['supplementaries:flute'], "§7Sings a song that attracts your pets to your location.")
    tooltip.add(['oreganized:lead_bolt'], "§7Increased velocity and damage of a typical arrow.")
    tooltip.add(['caverns_and_chasms:large_arrow'], "§7Reduced arrow velocity but has devastating damage.")
    tooltip.add(['nomansland:incendiary_arrow'], "§7Creates a vicious explosive of flame.")
    tooltip.add(['heart_crystals:cupids_arrow'], "§7Deals no damage but is capable of breeding animals")

    tooltip.add(['minecraft:compass'], "§7Displays your horizontal position.")
    tooltip.add(['supplementaries:altimeter'], "§7Displays your vertical position.")
    tooltip.add(['aa4-atlas:antique_atlas'], "§7Displays your current habitat.")
    tooltip.add(['minecraft:clock'], "§7Displays the current time.")
    tooltip.modify('minecraft:clock', tooltip => {
        tooltip.removeLine(1)
        tooltip.removeLine(1)
    })

    tooltip.add(['heart_crystals:heart_crystal'], "§7Increases maximum vitality by two points.")
    tooltip.modify('heart_crystals:heart_crystal', tooltip => {
        tooltip.removeLine(1)
    })

    tooltip.add(['minecraft:recovery_compass'], "§7An ancient compass capable of tracking down lost souls.")
    tooltip.add(['naturescompass:naturescompass'], "§7An earthen compass capable of finding any habitat.")
    tooltip.add(['explorerscompass:explorerscompass'], "§7A refined compass capable of tracking down any structure.")
    tooltip.add(['caverns_and_chasms:kunai'], "§7Shatters your enemy's defense for a time.")

    tooltip.add(['hominid:famished_stomach'], "§7Greatly increases attack damage but removes your ability to crit for a time.")
    tooltip.modify('dimensional_tears:dimensional_tears_bottle', tooltip => {
        tooltip.removeLine(1)
    })
    tooltip.modify('dimensional_tears:dimensional_tears_bucket', tooltip => {
        tooltip.removeLine(1)
    })

//Blocks
    tooltip.add(['heart_crystals:heart_lantern'], "§7Heals you when nearby.")
    tooltip.add(['nomansland:warding_effigy'], "§7Reduces monster spawns when nearby.")
    tooltip.add(['runes:crafting_altar'], "§7Can craft icons more efficiently than by hand.")
    tooltip.modify('runes:crafting_altar', tooltip => {
        tooltip.removeLine(1)
    })

    tooltip.modify('minecraft:chain', tooltip => {
        tooltip.removeLine(1)
    })

    tooltip.modify('minecraft:vine', tooltip => {
        tooltip.removeLine(1)
    })

    tooltip.modify('minecraft:lead', tooltip => {
        tooltip.removeLine(1)
    })

    tooltip.modify('supplementaries:rope', tooltip => {
        tooltip.removeLine(1)
    })

    tooltip.modify('minecraft:crying_obsidian', tooltip => {
        tooltip.removeLine(1)
    })

//Class: Basic
    tooltip.add([
        'minecraft:leather_helmet',
        'minecraft:leather_chestplate',
        'minecraft:leather_leggings',
        'minecraft:leather_boots',

    ], "§7Class: §8Basic")

//Class: Lancer
    tooltip.add([
        'archers:archer_armor_head',
        'archers:archer_armor_chest',
        'archers:archer_armor_legs',
        'archers:archer_armor_feet',

        'archers:ranger_armor_head',
        'archers:ranger_armor_chest',
        'archers:ranger_armor_legs',
        'archers:ranger_armor_feet',

        'archers:netherite_ranger_armor_head',
        'archers:netherite_ranger_armor_chest',
        'archers:netherite_ranger_armor_legs',
        'archers:netherite_ranger_armor_feet'
    ], "§7Class: §8Lancer")

//Class: Paladin
    tooltip.add([
        'paladins:paladin_armor_head',
        'paladins:paladin_armor_chest',
        'paladins:paladin_armor_legs',
        'paladins:paladin_armor_feet',

        'paladins:crusader_armor_head',
        'paladins:crusader_armor_chest',
        'paladins:crusader_armor_legs',
        'paladins:crusader_armor_feet',

        'paladins:netherite_crusader_armor_head',
        'paladins:netherite_crusader_armor_chest',
        'paladins:netherite_crusader_armor_legs',
        'paladins:netherite_crusader_armor_feet'
    ], "§7Class: §8Justicar")

//Class: Avatar
    tooltip.add([
        'paladins:priest_robe_head',
        'paladins:priest_robe_chest',
        'paladins:priest_robe_legs',
        'paladins:priest_robe_feet',

        'paladins:prior_robe_head',
        'paladins:prior_robe_chest',
        'paladins:prior_robe_legs',
        'paladins:prior_robe_feet',

        'paladins:netherite_prior_robe_head',
        'paladins:netherite_prior_robe_chest',
        'paladins:netherite_prior_robe_legs',
        'paladins:netherite_prior_robe_feet'
    ], "§7Class: §8Avatar")

//Class: Savager
    tooltip.add([
        'rogues:rogue_armor_head',
        'rogues:rogue_armor_chest',
        'rogues:rogue_armor_legs',
        'rogues:rogue_armor_feet',

        'rogues:assassin_armor_head',
        'rogues:assassin_armor_chest',
        'rogues:assassin_armor_legs',
        'rogues:assassin_armor_feet',

        'rogues:netherite_assassin_armor_head',
        'rogues:netherite_assassin_armor_chest',
        'rogues:netherite_assassin_armor_legs',
        'rogues:netherite_assassin_armor_feet'

    ], "§7Class: §8Savager")

//Class: Legionnaire
    tooltip.add([
        'rogues:warrior_armor_head',
        'rogues:warrior_armor_chest',
        'rogues:warrior_armor_legs',
        'rogues:warrior_armor_feet',

        'rogues:berserker_armor_head',
        'rogues:berserker_armor_chest',
        'rogues:berserker_armor_legs',
        'rogues:berserker_armor_feet',

        'rogues:netherite_berserker_armor_head',
        'rogues:netherite_berserker_armor_chest',
        'rogues:netherite_berserker_armor_legs',
        'rogues:netherite_berserker_armor_feet'
    ], "§7Class: §8Legionnaire")

//Class: Stargazer
    tooltip.add([
        'wizards:wizard_robe_head',
        'wizards:wizard_robe_chest',
        'wizards:wizard_robe_legs',
        'wizards:wizard_robe_feet',

        'wizards:arcane_robe_head',
        'wizards:arcane_robe_chest',
        'wizards:arcane_robe_legs',
        'wizards:arcane_robe_feet',

        'wizards:fire_robe_head',
        'wizards:fire_robe_chest',
        'wizards:fire_robe_legs',
        'wizards:fire_robe_feet',

        'wizards:frost_robe_head',
        'wizards:frost_robe_chest',
        'wizards:frost_robe_legs',
        'wizards:frost_robe_feet',

        'wizards:netherite_arcane_robe_head',
        'wizards:netherite_arcane_robe_chest',
        'wizards:netherite_arcane_robe_legs',
        'wizards:netherite_arcane_robe_feet',

        'wizards:netherite_fire_robe_head',
        'wizards:netherite_fire_robe_chest',
        'wizards:netherite_fire_robe_legs',
        'wizards:netherite_fire_robe_feet',

        'wizards:netherite_frost_robe_head',
        'wizards:netherite_frost_robe_chest',
        'wizards:netherite_frost_robe_legs',
        'wizards:netherite_frost_robe_feet'
    ], "§7Class: §8Stargazer")
})