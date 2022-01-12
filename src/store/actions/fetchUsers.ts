import {IStateData} from "../../../types/global";
import {SetState} from "zustand";

const fetchUsers = (set: SetState<IStateData>) => ({
    fetchUsers: () => {
        return set(prev => ({
            loading: true
        }))
    }
});

export default fetchUsers;
