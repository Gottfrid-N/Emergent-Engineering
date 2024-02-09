// priority: 1

ServerEvents.recipes(event => {
    function replaceTag(tag, replacement) {
        event.replaceInput({input: tag}, tag, replacement)
    }
    replaceTag("#createdeco:internal/plates/brass_plates", "#forge:plates/brass")
    replaceTag("#createdeco:internal/plates/iron_plates", "#forge:plates/iron")
    replaceTag("#createdeco:internal/plates/copper_plates", "#forge:plates/copper")
})