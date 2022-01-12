import {IStateData} from "../../../types/global";
import {SetState} from "zustand";

const fetchContactsFailure = (set: SetState<IStateData>) => ({
    fetchContactsFailure: () => {
        return set(prev => ({
            loading: false,
            error: true
        }))
    }
});

export default fetchContactsFailure;
