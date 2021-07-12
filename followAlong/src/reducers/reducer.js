import { SET_TITLE, SET_EDITING, SET_NEW_TITLE_TEXT } from "../actions/actions";

export const initialState = {
    // translate useState hooks into a state obj
    // const [title, setTitle] = useState('Hello earthlings!');
    // const [editing, setEditing] = useState(false);
    // const [newTitleText, setNewTitleText] = useState('');
    title: "Hello earthlings!",
    editing: false,
    newTitleText: ""
}

const reducer = (state, action) => {
    switch(action.type) {
        case(SET_TITLE):
            return({ ...state, title: action.payload });
        case(SET_EDITING):
            return({ ...state, editing: action.payload });
        case(SET_NEW_TITLE_TEXT):
            return({ ...state, newTitleText: action.payload });
        default:
            return(state);
    }
}

export default reducer;
