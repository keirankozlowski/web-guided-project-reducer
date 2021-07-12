let addAction = (value) => {
    return { type: "ADD", payload: value };
}

let subtractAction = (value) => {
    return { type: "SUBTRACT", payload: value };
}

let clearAction = () => {
    return { type: "CLEAR" };
}

// make an action for ADD_TO_MEMORY
// data structure for state: { currentValue:float , memory: float }
let addToMemoryAction = () => {
    return { type: "ADD_TO_MEMORY" }
}

export default {
    addAction,
    subtractAction,
    clearAction,
    addToMemoryAction
}
