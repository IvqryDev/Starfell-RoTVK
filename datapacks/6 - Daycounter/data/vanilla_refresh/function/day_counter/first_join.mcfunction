

scoreboard objectives add refresh_members2 dummy


#counts players to see if the world is multiplayer
scoreboard players add $allmembers refresh_members2 1
execute store result score @s refresh_members2 run scoreboard players get $allmembers refresh_members2

#plays daycounter animation when first joining
scoreboard players set @s refresh_daycounter2 0

    #if world is multiplayer, daycounter animation delays slightly to account for server join/loading time
    execute if score $allmembers refresh_members2 matches 2.. run scoreboard players set @s refresh_daycounter2 -20
#


