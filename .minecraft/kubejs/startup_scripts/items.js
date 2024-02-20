// priority: 1

StartupEvents.registry("item", event => {
    event.create("test_item");

    /**
     * @type {Map<String, Internal.BasicItemJS$Builder>}
     */
    let builders = new Map();

    /**
     * 
     * @param {BuilderProperties} material 
     */
    function registerBuilder(material) {
        console.log("Registering item: " + JSON.stringify(material));
        try {
            let builder = event.create(material.id, material.builderType).displayName(material.displayName);
            builders.set(material.id, builder);
        } catch (error) {
            console.error(error);
        }
    }

    global.items.forEach(item => {
        registerBuilder(item);
    });

    builders.get("item_unifier").unstackable().tooltip("Craft with a non-standard item to get back its standard item.");
    builders.get("immersive_steel").unstackable().tooltip("Craft with steel block to get immersive engineering steel block (for multiblocks)");
    builders.get("mortar").maxDamage(250);
});

ItemEvents.modification(event => {
    event.modify("kubejs:item_unifier", item => {
        item.setCraftingRemainder("kubejs:item_unifier");
    });
    event.modify("kubejs:immersive_steel", item => {
        item.setCraftingRemainder("kubejs:immersive_steel");
    });
});