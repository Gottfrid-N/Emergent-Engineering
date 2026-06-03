package classes

import classes.util

public class recipe {
    static compact3x3(String resource_name, IIngredient input, ItemStack output) {
        crafting.shapedBuilder()
            .name(util.recipe_name("compact3x3_to", input, output))
            .output(output)
            .row("III")
            .row("III")
            .row("III")
            .key("I", input)
            .register()
    }

    static expandx9(String resource_name, IIngredient input, ItemStack output) {
        crafting.shapelessBuilder()
            .name(util.recipe_name("expandx9_to", input, output))
            .output(output*9)
            .input(input)
            .register()
    }

    static engineers_hammer(String resource_name, Collection<IIngredient> input, ItemStack output) {
        crafting.shapelessBuilder()
            .name(util.recipe_name("engineers_hammer_to", input, output))
            .input(input + [item("immersiveengineering:tool")])
            .output(output)
            .register()
    }  

    static metal_engineers_hammer(String resource_name) {
        engineers_hammer(resource_name, [ore("ingot" + resource_name),ore("ingot" + resource_name)], ore("plate" + resource_name).getFirst())
    }  

    static crafting_gear(String resource_name, IIngredient input, ItemStack output) {
        crafting.shapedBuilder()
            .name(util.recipe_name("crafting_to", input, output))
            .output(output)
            .row("III")
            .row("ISI")
            .row("III")
            .key("I", input)
            .key("S", item("thermalfoundation:material:23"))
            .register()
    }

    static crafting_gear(String resource_name) {
        crafting_gear(resource_name, ore("ingot" + resource_name), ore("gear" + resource_name).getFirst())
    }

    static machine_gear(String resource_name, IIngredient input, ItemStack output, int energy) {
        mods.ie.metal_press.recipeBuilder()
            .name(util.recipe_name("metal_press_to", input, output))
            .input(input*4)
            .mold(item("immersiveengineering:mold:1"))
            .output(output)
            .energy(energy)
            .register()
    }

    static machine_crushing(String resource_name, IIngredient input, ItemStack output, ItemStack secondaryOutput, float secondaryOutputChance, int energy) {
        mods.ie.crusher.recipeBuilder()
            .name(util.recipe_name("ie_crushing_to", input, output))
            .input(input)
            .output(output)
            .secondaryOutput(secondaryOutput)
            .secondaryOutput(secondaryOutput, secondaryOutputChance)
            .energy(energy)
            .register()
    }

    static machine_crushing(String resource_name, IIngredient input, ItemStack output, int energy) {
        mods.ie.crusher.recipeBuilder()
            .name(util.recipe_name("ie_crushing_to", input, output))
            .input(input)
            .output(output)
            .energy(energy)
            .register()
    }

    static machine_compactor(String resource_name, IIngredient input, ItemStack output) {
        machine_compactor(resource_name, input, output, 2400)
    }

    static machine_compactor(String resource_name, IIngredient input, ItemStack output, int energy) {
        mods.ie.metal_press.recipeBuilder()
            .name(util.recipe_name("metal_press_plate_to", input, output))
            .input(input)
            .mold(item("immersiveengineering:mold:0"))
            .output(output)
            .energy(energy)
            .register()
    }

    static crafting_wire(String resource_name, IIngredient input, ItemStack output) {
        crafting.shapelessBuilder()
            .name(util.recipe_name("wire_cutter_to", input, output))
            .input([input, item("immersiveengineering:tool:1")])
            .output(output)
            .register()
    }

    static machine_wire(String resource_name, IIngredient input, ItemStack output, energy) {
        mods.ie.metal_press.recipeBuilder()
            .name(util.recipe_name("metal_press_plate_to", input, output))
            .input(input)
            .mold(item("immersiveengineering:mold:0"))
            .output(output)
            .energy(energy)
            .register()
    }

    static all_metal_recipes(String resource_name, boolean compacting,
                                                boolean plate,
                                                boolean dust,
                                                boolean gear,
                                                boolean wire) {
        if (compacting) {
            metal_to_ingot(resource_name)
            metal_to_nugget(resource_name)
            metal_to_block(resource_name)}
        if (plate) {metal_to_plate(resource_name)}
        if (dust) {metal_to_dust(resource_name)}
        if (gear) {metal_to_gear(resource_name)}
        if (wire) {metal_to_wire(resource_name)}
    }

    static all_metal_recipes(String resource_name) {
        all_metal_recipes(resource_name, true, true, true, true) 
    }

    static metal_to_ingot(String resource_name) {
        compact3x3(resource_name, ore("nugget" + resource_name), ore("ingot" + resource_name).getFirst())
        expandx9(resource_name, ore("block" + resource_name), ore("ingot" + resource_name).getFirst())
    }

    static metal_to_nugget(String resource_name) {
        expandx9(resource_name, ore("ingot" + resource_name), ore("nugget" + resource_name).getFirst())
    }

    static metal_to_block(String resource_name) {
        compact3x3(resource_name, ore("ingot" + resource_name), ore("block" + resource_name).getFirst())
    }

    static metal_to_plate(String resource_name) {
        metal_engineers_hammer(resource_name)
        machine_compactor(resource_name, ore("ingot" + resource_name), ore("plate" + resource_name).getFirst())
    }

    static metal_to_dust(String resource_name) {
        machine_crushing(resource_name, ore("ingot" + resource_name), ore("dust" + resource_name).getFirst(), 2400)
    }

    static metal_to_gear(String resource_name) {
        crafting_gear(resource_name, ore("ingot" + resource_name), ore("gear" + resource_name).getFirst())
        machine_gear(resource_name, ore("ingot" + resource_name), ore("gear" + resource_name).getFirst(), 2400)
    }

    static metal_to_wire(String resource_name) {
        crafting_wire(resource_name, ore("ingot" + resource_name), ore("wire" + resource_name).getFirst())
        machine_wire(resource_name, ore("ingot" + resource_name), ore("wire" + resource_name).getFirst(), 2400)
    }
}