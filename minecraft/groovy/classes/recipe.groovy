package classes

public class recipe {
    static compact3x3(String resource_name, IIngredient input, ItemStack output) {
        crafting.shapedBuilder()
            .name(input.toString() + "_compact3x3_to_" + output.toString())
            .output(output)
            .row("III")
            .row("III")
            .row("III")
            .key("I", input)
            .register()
    }

    static expandx9(String resource_name, IIngredient input, ItemStack output) {
        crafting.shapelessBuilder()
            .name(input.toString() + "_expandx9_to_" + output.toString())
            .output(output.multiply(9))
            .input(input)
            .register()
    }

    static engineers_hammer(String resource_name, Collection<IIngredient> input, ItemStack output) {
        crafting.shapelessBuilder()
            .name(input.toString() + "_eh_crushing_to_" + output.toString())
            .input(input + [item("immersiveengineering:tool")])
            .output(output)
            .register()
    }  

    static metal_engineers_hammer(String resource_name) {
        engineers_hammer(resource_name, [ore("ingot" + resource_name),ore("ingot" + resource_name)], ore("plate" + resource_name).getFirst())
    }  

    static crafting_gear(String resource_name, IIngredient input, ItemStack output) {
        crafting.shapedBuilder()
            .name(input.toString() + "_crafting_to_" + output.toString())
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
            .name(input.toString() + "_metal_press_to_" + output.toString())
            .input(input*4)
            .mold(item("immersiveengineering:mold:1"))
            .output(output)
            .energy(energy)
            .register()
    }

    static machine_crushing(String resource_name, IIngredient input, ItemStack output, ItemStack secondaryOutput, float secondaryOutputChance, int energy) {
        mods.ie.crusher.recipeBuilder()
            .name(input.toString() + "_ie_crushing_to_" + output.toString())
            .input(input)
            .output(output)
            .secondaryOutput(secondaryOutput)
            .secondaryOutput(secondaryOutput, secondaryOutputChance)
            .energy(energy)
            .register()
    }

    static machine_crushing(String resource_name, IIngredient input, ItemStack output, int energy) {
        mods.ie.crusher.recipeBuilder()
            .name(input.toString() + "_ie_crushing_to_" + output.toString())
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
            .name(input.toString() + "_metal_press_to_" + output.toString())
            .input(input)
            .mold(item("immersiveengineering:mold:0"))
            .output(output)
            .energy(energy)
            .register()
    }

   static all_metal_recipes(String resource_name) {
        metal_to_ingot(resource_name)
        metal_to_nugget(resource_name)
        metal_to_block(resource_name)
        metal_to_plate(resource_name)
        metal_to_dust(resource_name)
        metal_to_gear(resource_name)
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
}