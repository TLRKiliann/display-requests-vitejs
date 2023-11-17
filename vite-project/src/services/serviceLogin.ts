import { app } from '../api/axiosconfig';

const getLogin: string = "/api/login";

type StatusProps = {
    username: string;
    password: string;
    status: string;
}

const loginRequest = async(statusData: StatusProps) => {
    try {
        const req = await app.post(getLogin, statusData);
        const res = await req.data;
        return res
    } catch (err: any) {
        console.log(err)
        //console.log("Error response post (trbl to send data)")
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