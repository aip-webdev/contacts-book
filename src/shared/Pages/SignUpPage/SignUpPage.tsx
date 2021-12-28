import React, {useEffect} from 'react';
import {useAppStore} from "../../../hooks/useAppStore";
import {AuthForm} from "../../Components/AuthForm";
import {SignUpBtnGroup} from "../../Components/SignUpBtnGroup";
import {createNewUser} from "../../../context/actions";
import {Navigate, useNavigate} from "react-router-dom";
import {IUser} from "../../../../types/global";

export const SignUpPage = () => {
    const [{usersData: {users, loading, error}, isAuth: isAuth}, dispatch] = useAppStore();
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuth) {
            navigate("/profile")
        }
    }, [])

    const createUser = (user: IUser) => {
        if (loading || error) return;
        try {
            let usersArr = Array();
            if (users) {
                usersArr = Array.of(...users)
            }
            let duplicate = usersArr.filter((someUser: IUser) => someUser.email === user.email);
            if (duplicate.length > 0) return {type: 'mailError', message:'An account with this address has already been registered'};

            dispatch(createNewUser(user))
            navigate("/profile")
        } catch (e) {
            console.log(e)
        }
    };

    return (
        isAuth ? <Navigate to='/profile' /> :
        <AuthForm authUser={createUser}>
            <SignUpBtnGroup />
        </AuthForm>
    )
}
