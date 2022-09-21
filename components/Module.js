import { DateTime } from "luxon";
import React, { useEffect } from "react";
import { useState, useContext } from "react";
import { GraphContext } from '../contexts/GraphContext';

function Module() {

  const { setShowGraph, setAirTravel, list_of_diseases, setStartDate, setEndDate, setDiseaseData } = useContext(GraphContext)
  const [dogs, setDogs] = useState(true);
  const today = DateTime.now()


  const list_of_times = [
    [today.minus({ months: 3 }).toISO(),"3 Months"],[today.minus({ months: 6 }).toISO(),"6 Months"],[today.minus({ years: 1 }).toISO(),"1 Year"],[today.minus({ years: 2 }).toISO(), "2 Years"],[today.minus({ years: 3 }).toISO(), "3 Years"],[today.minus({ years: 4 }).toISO(),"All"]]

  // const list_of_times = [1,"3 months"]
  const currentClicked = []
  const timeClicked = []



  const clicker = (e,illness)=>{
    if(currentClicked.includes(illness)){
      const index = currentClicked.indexOf(illness)
      currentClicked.splice(index, 1)
    }else{
      currentClicked.push(illness)
    }
  }

  const timeClicker = (e,times) => {
    if(timeClicked.length > 0){
      timeClicked.pop()
    }
    timeClicked.push(times[0])
  }


  const airTravelFunction = (e)=>{
    console.log("i am firing")
    if(e.target.checked){
      setAirTravel(true)
    }else{
      setAirTravel(false)
    }
  }


  const handleSubmit = (e) => {
    e.preventDefault();  
    setDiseaseData(currentClicked) 
    setStartDate(timeClicked)
    setEndDate(today.toISO())
    setShowGraph(true)


     console.log('I am working')
  }

  const diseaseMap = (arr_of_diseases) => {
    return arr_of_diseases.map((disease,index) => {return(
     <li>
        <div className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
        <input
          id={`checkbox-item-${index}`}
          type="checkbox"
          value=""
          onClick={(e)=>clicker(e,disease)}
          className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
        />
        <label
          for={`checkbox-item-${index}`}
          className="ml-2 w-full text-sm font-medium text-gray-900 rounded dark:text-gray-300"
        >
          {disease}
        </label>
      </div>
     </li>
  )})
  }

  const timeMap = (arr_of_times) =>{
return list_of_times.map(times => {
  return(
 <option 
 value={times[0]}
 onClick={(e)=>timeClicker(e,times[0])}
 >{times[1]}</option>)
})}
  return (
    <>
     <div className = "flex-col">
        <form onSubmit={handleSubmit}>
          <div class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Select a disease(s) you would like to track</div>
          <div
            id="dropdownBgHover"
            class={
              dogs ? "z-10 w-48 bg-white rounded shadow dark:bg-gray-700" : "hidden"
            }
          >
            <ul
              className="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownBgHoverButton"
            >
             {diseaseMap(list_of_diseases)}
            </ul>
          </div>
    
          <label
            for="countries_multiple"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Select a timeframe
          </label>
          <select
            multiple
            id="countries_multiple"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>Choose a period</option>
            {timeMap()}
          </select>
    
          <div className="flex items-center">
            <input
              id="link-checkbox"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              onChange = {(e)=>airTravelFunction(e)}
            />
            <label
              for="link-checkbox"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              {" "}
              Include travel data
            </label>
          </div>
    
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            type = "submit"
          >
            Show Graph
          </button>
        </form>
     </div>
    </>
  );
}

export default Module;
