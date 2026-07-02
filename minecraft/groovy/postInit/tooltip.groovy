import net.minecraftforge.event.entity.player.ItemTooltipEvent

@groovy.transform.Field def tooltipMap = [:]

event_manager.listen { ItemTooltipEvent event ->
    for (def entry in tooltipMap) { // iterate tooltip map
        if (event.getItemStack() in entry.key) { // if the item in the event matches the map entry
            event.getToolTip() << entry.value    // add the line of the map entry
        }
    }
}

def addTooltip(ItemStack itemStack, String line) {
    tooltipMap[itemStack] = line // store item and line in map
}

addTooltip(item("emergentengineering:fire_brick"), 
"§cAlloy kiln recipe takes a while, go explore!")
addTooltip(item("emergentengineering:blast_brick"), 
"§cAlloy kiln recipe takes a while, go explore!")

addTooltip(item("extrautils2:ingredients"),
"§cDrops from redstone ore at a low rate")

addTooltip(item("emergentengineering:compressed_marble"),
"§c9 Blocks")
addTooltip(item("emergentengineering:compressed_juniper_log"),
"§c9 Blocks, not unpackable")
addTooltip(item("emergentengineering:double_compressed_marble"),
"§c81 Blocks")
addTooltip(item("emergentengineering:double_compressed_juniper_log"),
"§c81 Blocks, not unpackable")
addTooltip(item("avaritia:compressed_crafting_table"),
"§c9 Crafting Tables, 36 Planks")
addTooltip(item("avaritia:double_compressed_crafting_table"),
"§c81 Crafting Tables, 324 Planks")

addTooltip(item("emergentengineering:tonalite"),"§9Plagioclase §fFelsic §5Intrusive §6Igneous")
addTooltip(item("minecraft:stone:1"),"§6Feldspar §fFelsic §5Intrusive §6Igneous")

addTooltip(item("minecraft:stone:3"),"§9Plagioclase §eIntermediate §5Intrusive §6Igneous")
addTooltip(item("emergentengineering:syenite"),"§6Feldspar §eIntermediate §5Intrusive §6Igneous")


addTooltip(item("emergentengineering:gabbro"),"§3Orthopyroxene §aMafic §5Intrusive §6Igneous")
addTooltip(item("emergentengineering:norite"),"§2Clinopyroxene §aMafic §5Intrusive §6Igneous")

addTooltip(item("emergentengineering:peridotite"),"§3Olivine §2Ultramafic §5Intrusive §6Igneous")
addTooltip(item("emergentengineering:pyroxenite"),"§aPyroxene §2Ultramafic §5Intrusive §6Igneous")

addTooltip(item("emergentengineering:rhyolite"),"§fFelsic §4Extrusive §6Igneous")
addTooltip(item("minecraft:stone:5"),"§eIntermediate §4Extrusive §6Igneous")
addTooltip(item("emergentengineering:basalt"),"§aMafic §4Extrusive §6Igneous")
addTooltip(item("emergentengineering:komatiite"),"§2Ultramafic §4Extrusive §6Igneous")

crafting.removeByOutput(item("immersiveengineering:metal_device1:3"))
addTooltip(item("immersiveengineering:metal_device1:3"),
"§cDISABLED")