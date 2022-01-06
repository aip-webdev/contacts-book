import React, {ChangeEvent, useEffect, useState} from 'react';
import useStyles from "./styles";
import {AppBar, Toolbar, Typography} from "@mui/material";
import {SearchField} from "../SearchField";
import {ButtonOutlined} from "../ButtonOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import {logout, setSearchValue} from "../../../context/actions";
import {useAppStore} from "../../../hooks/useAppStore";
import {Link, useNavigate} from "react-router-dom";
import {useMediaSize} from "../../../hooks/useMediaSize";
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';

export const Header = () => {
    const {isSm} = useMediaSize();
    const classes = useStyles()
    const navigate = useNavigate();
    const [state, dispatch] = useAppStore()
    const [search, setSearch] = useState('')

    useEffect(() => {
        if (!state.isAuth) {
            navigate('/signin')
        }
    }, [])

    const handleChangeSearchField: (e: ChangeEvent) => void = (e) => {
        // @ts-ignore
        let value = e.target?.value
        setSearch(value);
        dispatch(setSearchValue(value))
    }
    const handleClick = () => {
        dispatch(logout())
    }

    return (
        <AppBar position='static' className={classes.appBar}>
            <Toolbar className={classes.toolbar}>
                {!isSm && <Typography className={classes.title}>
                    <ContactsOutlinedIcon className={classes.title__icon}/>Contacts
                </Typography>}
                <SearchField searchTextVal={search} handler={(e) => handleChangeSearchField(e)}/>
                <Link className={classes.link} to='/signin'><ButtonOutlined onClick={handleClick} text='Logout'
                                                                            btnIcon={<LogoutOutlinedIcon/>}/></Link>
            </Toolbar>
        </AppBar>
    )
}
