
scoreboard objectives add refresh_daycounter dummy

scoreboard objectives add refresh_daycounter2 dummy

scoreboard objectives add refresh_members2 dummy

scoreboard objectives add refresh_constants dummy

scoreboard objectives add refresh_storage dummy



execute unless score offline_timestopper refresh_storage matches -2147483648.. run scoreboard players set offline_timestopper refresh_storage 0

scoreboard players set 100 refresh_constants 100

#offset day counter +1d
#vanilla starts at 0
execute unless score daycounter_offset refresh_storage matches -2147483648.. run time add 1d
execute unless score daycounter_offset refresh_storage matches -2147483648.. run scoreboard players set refresh_storage refresh_daycounter 1
