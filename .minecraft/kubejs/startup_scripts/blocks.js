StartupEvents.registry("block", event => {
    event.create("test_block");

        /**
     * 
     * @param {Internal.JsonObject} blockProperties 
     */
    function registerBlockProperties(blockProperties) {
        console.log("Registering block: " + blockProperties);
        event.create(blockProperties.id).displayName(blockProperties.displayName);
    }

    global.blocks.forEach(block => {
        registerBlockProperties(block)
    });
});