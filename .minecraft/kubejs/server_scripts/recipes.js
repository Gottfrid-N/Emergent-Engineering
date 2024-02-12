// priority: 1

ServerEvents.recipes(event => {
    function materialRecipe(material) {
        let name = material[0]
        let properties = material[1][0]
        console.log("Adding recipes to material: " + name)
        properties.forEach(property => {
            let recipes = property[2]
            recipes.forEach(recipe => {
                console.log("Adding recipe: " + recipe.toString() + " to material: " + name)
                event.custom(recipe)
            })
        })
    }
    event.replaceInput({input: "kubejs:obsidian_plate"}, "kubejs:obsidian_plate", "create:sturdy_sheet")
    event.shapeless("kubejs:item_unifier", ["minecraft:stick"])
    event.shapeless("kubejs:immersive_steel", ["kubejs:item_unifier", "minecraft:stick"])
    event.shaped("minecraft:bundle", [
        "SLS",
        "L L",
        "LLL"], {
            S: "minecraft:string",
            L: "#forge:leather"
        })
    event.shaped("minecraft:bundle", [
        "SRS",
        "R R",
        "RRR"], {
            S: "minecraft:string",
            R: "minecraft:rabbit_hide"
        })
    event.smelting("minecraft:leather", "minecraft:rotten_flesh")
})