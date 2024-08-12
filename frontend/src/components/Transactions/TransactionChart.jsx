import React from "react";
import Chart  from "chart.js/auto";
import { Doughnut } from 'react-chartjs-2';
import { FaBox } from "react-icons/fa";
 

const TransactionChart = () => {



 
  const data = {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
        {
            
            data: [300, 50, 100],
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
            hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
            radius:'100%',
            borderWidth: 3,
            borderRadius:5,
            
             
        },
    ],
};

const options = {
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
      <Doughnut className="bg-blue-200  " data={data} options={options}/>
      <Doughnut className="bg-blue-200  " data={data} options={options}/>
      </div>
        
    </div>
  );
};

export default TransactionChart;
