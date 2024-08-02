import React, { useEffect } from "react";
import { FaTrash, FaEdit } from "react-icons/fa";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import {
  categoriesList,
  deleteCategory,
} from "../../services/category/catgeoryServices";
import AlertMessage from "../Alert/AlertMessage";
import { useNavigate } from "react-router-dom";
import { userTokenStorage } from "../../services/storageServices/local";


const CategoriesList = () => {
  const { data, isError, isLoading, isFetched, refetch, error } = useQuery({
    queryKey: ["list-categories"],
    queryFn: categoriesList,
  });

  const userToken = userTokenStorage() || null;
  console.log("userToken: ", userToken);

  console.log("fetched Data: ", data, isFetched, isLoading, isError);

  const {
    isPending,
    isSuccess,
    error: catErr,
    mutateAsync,
  } = useMutation({
    mutationKey: ["delete-category"],
    mutationFn: deleteCategory,
  });

  // delete category async
  const handleDelete = async (id) => {
    console.log(id);
    await mutateAsync(id)
      .then((data) => {
        console.log(data);
        refetch();
      })
      .catch((e) => {
        console.log({ error: e });
      });
  };

  const categoryArr = data?.catorgies || [];

  return (
    <div className="max-w-md mx-auto my-10 bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Categories</h2>
      {isLoading && (
        <AlertMessage type="loading" message="Fetching Categories list" />
      )}
      {isError && (
        <AlertMessage type="error" message={error.response.data.message} />
      )}
      <ul className="space-y-4">
        {categoryArr?.map((category) => (
          <li
            id={category._id}
            key={category._id}
            className="flex justify-between items-center bg-gray-50 p-3 rounded-md"
          >
            <div>
              <span className="text-gray-800">{category?.name}</span>
              <span
                className={`ml-2 px-2 inline-flex text-xs leading-5 font-semibold rounded-full
                   ${
                     category.type === "income"
                       ? "bg-green-100 text-green-800"
                       : "bg-red-100 text-red-800"
                   }`}
              >
                {category?.type.charAt(0).toUpperCase() +
                  category?.type?.slice(1)}
              </span>
            </div>
            <div className="flex space-x-3 ">
              <Link to={`/update-category/${category._id}`}>
                <button className="text-blue-500 hover:scale-125 duration-200 hover:text-blue-700">
                  <FaEdit className="" />
                </button>
              </Link>

              <button
                onClick={(e) => {
                  console.log("catId:", category._id);
                  document
                    .getElementById("dgbox")
                    .attributes.getNamedItem("data-catid").value = category._id;
                  document.getElementById("dgbox").showModal();
                }}
                className="text-red-500 hover:scale-125 duration-200 hover:text-red-700"
              >
                <FaTrash />
              </button>
              <div>
                <dialog id="dgbox" data-catid="" className="modal ">
                  <div className="modal-box  w-11/12 max-w-5xl">
                    <h3 className="font-bold text-lg">Delete Category</h3>
                    <p className="py-4">Are You Sure You Want to delete</p>
                    <div className="modal-action ">
                      <form method="dialog">
                        <button className="btn text-white bg-red-500 m-3">
                          {" "}
                          Cancel{" "}
                        </button>
                        <button
                          onClick={(e) => {
                            console.log(e.customdata);
                            handleDelete(
                              document
                                .getElementById("dgbox")
                                .attributes.getNamedItem("data-catid").value
                            );
                          }}
                          className="btn"
                        >
                          Delete
                        </button>
                      </form>
                    </div>
                  </div>
                </dialog>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoriesList;
