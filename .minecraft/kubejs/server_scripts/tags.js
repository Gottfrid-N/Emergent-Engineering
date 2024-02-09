// priority: 2

ServerEvents.tags("item", event => {
    function materialTag(material) {
        let name = material[0]
        let pairs = material[1][0]
        console.log("Adding itemTags to material: " + name)
        pairs.forEach(pair => {
            let itemType = pair[0]
            let itemTag = pair[1]
            let id = global["materialToRegisteredId"](name, itemType)
            console.log("Adding itemTag: " + itemTag + " to id: " + id)
            event.add(itemTag, id)
            event.add(global["materialToTag"](name, itemTag), id)
        })
    }

    function plateToSheet(plate, material) {
        event.removeAllTagsFrom(plate)
        event.add("ee:sheet/" + material, plate)
        event.add("ee:sheet", plate)
    }
    plateToSheet("create:iron_sheet", "iron")
    plateToSheet("create:gold_sheet", "gold")
    plateToSheet("create:brass_sheet", "brass")
    plateToSheet("create:copper_sheet", "copper")
    plateToSheet("create:sturdy_sheet", "obsidian")
    plateToSheet("createaddition:electrum_sheet", "electrum")
    plateToSheet("createaddition:zinc_sheet", "zinc")

    global["materials"].forEach(material => {
        try {
            materialTag(material)
        } catch (error) {
            console.warn(error)
        }
    })
})