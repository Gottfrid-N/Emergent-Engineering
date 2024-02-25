// priority: 63

const tools = {
    itemUnifier: newBasicItem("item_unifier", "Item Unifier", ["forge:tools", "forge:tools/unifier"]),
    immersiveSteel: newBasicItem("immersive_steel", "Immersive Steel", ["forge:tools", "forge:tools/unifier"]),
    mortar: newBasicItem("mortar", "Mortar", ["forge:tools", "forge:tools/mortar"]),
    hammer: "immersiveengineering:hammer",
    earthCharge: "thermal:earth_charge",
    bowl: {
        normal: "minecraft:bowl",
        large: newBasicItem("large_bowl", "Large Bowl", []),
        huge: newBasicItem("huge_bowl", "Huge Bowl", []),
        giant: newBasicItem("giant_bowl", "Giant Bowl", []),
        gargantuan: newBasicItem("gargantuan_bowl", "Gargantuan Bowl", [])
    },
    knife: "forge:tools/knifes",
    breadKnife: {
        tag: "forge:tools/bread_knifes",
        iron: newBasicItem("iron_bread_knife", "Iron Bread Knife", ["forge:tools/bread_knifes", "forge:tools/bread_knifes/iron"])
    }
}
addTagToItems("forge:tools/knives", ["farmersdelight:iron_knife", "farmersdelight:golden_knife", "farmersdelight:diamond_knife", "farmersdelight:netherite_knife"]);

const manaCatalyst = {
    mana: newBasicBlock("mana_catalyst", "Mana Catalyst", ["botania:catalysts", "botania:catalysts/mana"]),
    alchemy: "botania:alchemy_catalyst",
    conjuration: "botania:conjuration_catalyst",
    transmutation: newBasicBlock("transmutation_catalyst", "Transmutation Catalyst", ["botania:catalysts", "botania:catalysts/transmutation"]),
    inversion: newBasicBlock("inversion_catalyst", "Inversion Catalyst", ["botania:catalysts", "botania:catalysts/inversion"]),
    soul: newBasicBlock("soul_catalyst", "Soul Catalyst", ["botania:catalysts", "botania:catalysts/soul"])
}
addTagToItems("botania:catalysts", [manaCatalyst.alchemy, manaCatalyst.conjuration]);
addTagToItems("botania:catalysts/alchemy", [manaCatalyst.alchemy]);
addTagToItems("botania:catalysts/conjuration", [manaCatalyst.conjuration]);

const dye = {
    white: "forge:dyes/white",
    lightGray: "forge:dyes/light_gray",
    gray: "forge:dyes/gray",
    black: "forge:dyes/black",
    brown: "forge:dyes/brown",
    red: "forge:dyes/red",
    orange: "forge:dyes/orange",
    yellow: "forge:dyes/yellow",
    lime: "forge:dyes/lime",
    green: "forge:dyes/green",
    cyan: "forge:dyes/cyan",
    lightBlue: "forge:dyes/light_blue",
    blue: "forge:dyes/blue",
    purple: "forge:dyes/purple",
    magenta: "forge:dyes/magenta",
    pink: "forge:dyes/pink"
}

const mystical = {
    petal: {
        white: "botania:white_petal",
        lightGray: "botania:light_gray_petal",
        gray: "botania:gray_petal",
        black: "botania:black_petal",
        brown: "botania:brown_petal",
        red: "botania:red_petal",
        orange: "botania:orange_petal",
        yellow: "botania:yellow_petal",
        lime: "botania:lime_petal",
        green: "botania:green_petal",
        cyan: "botania:cyan_petal",
        lightBlue: "botania:light_blue_petal",
        blue: "botania:blue_petal",
        purple: "botania:purple_petal",
        magenta: "botania:magenta_petal",
        pink: "botania:pink_petal",
    },
    mushroom: {
        white: "botania:white_mushroom",
        lightGray: "botania:light_gray_mushroom",
        gray: "botania:gray_mushroom",
        black: "botania:black_mushroom",
        brown: "botania:brown_mushroom",
        red: "botania:red_mushroom",
        orange: "botania:orange_mushroom",
        yellow: "botania:yellow_mushroom",
        lime: "botania:lime_mushroom",
        green: "botania:green_mushroom",
        cyan: "botania:cyan_mushroom",
        lightBlue: "botania:light_blue_mushroom",
        blue: "botania:blue_mushroom",
        purple: "botania:purple_mushroom",
        magenta: "botania:magenta_mushroom",
        pink: "botania:pink_mushroom",
    }
}

removeItemsFromTag("botania:petals/white", [mystical.mushroom.white]);
removeItemsFromTag("botania:petals/light_gray", [mystical.mushroom.lightGray]);
removeItemsFromTag("botania:petals/gray", [mystical.mushroom.gray]);
removeItemsFromTag("botania:petals/black", [mystical.mushroom.black]);
removeItemsFromTag("botania:petals/brown", [mystical.mushroom.brown]);
removeItemsFromTag("botania:petals/red", [mystical.mushroom.red]);
removeItemsFromTag("botania:petals/orange", [mystical.mushroom.orange]);
removeItemsFromTag("botania:petals/yellow", [mystical.mushroom.yellow]);
removeItemsFromTag("botania:petals/lime", [mystical.mushroom.lime]);
removeItemsFromTag("botania:petals/green", [mystical.mushroom.green]);
removeItemsFromTag("botania:petals/cyan", [mystical.mushroom.cyan]);
removeItemsFromTag("botania:petals/light_blue", [mystical.mushroom.lightBlue]);
removeItemsFromTag("botania:petals/blue", [mystical.mushroom.blue]);
removeItemsFromTag("botania:petals/purple", [mystical.mushroom.purple]);
removeItemsFromTag("botania:petals/magenta", [mystical.mushroom.magenta]);
removeItemsFromTag("botania:petals/pink", [mystical.mushroom.pink]);

newRecipe(manaInfusion({item: mystical.mushroom.white}, {item: mystical.petal.white}, 2000, manaCatalyst.transmutation));
newRecipe(manaInfusion({item: mystical.mushroom.lightGray}, {item: mystical.petal.lightGray}, 2000, manaCatalyst.transmutation));
newRecipe(manaInfusion({item: mystical.mushroom.gray}, {item: mystical.petal.gray}, 2000, manaCatalyst.transmutation));
newRecipe(manaInfusion({item: mystical.mushroom.black}, {item: mystical.petal.black}, 2000, manaCatalyst.transmutation));
newRecipe(manaInfusion({item: mystical.mushroom.brown}, {item: mystical.petal.brown}, 2000, manaCatalyst.transmutation));
newRecipe(manaInfusion({item: mystical.mushroom.red}, {item: mystical.petal.red}, 2000, manaCatalyst.transmutation));
newRecipe(manaInfusion({item: mystical.mushroom.orange}, {item: mystical.petal.orange}, 2000, manaCatalyst.transmutation));
newRecipe(manaInfusion({item: mystical.mushroom.yellow}, {item: mystical.petal.yellow}, 2000, manaCatalyst.transmutation));
newRecipe(manaInfusion({item: mystical.mushroom.lime}, {item: mystical.petal.lime}, 2000, manaCatalyst.transmutation));
newRecipe(manaInfusion({item: mystical.mushroom.green}, {item: mystical.petal.green}, 2000, manaCatalyst.transmutation));
newRecipe(manaInfusion({item: mystical.mushroom.cyan}, {item: mystical.petal.cyan}, 2000, manaCatalyst.transmutation));
newRecipe(manaInfusion({item: mystical.mushroom.lightBlue}, {item: mystical.petal.lightBlue}, 2000, manaCatalyst.transmutation));
newRecipe(manaInfusion({item: mystical.mushroom.blue}, {item: mystical.petal.blue}, 2000, manaCatalyst.transmutation));
newRecipe(manaInfusion({item: mystical.mushroom.purple}, {item: mystical.petal.purple}, 2000, manaCatalyst.transmutation));
newRecipe(manaInfusion({item: mystical.mushroom.magenta}, {item: mystical.petal.magenta}, 2000, manaCatalyst.transmutation));
newRecipe(manaInfusion({item: mystical.mushroom.pink}, {item: mystical.petal.pink}, 2000, manaCatalyst.transmutation));