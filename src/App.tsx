import {hot} from 'react-hot-loader/root';
import {CssBaseline} from '@mui/material';
import {ThemeProvider} from '@mui/material/styles';
import theme from './styles/theme';
import React from 'react';
import {AppProvider} from "./context";
import {Navigate, Outlet, Route, Routes} from "react-router-dom";
import {RequiredAuth} from "./shared/Components/RequiredAuth";
import {NoMatchPage} from "./shared/Pages/NoMatchPage";
import {ContactsPage} from "./shared/Pages/ContactsPage";
import {SignInPage} from "./shared/Pages/SignInPage";
import {SignUpPage} from "./shared/Pages/SignUpPage";
import {Header} from "./shared/Components/Header";
import {Content} from "./shared/Components/Content";
import {useDBData} from "./hooks/useDBData";

const AppComponent = () => {
    return (
        <>
            <Header/>
            <Content>
                <Outlet/>
            </Content>
        </>
    )
}

const AppRouter = () => {
    const state = useDBData()
    return (
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <Routes>
                    <Route path="/" element={<AppComponent/>}>
                        <Route index element={<Navigate to="/contacts"/>}/>
                        <Route path='/contacts' element={<RequiredAuth><ContactsPage/></RequiredAuth>}/>
                    </Route>
                    <Route path='/signin' element={<SignInPage/>}/>
                    <Route path='/signup' element={<SignUpPage/>}/>
                    <Route path="*" element={<NoMatchPage/>}/>
                </Routes>
            </ThemeProvider>
    )
}

export const App = hot(() => <AppProvider><AppRouter/></AppProvider> )
