import {useEffect} from "react";
import useStore from "../store";

const dbURI = 'http://localhost:3002'
export const useDBData = () => {
    const state = useStore();
    const [
        fetchUsers,
        fetchUsersSuccess,
        fetchUsersFailure,
        fetchContacts,
        fetchContactsSuccess,
        fetchContactsFailure
    ] = useStore(s =>
        [s.fetchUsers, s.fetchUsersSuccess, s.fetchUsersFailure,
            s.fetchContacts, s.fetchContactsSuccess, s.fetchContactsFailure]);
    useEffect(() => {
        fetchUsers()
        fetchContacts()
        fetch(`${dbURI}/users`)
            .then(res => res.json())
            .then(result => fetchUsersSuccess(result))
            .catch(e => fetchUsersFailure())
        fetch(`${dbURI}/contacts`)
            .then(res => res.json())
            .then(result => fetchContactsSuccess(result))
            .catch(e => fetchContactsFailure())
    }, [])
    return state
}
