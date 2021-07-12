import React, { useState, useReducer } from 'react';
import actions from '../actions/actions';
import reducer from '../reducers/reducer';
import { initialState } from '../reducers/reducer';

const Title = () => {
  // switch these out for useReducer
  // const [title, setTitle] = useState('Hello earthlings!');
  // const [editing, setEditing] = useState(false);
  // const [newTitleText, setNewTitleText] = useState('');
  const [state, dispatch] = useReducer(reducer, initialState);

  // switch this over to a dispatch function
  // const handleChanges = e => {
  //   setNewTitleText(e.target.value);
  // };
  const handleChanges = e => {
    console.log(e);
    dispatch(actions.setNewTitleText(e.target.value));
  }

  return (
    <div>
      {!state.editing ? (
        <h1>
          {state.title}{' '}
          <i onClick={() => dispatch(actions.setEditing(!state.editing))} className="far fa-edit" />
        </h1>
      ) : (
        <div>
          <input
            className="title-input"
            type="text"
            name="newTitleText"
            value={state.newTitleText}
            onChange={handleChanges}
          />
          <button
            onClick={() => {
              // change these to dispatches
              // setTitle(state.newTitleText);
              // setEditing(false);
              dispatch(action.setTitle(state.newTitleText))
              dispatch(action.setEditing(false))
            }}
          >
            Update title
          </button>
        </div>
      )}
    </div>
  );
};

export default Title;