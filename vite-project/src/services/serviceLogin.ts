import { app } from '../api/axiosconfig'

const getLogin: string = "/api/login";

const loginRequest = async() => {
    try {
        const req = await app.get(getLogin)
        const res = await req.data
        return res
    } catch (err: any) {
        console.log("Error response post (trbl to send data)")
        console.log("err-data", err?.res.data);
        console.log("err-status", err?.res.status);
        console.log("err-headers", err?.res.headers);
        throw err;
    }
}

const serviceLogin = {
    loginRequest
};
  
export default serviceLogin;