// priority: 1

ServerEvents.recipes(event => {
    event.replaceInput({input: "kubejs:obsidian_plate"}, "kubejs:obsidian_plate", "create:sturdy_sheet");
    event.shapeless("kubejs:item_unifier", ["minecraft:stick"]);
    event.shapeless("kubejs:immersive_steel", ["kubejs:item_unifier", "minecraft:stick"]);
    event.shaped("minecraft:bundle", [
        "SLS",
        "L L",
        "LLL"], {
            S: "minecraft:string",
            L: "#forge:leather"
        });
    event.shaped("minecraft:bundle", [
        "SRS",
        "R R",
        "RRR"], {
            S: "minecraft:string",
            R: "minecraft:rabbit_hide"
        });
    event.smelting("minecraft:leather", "minecraft:rotten_flesh");
    event.remove({input:"minecraft:coal", output:"bigreactors:graphite_ingot"});
    event.remove({input:"minecraft:charcoal", output:"bigreactors:graphite_ingot"});

    global.recipes.forEach(recipe => {
        console.log("Registering recipe: " + recipe);
        event.custom(recipe);
    })
})