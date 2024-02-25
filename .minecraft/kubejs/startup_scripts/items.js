// priority: 2

StartupEvents.registry("item", event => {
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
    builders.get("iron_bread_knife").maxDamage(250);

    global.foods.forEach(food => {
        builders.get(food.id).maxStackSize(food.stackSize).food(consumer => {
            consumer.hunger(food.hunger)
                    .saturation(food.saturationModifier)
                    .fastToEat(food.fastToEat)
        })
    })
});

ItemEvents.modification(event => {
    event.modify("kubejs:item_unifier", item => {
        item.setCraftingRemainder("kubejs:item_unifier");
    });
    event.modify("kubejs:immersive_steel", item => {
        item.setCraftingRemainder("kubejs:immersive_steel");
    });
    event.modify("minecraft:bowl", item => {
        item.setMaxStackSize(16);
    });
    event.modify("kubejs:large_bowl", item => {
        item.setMaxStackSize(8);
    });
    event.modify("kubejs:huge_bowl", item => {
        item.setMaxStackSize(4);
    });
    event.modify("kubejs:giant_bowl", item => {
        item.setMaxStackSize(2);
    });
    event.modify("kubejs:gargantuan_bowl", item => {
        item.setMaxStackSize(1);
    });
});