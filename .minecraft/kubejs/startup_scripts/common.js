// priority: 10

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

/**
 * 
 * @param {String} id
 * @param {String} builderType
 * @param {String} displayName 
 * @param {String[]} tags 
 */
function BuilderProperties(id, builderType, displayName, tags) {
    this.id = id;
    this.builderType = builderType;
    this.displayName = displayName;
    this.tags = tags
}

/**
 * 
 * @param {String} id
 * @param {String} builderType
 * @param {String} displayName 
 * @param {String[]} tags 
 */
function newItem(id, builderType, displayName, tags) {
    items.push(new BuilderProperties(id, builderType, displayName, tags));
    return "kubejs:" + id;
}

/**
 * 
 * @param {String} id
 * @param {String} displayName 
 * @param {String[]} tags 
 */
function newBasicItem(id, displayName, tags) {
    return newItem(id, "basic", displayName, tags);
}

/**
 * 
 * @param {String} id
 * @param {String} builderType
 * @param {String} displayName 
 * @param {String[]} tags 
 */
function newBlock(id, builderType, displayName, tags) {
    blocks.push(new BuilderProperties(id, builderType, displayName, tags));
    return "kubejs:" + id;
}

/**
 * 
 * @param {String} id
 * @param {String} displayName 
 * @param {String[]} tags 
 */
function newBasicBlock(id, displayName, tags) {
    return newBlock(id, "basic", displayName, tags);
}

/**
 * 
 * @param {String} id
 * @param {String} builderType
 * @param {String} displayName 
 * @param {String[]} tags 
 */
function newFluid(id, builderType, displayName, tags) {
    fluids.push(new BuilderProperties(id, builderType, displayName, tags));
    return "kubejs:" + id;
}

/**
 * 
 * @param {String} id
 * @param {String} displayName 
 * @param {String[]} tags 
 */
function newBasicFluid(id, displayName, tags) {
    return newFluid(id, "basic", displayName, tags)
}

/**
 * 
 * @param {Internal.JsonObject} recipe 
 */
function newRecipe(recipe) {
    recipes.push(recipe);
}

/**
 * 
 * @param {Internal.JsonObject[]} ingredients 
 * @param {Internal.JsonObject} output 
 * @returns 
 */
function craftingShapeless(ingredients, output) {
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
function craftingShaped(keys, pattern, output) {
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
 * @param {String} outputItem 
 * @param {Number} time 
 * @param {Number} xp 
 */
function furnace(input, outputItem, time, xp) {
    return {
        type: "minecraft:smelting",
        cookingtime: time,
        experience: xp,
        ingredient: input,
        result: outputItem
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
 * @param {Internal.JsonObject} input 
 * @param {[{count: Number, base_ingredient: Internal.JsonObject}]} result 
 * @param {{chance: Number, output: Internal.JsonObject}} secondaries 
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
 * @param {String} inputItem 
 * @param {String} outputItem 
 */
function compress9x9(inputItem, outputItem) {
    return craftingShaped({I: inputItem}, ["III", "III", "III"], {count:1, item: outputItem});
}

/**
 * 
 * @param {String} inputItem 
 * @param {String} outputItem 
 */
function decompress9x9(inputItem, outputItem) {
    return craftingShapeless([{count: 1, item: inputItem}], {count: 9, item: outputItem});
}

/**
 * 
 * @param {String} craftItem 
 * @param {Internal.JsonObject[]} inputs 
 * @param {Internal.JsonObject} output 
 * @returns 
 */
function craftWith(craftItem, inputs, output) {
    return craftingShapeless([{count: 1, item: craftItem}].concat(inputs), output);
}

/**
 * 
 * @param {Internal.JsonObject[]} inputs 
 * @param {Internal.JsonObject} output 
 */
function crushWithMortar(inputs, output) {
    return craftWith(tools.mortar, inputs, output);
}

/**
 * 
 * @param {Internal.JsonObject} input 
 * @param {Internal.JsonObject} outputItem 
 * @param {Number} time 
 * @param {Number} xp 
 */
function extendedSmelting(input, outputItem, time, xp) {
    newRecipe(furnace(input, outputItem, time, xp));
}

function newStorageBlock(materialId, materialDisplayName) {
    const id = materialId + "_block";
    const displayName = "Block of " + materialDisplayName;

    return newBasicBlock(id, displayName, ["forge:storage_blocks/", "forge:storage_blocks/" + materialId]);
}

function newIngot(materialId, materialDisplayName) {
    const id = materialId + "_ingot";
    const displayName = materialDisplayName + " Ingot";

    return newBasicItem(id, displayName, ["forge:ingots/", "forge:ingots/" + materialId]);
}

function newNugget(materialId, materialName) {
    const id = materialId + "_nugget";
    const displayName = materialName + " Nugget";

    return newBasicItem(id, displayName, ["forge:nuggets/", "forge:nuggets/" + materialId]);
}

function newDust(materialId, materialName) {
    const id = materialId + "_dust";
    const displayName = materialName + " Dust";

    return newBasicItem(id, displayName, ["forge:dusts/", "forge:dusts/" + materialId]);
}

function newGravel(materialId, materialName) {
    const id = materialId + "_gravel";
    const displayName = materialName + " Gravel";

    return newBasicBlock(id, displayName, ["forge:gravels/", "forge:gravels/" + id]);
}

function newSand(materialId, materialName) {
    const id = materialId + "_sand";
    const displayName = materialName + " Sand";

    return newBasicBlock(id, displayName, ["forge:sands", "forge:sands" + id]);
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

        extendedSmelting({item: items.dust, count: 1}, items.ingot, 200, 1.0);
    }
    return items;
}

function stoneCrushing(stone, gravel, sand, dust) {
    newRecipe(craftWith(tools.hammer, [{item: stone}], {item: gravel}));
    newRecipe(milling([{item: stone}], [{item: gravel}], 250));

    newRecipe(craftWith(tools.hammer, [{item: gravel}], {item: sand}));
    newRecipe(craftWith(tools.earthCharge, [{item: stone}], {item: sand}));
    newRecipe(milling([{item: gravel}], [{item: sand}], 250));

    newRecipe(craftWith(tools.earthCharge, [{item: gravel}], {item: dust, count: 4}));
}

const tools = {
    mortar: newBasicItem("mortar", "Mortar", ["forge:tools", "forge:tools/mortar"]),
    hammer: "immersiveengineering:hammer",
    earthCharge: "thermal:earth_charge"
}

const platinum = newMetal("platinum", "Platinum", true);

const andesite = {
    storageBlock: "minecraft:andesite",
    gravel: newGravel("andesite", "Andesite"),
    sand: newSand("andesite", "Andesite"),
    dust: newDust("andesite", "Andesite"),
    ingot: "create:andesite_alloy"
}
newRecipe(decompress9x9("create:andesite_alloy_block", andesite.ingot));
stoneCrushing(andesite.storageBlock, andesite.gravel, andesite.sand, andesite.dust);

const granite = {
    storageBlock: "minecraft:granite",
    gravel: newGravel("granite", "Granite"),
    sand: newSand("granite", "Granite"),
    dust: newDust("granite", "Granite"),
    ingot: newBasicItem("granite_alloy", "Granite Alloy", ["forge:ingots", "forge:ingots/granite"])
}
stoneCrushing(granite.storageBlock, granite.gravel, granite.sand, granite.dust);

const diorite = {
    storageBlock: "minecraft:diorite",
    gravel: newGravel("diorite", "Diorite"),
    sand: newSand("diorite", "Diorite"),
    dust: newDust("diorite", "Diorite"),
    ingot: newBasicItem("diorite_alloy", "Diorite Alloy", ["forge:ingots", "forge:ingots/diorite"])
}
stoneCrushing(diorite.storageBlock, diorite.gravel, diorite.sand, diorite.dust);

const gad = {
    ingot: newBasicItem("gad_alloy", "G.A.D Alloy", ["forge:ingots", "forge:ingots/gad"])
}

/**
 * 
 * @param {{id: String, name: {greek: String, transliteral: String}}} aspect 
 */
function newOusiaAspect(aspect) {
    const id = aspect.id + "_" + ousia.id;
    const transliteralName = aspect.name.transliteral + " " + ousia.name.transliteral;
    const greekName = aspect.name.greek + " " +  ousia.name.greek;
    const tags = ["kubejs:ousia", "kubejs:ousia/" + id];

    return newBasicItem(id, transliteralName, tags);
}

const ousia = {id: "ousia", name: {greek: "Ουσία", transliteral: "Ousía"}};
const ousiaAspect = {
    feminity   : newOusiaAspect({id: "thelykos", name: {greek: "Θηλυκός", transliteral: "Thēlykós"}}),
        venus  : newOusiaAspect({id: "aphrodite", name: {greek: "Αφροδίτη", transliteral: "Aphrodítē"}}),
        earth  : newOusiaAspect({id: "ge", name: {greek: "Γη", transliteral: "Gē"}}),
    masculinity: newOusiaAspect({id: "arsenikos", name: {greek: "Αρσενικό", transliteral: "Arsenikós"}}),
        mercury: newOusiaAspect({id: "ermes", name: {greek: "Ερμής", transliteral: "Ermḗs"}}),
        mars   : newOusiaAspect({id: "ares", name: {greek: "Άρης", transliteral: "Árēs"}}),
        jupiter: newOusiaAspect({id: "dias", name: {greek: "Δίας", transliteral: "Días"}}),
        saturn : newOusiaAspect({id: "kronos", name: {greek: "Κρόνος", transliteral: "Krónos"}}),
        uranus : newOusiaAspect({id: "ouranos", name: {greek: "Ουρανός", transliteral: "Ouranós"}}),
        neptune: newOusiaAspect({id: "poseidonas", name: {greek: "Ποσειδώνας", transliteral: "Poseidṓnas"}})
}

global.items = items;
global.blocks = blocks;
global.fluids = fluids;
global.recipes = recipes;