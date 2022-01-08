import {useEffect} from "react";
import {useAppStore} from "./useAppStore";
import {
    fetchContacts, fetchContactsFailure,
    fetchContactsSuccess,
    fetchUsers,
    fetchUsersFailure,
    fetchUsersSuccess
} from "../context/actions";
const IS_DEV = process.env.NODE_ENV !== 'production';
const dbURI =IS_DEV ? 'http://localhost:3002' : ''
export const useDBData = () => {
    const [state, dispatch] =  useAppStore();
    useEffect(() => {
        dispatch(fetchUsers())
        dispatch(fetchContacts())
        fetch(`${dbURI}/users`)
            .then(res => res.json())
            .then(result => dispatch(fetchUsersSuccess(result)))
            .catch(e => dispatch(fetchUsersFailure()));
        fetch(`${dbURI}/contacts`)
            .then(res => res.json())
            .then(result => dispatch(fetchContactsSuccess(result)))
            .catch(e => dispatch(fetchContactsFailure()));
    }, [])
    return state
}
