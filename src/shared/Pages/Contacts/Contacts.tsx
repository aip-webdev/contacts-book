import React from 'react';
import {Box} from "@mui/material";
import useStyles from "./styles";
import {VerticalTabs} from "../../Components/VerticalTabs";

export const Contacts = () => {
    const classes = useStyles()
    return (
        <Box className={classes.box}>
            <VerticalTabs />
        </Box>
    )
}
