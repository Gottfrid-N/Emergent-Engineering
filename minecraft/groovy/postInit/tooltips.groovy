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
addTooltip(item("appliedenergistics2:grindstone"),
"§cDISABLED")