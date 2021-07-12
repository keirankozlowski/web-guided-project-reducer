const reducer = (state, action) => {
  // { type: "ADD", payload: 5 }
  // state.currentValue = 0 => run this action => state.currentValue = 5
    switch (action.type) {
      case "ADD":
        return { ...state, currentValue: state.currentValue + action.payload };
      case "SUBTRACT":
        return { ...state, currentValue: state.currentValue - action.payload };
      case "CLEAR":
        return { ...state, currentValue: 0 };
      case "ADD_TO_MEMORY":
        return { ...state, memory: state.currentValue };
      default:
        return state;
    }
  };
  
  export default reducer;
  