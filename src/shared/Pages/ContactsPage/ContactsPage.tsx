import React from 'react';
import {Box} from "@mui/material";
import useStyles from "./styles";
import {ContactsTabs} from "../../Components/ContactsTabs";

export const ContactsPage = () => {
    const classes = useStyles()
    return (
        <Box className={classes.box}>
            <ContactsTabs />
        </Box>
    )
}
