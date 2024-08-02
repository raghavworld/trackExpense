import axios from "axios";
import { BASE_URL } from "../../utils/url";
import { userTokenStorage } from "../storageServices/local";

export const createCategory = async ({ type, name }) => {
  const token = userTokenStorage() || null;
  console.log(token);
  const response = await axios.post(
    `${BASE_URL}/categories/create`,
    { type, name },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  console.log(response.data);

  return response.data;
};
// Get categories lIst

export const categoriesList = async () => {
  const token = userTokenStorage() || null;
  console.log(token);
  const response = await axios.get(`${BASE_URL}/categories/list`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  //   console.log(response);
  return response.data;
};

export const deleteCategory = async (id) => {
  const token = userTokenStorage() || null;
  const response = await axios.delete(`${BASE_URL}/categories/delete/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  console.log(response);
  return response.data;
};

export const updateCategoryService = async ({ name, type, id }) => {
  console.log("incoming update Category Service data:", name, type, id); //debug arguments

  const token = userTokenStorage() || null;
  console.log(token); //debug token
  const response = await axios.put(
    `${BASE_URL}/categories/update/${id}`,
    { name, type },
    { headers: { Authorization: `Bearer ${token}` } }
  );

  console.log(response.data);
  return response.data;
};

export default {
  deleteCategory,
  createCategory,
  categoriesList,
  updateCategoryService,
};
