import { Axios } from "axios";

export const axiosApp = new Axios({
    baseURL: process.env.API_BASE_URL,
    responseType: "json"
});

axiosApp.interceptors.response.use((res) => {
    // ensure it's json data
    if(typeof res.data === "string")
        res.data = JSON.parse(res.data);

    return res;
})

// error type
interface ErrorResponse {
    status: {
        error_code: number;
        error_message: string;
    }
}

// handle error 
axiosApp.interceptors.response.use((res) => {
    if ((res.data as ErrorResponse).status?.error_code){
        throw new Error((res.data as ErrorResponse).status.error_message);
    }

    return res;
});