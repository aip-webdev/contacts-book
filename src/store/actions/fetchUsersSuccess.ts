import {IStateData, IUser} from "../../../types/global";
import {SetState} from "zustand";

const fetchUsersSuccess = (set: SetState<IStateData>) => ({
    fetchUsersSuccess: (users: IUser[]) => {
        return set(prev => ({
            loading: false,
            users
        }))
    }
});

export default fetchUsersSuccess;
