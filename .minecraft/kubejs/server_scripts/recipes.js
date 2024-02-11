// priority: 1

ServerEvents.recipes(event => {
    event.shapeless("kubejs:item_unifier", ["minecraft:stick"])
    event.shapeless("kubejs:immersive_steel", ["kubejs:item_unifier", "minecraft:stick"])
    event.replaceInput({input: "kubejs:obsidian_plate"}, "kubejs:obsidian_plate", "create:sturdy_sheet")
})