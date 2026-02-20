
tellraw @s [{"translate": "❌ Offline Timestopper disabled" ,"color":"gray"}]
scoreboard players set offline_timestopper refresh_storage 0
playsound entity.experience_orb.pickup player @s ~ ~ ~ .6 1
