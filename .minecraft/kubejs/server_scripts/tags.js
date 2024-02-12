// priority: 2

ServerEvents.tags("item", event => {
    function materialTag(material) {
        let name = material[0]
        let properties = material[1][0]
        console.log("Adding itemTags to material: " + name)
        properties.forEach(property => {
            let itemType = property[0]
            let itemTag = property[1]
            let id = global["materialToRegisteredId"](name, itemType)
            console.log("Adding itemTag: " + itemTag + " to id: " + id)
            event.add(itemTag, id)
            event.add(global["materialToTag"](name, itemTag), id)
        })
    }

    function plateToSheet(plate, name) {
        event.removeAllTagsFrom(plate)
        event.add(global["materialToTag"](name, "kubejs:sheets"), plate)
        event.add("kubejs:sheets", plate)
    }
    plateToSheet("create:iron_sheet", "iron")
    plateToSheet("create:gold_sheet", "gold")
    plateToSheet("create:brass_sheet", "brass")
    plateToSheet("create:copper_sheet", "copper")
    plateToSheet("createaddition:electrum_sheet", "electrum")
    plateToSheet("createaddition:zinc_sheet", "zinc")
    event.removeAllTagsFrom("create:sturdy_sheet")

    global["materials"].forEach(material => {
        try {
            materialTag(material)
        } catch (error) {
            console.warn(error)
        }
    })
})