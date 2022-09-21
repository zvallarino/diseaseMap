import React from 'react'
import { useState, useContext } from "react";
import { GraphContext } from '../contexts/GraphContext';
import InputField from './InputField';
import CheckBox from './CheckBox';

function MapLegend() {

  const { setGraphTrends,ALL_DISEASES } = useContext(GraphContext)
  const list_of_times = [[1,"3 Months"],[2,"6 Months"],[3,"1 Year"],[4, "2 Years"],[5, "5 Years"],[6,"All"]]

  return (
    <>
      <div className=' border border-4 border-gray-400 '>
 
            <button 
            className='w-1/2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
            onClick = {()=>setGraphTrends(false)}
            >Graph</button>
            <button 
            className='w-1/2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
            onClick = {()=>setGraphTrends(true)}
            >Trends</button>
        
        <div className='font-bold'>Disease</div>
          <ul>
            {ALL_DISEASES.map((disease,index) => <CheckBox index ={index} item = {disease} type = {"disease"}/>)}
          </ul>

        <div className='font-bold'>Timeframe</div>
          <ul>
            {list_of_times.map((time,index) => <CheckBox index ={index} item = {time} type = {"time"}/>)}
          </ul>

        <div className='font-bold'>Air Travel</div>
          <CheckBox index = {0} item = {"Show Air Travel"} type ={"air"} />
        <InputField />
      </div >
    </>
  )
}

export default MapLegend