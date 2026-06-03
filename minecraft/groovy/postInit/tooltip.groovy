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

mods.appliedenergistics2.grinder.removeAll()
crafting.removeByOutput(item("appliedenergistics2:grindstone"))
addTooltip(item("appliedenergistics2:grindstone"),
"§cDISABLED")

crafting.removeByOutput(item("immersiveengineering:metal_device1:3"))
addTooltip(item("immersiveengineering:metal_device1:3"),
"§cDISABLED")