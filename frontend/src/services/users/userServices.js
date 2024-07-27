

import axios from "axios";
import { BASE_URL } from "../../utils/url";

export const loginApi = async ({email,password}) => {

const response =  await axios.post(`${BASE_URL}/users/login`,
    {email,password})

return response.data //Returning a Promise

}

export const RegisterApi = async({username,password,email}) => {

const response =  await axios.post(`${BASE_URL}/users/register`,
    {email,password,username})

return response.data //returning a promise
}