import React, {useEffect, useState} from 'react';
import useStyles from "./styles";
import {TabPanel} from "./TabPanel";
import {IContact, IContacts} from "../../../../types/global";
import {useAppStore} from "../../../hooks/useAppStore";
import {Contact} from "../Contact";
import {Tabs, Tab, Box} from "@mui/material";
import {AddingTab} from "./AddingTab";
import {Loading} from "../Loading";
import {addNewContact, addNewGroup, removeContact} from "../../../context/actions";
import {AddingContact} from "./AddingContact";
import {useMediaSize} from "../../../hooks/useMediaSize";

export const a11yProps = (index: number) => ({
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
});

export const ContactsTabs = () => {
    const [state, dispatch] = useAppStore()
    const [value, setValue] = React.useState(0)
    const [search, setSearch] = useState('')
    const [data, setData] = useState<IContacts>()
    const {isSm} = useMediaSize();
    const classes = useStyles()
    useEffect(() => {
        if (!state.contacts || !state.contacts || state.contacts.length === 0) return;
        const {contacts} = state
        let contactData = contacts.filter((contact) => contact.userId === state.authUserId)[0]
        contactData = {...contactData, contactsList: contactData.contactsList.filter((contact: IContact) =>
                !state.searchField ? true : !!Object.values(contact)
                    .find((value: string) => value.includes(state.searchField))
            ) }
        contactData.userId && setData(contactData)
    }, [state.contacts, state.searchField])

    if (!data) return(<Loading />);
    const { userId, contactsList, contactsGroups } = data

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const handleClickAddingContactBtn = (contact: IContact) => {
        dispatch(addNewContact(userId, contact))
    }

    const handleClickAddingTabBtn = (groupName: string) => {
        dispatch(addNewGroup(userId, groupName))
    }

    const handleClickRemoveBtn = (contact: IContact) => {
        dispatch(removeContact(userId, contact))
    }

    return (
        <Box className={classes.box}>
            <Tabs
                orientation={isSm ? 'horizontal' : 'vertical'}
                variant='scrollable'
                value={value}
                onChange={handleChange}
                aria-label='Groups'
                className={classes.tabs}
            >
                {contactsGroups.map((groupName, index) =>
                    <Tab key={index} label={groupName} {...a11yProps(index)} />
                )}
                <AddingTab contact={data} onClickAddingBtn={handleClickAddingTabBtn} />
            </Tabs>

            {contactsGroups.map(((groupName, index) =>
                    <TabPanel key={index} value={value} index={index}>
                        <AddingContact groupNames={contactsGroups} onClickAddingBtn={handleClickAddingContactBtn} />
                        {groupName === 'all' && !search && contactsList.length > 0 && contactsList
                            .map((contact: IContact) =>
                            <Contact key={contact.id} contact={contact} onClickRemoveBtn={handleClickRemoveBtn}/>
                        )}

                        {groupName !=='all' && contactsList.length > 0 && contactsList
                            .filter((contact: IContact) => contact.group === groupName)
                            .map((contact: IContact) =>
                            <Contact key={contact.id} contact={contact} onClickRemoveBtn={handleClickRemoveBtn}/>
                        )}
                    </TabPanel>
            ))}
        </Box>
    );
}
