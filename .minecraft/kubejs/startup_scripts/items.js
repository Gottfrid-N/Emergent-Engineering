// priority: 1

StartupEvents.registry("item", event => {
    event.create("test_item");
    event.create("item_unifier").unstackable().tooltip("Craft with a non-standard item to get back its standard item.");
    event.create("immersive_steel").unstackable().tooltip("debug");

    /**
     * @type {Map<String, Internal.BuilderBase<Internal.Item>>}
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
});

ItemEvents.modification(event => {
    event.modify("kubejs:item_unifier", item => {
        item.setCraftingRemainder("kubejs:item_unifier");
    });
    event.modify("kubejs:immersive_steel", item => {
        item.setCraftingRemainder("kubejs:immersive_steel");
    });
});