import React from "react";
import {
  FaMoneyBillWave,
  FaRegCalendarAlt,
  FaSignInAlt,
  FaList,
  FaChartPie,
  FaQuoteLeft,
} from "react-icons/fa";
import { IoIosStats } from "react-icons/io";
import { FaFilter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Corousel from "./Corousel";

const Homepage = () => {
  return (
    < >
      <div   className="header-section bg-gradient-to-r from-emerald-300 to-blue-400  flex flex-col items-center py-12 ">
        <div   className="header-content max-w-7xl flex flex-col gap-8 items-center ">
          <div   className="title font-bold text-5xl text-slate-700 drop-shadow-lg text-center">
            Track Your Expenses Effortlessly
          </div >
          <div   className="title-info font-thin text-lg  text-slate-700 drop-shadow-lg text-center ">
            Manage Your daily expenses with modern solution designed for you
          </div >
          <div   className="icons-container flex gap-5 ">
            <div   className="icon-info flex items-center flex-col gap-1">
              <FaMoneyBillWave className="text-3xl  text-green-600 drop-shadow-xl" />
              <p className="text-sm text-center  text-slate-700">
                Track Your Bills
              </p>
            </div >
            <div   className="icon-info flex items-center flex-col gap-1">
              <FaFilter className="text-3xl  text-blue-600 drop-shadow-xl" />
              <p className="text-sm text-center text-slate-700">
                Transaction Filtering
              </p>
            </div >
            <div   className="icon-info flex items-center flex-col gap-1">
              <IoIosStats className="text-3xl  text-green-600 drop-shadow-xl" />
              <p className="text-sm text-center  text-slate-700">
                Insightful Reports
              </p>
            </div >
          </div >
          <Link
            to="/register"
            className=" focus:scale-110 hover:duration-200 hover:text-green-900 text-blue-700 hover:scale-110 hover:bg-gradient-to-r from-blue-200 to-emerald-200 p-2 px-5 rounded-lg size-auto font-medium shadow-xl bg-slate-200 "
          >
            Get Started
          </Link>
        </div >
      </div >
      <div   className="services-container bg-white flex flex-col items-center gap-8 py-12  ">
        <h1 className="services-head-title text-slate-700 text-xl font-bold drop-shadow-lg">
          How It Works
        </h1>
        <div   className="service-box sm:flex sm:flex-row gap-5  items-center">
          <div   className="services  m-1 p-5  drop-shadow rounded-lg flex flex-col items-center ">
            <div   className=" hover:scale-110 hover:duration-200 bg-blue-500 p-3 text-white rounded-full">
              <FaSignInAlt className="text-xl " />
            </div >
            <h3 className="service-title text-slate-700 font-medium text-wrap text-center">
              Sign Up
            </h3>
            <p className="service-info text-slate-700 text-wrap text-center">
              Register and start managing your expenses in a minute
            </p>
          </div >
          <div   className="services m-1 p-5 drop-shadow rounded-lg flex flex-col items-center ">
            <div   className="hover:scale-110 hover:duration-200 bg-green-600 p-3 rounded-full  text-white">
              <FaList className="text-xl" />
            </div >

            <h3 className="service-title font-medium text-slate-700  text-center">
              Add Transactions
            </h3>
            <p className="service-info text-slate-700 text- text-center">
              Quickly add income and expenses to your account.
            </p>
          </div >
          <div   className="services  m-1 p-5  drop-shadow rounded-lg flex flex-col items-center ">
            <div   className=" hover:scale-110 hover:duration-200 bg-yellow-600 p-3 rounded-full  text-white">
              <FaChartPie className="text-xl " />
            </div >

            <h3 className="service-title text-slate-700 font-medium text-center">
              View Reports
            </h3>
            <p className="service-info text-slate-700 text-wrap text-center">
              See insightful reports & graphs of your finances
            </p>
          </div >
        </div >
      </div >
      {/* Testimonials */}
      <div   className="bg-gray-100 py-20 px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800">
          What Our Users Say
        </h2>

        <div   className="testimonials-conatiner max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 mt-10 gap-8 ">
          <div   className="testimonial bg-white p-6 rounded-lg shadow-2xl">
            <FaQuoteLeft className=" text-xl text-slate-400" />
            <p>
              "This app has revolutionized the way I track my expenses. Highly
              intuitive and user-friendly."
            </p>
            <p className="font-bold mt-4">- Raman R.</p>
          </div >
          <div   className="testimonial p-6 bg-white rounded-lg shadow-2xl">
            <FaQuoteLeft className=" text-xl text-slate-400" />
            <p>
              "Finally, a hassle-free way to manage my finances. The insights
              feature is a game changer!"
            </p>
            <p className="font-bold mt-4">- Aman R.</p>
          </div >
        </div >

        <div   className="mt-10 max-w-4xl  mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div   className="bg-white p-6 rounded-lg  shadow-lg">
            <FaQuoteLeft className="text-xl text-gray-400" />
            <p className="mt-4">
              "This app has revolutionized the way I track my expenses. Highly
              intuitive and user-friendly."
            </p>
            <p className="mt-4 font-bold">- Jane Doe</p>
          </div >
          <div   className="bg-white p-6 rounded-lg shadow-lg">
            <FaQuoteLeft className="text-xl text-gray-400" />
            <p className="mt-4">
              "Finally, a hassle-free way to manage my finances. The insights
              feature is a game changer!"
            </p>
            <p className="mt-4 font-bold">- John Smith</p>
          </div >
        </div >
      </div >
      {/* <Corousel />   //?Corousel Prac*/}
       {/* CTA */}
       <div   className="bg-blue-500 text-white py-20 px-4">
        <div   className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold">
            Ready to Take Control of Your Finances?
          </h2>
          <p className="mt-4">
            Join us now and start managing your expenses like a pro!
          </p>
          <Link to="/register">
            <button className="mt-8 px-6 py-3 bg-white text-blue-500 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition duration-300">
              Sign Up For Free
            </button>
          </Link>
        </div >
      </div >
    </>
  );
};

export default Homepage;
