import {merge} from "ramda";
import {IStateData, MyAction} from "../../../types/global";
import {
    FETCH_USERS,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE,
    LOGIN,
    CREATE_NEW_USER,
    LOGOUT,
    ADD_NEW_GROUP,
    ADD_NEW_CONTACT,
    ADD_NEW_CONTACT_DATA,
    REMOVE_CONTACT,
    FETCH_CONTACTS,
    FETCH_CONTACTS_SUCCESS,
    FETCH_CONTACTS_FAILURE,
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
        case FETCH_CONTACTS_SUCCESS:
            return merge(state, {contacts: contactsDataReducer(state.contacts, action), loading: false})
        case FETCH_USERS:
        case FETCH_CONTACTS:
            return merge(state, {loading: true})
        case FETCH_USERS_SUCCESS:
            return merge(state, { users: action.payload, loading: false})
        case CREATE_NEW_USER:
            return merge(state, { users: [...state.users, action.payload]})
        case FETCH_USERS_FAILURE:
        case FETCH_CONTACTS_FAILURE: {
            return merge(state, {error: true, loading: false})
        }
        case LOGIN:
        case LOGOUT:
            return merge(state, {isAuth: action.payload.isAuth, authUserId: action.payload.authUserId})
        case SET_SEARCH_VALUE:
            return merge(state, {searchField: action.payload})
    }
}

export {rootReducer}
