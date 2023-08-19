import {Logs} from "../Components/SignIn/SignIn";

export function checkCredentials(params:Logs) {
    return !(params.name?.toLowerCase() !== 'admin' ||
        params.password !== '12345');
}