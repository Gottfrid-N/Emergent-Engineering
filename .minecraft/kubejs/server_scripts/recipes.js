// priority: 1

ServerEvents.recipes(event => {
    function internalCreateDecoTagToForgeTag(tag, material, type) {
        event.replaceInput({input: "#createdeco:internal/" + tag}, "#createdeco:internal/" + tag, "#forge:" + type + "/" + material)
    }
    function internalRailwayTagToForgeTag(tag, material, type) {
        event.replaceInput({input: "#railway:internal/" + tag}, "#createdeco:internal/" + tag, "#forge:" + type + "/" + material)
    }
    internalCreateDecoTagToForgeTag("plates/brass_plates", "brass", "plate")
    internalCreateDecoTagToForgeTag("plates/iron_plates", "iron", "plate")
    internalCreateDecoTagToForgeTag("plates/copper_plates", "copper", "plate")
    internalRailwayTagToForgeTag("plates/brass_plates", "brass", "plate")
    event.replaceInput({input: "#createbigcannons:sheet_brass"}, "#createbigcannons:sheet_brass", "#forge:plates/brass")
})