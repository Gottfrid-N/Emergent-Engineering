// priority: 1

StartupEvents.registry("block", event => {
    event.create("test_block");

    /**
     * @type {Map<String, Internal.BuilderBase<Internal.Block>>}
     */
    let builders = new Map();

    /**
     * 
     * @param {BuilderProperties} material 
     */
    function registerBlockProperties(material) {
        console.log("Registering block: " + global.builderPropertiesToString(material))
        let builder = event.create(material.id, material.builderType).displayName(material.displayName);
        builders.set(material.id, builder);
    }

    global.blocks.forEach(block => {
        registerBlockProperties(block)
    });
});