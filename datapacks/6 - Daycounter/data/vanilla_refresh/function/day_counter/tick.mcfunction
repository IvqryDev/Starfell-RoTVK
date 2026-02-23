

#day counter
function vanilla_refresh:day_counter/root

# timestopper
    #reset
    execute if score offline_timestopper refresh_storage matches 1 if entity @a run gamerule doDaylightCycle true

    # no players
    execute if score offline_timestopper refresh_storage matches 1 unless entity @a run gamerule doDaylightCycle false
