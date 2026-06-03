import classes.recipe

recipe.compact3x3("Marble", ore("blockMarble"), item("emergentengineering:compressed_marble"))
recipe.expandx9("Marble", item("emergentengineering:compressed_marble"), ore("blockMarble").getFirst())
recipe.compact3x3("Marble", item("emergentengineering:compressed_marble"), item("emergentengineering:double_compressed_marble"))
recipe.expandx9("Marble", item("emergentengineering:double_compressed_marble"), item("emergentengineering:compressed_marble"))

recipe.compact3x3("Juniper", item("extrautils2:ironwood_log"), item("emergentengineering:compressed_juniper_log"))
recipe.compact3x3("Juniper", item("emergentengineering:compressed_juniper_log"), item("emergentengineering:double_compressed_juniper_log"))

//2x2
crafting.removeByOutput(item("immersiveengineering:stone_decoration:10"))
crafting.shapedBuilder()
    .name("kiln_bricks")
    .output(item("immersiveengineering:stone_decoration:10"))
    .row("BB")
    .row("BB")
    .key("B", item("emergentengineering:kiln_brick"))
    .register()

crafting.removeByOutput(item("immersiveengineering:stone_decoration:0"))
crafting.shapedBuilder()
    .name("coke_bricks")
    .output(item("immersiveengineering:stone_decoration:0"))
    .row("BB")
    .row("BB")
    .key("B", item("emergentengineering:coke_brick"))
    .register()

crafting.removeByOutput(item("immersiveengineering:stone_decoration:1"))
crafting.shapedBuilder()
    .name("blast_bricks")
    .output(item("immersiveengineering:stone_decoration:1"))
    .row("BB")
    .row("BB")
    .key("B", item("emergentengineering:blast_brick"))
    .register()