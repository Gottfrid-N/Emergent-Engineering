// priority: 0

ItemEvents.tooltip(event => {
    disabled = ["minecraft:blast_furnace"]
    event.add("minecraft:acacia_boat", "heheheheheheh")
    disabled.forEach(disable => {
        event.add(disable, Text.red("Disabled"))
    })
})
