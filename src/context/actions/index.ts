import {IContact, IContacts, IUser, } from "../../../types/global";

export const FETCH_CONTACTS = 'FETCH_CONTACTS';
export interface FetchContactsAction {
    type: typeof FETCH_CONTACTS;
    payload: IContacts [];
}

export function fetchContacts(): FetchContactsAction {
    return {
        type: FETCH_CONTACTS,
        payload: []

    }
}

export const FETCH_CONTACTS_SUCCESS = 'FETCH_CONTACTS_SUCCESS';
export interface FetchContactsSuccessAction {
    type: typeof FETCH_CONTACTS_SUCCESS;
    payload: IContacts [];
}

export function fetchContactsSuccess(contacts: IContacts[]): FetchContactsSuccessAction {
    return {
        type: FETCH_CONTACTS_SUCCESS,
        payload: contacts

    }
}

export const FETCH_CONTACTS_FAILURE = 'FETCH_CONTACTS_FAILURE';
export interface FetchContactsFailureAction {
    type: typeof FETCH_CONTACTS_FAILURE;
    payload: { error: boolean };
}

export function fetchContactsFailure(): FetchContactsFailureAction {
    return {
        type: FETCH_CONTACTS_FAILURE,
        payload: {
            error: true
        }
    }
}

export const FETCH_USERS = 'FETCH_USERS';
export interface FetchUsersAction {
    type: typeof FETCH_USERS;
    payload: IUser [];
}

export function fetchUsers(): FetchUsersAction {
    return {
        type: FETCH_USERS,
        payload: []

    }
}

export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export interface FetchUsersSuccessAction {
    type: typeof FETCH_USERS_SUCCESS;
    payload: IUser [];
}

export function fetchUsersSuccess(users : IUser[]): FetchUsersSuccessAction {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users,
    }
}

export const FETCH_USERS_FAILURE = 'FETCH_USER_FAILURE';
export interface FetchUsersFailureAction {
    type: typeof FETCH_USERS_FAILURE;
    payload: { error: boolean };
}

export function fetchUsersFailure(): FetchUsersFailureAction {
    return {
        type: FETCH_USERS_FAILURE,
        payload: {
            error: true
        }
    }
}

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
    payload: { userId: string, groupName: string }
}

export function addNewGroup(userId: string, groupName: string): AddNewGroupAction {
    return {
        type: ADD_NEW_GROUP,
        payload: { userId, groupName }
    }
}

export const REMOVE_GROUP = 'REMOVE_GROUP';

export interface RemoveGroupAction {
    type: typeof REMOVE_GROUP,
    payload: { userId: string, groupName: string }
}

export function removeGroup(userId: string, groupName: string): RemoveGroupAction {
    return {
        type: REMOVE_GROUP,
        payload: {userId, groupName}
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
    payload: { userId: string, contact: IContact }
}

export function addNewContact(userId: string, contact: IContact): AddNewContactAction {
    return {
        type: ADD_NEW_CONTACT,
        payload: { userId: userId, contact: contact }
    }
}

export const REMOVE_CONTACT = 'REMOVE_CONTACT';
export interface RemoveContactAction {
    type: typeof REMOVE_CONTACT,
    payload: { userId: string, contact: IContact }
}

export function removeContact(userId: string, contact: IContact): RemoveContactAction {
    return {
        type: REMOVE_CONTACT,
        payload: { userId: userId, contact: contact }
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


