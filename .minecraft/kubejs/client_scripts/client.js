// priority: 0

ItemEvents.tooltip(event => {
    disabled = ["minecraft:blast_furnace"];
    event.add("minecraft:acacia_boat", Text.white("heheheheheheh"));
    disabled.forEach(disable => {
        event.add(disable, Text.red("Disabled"));
    });
});