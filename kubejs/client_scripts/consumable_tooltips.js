ItemEvents.modifyTooltips(tooltip => {
    tooltip.modify([
        "brewinandchewin:beer",
        "brewinandchewin:vodka",
        "brewinandchewin:mead",
        "brewinandchewin:rice_wine",
        "brewinandchewin:pale_jane",
        "brewinandchewin:egg_grog",
        "brewinandchewin:glittering_grenadine",
        "brewinandchewin:saccharine_rum",
        "brewinandchewin:salty_folly",
        "brewinandchewin:bloody_mary",
        "brewinandchewin:red_rum",
        "brewinandchewin:strongroot_ale",
        "brewinandchewin:steel_toe_stout",
        "brewinandchewin:dread_nog",
        "brewinandchewin:withering_dross"],
        tooltip => {
        tooltip.removeLine(1)
        tooltip.removeLine(1)
        tooltip.removeLine(1)
        tooltip.removeLine(1)
        tooltip.removeLine(1)
        tooltip.removeLine(1)
        tooltip.removeLine(1)
    })

    //Addition
    tooltip.add(['brewinandchewin:beer'], "§7Increases melee attack damage for a time.")
    tooltip.add(['brewinandchewin:vodka'], "§7Increases maximum vitality for a time.")
    tooltip.add(['brewinandchewin:mead'], "§7Passively regenerates vitality for a time.")
    tooltip.add(['brewinandchewin:rice_wine'], "§7Increases movement speed for a time.")
    tooltip.add(['brewinandchewin:pale_jane'], "§7Increases attack and mining speed for a time.")
    tooltip.add(['brewinandchewin:egg_grog'], "§7Increases ranged draw speed for a time.")
    tooltip.add(['brewinandchewin:glittering_grenadine'], "§7Increases critical chance for a time.")
    tooltip.add(['brewinandchewin:saccharine_rum'], "§7Restores a fair amount of vitality.")
    tooltip.add(['brewinandchewin:salty_folly'], "§7Lets you breathe underwater for a time.")
    tooltip.add(['brewinandchewin:bloody_mary'], "§7Provides immunity to flame and magma for a time.")
    tooltip.add(['brewinandchewin:red_rum'], "§7Increases attack speed upon striking an enemy for a time.")
    tooltip.add(['brewinandchewin:strongroot_ale'], "§7Increases critical damage for a time.")
    tooltip.add(['brewinandchewin:steel_toe_stout'], "§7Increases all resistances for a time.")
    tooltip.add(['brewinandchewin:dread_nog'], "§7Increases luckiness for a time.")
    tooltip.add(['brewinandchewin:withering_dross'], "§7Greatly increases melee attack & critical damage for a time... But at a cost.")
})