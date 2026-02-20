scoreboard players enable @a bmm.wither_theme.toggle
scoreboard players enable @a bmm.ender_dragon_theme.toggle
tag @a remove bmm.triggered_toggle

execute as @a[tag=!bmm.wither_music_disabled,tag=!bmm.triggered_toggle] at @s unless score @s bmm.wither_theme.toggle matches 0 run function boss_music_mod:withermusic_disable

execute as @a[tag=bmm.wither_music_disabled,tag=!bmm.triggered_toggle] at @s unless score @s bmm.wither_theme.toggle matches 0 run function boss_music_mod:withermusic_enable



execute as @a[tag=!bmm.ender_dragon_music_disabled,tag=!bmm.triggered_toggle] at @s unless score @s bmm.ender_dragon_theme.toggle matches 0 run function boss_music_mod:dragonmusic_disable

execute as @a[tag=bmm.ender_dragon_music_disabled,tag=!bmm.triggered_toggle] at @s unless score @s bmm.ender_dragon_theme.toggle matches 0 run function boss_music_mod:dragonmusic_enable

scoreboard players set @a bmm.wither_theme.toggle 0
scoreboard players set @a bmm.ender_dragon_theme.toggle 0



stopsound @a[tag=bmm.ender_dragon_music_disabled] record boss_music_mod:enderdragonboss

stopsound @a[tag=bmm.wither_music_disabled] record boss_music_mod:witherboss

scoreboard players set @a[tag=bmm.wither_music_disabled] boss_music_mod.music.wither -1

scoreboard players set @a[tag=bmm.ender_dragon_music_disabled] boss_music_mod.ender_dragon -1

schedule function boss_music_mod:enabledisable 6t