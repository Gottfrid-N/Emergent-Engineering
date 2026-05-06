import classes.function
import classes.recipe

function.steel_to_carbon_steel("block", item("immersiveengineering:storage:8"))
//crafting.removeByOutput(item("immersiveengineering:storage:8"))
mods.nuclearcraft.

function.steel_to_carbon_steel("ingot", item("immersiveengineering:metal:8"))
//crafting.removeByOutput(item("immersiveengineering:metal:8"))

function.steel_to_carbon_steel("nugget", item("immersiveengineering:metal:28"))
//crafting.removeByOutput(item("immersiveengineering:metal:28"))



function.steel_to_carbon_steel("slab", item("immersiveengineering:storage_slab:8"))
function.steel_to_carbon_steel("blockSheetmetal", item("immersiveengineering:sheetmetal:8"))
function.steel_to_carbon_steel("slabSheetmetal", item("immersiveengineering:sheetmetal_slab:8"))
function.steel_to_carbon_steel("fence", item("immersiveengineering:metal_decoration1"))
function.steel_to_carbon_steel("scaffolding", item("immersiveengineering:metal_decoration1:1"))
crafting.removeByOutput(item("immersiveengineering:metal_decoration1:1"))
crafting.shapedBuilder()
    .name("carbon_steel_scaffolding")
    .output(item("immersiveengineering:metal_decoration1:1"))
    .row("III")
    .row(" R ")
    .row("R R")
    .key("R", item("immersiveengineering:material:2"))
    .key("I", item("immersiveengineering:metal:8"))
    .register()

function.steel_to_carbon_steel("scaffolding", item("immersiveengineering:metal_decoration1:2"))
function.steel_to_carbon_steel("scaffolding", item("immersiveengineering:metal_decoration1:3"))

crafting.shapedBuilder()
    .name("steel_post")
    .output(item("immersiveengineering:metal_decoration2"))
    .row(" R ")
    .row(" R ")
    .row(" I ")
    .key("R", item("immersiveengineering:material:2"))
    .key("I", item("immersiveengineering:metal:8"))
    .register()

recipe.metal_recipes("carbon_steel", "CarbonSteel")



