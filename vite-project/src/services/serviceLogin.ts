import { app } from '../api/axiosconfig';

const getLogin: string = "/api/login";

const loginRequest = async() => {
    try {
        const req = await app.get(getLogin);
        const res = await req.data;
        return res
    } catch (err: unknown | any) {
        console.log("Error response post (trbl to send data)")
        console.log(err)
        //console.log("err-data", err.response.data);
        //console.log("err-status", err.response.statusText);
        //console.log("err-headers", err.response.config.headers);
        throw err;
    }
}

const serviceLogin = {
    loginRequest
};
  
export default serviceLogin;