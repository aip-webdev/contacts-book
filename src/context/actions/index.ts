import {IContact, IContacts, IUser, } from "../../../types/global";

export const LOGIN = 'LOGIN';
export interface LoginAction {
    type: typeof LOGIN;
    payload: { isAuth: boolean, authUserId: string };
}

export function login(id: string): LoginAction {
    return {
        type: LOGIN,
        payload: { isAuth: true, authUserId: id }
    }
}

export const LOGOUT = 'LOGOUT';
export interface LogoutAction {
    type: typeof LOGOUT;
    payload: { isAuth: boolean, authUserId: string }
}

export function logout(): LogoutAction {
    return {
        type: LOGOUT,
        payload: {isAuth: false, authUserId: ''}
    }
}

export const CREATE_NEW_USER = 'CREATE_NEW_USER';
export interface CreateNewUserAction {
    type: typeof CREATE_NEW_USER,
    payload: IUser
}

export function createNewUser(user: IUser): CreateNewUserAction {
    return {
        type: CREATE_NEW_USER,
        payload: user
    }
}

export const ADD_NEW_GROUP = 'ADD_NEW_GROUP';
export interface AddNewGroupAction {
    type: typeof ADD_NEW_GROUP,
    payload: { id: string, groupName: string }
}

export function addNewGroup(id: string, groupName: string): AddNewGroupAction {
    return {
        type: ADD_NEW_GROUP,
        payload: { id, groupName }
    }
}

export const REMOVE_GROUP = 'REMOVE_GROUP';

export interface RemoveGroupAction {
    type: typeof REMOVE_GROUP,
    payload: { id: string, groupName: string }
}

export function removeGroup(id: string, groupName: string): RemoveGroupAction {
    return {
        type: REMOVE_GROUP,
        payload: {id, groupName}
    }
}

export const ADD_NEW_CONTACT_DATA = 'ADD_NEW_CONTACT_DATA';
export interface AddNewContactDataAction {
    type: typeof ADD_NEW_CONTACT_DATA,
    payload: IContacts
}

export function addNewContactData(contactData:IContacts): AddNewContactDataAction {
    return {
        type: ADD_NEW_CONTACT_DATA,
        payload: contactData
    }
}

export const ADD_NEW_CONTACT = 'ADD_NEW_CONTACT';
export interface AddNewContactAction {
    type: typeof ADD_NEW_CONTACT,
    payload: { id: string, contact: IContact }
}

export function addNewContact(id: string, contact: IContact): AddNewContactAction {
    return {
        type: ADD_NEW_CONTACT,
        payload: { id: id, contact: contact }
    }
}

export const REMOVE_CONTACT = 'REMOVE_CONTACT';
export interface RemoveContactAction {
    type: typeof REMOVE_CONTACT,
    payload: { id: string, contact: IContact }
}

export function removeContact(id: string, contact: IContact): RemoveContactAction {
    return {
        type: REMOVE_CONTACT,
        payload: { id: id, contact: contact }
    }
}

export const SET_SEARCH_VALUE = 'SET_SEARCH_VALUE';
export interface SetSearchValueAction {
    type: typeof SET_SEARCH_VALUE,
    payload: string
}

export function setSearchValue(searchValue: string): SetSearchValueAction {
    return {
        type: SET_SEARCH_VALUE,
        payload: searchValue
    }
}


