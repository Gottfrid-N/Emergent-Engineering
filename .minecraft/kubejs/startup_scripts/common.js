// priority: 10

let bombConsole = true

if (bombConsole == true) {
    console.log(" .----------------. ",
                "| .--------------. |",
                "| |     ______   | |",
                "| |   .' ___  |  | |",
                "| |  / .'   \\_|  | |",
                "| |  | |         | |",
                "| |  \\ `.___.'\\  | |",
                "| |   `._____.'  | |",
                "| |              | |",
                "| '--------------' |",
                " '----------------' ")
    console.log(" .----------------. ",
                "| .--------------. |",
                "| |     ____     | |",
                "| |   .'    `.   | |",
                "| |  /  .--.  \\  | |",
                "| |  | |    | |  | |",
                "| |  \\  `--'  /  | |",
                "| |   `.____.'   | |",
                "| |              | |",
                "| '--------------' |",
                " '----------------' ")
    console.log(" .----------------. ",
                "| .--------------. |",
                "| | ____    ____ | |",
                "| ||_   \\  /   _|| |",
                "| |  |   \\/   |  | |",
                "| |  | |\\  /| |  | |",
                "| | _| |_\\/_| |_ | |",
                "| ||_____||_____|| |",
                "| |              | |",
                "| '--------------' |",
                " '----------------' ")
    console.log(" .----------------. ",
                "| .--------------. |",
                "| | ____    ____ | |",
                "| ||_   \\  /   _|| |",
                "| |  |   \\/   |  | |",
                "| |  | |\\  /| |  | |",
                "| | _| |_\\/_| |_ | |",
                "| ||_____||_____|| |",
                "| |              | |",
                "| '--------------' |",
                " '----------------' ")
    console.log(" .----------------. ",
                "| .--------------. |",
                "| |     ____     | |",
                "| |   .'    `.   | |",
                "| |  /  .--.  \\  | |",
                "| |  | |    | |  | |",
                "| |  \\  `--'  /  | |",
                "| |   `.____.'   | |",
                "| |              | |",
                "| '--------------' |",
                " '----------------' ")
    console.log(" .-----------------.",
                "| .--------------. |",
                "| | ____  _____  | |",
                "| ||_   \|_   _| | |",
                "| |  |   \ | |   | |",
                "| |  | |\ \| |   | |",
                "| | _| |_\   |_  | |",
                "| ||_____|\____| | |",
                "| |              | |",
                "| '--------------' |",
                " '----------------' ")
}

global["materialToId"] = (name, type) => {
    return name + "_" + type
}

global["materialToRegisteredId"] = (name, type) => {
    return "kubejs:" + global["materialToId"](name, type)
}

global["materialToTag"] = (name, tag) => {
    return tag + "/" + name
}

global["metalTagTypes"] = [
    "forge:storage_blocks", "forge:ingots", "forge:nuggets",
    "forge:dusts",
    "forge:plates",
    "forge:gears",
    "forge:wires"
];

let storage_block = ["storage_block", "forge:storage_blocks"]
let ingot = ["ingot", "forge:ingots"]
let nugget = ["nugget", "forge:nuggets"]

let plate = ["plate", "forge:plates"]
let sheet = ["sheet", "ee:sheets"]

global["materials"] = [
    // [name, [[itemMaterial], [blockMaterial], [fluidMaterial]]]
    // [type, tag]
    // vanilla
    ["iron", []],
    ["copper", []],
    ["gold", []],
    // thermal
    ["tin", []],
    ["lead", []],
    ["silver", []],
    ["nickel", []],
    ["steel", []],
    ["rose_gold", []],
    ["bronze", []],
    ["electrum", []],
    ["invar", []],
    ["constantan", []],
    ["iron", []],
    // create
    ["brass", [[plate]]],
    ["zinc", [[plate]]],
    // custom
    ["platinum", [[ingot, nugget, plate, sheet], [storage_block]]]
]