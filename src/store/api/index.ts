import axios from 'axios';
import {IContact, IContacts, IUser} from "../../../types/global";
import {merge, uniq, without} from "ramda";

const dbURI = 'http://localhost:3002'
export const register = async (user: IUser) => {
    const userData =  await axios.post(`${dbURI}/users`, user)
    return userData.data as IUser
};

export const createContactData = async (contactData: IContacts) => {
    const contact = await axios.post(`${dbURI}/contacts`, contactData)
    return contact.data as IContacts
}

export const addGroup = async(id: string, groupName: string, contactData: IContacts ) => {
    const newContactData = merge(contactData, {contactsGroups: uniq([...contactData.contactsGroups, groupName])})
    const newData = await axios.put(`${dbURI}/contacts/${id}`, newContactData)
}

export const removeGroupName = async(id: string, groupName: string, contactData: IContacts ) => {
    const newContactData = merge(contactData, {contactsGroups: without([groupName], contactData.contactsGroups)})
    const newData = await axios.put(`${dbURI}/contacts/${id}`, newContactData)
}

export const addContact = async(id: string, contact: IContact, contactData: IContacts ) => {
    const newContactData = merge(contactData, {contactsList: [...without([contact], contactData.contactsList), contact]})
    const newData = await axios.put(`${dbURI}/contacts/${id}`, newContactData)
}

export const deleteContact = async(id: string, contact: IContact, contactData: IContacts ) => {
    const newContactData = merge(contactData, {contactsList: without([contact], contactData.contactsList)})
    const newData = await axios.put(`${dbURI}/contacts/${id}`, newContactData)
}
