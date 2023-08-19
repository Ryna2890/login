import React from "react";
import {useNavigate} from "react-router-dom";
import {useAppDispatch} from "../../app/hooks";
import {logOut} from "../../features/login/loginSlice";

export const Logout: React.FC = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch();
    const clickHandler = () => {
        dispatch(logOut);
        localStorage.removeItem('authState')
        window.location.reload()
        navigate("/signin")

    }

    return <button onClick={clickHandler}>Выйти</button>

}