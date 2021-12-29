import React, {ChangeEvent, useState} from 'react';
import useStyles from "./styles";
import {AppBar, Toolbar, Typography} from "@mui/material";
import {SearchField} from "../SearchField";
import {ButtonOutlined} from "../ButtonOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import {logout} from "../../../context/actions";
import {useAppStore} from "../../../hooks/useAppStore";
import {useNavigate} from "react-router-dom";
import {useMediaSize} from "../../../hooks/useMediaSize";

export const Header = () => {
    const {isSm} = useMediaSize();
    const classes = useStyles()
    const navigate = useNavigate();
    const [state, dispatch] = useAppStore()
    const [search, setSearch] = useState('')
    const handleChangeSearchField: (e: ChangeEvent) => void = (e) => {
        // @ts-ignore
        let value = e.target?.value
        setSearch(value);
    }
    const handleClick = () => {
        dispatch(logout())
        navigate("/signin")
    }
  return (
      <AppBar position='static' className={classes.appBar} >
        <Toolbar className={classes.toolbar} >
            {!isSm && <Typography className={classes.title}>Contacts</Typography>}
          <SearchField searchTextVal={search} handler={(e) => handleChangeSearchField(e)} />
          <ButtonOutlined onClick={handleClick} text='Logout' btnIcon={<LogoutOutlinedIcon/>} />
        </Toolbar>
      </AppBar>
  )
}
