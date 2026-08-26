ItemEvents.modification(event => {
    function maxDurability(modifiedItem, modifiedAmount) {
        event.modify(modifiedItem, item => {item.maxDamage = modifiedAmount})
    }

    //Durability = 64
    maxDurability([
    ], 64)

    //Durability = 128
    maxDurability([
        "minecraft:wooden_axe",
        "minecraft:wooden_shovel",
        "minecraft:wooden_pickaxe",
        "minecraft:leather_leggings",
        "minecraft:leather_boots",
        "paladins:acolyte_wand",
        "shieldexp:wooden_shield",
        "wizards:wand_novice",
        "wizards:staff_wizard",
        "minecraft:leather_chestplate",
        "minecraft:leather_helmet",
        "minecraft:wooden_hoe",
        "farmersdelight:flint_knife",
        "archers:flint_spear",
        "minecraft:wooden_sword"
    ], 128)

    //Durability = 256
    maxDurability([
        "minecraft:crossbow",
        "archers:composite_longbow",
        "minecraft:bow",
        "manual_labour:flint_hammer",
        "minecraft:stone_hoe",
        "minecraft:stone_sword",
        "minecraft:stone_axe",
        "minecraft:stone_shovel",
        "minecraft:stone_pickaxe",
        "quark:trowel",
        "manual_labour:ladle",
        "manual_labour:pestle",
        "minecraft:brush",
        "minecraft:shears",
        "minecraft:fishing_rod",
        "minecraft:flint_and_steel"
    ], 256)

    //Durability = 320
    maxDurability([
        "paladins:priest_robe_chest",
        "paladins:paladin_armor_chest",
        "archers:archer_armor_chest",
        "wizards:wizard_robe_head",
        "rogues:warrior_armor_head",
        "rogues:rogue_armor_head",
        "paladins:priest_robe_head",
        "paladins:paladin_armor_head",
        "archers:archer_armor_head",
        "wizards:wizard_robe_feet",
        "rogues:warrior_armor_feet",
        "rogues:rogue_armor_feet",
        "paladins:priest_robe_feet",
        "paladins:paladin_armor_feet",
        "archers:archer_armor_feet",
        "wizards:wizard_robe_legs",
        "rogues:warrior_armor_legs",
        "rogues:rogue_armor_legs",
        "paladins:priest_robe_legs",
        "paladins:paladin_armor_legs",
        "archers:archer_armor_legs",
        "wizards:wizard_robe_chest",
        "rogues:warrior_armor_chest",
        "rogues:rogue_armor_chest"
    ], 320)

    //Durability = 512
    maxDurability([
        "paladins:holy_staff",
        "paladins:holy_wand",
        "archers:rapid_crossbow",
        "archers:mechanic_shortbow",
        "minecraft:iron_hoe",
        "archers:iron_spear",
        "minecraft:iron_pickaxe",
        "minecraft:iron_shovel",
        "minecraft:iron_axe",
        "minecraft:iron_sword",
        "rogues:iron_dagger",
        "rogues:iron_sickle",
        "rogues:iron_glaive",
        "rogues:iron_double_axe",
        "shieldexp:iron_shield",
        "reliable_gliders:glider"
    ], 512)


    //Durability = 1024
    maxDurability([
        "archers:ranger_armor_head",
        "archers:ranger_armor_chest",
        "archers:ranger_armor_legs",
        "archers:ranger_armor_feet",
        "paladins:crusader_armor_head",
        "paladins:crusader_armor_chest",
        "paladins:crusader_armor_legs",
        "paladins:crusader_armor_feet",
        "paladins:prior_robe_head",
        "paladins:prior_robe_chest",
        "paladins:prior_robe_legs",
        "paladins:prior_robe_feet",
        "rogues:assassin_armor_head",
        "rogues:assassin_armor_chest",
        "rogues:assassin_armor_legs",
        "rogues:assassin_armor_feet",
        "wizards:arcane_robe_head",
        "wizards:arcane_robe_chest",
        "wizards:arcane_robe_legs",
        "wizards:arcane_robe_feet",
        "wizards:fire_robe_head",
        "wizards:fire_robe_chest",
        "wizards:fire_robe_legs",
        "wizards:fire_robe_feet",
        "wizards:frost_robe_head",
        "wizards:frost_robe_chest",
        "wizards:frost_robe_legs",
        "wizards:frost_robe_feet",
        "rogues:berserker_armor_head",
        "rogues:berserker_armor_chest",
        "rogues:berserker_armor_legs",
        "rogues:berserker_armor_feet"
    ], 1024)

    //Durability = 1280
    maxDurability([
        "paladins:golden_claymore",
        "rogues:golden_double_axe",
        "archers:royal_longbow",
        "rogues:golden_glaive",
        "rogues:golden_dagger",
        "caverns_and_chasms:silver_sword",
        "rogues:golden_sickle",
        "archers:golden_spear",
        "caverns_and_chasms:silver_hoe",
        "caverns_and_chasms:silver_axe",
        "caverns_and_chasms:silver_shovel",
        "caverns_and_chasms:silver_pickaxe",
        "minecraft:wolf_armor",
        "minecraft:turtle_helmet",
        "nomansland:tortoise_shell",
        "caverns_and_chasms:aegis"
    ], 1280)

    //Durability = 1920
    maxDurability([
        //Equipment
        "paladins:diamond_claymore",
        "rogues:diamond_glaive",
        "rogues:diamond_double_axe",
        "rogues:diamond_sickle",
        "paladins:diamond_holy_staff",
        "paladins:diamond_holy_wand",
        "archers:heavy_crossbow",
        "archers:diamond_spear",
        "minecraft:diamond_sword",
        "simplest_paxels:diamond_paxel",
        "shieldexp:diamond_shield",
        "archers:royal_longbow",
        "wizards:staff_frost",
        "wizards:staff_fire",
        "wizards:staff_arcane",
        "wizards:wand_frost",
        "wizards:wand_fire",
        "wizards:wand_arcane",
        "minecraft:mace",
        "oreganized:scribe",

        //Forsaken Armor
        "rogues:netherite_berserker_armor_chest",
        "rogues:netherite_berserker_armor_head",
        "rogues:netherite_assassin_armor_feet",
        "rogues:netherite_assassin_armor_legs",
        "archers:netherite_ranger_armor_feet",
        "wizards:netherite_frost_robe_head",
        "wizards:netherite_frost_robe_chest",
        "wizards:netherite_frost_robe_legs",
        "wizards:netherite_frost_robe_feet",
        "wizards:netherite_arcane_robe_feet",
        "paladins:netherite_crusader_armor_head",
        "wizards:netherite_arcane_robe_head",
        "wizards:netherite_arcane_robe_chest",
        "wizards:netherite_arcane_robe_legs",
        "wizards:netherite_fire_robe_head",
        "wizards:netherite_fire_robe_chest",
        "wizards:netherite_fire_robe_legs",
        "wizards:netherite_fire_robe_feet",
        "rogues:netherite_assassin_armor_head",
        "paladins:netherite_crusader_armor_chest",
        "paladins:netherite_crusader_armor_legs",
        "paladins:netherite_crusader_armor_feet",
        "paladins:netherite_prior_robe_head",
        "paladins:netherite_prior_robe_chest",
        "paladins:netherite_prior_robe_legs",
        "paladins:netherite_prior_robe_feet",
        "rogues:netherite_assassin_armor_chest",
        "archers:netherite_ranger_armor_legs",
        "archers:netherite_ranger_armor_chest",
        "archers:netherite_ranger_armor_head",
        "rogues:netherite_berserker_armor_feet",
        "rogues:netherite_berserker_armor_legs"
    ], 1920)

    //Durability = 6174
    maxDurability([
        //Forsaken Tools
        "paladins:netherite_claymore",
        "archers:netherite_spear",
        "minecraft:netherite_sword",
        "archers:netherite_rapid_crossbow",
        "archers:netherite_heavy_crossbow",
        "paladins:netherite_holy_wand",
        "paladins:netherite_holy_staff",
        "shieldexp:netherite_shield",
        "simplest_paxels:netherite_paxel",
        "archers:netherite_longbow",
        "archers:netherite_shortbow",
        "rogues:netherite_glaive",
        "rogues:netherite_double_axe",
        "rogues:netherite_sickle",
        "rogues:netherite_dagger",

        //Legendary Equipment
        "arsenal:unique_glaive_1",
        "arsenal:unique_mace_sw",
        "arsenal:unique_longbow_2",
        "arsenal:unique_heavy_crossbow_sw",
        "arsenal:unique_double_axe_2",
        "arsenal:unique_longsword_sw",
        "arsenal:unique_sickle_sw",
        "arsenal:unique_dagger_sw",
        "arsenal:unique_spear_2",
        "arsenal:unique_staff_heal_2",
        "arsenal:unique_staff_damage_sw",
        "arsenal:unique_claymore_2",
        "armory_rpgs:astral_robe_head",
        "armory_rpgs:astral_robe_chest",
        "armory_rpgs:astral_robe_legs",
        "armory_rpgs:astral_robe_feet",
        "armory_rpgs:scarlet_robe_head",
        "armory_rpgs:scarlet_robe_chest",
        "armory_rpgs:scarlet_robe_legs",
        "armory_rpgs:scarlet_robe_feet",
        "armory_rpgs:glacier_robe_head",
        "armory_rpgs:glacier_robe_chest",
        "armory_rpgs:glacier_robe_legs",
        "armory_rpgs:glacier_robe_feet",
        "armory_rpgs:avatar_robe_head",
        "armory_rpgs:avatar_robe_chest",
        "armory_rpgs:avatar_robe_legs",
        "armory_rpgs:avatar_robe_feet",
        "armory_rpgs:justicar_armor_head",
        "armory_rpgs:justicar_armor_chest",
        "armory_rpgs:justicar_armor_legs",
        "armory_rpgs:justicar_armor_feet",
        "armory_rpgs:destroyer_armor_head",
        "armory_rpgs:destroyer_armor_chest",
        "armory_rpgs:destroyer_armor_legs",
        "armory_rpgs:destroyer_armor_feet",
        "armory_rpgs:deathmantle_armor_head",
        "armory_rpgs:deathmantle_armor_chest",
        "armory_rpgs:deathmantle_armor_legs",
        "armory_rpgs:deathmantle_armor_feet",
        "armory_rpgs:strider_armor_head",
        "armory_rpgs:strider_armor_chest",
        "armory_rpgs:strider_armor_legs",
        "armory_rpgs:strider_armor_feet",

        //Blessings
        "block_factorys_bosses:kraken_trident",
        "block_factorys_bosses:undying_tentacle",
        "block_factorys_bosses:sandworm_gauntlet",
        "block_factorys_bosses:ice_gauntlet",
        "block_factorys_bosses:knight_sword"
    ], 6174)
})