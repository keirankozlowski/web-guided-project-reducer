export const SET_TITLE = "SET_TITLE";
export const SET_EDITING = "SET_EDITING";
export const SET_NEW_TITLE_TEXT = "SET_NEW_TITLE_TEXT";

export default {
    setTitle: (title) => {
        return({ type: SET_TITLE, payload: title });
    },
    setEditing: (editing) => {
        return({ type: SET_EDITING, payload: editing });
    },
    setNewTitleText: (newTitleText) => {
        return({ type: SET_NEW_TITLE_TEXT, payload: newTitleText });
    }
}
