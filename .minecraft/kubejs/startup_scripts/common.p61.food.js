// priority: 61

const melon = {
    storageBlock: "minecraft:melon",
    slice: "minecraft:melon_slice",
    cubes: newFood("melon_cubes", "Melon Cubes", [], 64, 2, 0.5/2, true),
    salad: newFood("melon_salad", "Melon Salad", [], 16, 6, 2.5/6, false)
}
newRecipe(shapeless([{item: melon.cubes}, {item: melon.cubes}, {item: melon.cubes}, {item: tools.bowl.normal}], {item: melon.salad}));
newCutting([{item: melon.slice}], [{item: melon.cubes}]);

const pasta = {
    raw: "farmersdelight:raw_pasta",
    boiled: newFood("cooked_pasta", "Cooked Pasta", ["forge:pasta", "forge:pasta/boiled_pasta"], 64, 1, 0.5, true),
    salad: newBasicItem("pasta_salad", "Pasta Salad", [])
}

const bread = {
    loaf: "minecraft:bread",
    slice: {
        horizontal: newBasicItem("bread_slice_horizontal", "Horizontal Slice of Bread", ["forge:bread", "forge:bread/wheat"]),
        vertical: newBasicItem("bread_slice", "Slice of Bread", ["forge:bread", "forge:bread/wheat"])
    }
}
newRecipe(cuttingBoardSilent({tag: tools.breadKnife.tag}, [{item: bread.loaf}], [{item: bread.slice.vertical, count: 9}]));
newCutting([{item: bread.loaf}], [{item: bread.slice.horizontal, count: 2}]);

const cheese = {
    portSalut: {}
}

const sauce = {
    nordstrom: newBasicItem("nordstrom_sauce", "Nordström Sauce", []),
    turkishYogurt: newBasicItem("turkish_yogurt", "Turkish Yogurt", []),
    cremeFraiche: newBasicItem("creme_fraiche", "Crème Fraîche", [])
}

const onion = {
    raw: "farmersdelight:onion",
    cut: newFood("chopped_onion", "Chopped Onion", [], 64, 1, 0, true),
    cooked: newFood("cooked_onion", "Cooked Onion", [], 64, 1, 0, false),
    cookedCut: newFood("cooked_chopped_onion", "Cooked Chopped Onion", [], 64, 1, 0, true),
}
newCutting([{item: onion.raw}], [{item: onion.cut}]);
newCutting([{item: onion.cooked}], [{item: onion.cookedCut}]);

const chive = {
    raw: newFood("chive", "Chive", [], 64, 1, 0, true),
    cut: newFood("chopped_chive", "Chopped Chive", [], 64, 1, 0, true)
}
newCutting([{item: chive.raw}], [{item: chive.cut}]);

addTagToItems("forge:flour", ["tmted:wheat_flour"]);
addTagToItems("forge:flour/wheat", ["tmted:wheat_flour"]);

const dragonEgg = {
    fire: {
        red: "iceandfire:dragonegg_red",
        emerald: "iceandfire:dragonegg_green",
        bronze: "iceandfire:dragonegg_bronze",
        gray: "iceandfire:dragonegg_gray"
    },
    ice: {
        blue: "iceandfire:dragonegg_blue",
        white: "iceandfire:dragonegg_white",
        sapphire: "iceandfire:dragonegg_sapphire",
        silver: "iceandfire:dragonegg_silver"
    },
    lightning: {
        electric_blue: "iceandfire:dragonegg_electric",
        amethyst: "iceandfire:dragonegg_amethyst",
        copper: "iceandfire:dragonegg_copper",
        black: "iceandfire:dragonegg_black"
    },
    ender: {
        purple: "minecraft:dragon_egg"
    }
}

for (let type in dragonEgg) {
    let colors = dragonEgg[type];
    for (let [color, id] in colors) {
        addTagToItems("forge:eggs/dragon", id);
        addTagToItems("forge:eggs/dragon/" + type, id);
        addTagToItems("forge:eggs/dragon/" + type + "/" + color, id);
    };
}