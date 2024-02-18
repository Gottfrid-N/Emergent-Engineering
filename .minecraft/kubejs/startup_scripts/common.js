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
let itemTags = {
    /**
     * @type {{tag: Special.ItemTag, id: Special.Item[]}[]}
     */
    add: [],
    /**
     * @type {{tag: Special.ItemTag, id: Special.Item[]}[]}
     */
    remove: [],
    /**
     * @type {{tag: Special.ItemTag}[]}
     */
    removeAll: [],
        /**
     * @type {{id: Special.Item[]}[]}
     */
    removeAllTagsFrom: []
}

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

/**
 * 
 * @param {Internal.JsonObject} input 
 * @param {Internal.JsonObject} output 
 * @param {Number} time 
 * @param {Number} xp 
 */
function extendedSmelting(input, output, time, xp) {
    newRecipe(furnace(input, output, time, xp));
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

        newRecipe(craftWith(tools.mortar, [{item: items.ingot}], {item: items.dust}))

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

const carbonatite = {
    storageBlock: "minecraft:stone",
    gravel: "minecraft:gravel",
    sand: "minecraft:sand",
    dust: newDust("carbonatite", "Stone")
}
stoneCrushing(carbonatite.storageBlock, carbonatite.gravel, carbonatite.sand, carbonatite.dust);

const gregoryite = {
    storageBlock: newStorageBlock("gregoryite"),
    gravel: newGravel("gregoryite", "Gregoryite"),
    sand: newSand("gregoryite", "Gregoryite"),
    dust: newDust("gregoryite", "Gregoryite")
}
stoneCrushing(gregoryite.storageBlock, gregoryite.gravel, gregoryite.sand, gregoryite.dust);

const granite = {
    storageBlock: "minecraft:granite",
    gravel: newGravel("granite", "Granite"),
    sand: newSand("granite", "Granite"),
    dust: newDust("granite", "Granite"),
    ingot: newBasicItem("granite_alloy", "Granite Alloy", ["forge:ingots", "forge:ingots/granite"])
}
stoneCrushing(granite.storageBlock, granite.gravel, granite.sand, granite.dust);

const rhyolite = {
    storageBlock: newStorageBlock("rhyolite", "Rhyolite"),
    gravel: newGravel("rhyolite", "Rhyolite"),
    sand: newSand("rhyolite", "Rhyolite"),
    dust: newDust("rhyolite", "Rhyolite"),
}
stoneCrushing(rhyolite.storageBlock, rhyolite.gravel, rhyolite.sand, rhyolite.dust);

const diorite = {
    storageBlock: "minecraft:diorite",
    gravel: newGravel("diorite", "Diorite"),
    sand: newSand("diorite", "Diorite"),
    dust: newDust("diorite", "Diorite"),
    ingot: newBasicItem("diorite_alloy", "Diorite Alloy", ["forge:ingots", "forge:ingots/diorite"])
}
stoneCrushing(diorite.storageBlock, diorite.gravel, diorite.sand, diorite.dust);

const andesite = {
    storageBlock: "minecraft:andesite",
    gravel: newGravel("andesite", "Andesite"),
    sand: newSand("andesite", "Andesite"),
    dust: newDust("andesite", "Andesite"),
    ingot: "create:andesite_alloy"
}
newRecipe(decompress9x9("create:andesite_alloy_block", andesite.ingot));
stoneCrushing(andesite.storageBlock, andesite.gravel, andesite.sand, andesite.dust);

const gabbro = {
    storageBlock: newStorageBlock("gabbro", "Gabbro"),
    gravel: newGravel("gabbro", "Gabbro"),
    sand: newSand("gabbro", "Gabbro"),
    dust: newDust("gabbro", "Gabbro")
}
stoneCrushing(gabbro.storageBlock, gabbro.gravel, gabbro.sand, gabbro.dust);

const peridotite = {
    storageBlock: newStorageBlock("peridotite", "Peridotite"),
    gravel: newGravel("peridotite", "Peridotite"),
    sand: newSand("peridotite", "Peridotite"),
    dust: newDust("peridotite", "Peridotite")
}
stoneCrushing(peridotite.storageBlock, peridotite.gravel, peridotite.sand, peridotite.dust);

const komatiite = {
    storageBlock: newStorageBlock("komatiite", "Komatiite"),
    gravel: newGravel("komatiite", "Komatiite"),
    sand: newSand("komatiite", "Komatiite"),
    dust: newDust("komatiite", "Komatiite")
}
stoneCrushing(komatiite.storageBlock, komatiite.gravel, komatiite.sand, komatiite.dust);

const gad = {
    ingot: newBasicItem("gad_alloy", "G.A.D Alloy", ["forge:ingots", "forge:ingots/gad"])
}

const dragonEggs = {
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
    }
}

newRecipe(extendedSmelting({item: "minecraft:rotten_flesh"}, {item: "minecraft:leather"}, 200, 1.0));
newRecipe(shaped({L: "minecraft:leather", S: "minecraft:string"}, ["SLS", "L L", "L L"], "minecraft:bundle"));
newRecipe(shaped({H: "minecraft:rabbit_hide", S: "minecraft:string"}, ["SHS", "H H", "H H"], "minecraft:bundle"));
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
global.tags = tags;