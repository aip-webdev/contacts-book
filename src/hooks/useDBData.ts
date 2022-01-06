import {useEffect} from "react";
import {useAppStore} from "./useAppStore";
import {
    fetchContacts, fetchContactsFailure,
    fetchContactsSuccess,
    fetchUsers,
    fetchUsersFailure,
    fetchUsersSuccess
} from "../context/actions";

export const useDBData = () => {
    const [state, dispatch] =  useAppStore();
    useEffect(() => {
        dispatch(fetchUsers())
        dispatch(fetchContacts())
        fetch("http://localhost:3002/users")
            .then(res => res.json())
            .then(result => dispatch(fetchUsersSuccess(result)))
            .catch(e => dispatch(fetchUsersFailure()));
        fetch("http://localhost:3002/contacts")
            .then(res => res.json())
            .then(result => dispatch(fetchContactsSuccess(result)))
            .catch(e => dispatch(fetchContactsFailure()));
    }, [])
    return state
}
