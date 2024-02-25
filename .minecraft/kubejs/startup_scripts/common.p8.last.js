// priority: 8

newExtendedSmelting({item: "minecraft:rotten_flesh"}, {item: "minecraft:leather"}, 200, 1.0);
newRecipe(shaped({L: "minecraft:leather", S: "minecraft:string"}, ["SLS", "L L", "L L"], "minecraft:bundle"));
newRecipe(shaped({H: "minecraft:rabbit_hide", S: "minecraft:string"}, ["SHS", "H H", "H H"], "minecraft:bundle"));
newRecipe(shaped({T: "dimdoors:world_thread", E: "minecraft:ender_pearl"}, ["   ", "TET", "   "], {item: "dimdoors:stable_fabric"}));

newRecipe(shapeless([{item: "minecraft:stick"}], {item: tools.itemUnifier}));
newRecipe(shapeless([{item: "minecraft:stick"}, {item: tools.itemUnifier}], tools.immersiveSteel));
newRecipe(craftWith(tools.immersiveSteel, [{tag: "forge:storage_blocks/steel"}], {item: "immersiveengineering:storage_steel"}));

removeRecipe({id: "minecraft:blast_furnace"});
removeRecipe({id: "nethersdelight:blackstone_blast_furnace"});
removeRecipe({id: "create:haunting/nether_brick"});
removeRecipe({id: "create:haunting/blackstone"});
removeRecipe({id: "create:haunting/crimson_fungus"});
removeRecipe({id: "create:haunting/glow_berries"});
removeRecipe({id: "create:haunting/glow_ink_sac"});
removeRecipe({id: "create:haunting/lapis_recycling"});
removeRecipe({id: "projecte:philosophers_stone"});
removeRecipe({id: "projecte:philosophers_stone_alt"});
removeRecipe({id: "projecte:transmutation_table"});

global.items = items;
global.blocks = blocks;
global.fluids = fluids;
global.recipes = recipes;
global.recipesRemove = recipesRemove;
global.itemTags = itemTags;
global.blockTags = blockTags;
global.fluidTags = fluidTags;
global.foods = foods;