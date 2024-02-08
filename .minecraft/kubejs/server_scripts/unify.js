// priority: 0

console.info("Running \"unify.js\"")

let unify = []

ServerEvents.tags("item", event => {
    console.info("Event: \"tags\"")
    let metalTypes = [
        "forge:storage_blocks", "forge:ingots", "forge:nuggets",
        "forge:dusts",
        "forge:plates",
        "forge:gears",]

    let _unify = []
    
    function addMaterialTags(material, types) {
        console.info("Adding material: " + material + " with types: " + types.toString())
        types.forEach(type => {
            let tag = type + "/" + material
            let tagItems = event.get(tag).getObjectIds().toArray().sort((a, b) => { // sorts alphabetically
                if (a < b) { return 1; }; if (a > b) { return -1; }; return 0;});
            _unify.push([tag, tagItems[0]])
        })
    }

    addMaterialTags("iron", metalTypes)
    addMaterialTags("copper", metalTypes)
    addMaterialTags("gold", metalTypes)
    addMaterialTags("netherite", metalTypes)
    addMaterialTags("silver", metalTypes)
    addMaterialTags("tin", metalTypes)
    addMaterialTags("lead", metalTypes)
    addMaterialTags("nickel", metalTypes)
    
    addMaterialTags("steel", metalTypes)
    addMaterialTags("electrum", metalTypes)
    addMaterialTags("constantan", metalTypes)

    unify = _unify
})

ServerEvents.recipes(event => {
    console.info("Event: recipes")
    unify.forEach(pair => {
        event.shapeless(pair[1], ["kubejs:item_unifier", "#" + pair[0]])
    });
})