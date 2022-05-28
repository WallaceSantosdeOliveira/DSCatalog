import axios from 'axios';
import qs from 'qs';

type LoginResponse = {
    access_token: string;
    token_type: string;
    expires_in: number;
    scope: string;
    userFirstName: string;
    userId: number;
}

export const BASE_URL = process.env.REACT_APP_BACKEND_URL ?? 'http://localhost:8080';

const tokenkey = 'authData';

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID ??'dscatalog';
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_ID ??'dscatalog123';

type loginData = {
    username: string;
    password: string;
}

export const requestBackendLogin = (loginData : loginData ) => {
 
    const headers = {
        'Content-Type':'application/x-www-form-urlencoded',
        Authorization:'Basic ' + window.btoa(CLIENT_ID + ':' + CLIENT_SECRET)
    }

    const data = qs.stringify({
        ...loginData,
        grant_type : 'password'
    });

    return axios({method: 'POST', baseURL: BASE_URL, url: '/oauth/token', data,headers})
}

export const saveAuthData = (obj : LoginResponse) => {
    localStorage.setItem('authData', JSON.stringify(obj));
}   

export const getAuthData = () => {
    const str = localStorage.getItem(tokenkey) ?? "{}";
    return JSON.parse(str) as LoginResponse;
}


