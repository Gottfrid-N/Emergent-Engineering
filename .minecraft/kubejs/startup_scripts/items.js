// priority: 1

StartupEvents.registry("item", event => {
    function createMaterial(material) {
        let name = material[0]
        let pairs = material[1][0]
        console.log("Registring material: " + name)
        pairs.forEach(pair => {
            let type = pair[0]
            let id = global["materialToId"](name, type)
            console.log("Registring kubejs:" + id)
            event.create(id)
        });
    }

    event.create("test")
    event.create("item_unifier").unstackable().tooltip("Craft with a non-standard item to get back its standard item.")
    event.create("immersive_steel").unstackable().tooltip("debug")

    global["materials"].forEach(material => {
        try {
            createMaterial(material)
        } catch (error) {
            console.warn(error)
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