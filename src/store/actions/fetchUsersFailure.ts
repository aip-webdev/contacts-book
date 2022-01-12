import {IStateData} from "../../../types/global";
import {SetState} from "zustand";

const fetchUsersFailure = (set: SetState<IStateData>) => ({
    fetchUsersFailure: () => {
        return set(prev => ({
            loading: false,
            error: true
        }))
    }
});

export default fetchUsersFailure;
