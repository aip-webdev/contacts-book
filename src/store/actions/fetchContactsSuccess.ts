import {IContacts, IStateData} from "../../../types/global";
import {SetState} from "zustand";

const fetchContactsSuccess = (set: SetState<IStateData>) => ({
    fetchContactsSuccess: (contacts: IContacts[]) => {
        return set(prev => ({
            loading: false,
            contacts
        }))
    }
});

export default fetchContactsSuccess;
