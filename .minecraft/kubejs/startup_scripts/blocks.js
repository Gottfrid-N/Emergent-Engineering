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
    function registerBuilder(material) {
        console.log("Registering block: " + JSON.stringify(material))
        try { 
            let builder = event.create(material.id, material.builderType).displayName(material.displayName);
            builders.set(material.id, builder);
        } catch (error) { 
            console.error(error);
        }
    }

    global.blocks.forEach(block => {
        registerBuilder(block);
    });
});