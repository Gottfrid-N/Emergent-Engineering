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
    function registerProperties(material) {
        console.log("Registering item: " + global.builderPropertiesToString(material));
        let builder = event.create(material.id, material.builderType).displayName(material.displayName);
        builders.set(material.id, builder);
    }

    global.items.forEach(item => {
        registerProperties(item)
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