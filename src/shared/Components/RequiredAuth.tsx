import {useNavigate} from "react-router-dom";
import React, {useEffect} from "react";
import useStore from "../../store";
import shallow from "zustand/shallow";

export const RequiredAuth = React.memo(({ children }: { children: JSX.Element }) => {
    const isAuth = useStore(state => state.isAuth, shallow)
    const navigate = useNavigate();
    useEffect(() => {
        if (!isAuth) {
            navigate("/signin")
        }
    }, [])

    return children
})
