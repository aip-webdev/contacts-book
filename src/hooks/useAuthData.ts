import {useEffect} from 'react'
import {useAppStore} from "./useAppStore"
import {login, logout} from "../context/actions"

const useAuthData = () => {
    const [state, dispatch] = useAppStore()
    useEffect(() => {
        let isAuth: boolean | null | undefined = JSON.parse(<string>localStorage.getItem('isAuth'))
        if (!!isAuth) {
            isAuth ? dispatch(login()) : dispatch(logout())
        }
    }, [])
    useEffect(() => {
        localStorage.setItem('isAuth', JSON.stringify(state.isAuth))
    }, [state.isAuth])
    return state.isAuth;
}

export default useAuthData

