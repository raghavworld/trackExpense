import React from "react";
import Chart  from "chart.js/auto";
import { Doughnut } from 'react-chartjs-2';
import { FaBox } from "react-icons/fa";
import {useQuery} from '@tanstack/react-query'
import {listTransactionApi} from "../../services/transactions/transactionServices";
const TransactionChart = () => {

const {isFetch, data:transData} = useQuery({
  queryKey: ["fetch-transactions-data"],
  queryFn: listTransactionApi
})
console.log('chartResponse: ', transData);

let totalIncome = 0;
let totalExpense = 0;

const chartInputData =transData?.reduce((acc,tranData)=>{
  const {name,type,amount} =tranData 
  if(!acc[name]){
    acc[name]={ income:0,expense:0}    
  }

  if(type==='income'){
        acc[name].income+=amount
  }else if(type==='expense'){
    acc[name].expense+=amount
  }

return acc
},{})

console.log('chartINput: ',chartInputData);

const arrayOfObjects = chartInputData ? Object?.entries(chartInputData).map(([name, values]) => ({
  name,
  income: values.income,
  expense: values.expense
})) : []

console.log('arrr of objec: ',arrayOfObjects);
 
 

  const dataIncome = {
      labels:arrayOfObjects.map((data) =>data.income!==0 && data.name) || [],
    datasets: [
        {
            
            data: arrayOfObjects.map((data) =>data.income) || [],
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56','#5CE65C'],
            hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56','#5CE65C'],
            radius:'100%',
            borderWidth: 3,
            borderRadius:5,
            
             
        },
    ],
};

const optionsIncome = {
    maintainAspectRatio:false,
  responsive:true,
    cutout: "60%",
    
    plugins:{
     
      
    }
    
    
    
}

 const tryarr = arrayOfObjects.filter((data)=>data.expense!==0)
console.log('arrtry : ',tryarr);

const dataExpense = {
  labels:arrayOfObjects.map((data) => data.name) || [],
datasets: [
    {
        
        data: arrayOfObjects.map((data) =>data.expense) || [],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56','#5CE65C'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56','#5CE65C'],
        radius:'100%',
        borderWidth: 3,
        borderRadius:5,
        
         
    },
],
};
console.log('dateexpense labels: ',dataExpense.labels);


const optionsExpense = {
maintainAspectRatio:false,
responsive:true,
cutout: "60%",

plugins:{
 
  
}



}


  return (
    <div className="my-8 p-6 flex flex-col bg-white rounded-lg shadow-xl border items-center border-gray-200 ">
      <h1 className="text-2xl font-bold text-center mb-6">
        Transaction Overview
      </h1>
      
     
 
     <div className=" h-[300px] w-[300px] flex   justify-center md:space-x-8  md:justify-center  md:h-[500px] md:w-[500px]  ">
      <Doughnut className="bg-blue-200  " data={dataIncome} options={optionsIncome}/>
      <Doughnut className="bg-blue-200  " data={dataExpense} options={optionsExpense}/>
      </div>
        
    </div>
  );
};

export default TransactionChart;
