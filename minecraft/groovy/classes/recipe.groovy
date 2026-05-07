package classes

public class recipe {
    static compact3x3(String resource_name, IIngredient input, ItemStack output) {
        crafting.shapedBuilder()
            .name(resource_name + "_compacting3x3")
            .output(output)
            .row("III")
            .row("III")
            .row("III")
            .key("I", input)
            .register()
    }

    static expandx9(String resource_name, IIngredient input, ItemStack output) {
        crafting.shapelessBuilder()
            .name(resource_name + "_expanding")
            .output(output.multiply(9))
            .input(input)
            .register()
    }

    static metal_recipes(String resource_name, block, ingot, nugget) {
        if(ingot) {
            log.info(resource_name + "_ingot not found! Not generting recipes that contain it")
            compact3x3(resource_name + "_ingot", ingot, block)
            compact3x3(resource_name + "_nugget", nugget, ingot)
            expandx9(resource_name + "_block", block, ingot)
            expandx9(resource_name + "_ingot", ingot, nugget)
        }
        
    }
}