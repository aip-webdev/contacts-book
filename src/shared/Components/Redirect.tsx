import React, {useEffect, useState} from 'react'
import { Navigate } from 'react-router-dom'

interface IRedirectProps {
    path: string
}

export const Redirect = (props: IRedirectProps) => {
    const [redirect, setRedirect] = useState(false)
    useEffect(() => {
        setRedirect(true)
    }, [])
    if (!redirect) {
        return <></>
    }
    else return (
        <Navigate to={props.path} />
        )
}
