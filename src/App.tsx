import React, {useEffect} from 'react';
import './App.css';
import {Outlet} from "react-router-dom";
import {Menu} from "./Components/Menu/Menu";
import {useAppDispatch} from "./app/hooks";
import {logIn} from "./features/login/loginSlice";

function App() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        const authInfo = localStorage.getItem('authState');
        dispatch(logIn(Boolean(authInfo)))
    }, []);

    return (
        <div className="App">
            <Menu/>
            <Outlet/>
        </div>
    );
}

export default App;
