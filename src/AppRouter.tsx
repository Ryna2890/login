import {createBrowserRouter} from "react-router-dom";
import App from "./App";
import {ErrorPage} from "./Components/ErrorPage/ErrorPage";
import {Profile} from "./Components/Profile/Profile";
import {News} from "./Components/News/News";
import {SignIn} from "./Components/SignIn/SignIn";
import {Logout} from "./Components/Logout /Logout";
import {Home} from "./Components/Home/Home";

interface Children {

    ch: any
}

export const OnlyAuth: React.FC<Children> = (props: Children) => {
    const authInfo = localStorage.getItem('authState');

    if (!authInfo) {
        return <SignIn />;
    }
    return props.ch;
};

export const NotAuth: React.FC<Children> = (props: Children) => {
    const authInfo = localStorage.getItem('authState');

    if (!authInfo) {
        return props.ch;
    }

    return props.ch;
};

const AppRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <NotAuth ch = {<Home />} />
            },

            {
                path: "signin",
                element: <NotAuth ch = {<SignIn/>} />
            },

            {
                path: "profile",
                element: <OnlyAuth ch = {<Profile />} />
            },
            {
                path: "news",
                element: <NotAuth ch = {<News />} />
            },
            {
                path: "logout",
                element: <OnlyAuth ch = {<Logout />} />
            },
        ],
    },
]);


export default AppRouter