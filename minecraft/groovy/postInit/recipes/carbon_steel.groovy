import classes.function
import classes.recipe

//crafting.removeByOutput(item("immersiveengineering:storage:8"))
function.steel_to_carbon_steel("block", item("immersiveengineering:storage:8"))

crafting.removeByInput(item("immersiveengineering:storage_slab:8"))
function.steel_to_carbon_steel("slab", item("immersiveengineering:storage_slab:8"))

//crafting.removeByOutput(item("immersiveengineering:metal:8"))
function.steel_to_carbon_steel("ingot", item("immersiveengineering:metal:8"))

function.steel_to_carbon_steel("dust", item("immersiveengineering:metal:17"))

function.steel_to_carbon_steel("plate", item("immersiveengineering:metal:38"))

//crafting.removeByOutput(item("immersiveengineering:metal:28"))
function.steel_to_carbon_steel("nugget", item("immersiveengineering:metal:28"))

function.steel_to_carbon_steel("stick", item("immersiveengineering:material:2"))

ore_dict.add("gearCarbonSteel", item("emergentengineering:carbon_steel_gear"))

mods.ie.metal_press.removeByOutput(item("immersiveengineering:material:23"))
crafting.removeByOutput(item("immersiveengineering:material:23"))
function.steel_to_carbon_steel("wire", item("immersiveengineering:material:23"))

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

crafting.shapedBuilder()
    .name("steel_post")
    .output(item("immersiveengineering:metal_decoration2"))
    .row(" R ")
    .row(" R ")
    .row(" I ")
    .key("R", item("immersiveengineering:material:2"))
    .key("I", item("immersiveengineering:metal:8"))
    .register()

crafting.shapedBuilder()
    .name("steel_fence")
    .output(item("immersiveengineering:metal_decoration1"))
    .row("IRI")
    .row("IRI")
    .key("R", ore("stickCarbonSteel"))
    .key("I", ore("ingotCarbonSteel"))
    .register()

recipe.all_metal_recipes("CarbonSteel", false, true, true, true, true)
recipe.metal_to_ingot("CarbonSteel")
recipe.metal_to_nugget("CarbonSteel")