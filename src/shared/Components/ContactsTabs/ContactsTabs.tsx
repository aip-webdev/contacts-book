import React, {useEffect, useState} from 'react';
import useStyles from "./styles";
import {TabPanel} from "./TabPanel";
import {IContact, IContacts} from "../../../../types/global";
import {useAppStore} from "../../../hooks/useAppStore";
import {Contact} from "../Contact";
import {Box, Tab, Tabs} from "@mui/material";
import {AddingTab} from "./AddingTab";
import {Loading} from "../Loading";
import {addNewContact, addNewGroup, removeContact, removeGroup} from "../../../context/actions";
import {AddingContact} from "./AddingContact";
import {useMediaSize} from "../../../hooks/useMediaSize";
import {Close} from '@mui/icons-material';
import {addContact, addGroup, deleteContact, removeGroupName} from "../../../context/api";

export const a11yProps = (isSm: boolean, index: number) => (isSm ?
    {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    } :
    {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    });

export const ContactsTabs = () => {
    const [state, dispatch] = useAppStore()
    const [value, setValue] = useState(0)
    const [data, setData] = useState<IContacts>()
    const {isSm, isMd} = useMediaSize();
    const classes = useStyles()

    useEffect(() => {
        if (!state.contacts || !state.contacts || state.contacts.length === 0) return;
        const {contacts} = state
        let contactData = contacts.filter((contact) => contact.id === state.authUserId)[0]
        !!contactData && setData(contactData)

    }, [state.contacts])
    useEffect(() => {
        if (!!state.searchField && !!data) {
            let contactData = {
                ...data, contactsList: data.contactsList.filter((contact: IContact) =>
                    !state.searchField ? true : !!Object.values(contact)
                        .find((value: string) => value.includes(state.searchField))
                )
            }
            !!data && setData(contactData)
        }
    }, [state.searchField])

    if (!data) return (<Loading/>);
    const {id, contactsList, contactsGroups} = data

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const handleClickAddingContactBtn = (contact: IContact) => {
        try {
            addContact(id, contact, data)
                .then(r => dispatch(addNewContact(id, contact)))
        } catch (e) {
            console.log(e)
        }
    }

    const handleClickAddingTabBtn = (groupName: string) => {
        try {
            addGroup(id, groupName, data)
                .then(r => dispatch(addNewGroup(id, groupName)))
        } catch (e) {
            console.log(e)
        }
    }

    const handleClickRemoveContactBtn = (contact: IContact) => {
        try {
            deleteContact(id, contact, data)
                .then(r => dispatch(removeContact(id, contact)))
        } catch (e) {
            console.log(e)
        }
    }

    // @ts-ignore
    const handleClickRemoveTabBtn = (groupName: string, e: MouseEvent<SVGSVGElement>) => {
        e.stopPropagation()
        try {
            removeGroupName(id, groupName, data)
                .then(r => dispatch(removeGroup(id, groupName)))
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <Box className={classes.box}>
            <Tabs
                orientation={isSm || isMd ? 'horizontal' : 'vertical'}
                variant='scrollable'
                value={value}
                onChange={handleChange}
                aria-label='Groups'
                className={classes.tabs}
            >
                {contactsGroups.map((groupName, index) =>
                    <Tab
                        className={classes.tab}
                        key={index}
                        label={groupName === 'all' ? groupName :
                            <>
                                {groupName}
                                <Close
                                    onClick={(e) => handleClickRemoveTabBtn(groupName, e)}
                                    className={classes.closeTabButton}
                                />
                            </>
                        }
                        {...a11yProps(isSm || isMd, index)}
                    />
                )}
                <AddingTab contact={data} onClickAddingBtn={handleClickAddingTabBtn}/>
            </Tabs>

            {contactsGroups.map(((groupName, index) =>
                    <TabPanel key={index} value={value} index={index}>
                        <AddingContact groupNames={contactsGroups} onClickAddingBtn={handleClickAddingContactBtn}/>
                        {groupName === 'all' && contactsList.length > 0 && contactsList
                            .map((contact: IContact) =>
                                <Contact key={contact.id} contact={contact}
                                         onClickRemoveBtn={handleClickRemoveContactBtn}/>
                            )}

                        {groupName !== 'all' && contactsList.length > 0 && contactsList
                            .filter((contact: IContact) => contact.group === groupName)
                            .map((contact: IContact) =>
                                <Contact key={contact.id} contact={contact}
                                         onClickRemoveBtn={handleClickRemoveContactBtn}/>
                            )}
                    </TabPanel>
            ))}
        </Box>
    );
}
