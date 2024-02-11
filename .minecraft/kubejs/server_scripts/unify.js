// priority: 0

let unify = []

ServerEvents.tags("item", event => {
    console.log("Event: \"tags\"")

    let metalTypes = global["metalTagTypes"]

    let _unify = []
    
    function addMaterialTags(material, tagTypes) {
        console.log("Unifying material: " + material + " with types: " + tagTypes.toString())
        tagTypes.forEach(type => {
            let tag = type + "/" + material
            let tagItems = event.get(tag).getObjectIds().toArray().sort((a, b) => { // sorts alphabetically
                if (a < b) { return 1; }; if (a > b) { return -1; }; return 0;});
            if (tagItems.length > 1) {
                _unify.push([tag, tagItems])
            }
        })
    }

    function linkTags(tag, linkTag) {
        let tagItems = event.get(tag).getObjectIds().toArray()
        tagItems.forEach(tagItem => {
            event.add(linkTag, tagItem)
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

    linkTags("forge:plates/brass", "createdeco:internal/plates/brass_plates")
    linkTags("forge:plates/iron", "createdeco:internal/plates/iron_plates")
    linkTags("forge:plates/copper", "createdeco:internal/plates/copper_plates")

    unify = _unify
})

ServerEvents.recipes(event => {
    console.log("Event: recipes")
    unify.forEach(value => {
        value[1].forEach(item => {
            event.replaceInput({input: item}, item, value[1][0])
            event.replaceOutput({output: item}, item, value[1][0])
        });
        event.shapeless(value[1][0], ["kubejs:item_unifier", "#" + value[0]])
    });
})