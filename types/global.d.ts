import {
    LogoutAction,
    FetchUsersSuccessAction,
    FetchUsersAction,
    LoginAction,
    CreateNewUserAction,
    AddNewGroupAction,
    AddNewContactDataAction,
    AddNewContactAction,
    RemoveContactAction,
    FetchContactsAction,
    FetchContactsSuccessAction,
    FetchContactsFailureAction, FetchUsersFailureAction, SetSearchValueAction
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
    userId: string,
    contactsList: IContact[]
    contactsGroups: string [],
}

export type MyAction = FetchUsersAction | FetchUsersSuccessAction | FetchUsersFailureAction | LoginAction | LogoutAction |
    CreateNewUserAction | AddNewGroupAction | AddNewContactDataAction | AddNewContactAction | RemoveContactAction |
    FetchContactsAction | FetchContactsSuccessAction | FetchContactsFailureAction | SetSearchValueAction
