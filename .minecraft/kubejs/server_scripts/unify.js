// priority: 0

console.info("Running \"unify.js\"")
Utils.server.tell("Running \"unify.js\"")

let unify = []

ServerEvents.tags("item", event => {
    console.log("Event: \"tags\"")
    let metalTypes = [
        "forge:storage_blocks", "forge:ingots", "forge:nuggets",
        "forge:dusts",
        "forge:plates",
        "forge:gears",]

    let _unify = []
    
    function addMaterialTags(material, types) {
        console.log("Adding material Tags")
        types.forEach(type => {
            let tag = type + "/" + material
            console.log(tag.toString())

            let tagItems = event.get(tag).getObjectIds()
            console.log(tagItems.toString() + "\n")

            Utils.server.tell(tag)
            Utils.server.tell(tagItems[0])
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

    Utils.server.tell(_unify.toString())
    unify = _unify
})

ServerEvents.recipes(event => {
    console.log("Event: recipes")
    unify.forEach(pair => {
        event.shapeless(pair[1], ["kubejs:item_unifier", "#" + pair[0]])
    });
    console.log(unify)
})