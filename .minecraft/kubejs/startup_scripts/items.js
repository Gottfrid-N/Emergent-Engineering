// priority: 10

StartupEvents.registry("item", event => {
    function createMaterial(material, types) {
        types.forEach((type, i) => {
            event.create(material + "_" + type)
        });
    }
    event.create("test")
    event.create("item_unifier").unstackable().tooltip("Craft with a non-standard item to get back its standard item.")
    event.create("immersive_steel").unstackable().tooltip("debug")
    createMaterial("iron", ["alchemical_catalyst", "coil"])
    createMaterial("platinum", global["metalTypesExtended"])
})

ItemEvents.modification(event => {
    event.modify("kubejs:item_unifier", item => {
        item.setCraftingRemainder("kubejs:item_unifier")
    })
    event.modify("kubejs:immersive_steel", item => {
        item.setCraftingRemainder("kubejs:immersive_steel")
    })
})