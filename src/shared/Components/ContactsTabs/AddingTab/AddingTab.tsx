import React, {ChangeEvent, useRef} from 'react';
import useStyles from './styles';
import {Tab, TextField} from "@mui/material";
import {useMouseEventAction} from "../../../../hooks/useMouseEventAction";
import {a11yProps} from "../ContactsTabs";
import {IContacts} from "../../../../../types/global";
import {AddingButton} from "../../AddingButton";
import {useMediaSize} from "../../../../hooks/useMediaSize";
import {addGroup} from "../../../../store/api";
import useStore from "../../../../store";


interface IAddingTab {
    contact: IContacts
}

export const AddingTab = (props: IAddingTab) => {
    const ref = useRef(null)
    const classes = useStyles()
    const {contact} = props
    const [newGroupVal, setNewGroupVal] = React.useState('')
    const {id, contactsList, contactsGroups} = props.contact
    const {isSm, isMd} = useMediaSize()
    const addNewGroup = useStore(state => state.addNewGroup)
    useMouseEventAction({action: () => setNewGroupVal(''), ref})

    const handleTabInputChange = (e: ChangeEvent) => {
        // @ts-ignore
        let value = e.target?.value
        setNewGroupVal(value)
    }

    const handleClickAddingBtn = () => {
        try {
            addGroup(id, newGroupVal.trim().toLowerCase(), contact)
                .then(r =>addNewGroup(contact.id, newGroupVal.trim().toLowerCase()))
        } catch (e) {
            console.log(e)
        }
        setNewGroupVal('')
    }

    const handleClickOnInput = (e:any) => {
        setNewGroupVal(` ${newGroupVal.trim()}`)
    }

    const handleKeyPressAddingBtn = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'Enter') {
            addNewGroup(id, newGroupVal.trim().toLowerCase())
            setNewGroupVal('')
            // @ts-ignore
            e.target.blur()
        }
    }

    return (
        <Tab
            className={classes.addingTab}
            label={
                <>
                    <TextField
                        ref={ref}
                        aria-pressed={true}
                        className={classes.tabInput}
                        type='text'
                        placeholder='Add group'
                        value={newGroupVal}
                        onClick={handleClickOnInput}
                        onKeyPress={(e) => handleKeyPressAddingBtn(e)}
                        onChange={(e) => handleTabInputChange(e)}


                    />
                    {newGroupVal && <AddingButton onClickAddingBtn={handleClickAddingBtn}/>}
                </>
            }
            {...a11yProps(isSm || isMd, contactsGroups.length)}
        />
    );
};
