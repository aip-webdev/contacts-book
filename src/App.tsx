import {hot} from 'react-hot-loader/root';
import {CssBaseline} from '@mui/material';
import {ThemeProvider} from '@mui/material/styles';
import theme from './styles/theme';
import React, {useEffect, useState} from 'react';
import {AppProvider} from "./context";
import {Route, Routes} from "react-router-dom";
import useAuthData from "./hooks/useAuthData";
import useUsersData from "./hooks/useUsersData";
import {RequiredAuth} from "./shared/Components/RequiredAuth";
import {NoMatchPage} from "./shared/Pages/NoMatchPage";
import {Profile} from "./shared/Pages/Profile";
import {SignInPage} from "./shared/Pages/SignInPage";
import {SignUpPage} from "./shared/Pages/SignUpPage";
import {Redirect} from "./shared/Components/Redirect";

const AppRouter = () => {
    const isAuth = useAuthData()
    const {users, error, loading} = useUsersData()
    const [redirect, setRedirect] = useState(false)
    useEffect(() => {
        setRedirect(true)
    }, [])
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Routes>
                <Route path='/' element={<Redirect path='/profile'/>}/>
                <Route path='/profile' element={<RequiredAuth><Profile/></RequiredAuth>}/>
                <Route path='/signin' element={<SignInPage/>}/>
                <Route path='/signup' element={<SignUpPage/>}/>
                <Route path="*" element={<NoMatchPage/>}/>
            </Routes>
        </ThemeProvider>
    )
}

export const App = hot(() =>
    <AppProvider>
        <AppRouter/>
    </AppProvider>
)
