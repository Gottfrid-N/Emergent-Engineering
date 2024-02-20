// priority: 2

/**
 * 
 * @param {{add: TagsAdd[], remove: TagsRemove[], removeAll: TagsRemoveAll[], removeAllFrom: TagsRemoveAllFrom[]}} tags 
 */
function tags(event, tags) {
    tags.add.forEach(tagsAdd => {
        console.log("tagsAdd: " + JSON.stringify(tagsAdd));
        event.add(tagsAdd.tag, tagsAdd.ids);
    });

    tags.remove.forEach(tagsRemove => {
        console.log("tagsRemove: " + JSON.stringify(tagsRemove));
        event.remove(tagsRemove.tag, tagsRemove.ids);
    });

    tags.removeAll.forEach(tagsRemoveAll => {
        console.log("tagsRemoveAll: " + JSON.stringify(tagsRemoveAll));
        event.removeAll(tagsRemoveAll.tag);
    });

    tags.removeAllFrom.forEach(tagsRemoveAllFrom => {
        console.log("tagsRemoveAllFrom: " + JSON.stringify(tags.removeAllFrom))
    })
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

    /*event.add
    event.remove
    event.removeAll
    event.removeAllTagsFrom*/

    tags(event, global.itemTags);
});

ServerEvents.tags("block", event => {
    tags(event, global.blockTags);
});

ServerEvents.tags("fluid", event => {
    tags(event, global.fluidTags);
});