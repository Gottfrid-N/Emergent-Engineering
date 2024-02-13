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
function newStorageBlock(materialId, materialDisplayName) {
    let id = materialId + "_block";
    let displayName = "Block of " + materialDisplayName;

    newBlock(id, displayName, ["forge:storage_blocks/" + materialId]);
    newRecipe(compress9x9(ingotRid(materialId), storageBlockRid(materialId)));
}

function ingotRid(materialId) {return "kubejs:" + materialId + "_ingot"}
function newIngot(materialId, materialDisplayName) {
    let id = materialId + "_ingot";
    let displayName = materialDisplayName + " Ingot";

    newItem(id, displayName, ["forge:ingots/" + materialId]);
    newRecipe(compress9x9(nuggetRid(materialId), ingotRid(materialId)));
    newRecipe(decompress9x9(storageBlockRid(materialId), ingotRid(materialId)))
}

function nuggetRid(materialId) {return "kubejs:" + materialId + "_nugget"}
function newNugget(materialId, materialName) {
    let id = materialId + "_nugget";
    let displayName = materialName + " Nugget";

    newItem(id, displayName, ["forge:nuggets/" + materialId]);
    newRecipe(decompress9x9(ingotRid(materialId), nuggetRid(materialId)));
}

newStorageBlock("platinum", "Platinum");
newIngot("platinum", "Platinum");
newNugget("platinum", "Platinum");

let ousia ={id: "ousia", 
            name: {greek: "Ουσία", transliteral: "Ousía"}};
let ousiaFeminity =    {id: "thelykos", 
                        name: {greek: "Θηλυκός", transliteral: "Thēlykós"}};
    let ousiaVenus =   {id: "aphrodite", 
                        name: {greek: "Αφροδίτη", transliteral: "Aphrodítē"}};
    let ousiaEarth =   {id: "ge", 
                        name: {greek: "Γη", transliteral: "Gē"}};
let ousiaMasculinity = {id: "arsenikos", 
                        name: {greek: "Αρσενικό", transliteral: "Arsenikós"}};
    let ousiaMercury = {id: "ermes", 
                        name: {greek: "Ερμής", transliteral: "Ermḗs"}};
    let ousiaMars =    {id: "ares", 
                        name: {greek: "Άρης", transliteral: "Árēs"}};
    let ousiaJupiter = {id: "dias", 
                        name: {greek: "Δίας", transliteral: "Días"}};
    let ousiaSaturn =  {id: "kronos", 
                        name: {greek: "Κρόνος", transliteral: "Krónos"}};
    let ousiaUranus =  {id: "ouranos", 
                        name: {greek: "Ουρανός", transliteral: "Ouranós"}};
    let ousiaNeptune = {id: "poseidonas", 
                        name: {greek: "Ποσειδώνας", transliteral: "Poseidṓnas"}};

/**
 * 
 * @param {{id: String, name: {greek: String, transliteral: String}}} ousiaAspect 
 */
function newOusia(ousiaAspect) {
    let id = ousiaAspect.id + "_" + ousia.id;
    let transliteralName = ousiaAspect.name.transliteral + " " + ousia.name.transliteral;
    let greekName = ousiaAspect.name.greek + " " +  ousia.name.greek;

    newItem(id, transliteralName)
}

newOusia(ousiaFeminity);
newOusia(ousiaVenus);
newOusia(ousiaEarth);
newOusia(ousiaMasculinity);
newOusia(ousiaMercury);
newOusia(ousiaMars);
newOusia(ousiaJupiter);
newOusia(ousiaSaturn);
newOusia(ousiaUranus);
newOusia(ousiaNeptune);

console.log("items: " + items);
global.items = items;
console.log("blocks: " + blocks);
global.blocks = blocks;
console.log("fluids: " + fluids);
global.fluids = fluids;
console.log("recipes: " + recipes);
global.recipes = recipes;