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
    const [search, setSearch] = useState('')
    const [data, setData] = useState<IContacts>()
    const {isSm, isMd} = useMediaSize();
    const classes = useStyles()


    useEffect(() => {
        if (!state.contacts || !state.contacts || state.contacts.length === 0) return;
        const {contacts} = state
        let contactData = contacts.filter((contact) => contact.id === state.authUserId)[0]
        contactData = {
            ...contactData, contactsList: contactData.contactsList.filter((contact: IContact) =>
                !state.searchField ? true : !!Object.values(contact)
                    .find((value: string) => value.includes(state.searchField))
            )
        }
        contactData.id && setData(contactData)
    }, [state.contacts, state.searchField])

    if (!data) return (<Loading/>);
    const {id, contactsList, contactsGroups} = data

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const handleClickAddingContactBtn = (contact: IContact) => {
        dispatch(addNewContact(id, contact))
    }

    const handleClickAddingTabBtn = (groupName: string) => {
        dispatch(addNewGroup(id, groupName))

    }

    const handleClickRemoveContactBtn = (contact: IContact) => {
        dispatch(removeContact(id, contact))
    }

    // @ts-ignore
    const handleClickRemoveTabBtn = (groupName: string, e: MouseEvent<SVGSVGElement>) => {
        e.stopPropagation()
        dispatch(removeGroup(id, groupName))
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
                        {groupName === 'all' && !search && contactsList.length > 0 && contactsList
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
