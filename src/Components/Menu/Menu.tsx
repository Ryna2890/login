import React from "react";
import {NavLink} from "react-router-dom";
import {useAppSelector} from "../../app/hooks";

export const Menu: React.FC = () => {
    const authInfo = useAppSelector((state) => state.login.auth)

    const navStyles = {
        position: "fixed" as "fixed",
        top: 0,
        display: "flex",
        justifyContent:"center",
        gap: 50,
        fontsize: 48,
        backgroundColor: "gray",
        width:`${100}%`
    }
    return (
        <div style={navStyles}>
            <div>
                <NavLink to="/">Главная</NavLink>
            </div>
            <div>
                <NavLink to="/news">Новости</NavLink>
            </div>
            <div>
                <NavLink to="/profile">Профиль</NavLink>
            </div>
            <div>
                {authInfo ? <NavLink to="/logout">Выйти</NavLink> : <NavLink to="/signin">Войти</NavLink>}

            </div>

        </div>
    )
}