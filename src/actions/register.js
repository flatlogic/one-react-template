import axios from 'axios';
import { toast } from 'react-toastify';
import config from '../config';

export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

function requestRegister() {
    return {
        type: REGISTER_REQUEST,
    };
}

export function receiveRegister() {
    return {
        type: REGISTER_SUCCESS
    };
}

export function registerError(payload) {
    return {
        type: REGISTER_FAILURE,
        payload,
    };
}

export function registerUser(payload) {
    return (dispatch) => {
        // We check if app runs with backend mode
        if (!config.isBackend) {
            toast.success("You've been registered successfully");
            payload.history.push('/login');
        }

        else {
            dispatch(requestRegister());
            const creds = payload.creds;
            if (creds.email.length > 0 && creds.password.length > 0) {
              axios.post("/user/signup", creds).then(res => {
                dispatch(receiveRegister());
                toast.success("You've been registered successfully");
                payload.history.push('/login');
              }).catch(err => {
                dispatch(registerError(err.response.data));
              })

            } else {
              dispatch(registerError('Something was wrong. Try again'));
            }
        }
    };
}
