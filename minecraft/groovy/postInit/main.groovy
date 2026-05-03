// Kiln Brick
crafting.removeByOutput(item("immersiveengineering:stone_decoration:10"))
crafting.shapedBuilder()
    .name("kiln_bricks")
    .output(item("immersiveengineering:stone_decoration:10"))
    .row("BB")
    .row("BB")
    .key("B", item("emergentengineering:kiln_brick"))
    .register()

furnace.recipeBuilder()
    .name("kiln_brick")
    .input(item("emergentengineering:sandy_clay_blend"))
    .output(item("emergentengineering:kiln_brick"))
    .register()

crafting.shapelessBuilder()
    .name("sandy_clay_blend")
    .output(item("emergentengineering:sandy_clay_blend"))
    .input([item("minecraft:clay_ball"),item("minecraft:sand")])
    .register()

// Coke Brick
crafting.removeByOutput(item("immersiveengineering:stone_decoration:0"))
crafting.shapedBuilder()
    .name("coke_bricks")
    .output(item("immersiveengineering:stone_decoration:0"))
    .row("BB")
    .row("BB")
    .key("B", item("emergentengineering:coke_brick"))
    .register()

mods.ie.alloy_kiln.recipeBuilder()
    .name("coke_brick_coal")
    .input([item("minecraft:brick").multiply(4),item("thermalfoundation:material:768")])
    .output(item("emergentengineering:coke_brick").multiply(4))
    .time(200)
    .register()

mods.ie.alloy_kiln.recipeBuilder()
    .name("coke_brick_charcoal")
    .input([item("minecraft:brick").multiply(2),item("thermalfoundation:material:769")])
    .output(item("emergentengineering:coke_brick").multiply(2))
    .time(200)
    .register()

// Blast Brick
crafting.removeByOutput(item("immersiveengineering:stone_decoration:1"))
crafting.shapedBuilder()
    .name("blast_bricks")
    .output(item("immersiveengineering:stone_decoration:1"))
    .row("BB")
    .row("BB")
    .key("B", item("emergentengineering:blast_brick"))
    .register()

// Seared Brick
furnace.removeByOutput(item("tconstruct:materials:0"))
mods.ie.alloy_kiln.recipeBuilder()
    .name("seared_brick")
    .input([item("emergentengineering:sandy_clay_blend"),item("minecraft:gravel")])
    .output(item("tconstruct:materials:0").multiply(2))
    .time(100)
    .register()

// Brick
furnace.removeByOutput(item("minecraft:brick"))
furnace.recipeBuilder()
    .name("brick_bad")
    .input(item("minecraft:clay"))
    .output(item("minecraft:brick"))
    .register()

mods.ie.alloy_kiln.recipeBuilder()
    .name("brick_good")
    .input([item("minecraft:clay"),item("minecraft:sand")])
    .output(item("minecraft:brick").multiply(4))
    .time(100)
    .register()

// Clay

in_world_crafting.fluid_to_item.recipeBuilder()
    .name("marine_clay_iw")
    .input(item("minecraft:sand"))
    .fluidInput(fluid("water"))
    .output(item("emergentengineering:marine_clay"))
    .register()

mods.tconstruct.drying.recipeBuilder()
    .name("drying_marine_clay")
    .input(item("emergentengineering:marine_clay"))
    .output(item("minecraft:clay_ball"))
    .time(600)
    .register()

// Engineers Hammer Crushing
crafting.shapelessBuilder()
    .name("crush_coal_eh")
    .input([item("minecraft:coal"),item("immersiveengineering:tool")])
    .output(item("thermalfoundation:material:768"))
    .register()

crafting.shapelessBuilder()
    .name("crush_charcoal_eh")
    .input([item("minecraft:coal:1"),item("immersiveengineering:tool")])
    .output(item("thermalfoundation:material:769"))
    .register()

// Drying Rack Gating
crafting.removeByOutput(item("tconstruct:rack:1"))
crafting.shapedBuilder()
    .name("gated_drying_rack")
    .output(item("tconstruct:rack:1"))
    .row("SSS")
    .row("N N")
    .key("S", item("minecraft:wooden_slab"))
    .key("N", item("thermalfoundation:material:227"))
    .register()