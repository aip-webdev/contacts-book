import {IStateData} from "../../../types/global";
import {SetState} from "zustand";

const fetchContacts = (set: SetState<IStateData>) => ({
    fetchContacts: () => {
        return set(prev => ({
            loading: true
        }))
    }
});

export default fetchContacts;
