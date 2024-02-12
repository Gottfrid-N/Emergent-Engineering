// priority: 1

StartupEvents.registry("item", event => {
    event.create("test");
    event.create("item_unifier").unstackable().tooltip("Craft with a non-standard item to get back its standard item.");
    event.create("immersive_steel").unstackable().tooltip("debug");

    /**
     * 
     * @param {itemProperties} itemProperties 
     */
    function registerItemProperties(itemProperties) {
        console.log(itemProperties)
        event.create(itemProperties.id).displayName(itemProperties.displayName);
    }

    global.items.forEach(item => {
        registerItemProperties(item)
    })
})

ItemEvents.modification(event => {
    event.modify("kubejs:item_unifier", item => {
        item.setCraftingRemainder("kubejs:item_unifier");
    })
    event.modify("kubejs:immersive_steel", item => {
        item.setCraftingRemainder("kubejs:immersive_steel");
    })
})