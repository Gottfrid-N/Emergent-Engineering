// priority: 2

/**
 * 
 * @param {BuilderProperties} material 
 */
function addPropertiesTags(event, material) {
    material.tags.forEach(tag => {
        console.log("Adding tag: " + tag + " to id: " + material.id)
        try {
            event.add(tag, "kubejs:" + material.id);
        } catch (error) {
            console.error(error)
        }
    });
}

ServerEvents.tags("item", event => {
    function plateToSheet(plate, name) {
        event.removeAllTagsFrom(plate);
        event.add("kubejs:sheets/" + name, plate);
        event.add("kubejs:sheets", plate);
    }
    plateToSheet("create:iron_sheet", "iron");
    plateToSheet("create:gold_sheet", "gold");
    plateToSheet("create:brass_sheet", "brass");
    plateToSheet("create:copper_sheet", "copper");
    plateToSheet("createaddition:electrum_sheet", "electrum");
    plateToSheet("createaddition:zinc_sheet", "zinc");
    event.removeAllTagsFrom("create:sturdy_sheet");

    global.items.forEach(item => {
        addPropertiesTags(event, item);
    });
});

ServerEvents.tags("block", event => {
    global.blocks.forEach(item => {
        addPropertiesTags(event, item);
    });
});

ServerEvents.tags("fluid", event => {
    global.fluids.forEach(item => {
        addPropertiesTags(event, item);
    });
});