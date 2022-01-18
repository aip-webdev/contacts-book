import React from 'react';
import {AuthForm} from "../../Components/AuthForm";
import {SignUpBtnGroup} from "../../Components/SignUpBtnGroup";
import {Navigate, useNavigate} from "react-router-dom";
import {IContact, IContacts, IUser} from "../../../../types/global";
import {addStringId} from "../../../utils/react/generateRandomIndex";
import useStore from "../../../store";
import {createContactData, register} from "../../../store/api";

export const SignUpPage = () => {
    const [users, loading, error, isAuth, login, createNewUser, addNewContactData] =
        useStore(s => [s.users, s.loading, s.error, s.isAuth, s.login, s.createNewUser, s.addNewContactData]);
    const navigate = useNavigate();

    const createUser = (user: IUser) => {
        if (loading || error) return;
        try {
            let contact = addStringId({
                email: 'some@gmail.com',
                name: 'Name',
                lastName: 'Lastname',
                tel: '88002000600',
                group: 'all'
            })
            let usersArr = Array();
            if (users) {
                usersArr = Array.of(...users)
            }
            let duplicate = usersArr.filter((someUser: IUser) => someUser.email === user.email);
            if (duplicate.length > 0) return {
                type: 'mailError',
                message: 'An account with this address has already been registered'
            };
            register(user)
                .then((userData: IUser) => {
                    createNewUser(user)
                    createContactData({
                        id: userData.id,
                        contactsList: [contact as IContact],
                        contactsGroups: ['all']
                    })
                        .then((contactData: IContacts) => {
                            addNewContactData({
                                id: user.id,
                                contactsList: [contact as IContact],
                                contactsGroups: ['all']
                            })
                            login(user.id)
                            navigate("/contacts")
                        })
                })
        } catch (e) {
            console.log(e)
        }
    };

    return (
        isAuth ? <Navigate to='/contacts'/> :
            <AuthForm authUser={createUser}>
                <SignUpBtnGroup/>
            </AuthForm>
    )
}
