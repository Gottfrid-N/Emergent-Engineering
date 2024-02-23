// priority: 1

ServerEvents.recipes(event => {
    event.replaceInput({input: "kubejs:obsidian_plate"}, "kubejs:obsidian_plate", "create:sturdy_sheet");

    global.recipesRemove.forEach(filter => {
        console.log("Removing recipes matching filter: " + JSON.stringify(filter));
        event.remove(filter);
    })

    global.recipes.forEach(recipe => {
        console.log("Registering recipe: " + JSON.stringify(recipe));
        try { 
            event.custom(recipe); 
        } catch (error) { 
            console.error(error);
        }
    })
})