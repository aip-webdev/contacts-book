import {IContacts} from "../../../types/global";
import {
    AddNewContactAction,
    AddNewContactDataAction,
    AddNewGroupAction,
    RemoveContactAction, RemoveGroupAction
} from "../actions";
import {uniq, without} from "ramda";
import {Reducer} from "react";

type ContactsActions = AddNewGroupAction | AddNewContactDataAction | AddNewContactAction | RemoveContactAction | RemoveGroupAction

export const contactsDataReducer: Reducer<IContacts [], ContactsActions> = (state, action) => {
    switch (action.type) {
        case 'ADD_NEW_GROUP': {
            const contactData: IContacts = state
                .filter((contactsData: IContacts) => contactsData.id === action.payload.id)[0]
            const newContactData: IContacts = {
                ...contactData,
                contactsGroups: uniq([...contactData.contactsGroups, action.payload.groupName])
            }
            return [...without([contactData], state), newContactData]
        }
        case 'ADD_NEW_CONTACT_DATA':
            return [...state, action.payload]
        case 'ADD_NEW_CONTACT': {
            const contactData: IContacts = state
                .filter((contactsData: IContacts) => contactsData.id === action.payload.id)[0]
            const newContactData: IContacts = {
                ...contactData,
                contactsList: [...contactData.contactsList, action.payload.contact],
            }
            return [...without([contactData], state), newContactData]
        }
        case 'REMOVE_CONTACT': {
            const contactData: IContacts = state
                .filter((contactsData: IContacts) => contactsData.id === action.payload.id)[0]
            const newContactData: IContacts = {
                ...contactData,
                contactsList: contactData.contactsList.filter((contact) => contact.id !== action.payload.contact.id)
            }
            return [...without([contactData], state), newContactData]
        }
        case 'REMOVE_GROUP': {
            const contactData: IContacts = state
                .filter((contactsData: IContacts) => contactsData.id === action.payload.id)[0]
            const newContactData: IContacts = {
                ...contactData,
                contactsGroups: without([action.payload.groupName], contactData.contactsGroups)
            }
            return [...without([contactData], state), newContactData]
        }
        default:
            return state;
    }
}
