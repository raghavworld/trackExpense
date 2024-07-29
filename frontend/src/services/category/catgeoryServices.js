import axios from "axios";
import { BASE_URL } from "../../utils/url";
import { userTokenStorage } from "../storageServices/local";


export const createCategory = async ({type,name}) => {
const token  = userTokenStorage
console.log(token);
   const response =await axios.post(`${BASE_URL}/categories/create`,{type,name},{
        headers:{
            Authorization:`Bearer ${token}`
        }
    })
return response.data

}


export default createCategory