//Clutter No More - Shape Indicator by Rimevel
//Paste into a file in /kubejs/client_scripts/
(function () {
    const ShapeMap = Java.loadClass(
        "dev.tazer.clutternomore.common.shape_map.ShapeMap"
    );

    ClientEvents.tick((event) => {
        const { player } = event;

        let heldItem = player.mainHandItem;
        let slot = player.selectedSlot;

        if (ShapeMap.hasShapes(heldItem) || ShapeMap.isShape(heldItem)) {
            event.player.paint({
                shape_indicator: {
                    type: "rectangle",
                    texture: "pack:textures/gui/shape_indicator.png",
                    w: 4,
                    h: 4,
                    u0: 0,
                    v0: 0,
                    u1: 1,
                    v1: 1,
                    scale: 1,
                    alignX: "center",
                    alignY: "bottom",
                    x: -(20 * 4) + slot * 20 + 8,
                    y: -16,
                },
            });
            return;
        }
        event.player.paint({
            shape_indicator: {
                type: "rectangle",
                texture: "",
                w: 0,
                h: 0,
                x: 0,
                y: 0,
            },
        });
    });
})();