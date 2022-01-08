import {useAppStore} from "../../hooks/useAppStore";
import React, {useEffect, useState} from "react";
import { Navigate } from "react-router-dom";

export const RequiredAuth = ({ children }: { children: JSX.Element }) => {
    const [state] = useAppStore();
    const [rendered, setRendered] = useState(false)

    useEffect(() => {
        setRendered(true)
    }, [])
    if (rendered && !state.isAuth) {
        return (<Navigate to='/signin'/>)
    }
    return children
}
