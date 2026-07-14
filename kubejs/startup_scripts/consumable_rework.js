const $MobEffectInstance = Java.loadClass('net.minecraft.world.effect.MobEffectInstance')

ItemEvents.modification(event => {
    event.modify('brewinandchewin:beer', item => {
        const foodComponent = item.get('food')
        const originalNutrition = foodComponent.nutrition()
        const originalSaturation = foodComponent.saturation()
        item.setFood({
            nutrition: originalNutrition,
            saturation: originalSaturation,
            canAlwaysEat: true,
            eatSeconds: 1.6,
            effects: [
                {
                    probability: 1,
                    effectSupplier: () =>
                        new $MobEffectInstance(
                            'minecraft:strength',
                            6000, /* 5 Minutes */
                            0, /* Level 1 */
                            true, /* Ambience */
                            false /* Particles */
                        ),
                },
            ]
        })
    })
    event.modify('brewinandchewin:saccharine_rum', item => {
        const foodComponent = item.get('food')
        const originalNutrition = foodComponent.nutrition()
        const originalSaturation = foodComponent.saturation()
        item.setFood({
            nutrition: originalNutrition,
            saturation: originalSaturation,
            canAlwaysEat: true,
            eatSeconds: 1.6,
            effects: [
                {
                    probability: 1,
                    effectSupplier: () =>
                        new $MobEffectInstance(
                            'minecraft:instant_health',
                            1, /* Instant */
                            1, /* Level 2 */
                            true, /* Ambience */
                            false /* Particles */
                        ),
                },
            ]
        })
    })
    event.modify('brewinandchewin:salty_folly', item => {
        const foodComponent = item.get('food')
        const originalNutrition = foodComponent.nutrition()
        const originalSaturation = foodComponent.saturation()
        item.setFood({
            nutrition: originalNutrition,
            saturation: originalSaturation,
            canAlwaysEat: true,
            eatSeconds: 1.6,
            effects: [
                {
                    probability: 1,
                    effectSupplier: () =>
                        new $MobEffectInstance(
                            'minecraft:water_breathing',
                            6000, /* 5 Minutes */
                            0, /* Level 1 */
                            true, /* Ambience */
                            false /* Particles */
                        ),
                },
            ]
        })
    })
    event.modify('brewinandchewin:glittering_grenadine', item => {
        const foodComponent = item.get('food')
        const originalNutrition = foodComponent.nutrition()
        const originalSaturation = foodComponent.saturation()
        item.setFood({
            nutrition: originalNutrition,
            saturation: originalSaturation,
            canAlwaysEat: true,
            eatSeconds: 1.6,
            effects: [
                {
                    probability: 1,
                    effectSupplier: () =>
                        new $MobEffectInstance(
                            'critical_strike:chance',
                            6000, /* 5 Minutes */
                            0, /* Level 1 */
                            true, /* Ambience */
                            false /* Particles */
                        ),
                },
            ]
        })
    })
    event.modify('brewinandchewin:bloody_mary', item => {
        const foodComponent = item.get('food')
        const originalNutrition = foodComponent.nutrition()
        const originalSaturation = foodComponent.saturation()
        item.setFood({
            nutrition: originalNutrition,
            saturation: originalSaturation,
            canAlwaysEat: true,
            eatSeconds: 1.6,
            effects: [
                {
                    probability: 1,
                    effectSupplier: () =>
                        new $MobEffectInstance(
                            'minecraft:fire_resistance',
                            6000, /* 5 Minutes */
                            0, /* Level 1 */
                            true, /* Ambience */
                            false /* Particles */
                        ),
                },
            ]
        })
    })
    event.modify('brewinandchewin:egg_grog', item => {
        const foodComponent = item.get('food')
        const originalNutrition = foodComponent.nutrition()
        const originalSaturation = foodComponent.saturation()
        item.setFood({
            nutrition: originalNutrition,
            saturation: originalSaturation,
            canAlwaysEat: true,
            eatSeconds: 1.6,
            effects: [
                {
                    probability: 1,
                    effectSupplier: () =>
                        new $MobEffectInstance(
                            'ranged_weapon:haste',
                            6000, /* 5 Minutes */
                            1, /* Level 2 */
                            true, /* Ambience */
                            false /* Particles */
                        ),
                },
            ]
        })
    })
    event.modify('brewinandchewin:pale_jane', item => {
        const foodComponent = item.get('food')
        const originalNutrition = foodComponent.nutrition()
        const originalSaturation = foodComponent.saturation()
        item.setFood({
            nutrition: originalNutrition,
            saturation: originalSaturation,
            canAlwaysEat: true,
            eatSeconds: 1.6,
            effects: [
                {
                    probability: 1,
                    effectSupplier: () =>
                        new $MobEffectInstance(
                            'minecraft:haste',
                            6000, /* 5 Minutes */
                            0, /* Level 1 */
                            true, /* Ambience */
                            false /* Particles */
                        ),
                },
            ]
        })
    })
    event.modify('brewinandchewin:rice_wine', item => {
        const foodComponent = item.get('food')
        const originalNutrition = foodComponent.nutrition()
        const originalSaturation = foodComponent.saturation()
        item.setFood({
            nutrition: originalNutrition,
            saturation: originalSaturation,
            canAlwaysEat: true,
            eatSeconds: 1.6,
            effects: [
                {
                    probability: 1,
                    effectSupplier: () =>
                        new $MobEffectInstance(
                            'minecraft:speed',
                            6000, /* 5 Minutes */
                            0, /* Level 1 */
                            true, /* Ambience */
                            false /* Particles */
                        ),
                },
            ]
        })
    })
    event.modify('brewinandchewin:mead', item => {
        const foodComponent = item.get('food')
        const originalNutrition = foodComponent.nutrition()
        const originalSaturation = foodComponent.saturation()
        item.setFood({
            nutrition: originalNutrition,
            saturation: originalSaturation,
            canAlwaysEat: true,
            eatSeconds: 1.6,
            effects: [
                {
                    probability: 1,
                    effectSupplier: () =>
                        new $MobEffectInstance(
                            'minecraft:regeneration',
                            6000, /* 5 Minutes */
                            0, /* Level 1 */
                            true, /* Ambience */
                            false /* Particles */
                        ),
                },
            ]
        })
    })
    event.modify('brewinandchewin:vodka', item => {
        const foodComponent = item.get('food')
        const originalNutrition = foodComponent.nutrition()
        const originalSaturation = foodComponent.saturation()
        item.setFood({
            nutrition: originalNutrition,
            saturation: originalSaturation,
            canAlwaysEat: true,
            eatSeconds: 1.6,
            effects: [
                {
                    probability: 1,
                    effectSupplier: () =>
                        new $MobEffectInstance(
                            'minecraft:health_boost',
                            6000, /* 5 Minutes */
                            0, /* Level 1 */
                            true, /* Ambience */
                            false /* Particles */
                        ),
                },
            ]
        })
    })
    event.modify('brewinandchewin:strongroot_ale', item => {
        const foodComponent = item.get('food')
        const originalNutrition = foodComponent.nutrition()
        const originalSaturation = foodComponent.saturation()
        item.setFood({
            nutrition: originalNutrition,
            saturation: originalSaturation,
            canAlwaysEat: true,
            eatSeconds: 1.6,
            effects: [
                {
                    probability: 1,
                    effectSupplier: () =>
                        new $MobEffectInstance(
                            'critical_strike:damage',
                            6000, /* 5 Minutes */
                            0, /* Level 1 */
                            true, /* Ambience */
                            false /* Particles */
                        ),
                },
            ]
        })
    })
    event.modify('brewinandchewin:dread_nog', item => {
        const foodComponent = item.get('food')
        const originalNutrition = foodComponent.nutrition()
        const originalSaturation = foodComponent.saturation()
        item.setFood({
            nutrition: originalNutrition,
            saturation: originalSaturation,
            canAlwaysEat: true,
            eatSeconds: 1.6,
            effects: [
                {
                    probability: 1,
                    effectSupplier: () =>
                        new $MobEffectInstance(
                            'minecraft:luck',
                            6000, /* 5 Minutes */
                            0, /* Level 1 */
                            true, /* Ambience */
                            false /* Particles */
                        ),
                },
            ]
        })
    })
    event.modify('brewinandchewin:steel_toe_stout', item => {
        const foodComponent = item.get('food')
        const originalNutrition = foodComponent.nutrition()
        const originalSaturation = foodComponent.saturation()
        item.setFood({
            nutrition: originalNutrition,
            saturation: originalSaturation,
            canAlwaysEat: true,
            eatSeconds: 1.6,
            effects: [
                {
                    probability: 1,
                    effectSupplier: () =>
                        new $MobEffectInstance(
                            'minecraft:resistance',
                            6000, /* 5 Minutes */
                            0, /* Level 1 */
                            true, /* Ambience */
                            false /* Particles */
                        ),
                },
            ]
        })
    })
    event.modify('brewinandchewin:red_rum', item => {
        const foodComponent = item.get('food')
        const originalNutrition = foodComponent.nutrition()
        const originalSaturation = foodComponent.saturation()
        item.setFood({
            nutrition: originalNutrition,
            saturation: originalSaturation,
            canAlwaysEat: true,
            eatSeconds: 1.6,
            effects: [
                {
                    probability: 1,
                    effectSupplier: () =>
                        new $MobEffectInstance(
                            'brewinandchewin:raging',
                            6000, /* 5 Minutes */
                            0, /* Level 1 */
                            true, /* Ambience */
                            false /* Particles */
                        ),
                },
            ]
        })
    })
    event.modify('brewinandchewin:withering_dross', item => {
        const foodComponent = item.get('food')
        const originalNutrition = foodComponent.nutrition()
        const originalSaturation = foodComponent.saturation()
        item.setFood({
            nutrition: originalNutrition,
            saturation: originalSaturation,
            canAlwaysEat: true,
            eatSeconds: 1.6,
            effects: [
                {
                    probability: 1,
                    effectSupplier: () =>
                        new $MobEffectInstance(
                            'minecraft:strength',
                            3600, /* 3 Minutes */
                            1, /* Level 2 */
                            true, /* Ambience */
                            false /* Particles */
                        ),
                },
                {
                    probability: 1,
                    effectSupplier: () =>
                        new $MobEffectInstance(
                            'critical_strike:damage',
                            3600, /* 3 Minutes */
                            1, /* Level 2 */
                            true, /* Ambience */
                            false /* Particles */
                        ),
                },
                {
                    probability: 1,
                    effectSupplier: () =>
                        new $MobEffectInstance(
                            'minecraft:wither',
                            2400, /* 2 Minutes */
                            1, /* Level 2*/
                            true, /* Ambience */
                            false /* Particles */
                        ),
                },
            ]
        })
    })
    event.modify('hominid:famished_stomach', item => {
        item.setFood({
            nutrition: 6,
            saturation: 0.1,
            canAlwaysEat: true,
            eatSeconds: 1.6,
            effects: [
                {
                    probability: 1,
                    effectSupplier: () =>
                        new $MobEffectInstance(
                            'minecraft:strength',
                            900, /* 45 Seconds */
                            1, /* Level 2 */
                            true, /* Ambience */
                            false /* Particles */
                        ),
                },
                {
                    probability: 1,
                    effectSupplier: () =>
                        new $MobEffectInstance(
                            'valcon:rotten',
                            900, /* 45 Seconds */
                            0, /* Level 1 */
                            true, /* Ambience */
                            false /* Particles */
                        ),
                },
                {
                    probability: 1,
                    effectSupplier: () =>
                        new $MobEffectInstance(
                            'hominid:paranoia',
                            900, /* 45 Seconds */
                            0, /* Level 1 */
                            true, /* Ambience */
                            false /* Particles */
                        ),
                },
            ]
        })
    })
    event.modify('artifacts:everlasting_beef', item => {
        item.setFood({
            nutrition: 2,
            saturation: 1,
            canAlwaysEat: true,
            eatSeconds: 1.6
        })
    })
    event.modify('artifacts:eternal_steak', item => {
        item.setFood({
            nutrition: 4,
            saturation: 5,
            canAlwaysEat: true,
            eatSeconds: 1.6
        })
    })
})