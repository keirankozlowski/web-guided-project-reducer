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
    
}

export default reducer;
