import classes.recipe

in_world_crafting.fluid_to_item.recipeBuilder()
    .name("marine_clay_iw")
    .input(item("minecraft:sand"))
    .fluidInput(fluid("water"))
    .output(item("emergentengineering:marine_clay"))
    .register()

in_world_crafting.burning.recipeBuilder()
    .input(item('minecraft:netherrack'))
    .output(item('minecraft:nether_star'))
    .register()

in_world_crafting.burning.recipeBuilder()
    .name("blazing_blend_iw")
    .input(item("emergentengineering:nethengenic_blend"))
    .output(item("emergentengineering:blazing_powder"))
    .register()

mods.tconstruct.drying.recipeBuilder()
    .name("drying_marine_clay")
    .input(item("emergentengineering:marine_clay"))
    .output(item("minecraft:clay_ball"))
    .time(600)
    .register()

in_world_crafting.fluid_to_item.recipeBuilder()
    .name("floral_catalyst_iw")
    .input([item("minecraft:yellow_flower"),
    item("minecraft:red_flower"),
    item("minecraft:red_flower:1"),
    item("minecraft:red_flower:2"),
    item("minecraft:red_flower:3"),
    item("minecraft:red_flower:4"),
    item("minecraft:red_flower:5"),
    item("minecraft:red_flower:6"),
    item("minecraft:red_flower:7"),
    item("minecraft:red_flower:8"),
    item("minecraft:double_plant"),
    item("minecraft:double_plant:1"),
    item("minecraft:double_plant:4"),
    item("minecraft:double_plant:5")])
    .fluidInput(fluid("astralsorcery.liquidstarlight"))
    .output(item("emergentengineering:floral_catalyst"))
    .register()

in_world_crafting.fluid_to_item.recipeBuilder()
    .name("starlight_steel_iw")
    .input(item("minecraft:iron_block"))
    .fluidInput(fluid("astralsorcery.liquidstarlight"))
    .output(item("emergentengineering:starlight_steel_ingot"))
    .register()