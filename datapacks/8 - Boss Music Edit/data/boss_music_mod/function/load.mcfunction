scoreboard objectives add boss_music_mod.ender_dragon dummy
scoreboard objectives add boss_music_mod.music.wither dummy
scoreboard objectives add boss_music_mod.wither.near dummy
scoreboard objectives add boss_music_mod.wither.near.copy dummy
scoreboard objectives add bmm.wither_theme.toggle trigger
scoreboard objectives add bmm.ender_dragon_theme.toggle trigger
scoreboard players set @a bmm.wither_theme.toggle 0
scoreboard players set @a bmm.ender_dragon_theme.toggle 0
function boss_music_mod:loop_per_second
function boss_music_mod:enabledisable