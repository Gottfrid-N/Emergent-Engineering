// priority: 1

StartupEvents.registry("item", event => {
    function createMaterial(material, types) {
        types.forEach((type) => {
            event.create(material + "_" + type)
        });
    }
    event.create("test")
    event.create("item_unifier").unstackable().tooltip("Craft with a non-standard item to get back its standard item.")
    event.create("immersive_steel").unstackable().tooltip("debug")
    global["materials"].forEach(value => {
        let material = value[0]
        let itemTypes = value[0][0]
        if (itemTypes != undefined) {
            console.log("Registring material: " + material)
            itemTypes.forEach(itemType => {
                console.log("Registring " + material + " with itemType: " + itemType)
                event.create(material + itemType)
            })
        }
    })
})

ItemEvents.modification(event => {
    event.modify("kubejs:item_unifier", item => {
        item.setCraftingRemainder("kubejs:item_unifier")
    })
    event.modify("kubejs:immersive_steel", item => {
        item.setCraftingRemainder("kubejs:immersive_steel")
    })
})