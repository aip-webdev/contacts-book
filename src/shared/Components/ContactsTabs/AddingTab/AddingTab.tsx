import React, {ChangeEvent, useRef} from 'react';
import useStyles from './styles';
import {Tab, TextField} from "@mui/material";
import {useMouseEventAction} from "../../../../hooks/useMouseEventAction";
import {a11yProps} from "../ContactsTabs";
import {IContacts} from "../../../../../types/global";
import {AddingButton} from "../../AddingButton";
import {useMediaSize} from "../../../../hooks/useMediaSize";

interface IAddingTab {
    contact: IContacts
    onClickAddingBtn: (prop: any) => void
}

export const AddingTab = (props: IAddingTab) => {
    const ref = useRef(null)
    const classes = useStyles()
    const {contact, onClickAddingBtn} = props
    const [newGroupVal, setNewGroupVal] = React.useState('')
    const {id, contactsList, contactsGroups} = props.contact
    const {isSm, isMd} = useMediaSize()
    useMouseEventAction({action: () => setNewGroupVal(''), ref})

    const handleTabInputChange = (e: ChangeEvent) => {
        // @ts-ignore
        let value = e.target?.value
        setNewGroupVal(value)
    }

    const handleClickAddingBtn = () => {
        onClickAddingBtn(newGroupVal.trim().toLowerCase())
        setNewGroupVal('')
    }

    const handleKeyPressAddingBtn = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if ( e.key === 'Enter') {
            onClickAddingBtn(newGroupVal.trim().toLowerCase())
            setNewGroupVal('')
            // @ts-ignore
            ref.current !== null && ref.current.focus()
        }
    }

    return (
        <Tab
            ref={ref}
            className={classes.addingTab}
            onClick={() => setNewGroupVal(` `)}
            label={
                <>
                    <TextField
                        aria-pressed={true}
                        className={classes.tabInput}
                        type='text'
                        placeholder='Add group'
                        value={newGroupVal}
                        onKeyPress={(e) => handleKeyPressAddingBtn(e)}
                        onChange={(e) => handleTabInputChange(e)}

                    />
                    {newGroupVal && <AddingButton onClickAddingBtn={handleClickAddingBtn} />}
                </>
            }
            {...a11yProps(isSm || isMd, contactsGroups.length)}
        />
    );
};
