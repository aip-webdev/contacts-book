import React from 'react';
import useStyles from "./styles";
import {Button} from "@mui/material";

interface IButtonOutlined {
    btnClassName?: any
    onClick: () => void;
    text: string;
    btnIcon?: any
}

export function ButtonOutlined(props: IButtonOutlined) {
    const classes = useStyles()
    const {btnIcon, onClick, text, btnClassName=classes.button} = props

    return (
        <Button
            className={btnClassName}
            onClick={onClick}
            variant='outlined'
            endIcon={btnIcon}
        >
            {text}
        </Button>
    )
}
