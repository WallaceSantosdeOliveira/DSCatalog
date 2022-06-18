const tokenkey = 'authData';

type LoginResponse = {
    access_token: string;
    token_type: string;
    expires_in: number;
    scope: string;
    userFirstName: string;
    userId: number;
  };


export const saveAuthData = (obj: LoginResponse) => {
    localStorage.setItem(tokenkey, JSON.stringify(obj));
  };
  
  export const getAuthData = () => {
    const str = localStorage.getItem(tokenkey) ?? '{}';
    return JSON.parse(str) as LoginResponse;
  };
  
  export const removeAuthData = () => {
    localStorage.removeItem(tokenkey);
  };