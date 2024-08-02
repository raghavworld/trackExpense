import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { hashKey, useMutation } from "@tanstack/react-query";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import axios from "axios";
import { RegisterApi } from "../services/users/userServices";
import AlertMessage from "./Alert/AlertMessage";
import { useNavigate } from "react-router-dom";
//Validations

const RegistrationForm = () => {
  const navigate = useNavigate();

  const { isPending, isError, isSuccess, error, mutateAsync } = useMutation({
    //return States of http request
    mutationKey: ["register"],
    mutationFn: RegisterApi,
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      // ? username valid
      username: Yup.string()
        .required()
        .min(5, "username Must be at least 5 characters")
        .max(15, "username must be atleast 15 characters"),
      // ? email valid
      email: Yup.string().required().email("Invalid email address"),
      password: Yup.string()
        .required()
        .matches(
          /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/,
          "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
        ),
      confirmPassword: Yup.string()
        .required()
        .oneOf([Yup.ref("password")], "Passwords must match"),
    }),
    onSubmit: (values) => {
      // ! it executes the mutationFn with the values and returns a promise
      mutateAsync(values)
        .then((data) => {
          console.log(data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  });

  useEffect(() => {
    setTimeout(() => {
      if (isSuccess) {
        navigate("/profile");
      }
    }, 2000);
  }, [isPending, isError, isSuccess]);

  return (
    <form
      data-theme="light"
      onSubmit={formik.handleSubmit}
      className="max-w-md mx-auto my-10 bg-white p-6 rounded-xl shadow-lg space-y-6 border border-gray-200"
    >
      <h2 className="text-3xl font-semibold text-center text-gray-800">
        Sign Up
      </h2>
      {/* Display messages */}

      <p className="text-sm text-center text-gray-500">
        Join our community now!
      </p>

      {/* Input Field - Username */}
      <div className="relative">
        <FaUser className="absolute top-3 left-3 text-gray-400" />
        <input
          id="username"
          type="text"
          {...formik.getFieldProps("username")}
          placeholder="Username"
          className="pl-10 pr-4 py-2 w-full rounded-md border border-gray-300 focus:border-blue-500 focus:ring-blue-500"
        />
        {formik.errors.username && formik.touched.username ? (
          <span className="text-xs text-red-500">{formik.errors.username}</span>
        ) : null}
        {/* {formik.touched.username && formik.errors.username && (
          <span className="text-xs text-red-500">{formik.errors.username}</span>
        )} */}
      </div>

      {/* Input Field - Email */}
      <div className="relative">
        <FaEnvelope className="absolute top-3 left-3 text-gray-400" />
        <input
          id="email"
          type="email"
          {...formik.getFieldProps("email")}
          placeholder="Email"
          className="pl-10 pr-4 py-2 w-full rounded-md border border-gray-300 focus:border-blue-500 focus:ring-blue-500"
        />
        {formik.touched.email && formik.errors.email && (
          <span className="text-xs text-red-500">{formik.errors.email}</span>
        )}
      </div>

      {/* Input Field - Password */}
      <div className="relative">
        <FaLock className="absolute top-3 left-3 text-gray-400" />
        <input
          id="password"
          type="password"
          {...formik.getFieldProps("password")}
          placeholder="Password"
          className="pl-10 pr-4 py-2 w-full rounded-md border border-gray-300 focus:border-blue-500 focus:ring-blue-500"
        />
        {formik.touched.password && formik.errors.password && (
          <span className="text-xs text-red-500">{formik.errors.password}</span>
        )}
      </div>

      {/* Input Field - Confirm Password */}
      <div className="relative">
        <FaLock className="absolute top-3 left-3 text-gray-400" />
        <input
          id="confirmPassword"
          type="password"
          {...formik.getFieldProps("confirmPassword")}
          placeholder="Confirm Password"
          className="pl-10 pr-4 py-2 w-full rounded-md border border-gray-300 focus:border-blue-500 focus:ring-blue-500"
        />
        {formik.touched.confirmPassword && formik.errors.confirmPassword && (
          <span className=" text-red-500 text-xs ">
            {formik.errors.confirmPassword}
          </span>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
      >
        Register
      </button>
      {isPending ? (
        <AlertMessage type="loading" message={"Loading..."} />
      ) : null}
      {isSuccess ? <AlertMessage type="success" message={"Success"} /> : null}

      {isError ? <AlertMessage type="error" message={"Error Occured"} /> : null}
    </form>
  );
};

export default RegistrationForm;
