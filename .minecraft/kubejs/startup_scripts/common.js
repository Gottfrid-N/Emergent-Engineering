// priority: 10

let bombConsole = true

if (bombConsole == true) {
    console.log("          .----------------. ",
                "         | .--------------. |",
                "         | |     ______   | |",
                "         | |   .' ___  |  | |",
                "         | |  / .'   \\_|  | |",
                "         | |  | |         | |",
                "         | |  \\ `.___.'\\  | |",
                "         | |   `._____.'  | |",
                "         | |              | |",
                "         | '--------------' |",
                "          '----------------' ")
    console.log("         .----------------. ",
                "        | .--------------. |",
                "        | |     ____     | |",
                "        | |   .'    `.   | |",
                "        | |  /  .--.  \\  | |",
                "        | |  | |    | |  | |",
                "        | |  \\  `--'  /  | |",
                "        | |   `.____.'   | |",
                "        | |              | |",
                "        | '--------------' |",
                "         '----------------' ")
    console.log("         .----------------. ",
                "        | .--------------. |",
                "        | | ____    ____ | |",
                "        | ||_   \\  /   _|| |",
                "        | |  |   \\/   |  | |",
                "        | |  | |\\  /| |  | |",
                "        | | _| |_\\/_| |_ | |",
                "        | ||_____||_____|| |",
                "        | |              | |",
                "        | '--------------' |",
                "         '----------------' ")
    console.log("         .----------------. ",
                "        | .--------------. |",
                "        | | ____    ____ | |",
                "        | ||_   \\  /   _|| |",
                "        | |  |   \\/   |  | |",
                "        | |  | |\\  /| |  | |",
                "        | | _| |_\\/_| |_ | |",
                "        | ||_____||_____|| |",
                "        | |              | |",
                "        | '--------------' |",
                "         '----------------' ")
    console.log("         .----------------. ",
                "        | .--------------. |",
                "        | |     ____     | |",
                "        | |   .'    `.   | |",
                "        | |  /  .--.  \\  | |",
                "        | |  | |    | |  | |",
                "        | |  \\  `--'  /  | |",
                "        | |   `.____.'   | |",
                "        | |              | |",
                "        | '--------------' |",
                "         '----------------' ")
    console.log("         .-----------------.",
                "        | .--------------. |",
                "        | | ____  _____  | |",
                "        | ||_   \|_   _| | |",
                "        | |  |   \ | |   | |",
                "        | |  | |\ \| |   | |",
                "        | | _| |_\   |_  | |",
                "        | ||_____|\____| | |",
                "        | |              | |",
                "        | '--------------' |",
                "         '----------------' ")
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

function craftingShaped(key, pattern, output) {
    return {
        type: "minecraft:crafting_shaped",
        key: key,
        pattern: pattern,
        result: output
    }
}

function craftingShapeless(ingredients, result) {
    return {
        type: "minecraft:crafting_shapeless",
        ingredients: ingredients,
        result: result
      }
}

let storage_block = ["storage_block", "forge:storage_blocks"]
function ingot(name) {
    let nugget = global["materialToRegisteredId"](name, "nugget")
    let ingot = global["materialToRegisteredId"](name, "ingot")
    return ["ingot", "forge:ingots", craftingShaped({N: {item: nugget}}, ["NNN", "NNN", "NNN"], ingot)]
}
function nugget(name) {
    let nugget = global["materialToRegisteredId"](name, "nugget")
    let ingot = global["materialToRegisteredId"](name, "ingot")
    return ["nugget", "forge:nuggets", craftingShapeless([{item: ingot}], nugget)]
}

let plate = ["plate", "forge:plates"]
let sheet = ["sheet", "kubejs:sheets"]

let ousia = ["ousia", "Ουσία", "Ousía"]
let ousiaFeminity = ["thelykos", "Θηλυκός", "Thēlykós"]
	let ousiaVenus = ["aphrodite", "Αφροδίτη", "Aphrodítē"]
	let ousiaEarth = ["ge", "Γη", "Gē"]
let ousiaMasculinity = ["arsenikos", "Αρσενικό", "Arsenikós"]
	let ousiaMercury = ["ermes", "Ερμής", "Ermḗs"]
	let ousiaMars = ["ares", "Άρης", "Árēs"]
	let ousiaJupiter = ["dias", "Δίας", "Días"]
	let ousiaSaturn = ["kronos", "Κρόνος", "Krónos"]
	let ousiaUranus = ["ouranos", "Ουρανός", "Ouranós"]
	let ousiaNeptune = ["poseidonas", "Ποσειδώνας", "Poseidṓnas"]

let ousiaItemTypes = [[ousia[0], "kubejs:ousia"]]
let ousiaTypes = [ousiaItemTypes]

global["materials"] = [
    // [name, [[itemMaterial], [blockMaterial], [fluidMaterial]]]
    // [type, tag]
    // vanilla
    ["iron", [[sheet]]],
    //["copper", []],
    //["gold", []],
    // thermal
    //["tin", []],
    //["lead", []],
    //["silver", []],
    //["nickel", []],
    //["steel", []],
    //["rose_gold", []],
    //["bronze", []],
    //["electrum", []],
    //["invar", []],
    //["constantan", []],
    // create
    ["brass", [[plate]]],
    ["zinc", [[plate]]],
    ["obsidian", [[plate, sheet]]],
    // custom
    ["platinum", [[ingot(name), nugget(name), plate, sheet], [storage_block]]],
    // ousia
    [ousiaFeminity[0], ousiaTypes],
        [ousiaVenus[0], ousiaTypes],
        [ousiaEarth[0], ousiaTypes],
    [ousiaMasculinity[0], ousiaTypes],
        [ousiaMercury[0], ousiaTypes],
        [ousiaMars[0], ousiaTypes],
        [ousiaJupiter[0], ousiaTypes],
        [ousiaSaturn[0], ousiaTypes],
        [ousiaUranus[0], ousiaTypes],
        [ousiaNeptune[0], ousiaTypes]
]