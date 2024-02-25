// priority: 62

const metal = {
    iron: {
        storageBlock: "minecraft:iron_block",
        ingot: "minecraft:iron_ingot",
        nugget: "minecraft:iron_nugget",
        dust: "thermal:iron_dust",
        black: {
            ingot: "extendedcraftin:black_iron_ingot"
        }
    },
    mithril: newMetal("mithril", "Mithril", true),
    manasteel: {
        ingot: "botania:manasteel_ingot"
    },
    copper: {
        ingot: "minecraft:copper_ingot",
        dust: "thermal:copper_dust"
    },
    platinum: newMetal("platinum", "Platinum", true)
}
newRecipe(crushWithMortar([{item: metal.copper.ingot}], {item: metal.copper.dust}));

const gem = {
    sulfur: {
        gem: "thermal:sulfur",
        dust: "thermal:sulfur_dust"
    },
    coal: {
        gem: "minecraft:coal",
        dust: newDust("coal", "Coal")
    }
}
newExtendedCrushing([{item: gem.coal.gem}], [{item: gem.coal.dust}], 3000);
crushWithMortar([{item: gem.coal.gem}], [{item: gem.coal.dust}]);
removeRecipe({output: "bigreactors:graphite_ingot", not: {input: "bigreactors:graphite_dust"}});

const elemental = {
    blaze: {
        dust: "minecraft:blaze_powder",
        rod: "minecraft:blaze_rod"
    },
    basalz: {
        dust: "thermal:basalz_powder",
        rod: "thermal:basalz_rod"
    },
    blitz: {
        dust: "thermal:blitz_powder",
        rod: "thermal:blitz_rod"
    },
    blizz: {
        dust: "thermal:blizz_powder",
        rod: "thermal:blizz_rod"
    }
}
newRecipe(manaInfusion({item: elemental.blaze.dust}, {item: elemental.basalz.dust}, 4000, {type: "block", block: manaCatalyst.transmutation}));
newRecipe(manaInfusion({item: elemental.basalz.dust}, {item: elemental.blaze.dust}, 4000, {type: "block", block: manaCatalyst.transmutation}));
newRecipe(manaInfusion({item: elemental.blitz.dust}, {item: elemental.blizz.dust}, 4000, {type: "block", block: manaCatalyst.transmutation}));
newRecipe(manaInfusion({item: elemental.blizz.dust}, {item: elemental.blitz.dust}, 4000, {type: "block", block: manaCatalyst.transmutation}));

newRecipe(manaInfusion({item: elemental.blaze.dust}, {item: elemental.blizz.dust}, 4000, {type: "block", block: manaCatalyst.inversion}));
newRecipe(manaInfusion({item: elemental.blizz.dust}, {item: elemental.blaze.dust}, 4000, {type: "block", block: manaCatalyst.inversion}));
newRecipe(manaInfusion({item: elemental.basalz.dust}, {item: elemental.blitz.dust}, 4000, {type: "block", block: manaCatalyst.inversion}));
newRecipe(manaInfusion({item: elemental.blitz.dust}, {item: elemental.basalz.dust}, 4000, {type: "block", block: manaCatalyst.inversion}));

newRecipe(shaped({1: elemental.basalz.dust, 2: elemental.blitz.dust, I: metal.iron.ingot, C: metal.iron.black.ingot, P: {tag: "botania:petals"}, L: livingrock}, ["LIL", "1P2", "LCL"], {item: manaCatalyst.inversion}));
newRecipe(shaped({1: elemental.basalz.dust, 2: elemental.blitz.dust, I: metal.iron.ingot, C: metal.iron.black.ingot, P: {tag: "botania:petals"}, L: livingrock}, ["LCL", "1P2", "LIL"], {item: manaCatalyst.inversion}));
newRecipe(shaped({1: elemental.basalz.dust, 2: elemental.blitz.dust, I: metal.iron.ingot, C: metal.iron.black.ingot, P: {tag: "botania:petals"}, L: livingrock}, ["LIL", "2P1", "LCL"], {item: manaCatalyst.inversion}));
newRecipe(shaped({1: elemental.basalz.dust, 2: elemental.blitz.dust, I: metal.iron.ingot, C: metal.iron.black.ingot, P: {tag: "botania:petals"}, L: livingrock}, ["LCL", "2P1", "LIL"], {item: manaCatalyst.inversion}));
newRecipe(shaped({1: elemental.blaze.dust, 2: elemental.blizz.dust, I: metal.iron.ingot, C: metal.iron.black.ingot, P: {tag: "botania:petals"}, L: livingrock}, ["LIL", "1P2", "LCL"], {item: manaCatalyst.inversion}));
newRecipe(shaped({1: elemental.blaze.dust, 2: elemental.blizz.dust, I: metal.iron.ingot, C: metal.iron.black.ingot, P: {tag: "botania:petals"}, L: livingrock}, ["LCL", "1P2", "LIL"], {item: manaCatalyst.inversion}));
newRecipe(shaped({1: elemental.blaze.dust, 2: elemental.blizz.dust, I: metal.iron.ingot, C: metal.iron.black.ingot, P: {tag: "botania:petals"}, L: livingrock}, ["LIL", "2P1", "LCL"], {item: manaCatalyst.inversion}));
newRecipe(shaped({1: elemental.blaze.dust, 2: elemental.blizz.dust, I: metal.iron.ingot, C: metal.iron.black.ingot, P: {tag: "botania:petals"}, L: livingrock}, ["LCL", "2P1", "LIL"], {item: manaCatalyst.inversion}));

newRecipe(shaped({1: elemental.basalz.dust, 2: elemental.blitz.dust, 3: elemental.blaze.dust, 4: elemental.blizz.dust, I: manaCatalyst.inversion, L: livingrock}, ["L3L", "1I2", "L4L"], {item: manaCatalyst.transmutation}));
newRecipe(shaped({1: elemental.basalz.dust, 2: elemental.blitz.dust, 3: elemental.blaze.dust, 4: elemental.blizz.dust, I: manaCatalyst.inversion, L: livingrock}, ["L3L", "2I1", "L4L"], {item: manaCatalyst.transmutation}));
newRecipe(shaped({1: elemental.basalz.dust, 2: elemental.blitz.dust, 3: elemental.blaze.dust, 4: elemental.blizz.dust, I: manaCatalyst.inversion, L: livingrock}, ["L4L", "1I2", "L3L"], {item: manaCatalyst.transmutation}));
newRecipe(shaped({1: elemental.basalz.dust, 2: elemental.blitz.dust, 3: elemental.blaze.dust, 4: elemental.blizz.dust, I: manaCatalyst.inversion, L: livingrock}, ["L4L", "2I1", "L3L"], {item: manaCatalyst.transmutation}));

newRecipe(shaped({1: elemental.basalz.dust, 2: elemental.blitz.dust, 3: elemental.blaze.dust, 4: elemental.blizz.dust, I: manaCatalyst.inversion, L: livingrock}, ["L1L", "3I4", "L2L"], {item: manaCatalyst.transmutation}));
newRecipe(shaped({1: elemental.basalz.dust, 2: elemental.blitz.dust, 3: elemental.blaze.dust, 4: elemental.blizz.dust, I: manaCatalyst.inversion, L: livingrock}, ["L1L", "4I3", "L2L"], {item: manaCatalyst.transmutation}));
newRecipe(shaped({1: elemental.basalz.dust, 2: elemental.blitz.dust, 3: elemental.blaze.dust, 4: elemental.blizz.dust, I: manaCatalyst.inversion, L: livingrock}, ["L2L", "3I4", "L1L"], {item: manaCatalyst.transmutation}));
newRecipe(shaped({1: elemental.basalz.dust, 2: elemental.blitz.dust, 3: elemental.blaze.dust, 4: elemental.blizz.dust, I: manaCatalyst.inversion, L: livingrock}, ["L2L", "4I3", "L1L"], {item: manaCatalyst.transmutation}));

// ROCKS
// ROCKS/MISC

const carbonatite = { // aka. stone
    storageBlock: "minecraft:stone",
    cobble: "minecraft:cobblestone",
    gravel: "minecraft:gravel",
    sand: "minecraft:sand",
    dust: newDust("carbonatite", "Stone"),
    slate: {
        storageBlock: "minecraft:deepslate",
        cobble: "minecraft:cobbled_deepslate"
    }
}
removeRecipe({id: "create:compacting/andesite_from_flint"});
removeRecipe({id: "create:compacting/diorite_from_flint"});
removeRecipe({id: "create:compacting/granite_from_flint"});
stoneCrushing(carbonatite.storageBlock, carbonatite.gravel, carbonatite.sand, carbonatite.dust);

const gregoryite = {
    storageBlock: newStorageBlock("gregoryite", "Gregoryite"),
    gravel: newGravel("gregoryite", "Gregoryite"),
    sand: newSand("gregoryite", "Gregoryite"),
    dust: newDust("gregoryite", "Gregoryite")
}
stoneCrushing(gregoryite.storageBlock, gregoryite.gravel, gregoryite.sand, gregoryite.dust);

const livingrock = "botania:livingrock"

// ROCKS/IGNEUS*
// ROCKS/IGNEUS/FELSIC
const granite = {
    storageBlock: "minecraft:granite",
    gravel: newGravel("granite", "Granite"),
    sand: newSand("granite", "Granite"),
    dust: newDust("granite", "Granite"),
    ingot: newBasicItem("granite_alloy", "Granite Alloy", ["forge:ingots", "forge:ingots/granite"]),
    shaft: "createcasing:glass_shaft"
}
stoneCrushing(granite.storageBlock, granite.gravel, granite.sand, granite.dust);
newAlloy([{item: metal.copper.dust}, {item: granite.dust}], {item: granite.ingot}, 1600);
removeRecipe({id: "createcasing:crafting/shafts/glass_shaft"});
newRecipe(shaped({G: granite.ingot}, ["G", "G"], {item: granite.shaft, count: 4}));

const rhyolite = {
    storageBlock: newStorageBlock("rhyolite", "Rhyolite"),
    gravel: newGravel("rhyolite", "Rhyolite"),
    sand: newSand("rhyolite", "Rhyolite"),
    dust: newDust("rhyolite", "Rhyolite"),
}
stoneCrushing(rhyolite.storageBlock, rhyolite.gravel, rhyolite.sand, rhyolite.dust);

// ROCKS/IGNEUS/INTERMEDIATE
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
stoneCrushing(andesite.storageBlock, andesite.gravel, andesite.sand, andesite.dust);
removeRecipe({output: "create:andesite_alloy", not: {input: "create:andesite_alloy_block"}});

// ROCKS/IGNEUS/MAFIC
const gabbro = {
    storageBlock: newStorageBlock("gabbro", "Gabbro"),
    gravel: newGravel("gabbro", "Gabbro"),
    sand: newSand("gabbro", "Gabbro"),
    dust: newDust("gabbro", "Gabbro")
}
stoneCrushing(gabbro.storageBlock, gabbro.gravel, gabbro.sand, gabbro.dust);

// ROCKS/BASALT

// ROCKS/IGNEUS/ULTRAMAFIC
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

// ROCKS/IGNEUS/MISC

const gad = {
    ingot: newBasicItem("gad_alloy", "G.A.D Alloy", ["forge:ingots", "forge:ingots/gad"])
}

// ROCKS/NETHER
const netherrack = {
    storageBlock: "minecraft:netherrack",
    gravel: newGravel("netherrack", "Netherrack"),
    sand: newSand("netherrack", "Netherrack"),
    dust: newDust("netherrack", "Netherrack")
}
stoneCrushing(netherrack.storageBlock, netherrack.gravel, netherrack.sand, netherrack.dust);
newRecipe(shapeless([{item: soulSand}, {item: elemental.blaze.dust}], {item: netherrack.sand}));
newRecipe(mixer([{item: soulSand}, {item: elemental.blaze.dust}], [{item: netherrack.sand}]));

const basalt = {
    storageBlock: "minecraft:basalt",
    gravel: newGravel("basalt", "Basalt"),
    sand: newSand("basalt", "Basalt"),
    dust: newDust("basalt", "Basalt")
}
newAddSoul({item: carbonatite.storageBlock}, {item: basalt.storageBlock});

const soulSand = "minecraft:soul_sand"
newAddSoul({item: carbonatite.sand}, {item: soulSand});

const blackstone = {
    storageBlock: "minecraft:blackstone"
}
newAddSoul({item: carbonatite.slate.storageBlock}, {item: blackstone.storageBlock});
// ROCKS$

const clay = {
    ball: "minecraft:clay_ball",
    storageBlock: "minecraft:clay"
}

const brick = {
    nether: {
        ingot: "minecraft:nether_brick",
        storageBlock: "minecraft:nether_bricks"
    },
    kiln: {
        ingot: newBasicItem("kiln_brick", "Kiln Brick", ["forge:ingots", "forge:ingots/kiln_brick"]),
        storageBlock: "immersiveengineering:alloybrick",
        blend: newBasicItem("sandy_clay_blend", "Sandy Clay Blend", [])
    },
    coke: {
        ingot: newBasicItem("coke_brick", "Coke Brick", ["forge:ingots", "forge:ingots/coke_brick"]),
        storageBlock: "immersiveengineering:cokebrick",
    },
    blast: {
        ingot: newBasicItem("blast_brick", "Blast Brick", ["forge:ingots", "forge:ingots/blast_brick"]),
        storageBlock: "immersiveengineering:blastbrick"
    }
}
removeRecipe({id: "immersiveengineering:crafting/alloybrick"});
newRecipe(shapeless([{item: clay.ball}, {item: carbonatite.sand}], {item: brick.kiln.blend}));
newExtendedSmelting({item: brick.kiln.blend}, {item: brick.kiln.ingot}, 200, 1.0);
newRecipe(compress4x4(brick.kiln.ingot, brick.kiln.storageBlock));

removeRecipe({id: "immersiveengineering:crafting/cokebrick"});
newAlloy([{item: clay.storageBlock}, {item: gem.coal.dust}], {item: brick.coke.ingot}, 800);
newRecipe(compress4x4(brick.coke.ingot, brick.coke.storageBlock));

removeRecipe({id: "immersiveengineering:crafting/blastbrick"});
newAlloy([{item: brick.nether.ingot}, {item: elemental.blaze.dust}], {item: brick.blast.ingot}, 1600);
newRecipe(compress4x4(brick.blast.ingot, brick.blast.storageBlock));