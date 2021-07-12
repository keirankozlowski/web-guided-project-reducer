import React, { useReducer } from "react";
import reducer from './reducers/calcReducer';
import actions from './actions/calcActions';

import "./styles.css";

export default function App() {
  const initialState = {
    currentValue: 0,
    memory: 0
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleAdd = () => {
    dispatch(actions.addAction(1));
  }

  return (
    <div className="App">
      <textarea rows="1" value="0" id="total" type="text" name="ans" value={state.currentValue}></textarea>
      <br />
      <button type="button" className="btn" onClick={handleAdd}>
        + 1
      </button>
    </div>
  );
}
