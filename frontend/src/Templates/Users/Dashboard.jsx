import React from "react";
import TransactionList from '../../components/Transactions/TransactionList';
import TransactionChart from '../../components/Transactions/TransactionChart';
import FilterSection from "../../components/Transactions/FilterSection";

const Dashboard = () => {
  return (
    <>
      <TransactionChart />
      <FilterSection/>
      <TransactionList/>
      
      
     </>
  );
};

export default Dashboard;
