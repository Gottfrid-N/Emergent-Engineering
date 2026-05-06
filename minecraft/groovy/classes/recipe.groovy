package classes

public class recipe {
    def compact3x3(String resource_name, IIngredient input, ItemStack output) {
        crafting.shapedBuilder()
            .name(resource_name + "_compacting3x3")
            .output(output)
            .row("III")
            .row("III")
            .row("III")
            .key("I", input)
            .register()
    }

    static expandx9(String resource_name, ItemStack input, ItemStack output) {
        crafting.shapelessBuilder()
            .name(resource_name + "_expanding")
            .output(output.multiply(9))
            .input(input)
            .register()
    }

    static metal_recipes(String resource_name, String oredict) {
        compact3x3(resource_name + "_ingot", ore("ingot" + oredict), ore("block" + oredict).getFirst())
        compact3x3(resource_name + "_nugget", ore("nugget" + oredict), ore("ingot" + oredict).getFirst())
        expandx9(resource_name + "_block", ore("block" + oredict), ore("ingot" + oredict).getFirst())
        expandx9(resource_name + "_ingot", ore("ingot" + oredict), ore("nugget" + oredict).getFirst())
    }
}