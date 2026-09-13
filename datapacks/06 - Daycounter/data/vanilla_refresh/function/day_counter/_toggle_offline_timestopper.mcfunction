execute if score offline_timestopper refresh_storage matches 1 run tag @s add refresh_timestopper_enabled

execute if entity @s[tag=!refresh_timestopper_enabled] run function vanilla_refresh:day_counter/timestopper/enable
execute if entity @s[tag=refresh_timestopper_enabled] run function vanilla_refresh:day_counter/timestopper/disable

tag @s remove refresh_timestopper_enabled