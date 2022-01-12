import create, {GetState, SetState} from 'zustand';

import login from './actions/login';
import logout from './actions/logout';
import createNewUser from './actions/createNewUser';
import addNewGroup from './actions/addNewGroup';
import removeGroup from './actions/removeGroup';
import addNewContact from './actions/addNewContact';
import removeContact from './actions/removeContact';
import addNewContactData from './actions/addNewContactData';
import setSearchValue from './actions/setSearchValue';
import fetchUsers from './actions/fetchUsers';

import {IStateData} from "../../types/global";
import {StoreApiWithSubscribeWithSelector} from "zustand/middleware";
import fetchUsersSuccess from "./actions/fetchUsersSuccess";
import fetchUsersFailure from "./actions/fetchUsersFailure";
import fetchContacts from "./actions/fetchContacts";
import fetchContactsSuccess from "./actions/fetchContactsSuccess";
import fetchContactsFailure from "./actions/fetchContactsFailure";

const useStore = create<IStateData, SetState<IStateData>,
    GetState<IStateData>,
    StoreApiWithSubscribeWithSelector<IStateData>
    >((set: SetState<IStateData>, get: GetState<IStateData>) => ({
    users: [],
    contacts: [],
    error: false,
    loading: false,
    isAuth: false,
    authUserId: '',
    searchField: '',
    ...login(set),
    ...logout(set),
    ...createNewUser(set),
    ...addNewGroup(set, get),
    ...removeGroup(set, get),
    ...addNewContact(set, get),
    ...removeContact(set, get),
    ...addNewContactData(set),
    ...setSearchValue(set),
    ...fetchUsers(set),
    ...fetchUsersSuccess(set),
    ...fetchUsersFailure(set),
    ...fetchContacts(set),
    ...fetchContactsSuccess(set),
    ...fetchContactsFailure(set)
}));

export default useStore;
