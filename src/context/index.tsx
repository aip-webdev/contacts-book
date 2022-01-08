import React from "react";
import {rootReducer} from "./reducers";
import {IStateData, MyAction} from "../../types/global";

// @ts-ignore
let AppStateContext = React.createContext();
// @ts-ignore

const AppDispatchContext = React.createContext();


function AppProvider({children}: { children: React.ReactNode }) {
    const initState: IStateData = {
        users: [{
            id: "someId1",
            email: "some1@gmail.com",
            password: "somePass1"
        }],
        contacts: [
            {
                id: "someId1",
                contactsList: [
                    {
                        id: "someContactID1",
                        name: "Name1",
                        lastName: "Lastname1",
                        email: "contact1@gmail.com",
                        tel: "+71111111111",
                        group: "all"
                    },
                    {
                        id: "someContactID2",
                        name: "Name2",
                        lastName: "Lastname2",
                        email: "contact2@gmail.com",
                        tel: "+72222222222",
                        group: "friends"
                    },
                    {
                        id: "someContactID3",
                        name: "Name3",
                        lastName: "Lastname3",
                        email: "contact3@gmail.com",
                        tel: "+73333333333",
                        group: "all"
                    },
                    {
                        id: "someContactID4",
                        name: "Name4",
                        lastName: "Lastname4",
                        email: "contact4@gmail.com",
                        tel: "+74444444444",
                        group: "friends"
                    },
                    {
                        id: "someContactID5",
                        name: "Name5",
                        lastName: "Lastname5",
                        email: "contact5@gmail.com",
                        tel: "+75555555555",
                        group: "all"
                    },
                    {

                        id: "someContactID6",
                        name: "Name6",
                        lastName: "Lastname6",
                        email: "contact6@gmail.com",
                        tel: "+76666666666",
                        group: "friends"
                    },
                    {
                        id: "someContactID7",
                        name: "Name7",
                        lastName: "Lastname7",
                        email: "contact7@gmail.com",
                        tel: "+77777777777",
                        group: "all"
                    },
                    {
                        id: "someContactID8",
                        name: "Name8",
                        lastName: "Lastname8",
                        email: "contact8@gmail.com",
                        tel: "+788888888888",
                        group: "friends"
                    },
                    {
                        id: "someContactID9",
                        name: "Name9",
                        lastName: "Lastname9",
                        email: "contact9@gmail.com",
                        tel: "+79999999999",
                        group: "all"
                    }
                ],
                contactsGroups: [
                    "all",
                    "friends"
                ]
            }
        ],
        error: false,
        loading: false,
        isAuth: false,
        authUserId: '',
        searchField: ''
    }
    const [state, dispatch] = React.useReducer(rootReducer, initState);

    return (
        <AppStateContext.Provider value={state}>
            <AppDispatchContext.Provider value={dispatch}>
                {children}
            </AppDispatchContext.Provider>
        </AppStateContext.Provider>
    )
}

function useAppState(): IStateData {
    return React.useContext(AppStateContext) as IStateData;
}

function useAppDispatch(): React.Dispatch<MyAction> {
    return React.useContext(AppDispatchContext) as React.Dispatch<MyAction>
}

export {AppProvider, useAppState, useAppDispatch}
