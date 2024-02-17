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

/**
 * 
 * @param {{tag: String, ids: String[]}} tag
 */
function addTag(event, tag) {
    console.log("Adding tag: " + tag.tag + " to id: " + tag.ids);
    try {
        event.add(tag.tag, tag.ids);
    } catch (error) {
        console.error(error);
    }
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

    global.tags.item.forEach(tag => {
        addTag(tag);
    });
});

ServerEvents.tags("block", event => {
    global.blocks.forEach(item => {
        addPropertiesTags(event, item);
    });

    global.tags.block.forEach(tag => {
        addTag(tag);
    });
});

ServerEvents.tags("fluid", event => {
    global.fluids.forEach(item => {
        addPropertiesTags(event, item);
    });

    global.tags.fluid.forEach(tag => {
        addTag(tag);
    });
});