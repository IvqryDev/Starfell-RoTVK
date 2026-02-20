
tellraw @s [{"translate": "✔ Offline Timestopper enabled" ,"color":"gray"}]
scoreboard players set offline_timestopper refresh_storage 1
playsound entity.experience_orb.pickup player @s ~ ~ ~ .6 1
