 
import userTokenStorage from "../storageServices/local";
import { BASE_URL } from "../../utils/url";
import axios from "axios";

export const addTransactionApi = async ({ type, amount, category }) => {
  const token = userTokenStorage() || null;
  console.log(token);
  const response = await axios.post(
    `${BASE_URL}/transactions/create`,
    { type, amount, category },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  console.log(response.data);
  return response.data;
};

export const listTransactionApi = async ({queryKey}) => {
    const [,reqData] = queryKey 

    
    const params ={
        start:reqData?.startDate,
        end:reqData?.endDate || '',
        type:reqData?.type || ''
    }
    console.log('reqData: ',params);
    
  const token = userTokenStorage() || null;
//   console.log("token:", token);

  const response = await axios.get(
    `${BASE_URL}/transactions/list`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },params
    }
  
  );
  console.log('response: ',response);
  return  response.data;
};

export default { addTransactionApi, listTransactionApi };
