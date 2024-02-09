// priority: 1

ServerEvents.tags("item", event => {
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
})