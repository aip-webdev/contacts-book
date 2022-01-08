import {merge} from "ramda";
import {IStateData, MyAction} from "../../../types/global";
import {
    LOGIN,
    CREATE_NEW_USER,
    LOGOUT,
    ADD_NEW_GROUP,
    ADD_NEW_CONTACT,
    ADD_NEW_CONTACT_DATA,
    REMOVE_CONTACT,
    SET_SEARCH_VALUE, REMOVE_GROUP
} from "../actions";

import {Reducer} from "react";
import {contactsDataReducer} from "./contactsDataReducer";
//@ts-ignore
const rootReducer: Reducer<IStateData, MyAction> = (state, action) => {
    switch (action.type) {
        case ADD_NEW_GROUP:
        case ADD_NEW_CONTACT:
        case ADD_NEW_CONTACT_DATA:
        case REMOVE_CONTACT:
        case REMOVE_GROUP:
            return merge(state, {contacts: contactsDataReducer(state.contacts, action)})
        case CREATE_NEW_USER:
            return merge(state, { users: [...state.users, action.payload]})
        case LOGIN:
        case LOGOUT:
            return merge(state, {isAuth: action.payload.isAuth, authUserId: action.payload.authUserId})
        case SET_SEARCH_VALUE:
            return merge(state, {searchField: action.payload})
    }
}
export {rootReducer}
