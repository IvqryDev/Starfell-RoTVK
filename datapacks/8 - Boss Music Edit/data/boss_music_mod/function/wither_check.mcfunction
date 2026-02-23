execute store success score @s boss_music_mod.wither.near if entity @e[type=wither,distance=..69,limit=1]
execute if score @s boss_music_mod.wither.near matches 1 run function boss_music_mod:wither_play
execute if score @s boss_music_mod.wither.near < @s boss_music_mod.wither.near.copy run function boss_music_mod:wither_stop
scoreboard players operation @s boss_music_mod.wither.near.copy = @s boss_music_mod.wither.near