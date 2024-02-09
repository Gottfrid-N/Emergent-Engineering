// priority: 10

global["itemMetalTypes"] = [
    "ingot", "nugget",
    "dust",
    "plate",
    "gear",
    "coil", "sheet",
    "wire", "wire_coil",
    "rod",
    "coin", 
    "alchemical_catalyst"]

global["blockMetalTypes"] = [
    "storage_block", "sheetmetal",
    "coin_stack"
]

global["metalTagTypes"] = [
    "forge:storage_blocks", "forge:ingots", "forge:nuggets",
    "forge:dusts",
    "forge:plates",
    "forge:gears",
    "forge:wires"]

global["materials"] = [
    // [material, [[item types], [block types], [fluid types]]]
    // vanilla
    ["iron", []]
    ["copper", []]
    ["gold", []]
    // thermal
    ["tin", []]
    ["lead", []]
    ["silver", []]
    ["nickel", []]
    ["steel", []]
    ["rose_gold", []]
    ["bronze", []]
    ["electrum", []]
    ["invar", []]
    ["constantan", []]
    ["iron", []]
    // create
    ["brass", [["plate"]]]
    ["zinc", [["plate"]]]
    // custom
    ["platinum", [["ingot", "nugget"], ["storage_block"]]]
]