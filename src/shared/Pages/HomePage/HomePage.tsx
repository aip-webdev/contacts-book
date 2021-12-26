import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import {Button, TextField} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import {useAppStore} from "../../../hooks/useAppStore";
import {logout} from "../../../context/actions";
import Typography from "@mui/material/Typography";
import {ChangeEvent, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import FormControl from "@mui/material/FormControl";
import styles from "./styles";

export default function HomePage() {
    const navigate = useNavigate();
    const [state, dispatch] = useAppStore()
    const [search, setSearch] = useState('')
    useEffect(() => {
        if (!state.isAuth) {
            navigate("/signin")
        }
    }, [])

    function handleClick() {
        dispatch(logout())
        navigate("/signin")
    }

    const handleChangeSearchField: (e: ChangeEvent) => void = (e) => {
        // @ts-ignore
        let value = e.target?.value
        setSearch(value);
        //filter list
    }


    return (
        <Box sx={styles.box}>
            <AppBar position='static' sx={styles.appBar} >
                <Toolbar sx={styles.toolbar} >
                    <FormControl
                        // @ts-ignore
                        sx={styles.formControl} variant="outlined">
                        <TextField
                            // @ts-ignore
                            sx={styles.textField}
                            id="search"
                            label="Search"
                            color='info'
                            type="text"
                            value={search}
                            onChange={(e) => handleChangeSearchField(e)}
                        />
                        <SearchIcon
                            // @ts-ignore
                            sx={styles.searchIcon}
                        />
                    </FormControl>
                    <Button
                        sx={styles.button}
                        onClick={handleClick}
                        variant='outlined'
                        endIcon={<LogoutOutlinedIcon/>}
                    >
                        Logout
                    </Button>
                </Toolbar>
            </AppBar>
            <Typography sx={{marginTop: '40px'}} variant='h2' component='h2' align='center'>
                lists
            </Typography>
        </Box>
    );
}
