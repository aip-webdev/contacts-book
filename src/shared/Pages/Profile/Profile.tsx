import React from 'react';
import {AppBar, Box,  Toolbar, Typography} from "@mui/material";
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import {useAppStore} from "../../../hooks/useAppStore";
import {logout} from "../../../context/actions";
import {ChangeEvent, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import useStyles from "./styles";
import {ButtonOutlined} from "../../Components/ButtonOutlined";
import {SearchField} from "../../Components/SearchField";
import {VerticalTabs} from "../../Components/VerticalTabs";

export const Profile = () => {
    const classes = useStyles()
    const navigate = useNavigate();
    const [state, dispatch] = useAppStore()
    const [search, setSearch] = useState('')
    useEffect(() => {
        if (!state.isAuth) {
            navigate("/signin")
        }
    }, [])

    const handleClick = () => {
        dispatch(logout())
        navigate("/signin")
    }

    const handleChangeSearchField: (e: ChangeEvent) => void = (e) => {
        // @ts-ignore
        let value = e.target?.value
        setSearch(value);
    }

    return (
        <Box className={classes.box}>
            <AppBar position='static' className={classes.appBar} >
                <Toolbar className={classes.toolbar} >
                    <SearchField searchTextVal={search} handler={(e) => handleChangeSearchField(e)} />
                    <ButtonOutlined onClick={handleClick} text='Logout' btnIcon={<LogoutOutlinedIcon/>} />
                </Toolbar>
            </AppBar>
            <VerticalTabs />
        </Box>
    )
}
