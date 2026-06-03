package classes

public class util {
    static recipe_name(String text, IIngredient input, IIngredient output) {
        return input.toString() + "_" + text + "_" + output.toString()
    }

    static recipe_name(String text, Collection<IIngredient> input, IIngredient output) {
        return input.toString() + "_" + text + "_" + output.toString()
    }

    static recipe_name(String text, IIngredient input, Collection<IIngredient> output) {
        return input.toString() + "_" + text + "_" + output.toString()
    }

    static recipe_name(String text, Collection<IIngredient> input, Collection<IIngredient> output) {
        return input.toString() + "_" + text + "_" + output.toString()
    }
}