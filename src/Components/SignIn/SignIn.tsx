import React, {useState} from "react";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {checkCredentials} from "../../helpers/helpers";
import {logIn, logInFailure} from "../../features/login/loginSlice";
import {useNavigate} from "react-router-dom";

export interface Logs {
    name: string;
    password: string;
}

export const SignIn: React.FC = () => {
    const [logs, setLogs] = useState<Logs>({name: '', password: ''});
    const errorMsg = useAppSelector((state) => state.login.errorMsg)
    const dispatch = useAppDispatch();
    const navigate = useNavigate()

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const auth = checkCredentials(logs);
        if (auth) {
            dispatch(logIn(auth))
            localStorage.setItem("authState", "true")
            navigate("/profile")
        } else {
            dispatch(logInFailure('Имя пользователя или пароль введены не верно'))
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value
        const fieldName = e.currentTarget.dataset.fieldName

        setLogs(prev => ({
            ...prev,
            [fieldName!]: value,
        }))
    }

    return (
        <div>
            {errorMsg && <p>{errorMsg}</p>}
            <form onSubmit={handleSubmit}>
                <input placeholder="Your name" data-field-name={'name'} onChange={handleChange}/>
                <input placeholder="Your password" data-field-name={'password'} onChange={handleChange}/>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}