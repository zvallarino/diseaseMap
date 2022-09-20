import React from "react";
import { useState, useContext } from "react";
import { GraphContext } from '../contexts/GraphContext';



function Trends({}) {

 const { setGraphTrends } = useContext(GraphContext)

  const one_month_data = [[3.4,"E.Coli"],[2.1,"Chlamydia"],[5.2,"HIV"]]
  const three_month_data = [[3.1,"Polio"],[4.3,"Malaria"],[3.2,"Tuberculosis"]]
  const six_month_data = [[3.1,"Malaria"],[6.3,"Influenza"],[2.2,"Monkey Pox"]]
  const trends = (data_per_month) => {
    return (
        data_per_month.map(month => {return(
        <>
            <div 
            className = "w-1/5 h-full rounded border justify-center shadow-lg max-w-sm hover:bg-red-400"
            onClick = {()=>setGraphTrends(false)}
            >
                <div className = 'h-1/3 border text-center py-3 font-bold'>
                {month[1]}
                </div>
                <div className = 'h-2/3 text-center py-6 font-bold text-red-500'>
                {"+"}{month[0]}{"%"}
                </div>
            </div>
          </>
        )})
      
    );
  };

  return (
    <div className="border border-4 border-red-800 h-full">

      <div className="border border-4 border-red-700 h-1/3">
            <h1 className = "text-center h-1/6">1 Month Increasing Trends</h1>
            <h2 className = "text-center h-1/6">Increasing at least %5 in a single month</h2>
            <div className = "flex border border-4 border-blue-300 justify-around h-4/6">
                {trends(one_month_data)}
            </div>
        </div>

        <div className="border border-4 border-blue-300  h-1/3">
            <h1 className = "text-center">Increasing Trends 3 Month</h1>
            <h2 className = "text-center">Increasing at least %3 each month</h2>
            <div className = "flex border border-4 border-blue-300 justify-around h-4/6">
                {trends(three_month_data)}
            </div>
        </div>

        <div className="border border-4 border-blue-300  h-1/3">
            <h1 className = "text-center">Increasing Trends 6 Month</h1>
            <h2 className = "text-center">Increasing at least 2% Net</h2>
            <div className = "flex border border-4 border-blue-300 justify-around h-4/6">
                {trends(six_month_data)}
            </div>
        </div>
    
    </div>
  );
}

export default Trends;
