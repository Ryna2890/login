import React from "react";
import {useRouteError} from "react-router-dom";


export  const ErrorPage: React.FC  =()=>{
    const error: any = useRouteError();
    console.error(error);

    return (
        <div>
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                Error below:
                <br/>
                <i>{error.message}</i>
            </p>
        </div>
    );
}