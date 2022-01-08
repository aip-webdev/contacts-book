import {
    LogoutAction,
    LoginAction,
    CreateNewUserAction,
    AddNewGroupAction,
    AddNewContactDataAction,
    AddNewContactAction,
    RemoveContactAction,
    FetchContactsAction,
    FetchContactsSuccessAction,
    FetchContactsFailureAction,
    SetSearchValueAction,
    RemoveGroupAction,
    FetchUsersAction,
    FetchUsersSuccessAction,
    FetchUsersFailureAction
} from "../src/context/actions";

export interface IStateData {
    users: IUser [],
    contacts: IContacts [],
    isAuth: boolean,
    authUserId: string,
    searchField: string,
    loading: boolean,
    error: boolean
}

export interface IUser {
    id: string,
    email: string,
    password: string,
}

export interface IContact {
    id: string,
    name: string,
    lastName?: string,
    email?: string,
    tel?: string
    group: string
}

export interface IContacts {
    id: string,
    contactsList: IContact[]
    contactsGroups: string [],
}

export type MyAction = FetchContactsAction | FetchContactsSuccessAction | FetchContactsFailureAction | LoginAction | LogoutAction |
    CreateNewUserAction | AddNewGroupAction | AddNewContactDataAction | AddNewContactAction | RemoveContactAction |
    SetSearchValueAction | RemoveGroupAction | FetchUsersAction | FetchUsersSuccessAction | FetchUsersFailureAction
