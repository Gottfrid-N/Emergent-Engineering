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

/**
 * @type {ItemProperties[]}
 */
let items = [];
/**
 * @type {BlockProperties[]}
 */
let blocks = [];
/**
 * @type {FluidProperties[]}
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
function ItemProperties(id, displayName, tags) {
    this.id = id;
    this.displayName = displayName;
    this.tags = tags
}

/**
 * 
 * @param {String} id
 * @param {String} displayName 
 * @param {String[]} tags 
 */
function BlockProperties(id, displayName, tags) {
    this.id = id;
    this.displayName = displayName;
    this.tags = tags
}

/**
 * 
 * @param {String} id
 * @param {String} displayName 
 * @param {String[]} tags 
 */
function FluidProperties(id, displayName, tags) {
    this.id = id;
    this.displayName = displayName;
    this.tags = tags
}

/**
 * 
 * @param {String} id
 * @param {String} displayName 
 * @param {String[]} tags 
 */
function newItem(id, displayName, tags) {
    items.push(new ItemProperties(id, displayName, tags));
}

/**
 * 
 * @param {String} id
 * @param {String} displayName 
 * @param {String[]} tags 
 */
function newBlock(id, displayName, tags) {
    blocks.push(new BlockProperties(id, displayName, tags))
}

/**
 * 
 * @param {String} id
 * @param {String} displayName 
 * @param {String[]} tags 
 */
function newFluid(id, displayName, tags) {
    fluids.push(new FluidProperties(id, displayName, tags))
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

newRecipe(decompress9x9("create:andesite_alloy_block", "create:andesite_alloy"))
newItem("granite_alloy", "Granite Alloy", "forge:ingots/granite");
newItem("diorite_alloy", "Diorite Alloy", "forge:ingots/diorite");
newItem("gad_alloy", "G.A.D Alloy", "forge:ingots/gad")

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

console.log("Items: " + items);
global.items = items;
console.log("Blocks: " + blocks);
global.blocks = blocks;
console.log("Fluids: " + fluids);
global.fluids = fluids;
console.log("Recipes: " + recipes);
global.recipes = recipes;