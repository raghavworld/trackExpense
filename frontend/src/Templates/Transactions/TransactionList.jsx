import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import {  listTransactionApi } from "../../services/transactions/transactionServices";
import FilterSection from "./FilterSection";
const TransactionList = () => {

  
const {data,isFetched} =useQuery({
  queryFn: listTransactionApi( ),
  queryKey: ["list-transactions"],
})
 

const transactions = data || [];




  return (
    <div className="mt-6  bg-lime-200">
      <h3 className="text-xl text-center font-semibold mb-2">Transactions</h3>
      <div className="overflow-x-auto">
        <FilterSection />
        <table className="min-w-full text-sm divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Type
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Category
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Amount
              </th>
              
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
           
          <tbody className="bg-white divide-y  divide-gray-200">
            {transactions?.map((transaction) => (
              <tr key={transaction.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  {new Date(transaction.date).toLocaleDateString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {transaction.type}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {transaction.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  ${transaction.amount}
                </td>
               
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button className="text-indigo-600 hover:text-indigo-900 mr-3 ">
                    <FaEdit />
                  </button>
                  <button className="text-red-600 hover:text-red-900">
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionList;
