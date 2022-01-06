import React from 'react';
import {useAppStore} from "../../../hooks/useAppStore";
import {AuthForm} from "../../Components/AuthForm";
import {SignUpBtnGroup} from "../../Components/SignUpBtnGroup";
import {addNewContactData, createNewUser, login} from "../../../context/actions";
import {Navigate, useNavigate} from "react-router-dom";
import {IContact, IUser} from "../../../../types/global";
import {addStringId} from "../../../utils/react/generateRandomIndex";

export const SignUpPage = () => {
    const [{users, loading, error, isAuth: isAuth}, dispatch] = useAppStore();
    const navigate = useNavigate();

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
            dispatch(addNewContactData({
                userId:user.id,
                contactsList: [addStringId({
                    email:'some@gmail.com',
                    name: 'Name',
                    lastName: 'Lastname',
                    tel: '88002000600',
                    group: 'all'
                }) as IContact],
                contactsGroups: ['all'] }))
            dispatch(login(user.id))
            navigate("/contacts")
        } catch (e) {
            console.log(e)
        }
    };

    return (
        isAuth ? <Navigate to='/contacts' /> :
        <AuthForm authUser={createUser}>
            <SignUpBtnGroup />
        </AuthForm>
    )
}
