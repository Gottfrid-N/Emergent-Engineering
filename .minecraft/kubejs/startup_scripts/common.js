// priority: 10

console.log("          .----------------. ",
            "         | .--------------. |",
            "         | |     ______   | |",
            "         | |   .' ___  |  | |",
            "         | |  / .'   \\_|  | |",
            "         | |  | |         | |",
            "         | |  \\ `.___.'\\  | |",
            "         | |   `._____.'  | |",
            "         | |              | |",
            "         | '--------------' |",
            "          '----------------' ");
console.log("         .----------------. ",
            "        | .--------------. |",
            "        | |     ____     | |",
            "        | |   .'    `.   | |",
            "        | |  /  .--.  \\  | |",
            "        | |  | |    | |  | |",
            "        | |  \\  `--'  /  | |",
            "        | |   `.____.'   | |",
            "        | |              | |",
            "        | '--------------' |",
            "         '----------------' ");
console.log("         .----------------. ",
            "        | .--------------. |",
            "        | | ____    ____ | |",
            "        | ||_   \\  /   _|| |",
            "        | |  |   \\/   |  | |",
            "        | |  | |\\  /| |  | |",
            "        | | _| |_\\/_| |_ | |",
            "        | ||_____||_____|| |",
            "        | |              | |",
            "        | '--------------' |",
            "         '----------------' ");
console.log("         .----------------. ",
            "        | .--------------. |",
            "        | | ____    ____ | |",
            "        | ||_   \\  /   _|| |",
            "        | |  |   \\/   |  | |",
            "        | |  | |\\  /| |  | |",
            "        | | _| |_\\/_| |_ | |",
            "        | ||_____||_____|| |",
            "        | |              | |",
            "        | '--------------' |",
            "         '----------------' ");
console.log("         .----------------. ",
            "        | .--------------. |",
            "        | |     ____     | |",
            "        | |   .'    `.   | |",
            "        | |  /  .--.  \\  | |",
            "        | |  | |    | |  | |",
            "        | |  \\  `--'  /  | |",
            "        | |   `.____.'   | |",
            "        | |              | |",
            "        | '--------------' |",
            "         '----------------' ");
console.log("         .-----------------.",
            "        | .--------------. |",
            "        | | ____  _____  | |",
            "        | ||_   \|_   _| | |",
            "        | |  |   \ | |   | |",
            "        | |  | |\ \| |   | |",
            "        | | _| |_\   |_  | |",
            "        | ||_____|\____| | |",
            "        | |              | |",
            "        | '--------------' |",
            "         '----------------' ");


global.metalTagTypes = [
    "forge:storage_blocks", "forge:ingots", "forge:nuggets",
    "forge:dusts",
    "forge:plates",
    "forge:gears",
    "forge:wires"
];

let ousia = ["ousia", "Ουσία", "Ousía"];
let ousiaFeminity = ["thelykos", "Θηλυκός", "Thēlykós"];
	let ousiaVenus = ["aphrodite", "Αφροδίτη", "Aphrodítē"];
	let ousiaEarth = ["ge", "Γη", "Gē"];
let ousiaMasculinity = ["arsenikos", "Αρσενικό", "Arsenikós"];
	let ousiaMercury = ["ermes", "Ερμής", "Ermḗs"];
	let ousiaMars = ["ares", "Άρης", "Árēs"];
	let ousiaJupiter = ["dias", "Δίας", "Días"];
	let ousiaSaturn = ["kronos", "Κρόνος", "Krónos"];
	let ousiaUranus = ["ouranos", "Ουρανός", "Ouranós"];
	let ousiaNeptune = ["poseidonas", "Ποσειδώνας", "Poseidṓnas"];

let ousiaItemTypes = [[ousia[0], "kubejs:ousia"]];
let ousiaTypes = [ousiaItemTypes];

/**
 * @type {Internal.JsonObject[]}
 */
let items = [];
/**
 * @type {Internal.JsonObject[]}
 */
let blocks = [];
/**
 * @type {Internal.JsonObject[]}
 */
let fluids = [];
/**
 * @type {Internal.JsonObject[]}
 */
let recipes = [];

/**
 * 
 * @param {String} id
 * @param {String} displayName 
 * @param {String[]} tags 
 */
function newItem(id, displayName, tags) {
    let item = {
        id: id, 
        displayName: displayName, 
        tags: tags
    }
    items.push(item);
}

function newBlock(id, displayName, tags) {
    let block = {
        id: id, 
        displayName: displayName, 
        tags: tags
    }
    blocks.push(block)
}

function newFluid(id, displayName, tags) {
    let fluid = {
        id: id, 
        displayName: displayName, 
        tags: tags
    }
    fluids.push(fluid)
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
 * @returns 
 */
function craftingShaped(keys, pattern, output) {
    return {
        type: "minecraft:crafting_shaped",
        key: keys,
        pattern: pattern,
        result: output
    }
}

function compress9x9(input, output) {
    return craftingShaped({I: input}, ["III", "III", "III"], {count:1, item: output});
}
function decompress9x9(input, output) {
    return craftingShapeless([{count: 1, item: input}], {count: 9, item: output});
}

function storageBlockRid(materialId) {return "kubejs:" + materialId + "_block"}
function storageBlock(materialId, materialDisplayName) {
    let id = materialId + "_block";
    let displayName = "Block of " + materialDisplayName;

    newBlock(id, displayName, ["forge:storage_blocks/" + materialId]);
    newRecipe(compress9x9(ingotRid(materialId), storageBlockRid(materialId)));
}

function ingotRid(materialId) {return "kubejs:" + materialId + "_ingot"}
function ingot(materialId, materialDisplayName) {
    let id = materialId + "_ingot";
    let displayName = materialDisplayName + " Ingot";

    newItem(id, displayName, ["forge:ingots/" + materialId]);
    newRecipe(compress9x9(nuggetRid(materialId), ingotRid(materialId)));
    newRecipe(decompress9x9(storageBlockRid(materialId), ingotRid(materialId)))
}

function nuggetRid(materialId) {return "kubejs:" + materialId + "_nugget"}
function nugget(materialId, materialName) {
    let id = materialId + "_nugget";
    let displayName = materialName + " Nugget";

    newItem(id, displayName, ["forge:nuggets/" + materialId]);
    newRecipe(decompress9x9(ingotRid(materialId), nuggetRid(materialId)));
}

storageBlock("platinum", "Platinum");
ingot("platinum", "Platinum");
nugget("platinum", "Platinum");

console.log("items: " + items);
global.items = items;
console.log("blocks: " + blocks);
global.blocks = blocks;
console.log("fluids: " + fluids);
global.fluids = fluids;
console.log("recipes: " + recipes);
global.recipes = recipes;