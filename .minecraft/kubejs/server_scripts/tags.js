// priority: 2

ServerEvents.tags("item", event => {
    function plateToSheet(plate, name) {
        event.removeAllTagsFrom(plate)
        event.add("kubejs:sheets/" + name, plate);
        event.add("kubejs:sheets", plate)
    }
    plateToSheet("create:iron_sheet", "iron")
    plateToSheet("create:gold_sheet", "gold")
    plateToSheet("create:brass_sheet", "brass")
    plateToSheet("create:copper_sheet", "copper")
    plateToSheet("createaddition:electrum_sheet", "electrum")
    plateToSheet("createaddition:zinc_sheet", "zinc")
    event.removeAllTagsFrom("create:sturdy_sheet")
})