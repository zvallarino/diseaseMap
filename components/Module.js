import React, { useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Bar, Line, Scatter, Bubble } from "react-chartjs-2";
import moment from "moment";
import { db } from "../firebase";
import { useCollection } from "react-firebase-hooks/firestore";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
  snapshotEqual,
  where,
  writeBatch,
} from "firebase/firestore";
import { useState, useContext } from "react";
import { GraphContext } from '../contexts/GraphContext';

function Module() {

  const { setShowGraph } = useContext(GraphContext)
  
  const [dogs, setDogs] = useState(true);
  const list_of_diseases = ["E.Coli","Chlamydia","Syphilis","HIV","Polio","Malaria","Tuberculosis","Influenza","Monkey Pox"]
  const list_of_times = [[1,"3 Months"],[2,"6 Months"],[3,"1 Year"],[4, "2 Years"],[5, "5 Years"],[6,"All"]]
  const onClick = (e) => {
    setDogs(dogs);
  };

  const diseaseMap = (arr_of_diseases) => {
    return arr_of_diseases.map((disease,index) => {return(
     <li>
        <div className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
        <input
          checked
          id={`checkbox-item-${index}`}
          type="checkbox"
          value=""
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
 <option value={times[0]}>{times[1]}</option>)
})}
  return (
    <>
     <div className = "flex-col">
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
          onClick={()=>setShowGraph(true)}
        >
          Show Graph
        </button>
     </div>
    </>
  );
}

export default Module;
