// priority: 1

ServerEvents.recipes(event => {
    event.replaceInput({input: "kubejs:obsidian_plate"}, "kubejs:obsidian_plate", "create:sturdy_sheet");
    event.shapeless("kubejs:item_unifier", ["minecraft:stick"]);
    event.shapeless("kubejs:immersive_steel", ["kubejs:item_unifier", "minecraft:stick"]);
    event.remove({input:"minecraft:coal", output:"bigreactors:graphite_ingot"});
    event.remove({input:"minecraft:charcoal", output:"bigreactors:graphite_ingot"});
    event.remove({output:"create:andesite_alloy"})

    global.recipes.forEach(recipe => {
        console.log("Registering recipe: " + JSON.stringify(recipe));
        try { 
            event.custom(recipe); 
        } catch (error) { 
            console.error(error);
        }
    })
})