import {Logs} from "../Components/SignIn/SignIn";

export function checkCredentials(params:Logs) {
    if (
        params.name?.toLowerCase() !== 'admin' ||
        params.password !== '12345'
    ) {
        return false
    }

    return true
}