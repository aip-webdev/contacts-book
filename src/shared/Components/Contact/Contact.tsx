import {Grid, Typography} from '@mui/material';
import React from 'react';
import {IContact} from "../../../../types/global";
import {LetterAvatar} from "../LetterAvatar";
import useStyles from "./styles";
import {RemoveButton} from "../RemoveButton";
import {useMediaSize} from "../../../hooks/useMediaSize";

interface IContactProps {
    contact: IContact,
    onClickRemoveBtn: (contact: IContact) => void
}

export function Contact({contact, onClickRemoveBtn}: IContactProps) {
    const {id, email, name, lastName, tel, group} = contact
    const {isLg, isXl} = useMediaSize();
    const classes = useStyles()
    const handleClickBtn = () => {
        onClickRemoveBtn(contact)
    }
    return (
        <Grid
            spacing={2}
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{marginBottom: '1em'}}
        >
            <Grid item xs={1}><LetterAvatar firstName={name} lastname={lastName && lastName}/></Grid>
            <Grid item xs><Typography className={classes.title}>{name}</Typography></Grid>
            {lastName && <Grid item xs><Typography className={classes.title}>{lastName}</Typography></Grid>}
            <Grid item xs><Typography className={classes.title}><a href={`mailto:${email}`}>{email}</a></Typography></Grid>
            {(isLg || isXl) && tel && <Grid item xs><Typography className={classes.title}><a href={`tel:${tel}`}>{tel}</a></Typography></Grid>}
            <Grid item xs={1}><RemoveButton onClickRemoveBtn={handleClickBtn}/></Grid>
        </Grid>
    )
}
