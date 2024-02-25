// priority: 64

/**
 * @type {BuilderProperties[]}
 */
let items = [];
/**
 * @type {BuilderProperties[]}
 */
let blocks = [];
/**
 * @type {BuilderProperties[]}
 */
let fluids = [];
/**
 * @type {Internal.JsonObject[]}
 */
let recipes = [];

let itemTags = {
    /**
     * @type {TagsAdd[]}
     */
    add: [],
    /**
     * @type {TagsRemove[]}
     */
    remove: [],
    /**
     * @type {TagsRemoveAll[]}
     */
    removeAll: [],
    /**
     * @type {TagsRemoveAllFrom[]}
     */
    removeAllFrom: []
}

/**
 * 
 * @param {Internal.Tag} tag 
 * @param {String[]} items
 */
function addTagToItems(tag, items) {
    itemTags.add.push(new TagsAdd(tag, items));
}

let blockTags = {
    /**
     * @type {TagsAdd[]}
     */
    add: [],
    /**
     * @type {TagsRemove[]}
     */
    remove: [],
    /**
     * @type {TagsRemoveAll[]}
     */
    removeAll: [],
    /**
     * @type {TagsRemoveAllFrom[]}
     */
    removeAllFrom: []
}

/**
 * 
 * @param {Internal.Tag} tag 
 * @param {String[]} blocks
 */
function addTagToBlocks(tag, blocks) {
    blockTags.add.push(new TagsAdd(tag, blocks));
}

let fluidTags = {
    /**
     * @type {TagsAdd[]}
     */
    add: [],
    /**
     * @type {TagsRemove[]}
     */
    remove: [],
    /**
     * @type {TagsRemoveAll[]}
     */
    removeAll: [],
    /**
     * @type {TagsRemoveAllFrom[]}
     */
    removeAllFrom: []
}

/**
 * 
 * @param {Internal.Tag} tag 
 * @param {String[]} fluids
 */
function addTagToFluids(tag, fluids) {
    fluidTags.add.push(new TagsAdd(tag, fluids));
}

/**
 * 
 * @param {String} id
 * @param {String} builderType
 * @param {String} displayName 
 */
function BuilderProperties(id, builderType, displayName) {
    this.id = id;
    this.builderType = builderType;
    this.displayName = displayName;
}

/**
 * 
 * @param {Internal.Tag} tag 
 * @param {String[]} ids
 */
function TagsAdd(tag, ids) {
    this.tag = tag;
    this.ids = ids;
}

/**
 * 
 * @param {Internal.Tag} tag 
 * @param {String[]} ids
 */
function TagsRemove(tag, ids) {
    this.tag = tag;
    this.ids = ids;
}

/**
 * 
 * @param {Internal.Tag} tag 
 */
function TagsRemoveAll(tag) {
    this.tag = tag;
}

/**
 * 
 * @param {String[]} ids
 */
function TagsRemoveAllFrom(ids) {
    this.ids = ids;
}

/**
 * 
 * @param {String} id
 * @param {String} builderType
 * @param {String} displayName 
 */
function newItem(id, builderType, displayName) {
    items.push(new BuilderProperties(id, builderType, displayName));
    return "kubejs:" + id;
}

/**
 * 
 * @param {String} id
 * @param {String} displayName 
 * @param {Internal.Tag[]} tags 
 */
function newBasicItem(id, displayName, tags) {
    const item = newItem(id, "basic", displayName);
    console.log(item)
    tags.forEach(tag => {
        addTagToItems(tag, [item]);
    });
    return item
}

/**
 * 
 * @param {String} id
 * @param {String} builderType
 * @param {String} displayName 
 * @param {Internal.Tag[]} tags 
 */
function newBlock(id, builderType, displayName) {
    blocks.push(new BuilderProperties(id, builderType, displayName));
    return "kubejs:" + id;
}

/**
 * 
 * @param {String} id
 * @param {String} displayName 
 * @param {Internal.Tag[]} tags 
 */
function newBasicBlock(id, displayName, tags) {
    const block = newBlock(id, "basic", displayName);
    tags.forEach(tag => {
        addTagToBlocks(tag, [block]);
    });
    return block;
}

/**
 * 
 * @param {String} id
 * @param {String} builderType
 * @param {String} displayName 
 * @param {Internal.Tag[]} tags 
 */
function newFluid(id, builderType, displayName) {
    fluids.push(new BuilderProperties(id, builderType, displayName));
    return "kubejs:" + id;
}

/**
 * 
 * @param {String} id
 * @param {String} displayName 
 * @param {Internal.Tag[]} tags 
 */
function newBasicFluid(id, displayName, tags) {
    const fluid = newFluid(id, "basic", displayName);
    tags.forEach(tag => {
        addTagToFluids(tag, [fluid]);
    });
    return fluid;
}

/**
 * 
 * @param {Internal.JsonObject} recipe 
 */
function newRecipe(recipe) {
    recipes.push(recipe);
}

/**
 * @type {Internal.RecipeFilter_[]}
 */
let recipesRemove = []

/**
 * 
 * @param {Internal.RecipeFilter_} filter 
 */
function removeRecipe(filter) {
    recipesRemove.push(filter);
}

/**
 * 
 * @param {Internal.JsonObject[]} ingredients 
 * @param {Internal.JsonObject} output 
 * @returns 
 */
function shapeless(ingredients, output) {
    return {
        type: "minecraft:crafting_shapeless",
        ingredients: ingredients,
        result: output
    }
}

/**
 * 
 * @param {Internal.JsonObject} keys 
 * @param {String[]} pattern 
 * @param {Internal.JsonObject} output
 */
function shaped(keys, pattern, output) {
    return {
        type: "minecraft:crafting_shaped",
        key: keys,
        pattern: pattern,
        result: output
    }
}

/**
 * 
 * @param {Internal.JsonObject} input 
 * @param {Internal.JsonObject} output 
 * @param {Number} time 
 * @param {Number} xp 
 */
function furnace(input, output, time, xp) {
    return {
        type: "minecraft:smelting",
        cookingtime: time,
        experience: xp,
        ingredient: input,
        result: output
    }
}

/**
 * 
 * @param {Internal.JsonObject[]} inputs 
 * @param {Internal.JsonObject} output 
 * @param {Number} time 
 * @returns 
 */
function alloyFurnace(inputs, output, time) {
    return {
        type: "immersiveengineering:alloy",
        time: time,
        result: output,
        input0: inputs[0],
        input1: inputs[1]
    }
}

/**
 * 
 * @param {Internal.JsonObject[]} inputs 
 * @param {Internal.JsonObject[]} outputs 
 * @param {Number} time 
 * @returns 
 */
function milling(inputs, outputs, time) {
    return {
        type: "create:milling",
        ingredients: inputs,
        results: outputs,
        processingTime: time
    }
}

/**
 * 
 * @param {Internal.JsonObject[]} inputs 
 * @param {Internal.JsonObject[]} outputs 
 * @param {Number} time 
 * @returns 
 */
function crushingWheel(inputs, outputs, time) {
    return {
        type: "create:crushing",
        ingredients: inputs,
        results: outputs,
        processingTime: time
    }
}

/**
 * 
 * @param {Internal.JsonObject[]} inputs 
 * @param {Internal.JsonObject[]} outputs 
 * @returns 
 */
function mixer(inputs, outputs) {
    return {
        type: "create:mixing",
        ingredients: inputs,
        results: outputs
    }
}

/**
 * 
 * @param {Internal.JsonObject[]} inputs 
 * @param {Internal.JsonObject[]} outputs 
 * @param {"heated" | "superheated"} heatRequirement 
 * @returns 
 */
function mixerHeated(inputs, outputs, heatRequirement) {
    return {
        type: "create:mixing",
        heatRequirement: heatRequirement,
        ingredients: inputs,
        results: outputs
    }
}

function pressing(inputs, outputs) {
    return {
        type: "create:pressing",
        ingredients: inputs,
        results: outputs
    }
}

function compacting(inputs, outputs) {
    return {
        type: "create:compacting",
        ingredients: inputs,
        results: outputs
    }
}

/**
 * 
 * @param {Internal.JsonObject} input 
 * @param {Internal.JsonObject} result 
 * @param {Internal.JsonObject[]} secondaries 
 * @param {Number} energy 
 */
function crusher(input, result, secondaries, energy) {
    return {
        type: "immersiveengineering:crusher",
        secondaries: secondaries,
        result: result,
        input: input,
        energy: energy
    }
}

/**
 * 
 * @param {Internal.JsonObject} tool 
 * @param {String} sound
 * @param {Internal.JsonObject[]} inputs 
 * @param {Internal.JsonObject[]} outputs 
 * @returns 
 */
function cuttingBoard(tool, sound, inputs, outputs) {
    return {
        type: "farmersdelight:cutting",
        ingredients: inputs,
        tool: tool,
        result: outputs,
        sound: sound
    }
}

/**
 * 
 * @param {Internal.JsonObject} tool 
 * @param {Internal.JsonObject[]} inputs 
 * @param {Internal.JsonObject[]} outputs 
 * @returns 
 */
function cuttingBoardSilent(tool, inputs, outputs) {
    return {
        type: "farmersdelight:cutting",
        ingredients: inputs,
        tool: tool,
        result: outputs
    }
}

removeRecipe({type: "create:haunting"});
/**
 * 
 * @param {Internal.JsonObject[]} inputs 
 * @param {Internal.JsonObject[]} outputs 
 * @returns 
 */
function haunting(inputs, outputs) {
    return {
        type: "create:haunting",
        ingredients: inputs,
        results: outputs
    }
}

/**
 * 
 * @param {String} inputItem 
 * @param {String} outputItem 
 */
function compress9x9(inputItem, outputItem) {
    return shaped({I: inputItem}, ["III", "III", "III"], {count:1, item: outputItem});
}

/**
 * 
 * @param {String} inputItem 
 * @param {String} outputItem 
 */
function decompress9x9(inputItem, outputItem) {
    return shapeless([{count: 1, item: inputItem}], {count: 9, item: outputItem});
}

/**
 * 
 * @param {String} inputItem 
 * @param {String} outputItem 
 */
function compress4x4(inputItem, outputItem) {
    return shaped({I: inputItem}, ["II", "II"], {count:1, item: outputItem});
}

/**
 * 
 * @param {String} inputItem 
 * @param {String} outputItem 
 */
function decompress4x4(inputItem, outputItem) {
    return shapeless([{count: 1, item: inputItem}], {count: 4, item: outputItem});
}

/**
 * 
 * @param {String} craftItem 
 * @param {Internal.JsonObject[]} inputs 
 * @param {Internal.JsonObject} output 
 * @returns 
 */
function craftWith(craftItem, inputs, output) {
    return shapeless([{count: 1, item: craftItem}].concat(inputs), output);
}

/**
 * 
 * @param {Internal.JsonObject[]} inputs 
 * @param {Internal.JsonObject} output 
 */
function crushWithMortar(inputs, output) {
    return craftWith(tools.mortar, inputs, output);
}

function newCutting(inputs, outputs) {
    newRecipe(cuttingBoardSilent({tag: tools.knife}, inputs, outputs));
}

/**
 * 
 * @param {Internal.JsonObject} input 
 * @param {Internal.JsonObject} output 
 * @param {Number} time 
 * @param {Number} xp 
 */
function newExtendedSmelting(input, output, time, xp) {
    newRecipe(furnace(input, output, time, xp));
}

/**
 * 
 * @param {Internal.JsonObject[]} inputs 
 * @param {Internal.JsonObject[]} outputs 
 * @param {Number} energy 
 */
function newExtendedCrushing(inputs, outputs, energy) {
    newRecipe(crusher(inputs[0], outputs[0], outputs.slice(1), energy));
}

/**
 * 
 * @param {Internal.JsonObject[]} inputs 
 * @param {Internal.JsonObject} output 
 * @param {Number} time 
 */
function newAlloy(inputs, output, time) {
    newRecipe(alloyFurnace(inputs, output, time));
}

function newStorageBlock(materialId, materialDisplayName) {
    const id = materialId + "_block";
    const displayName = "Block of " + materialDisplayName;

    return newBasicBlock(id, displayName, ["forge:storage_blocks", "forge:storage_blocks/" + materialId]);
}

function newIngot(materialId, materialDisplayName) {
    const id = materialId + "_ingot";
    const displayName = materialDisplayName + " Ingot";

    return newBasicItem(id, displayName, ["forge:ingots", "forge:ingots/" + materialId]);
}

function newNugget(materialId, materialName) {
    const id = materialId + "_nugget";
    const displayName = materialName + " Nugget";

    return newBasicItem(id, displayName, ["forge:nuggets", "forge:nuggets/" + materialId]);
}

function newDust(materialId, materialName) {
    const id = materialId + "_dust";
    const displayName = materialName + " Dust";

    return newBasicItem(id, displayName, ["forge:dusts", "forge:dusts/" + materialId]);
}

function newGravel(materialId, materialName) {
    const id = materialId + "_gravel";
    const displayName = materialName + " Gravel";

    return newBasicBlock(id, displayName, ["forge:gravels", "forge:gravels/" + materialId]);
}

function newSand(materialId, materialName) {
    const id = materialId + "_sand";
    const displayName = materialName + " Sand";

    return newBasicBlock(id, displayName, ["forge:sands", "forge:sands/" + materialId]);
}

/**
 * @type {{id: String, stackSize: Number, hunger: Number, saturationModifier: Number, fastToEat: Boolean}[]}
 */
let foods = [];

/**
 * @param {String} id
 * @param {String} displayName 
 * @param {Internal.Tag[]} tags 
 * @param {Number} stackSize
 * @param {Number} hunger
 * @param {Number} saturationModifier
 * @param {Boolean} fastToEat
 */
function newFood(id, displayName, tags, stackSize, hunger, saturationModifier, fastToEat) {
    const food = {id: id, stackSize: stackSize, hunger: hunger, saturationModifier: saturationModifier, fastToEat: fastToEat}
    const foodId = newBasicItem(id, displayName, tags);

    console.log(JSON.stringify(food));
    foods.push(food);
    return foodId
}

/**
 * 
 * @returns {{storageBlock: String, ingot: String, nugget: String, dust: String}}
 */
function newMetal(materialId, materialName, recipes) {
    const items = {    
        storageBlock: newStorageBlock(materialId, materialName),
        ingot: newIngot(materialId, materialName),
        nugget: newNugget(materialId, materialName),
        dust: newDust(materialId, materialName)
    }
    if (recipes) {
        newRecipe(compress9x9(items.ingot, items.storageBlock));
        newRecipe(compress9x9(items.nugget, items.ingot));
        newRecipe(decompress9x9(items.storageBlock, items.ingot));
        newRecipe(decompress9x9(items.ingot, items.nugget));

        newExtendedCrushing([{item: items.ingot}], [{item: items.dust}], 3000);
        crushWithMortar([{item: items.ingot}], [{item: items.dust}]);

        newExtendedSmelting({item: items.dust, count: 1}, items.ingot, 200, 1.0);
    }
    return items;
}

function stoneCrushing(stone, gravel, sand, dust) {
    newRecipe(compacting([{item: gravel}, {fluid: "minecraft:lava", amount: 250}], [{item: stone}]));
    newRecipe(compacting([{item: sand}, {fluid: "minecraft:lava", amount: 100}], [{item: stone}]));
    newRecipe(compacting([{item: dust, count: 9}, {fluid: "minecraft:lava", amount: 250}], [{item: stone}]));

    newRecipe(craftWith(tools.hammer, [{item: stone}], {item: gravel}));
    newRecipe(milling([{item: stone}], [{item: gravel}], 250));

    newRecipe(craftWith(tools.hammer, [{item: gravel}], {item: sand}));
    newRecipe(craftWith(tools.earthCharge, [{item: stone}], {item: sand}));
    newRecipe(milling([{item: gravel}], [{item: sand}], 250));

    newRecipe(craftWith(tools.earthCharge, [{item: gravel}], {item: dust, count: 4}));
}

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

removeRecipe({type: "botania:mana_infusion"});
/**
 * 
 * @param {Internal.JsonObject} input 
 * @param {Internal.JsonObject} output 
 * @param {Number} mana
 * @param {{type: "block", block: String}} catalyst 
 * @returns 
 */
function manaInfusion(input, output, mana, catalyst) {
    return {
        type: "botania:mana_infusion",
        catalyst: catalyst,
        input: input,
        mana: mana,
        output: output
    }
}

/**
 * 
 * @param {Internal.JsonObject[]} input 
 * @param {Internal.JsonObject[]} output 
 */
function newAddSoul(input, output) {
    newRecipe(manaInfusion(input, output, 4000, manaCatalyst.soul));
    newRecipe(haunting([input], [output]));
}