import React, { useEffect } from 'react'
import { useState } from 'react'
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
} from "chart.js"
import { Bar, Line, Scatter, Bubble } from "react-chartjs-2"
import moment from 'moment';
import { db } from '../firebase';
import { useCollection } from 'react-firebase-hooks/firestore'
import { addDoc, collection, doc, getDoc, onSnapshot, orderBy, query, serverTimestamp, setDoc, snapshotEqual, where, writeBatch } from 'firebase/firestore';


function Module({showGraph}) {

  const [dogs,setDogs] = useState(false)
  const onClick = (e) => {
    setDogs(!dogs)
  }

  return (
    <>
    {/* <label for="countries_multiple" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Select a disease or multiple disease you would like to track</label>
    <select multiple id="countries_multiple" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option selected>Choose a disease</option>
        <option value="US">All</option>
        <option value="CA">HIV</option>
        <option value="FR">Polio</option>
        <option value="DE">Cancer</option>
    </select> */}


    <label for="countries_multiple" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Select a timeframe</label>
    <select multiple id="countries_multiple" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option selected>Choose a period</option>
        <option value="US">6 Months</option>
        <option value="CA">1 Year</option>
        <option value="FR">2 Years</option>
        <option value="DE">5 Years</option>
        <option value="DE">Since Tracking</option>
    </select>

    <button id="dropdownDividerButton" onClick = {onClick} data-dropdown-toggle="dropdownDivider" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button"> Select a disease(s) you would like to track<svg class="ml-2 w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
    <div id="dropdownBgHover" class={dogs?"hidden":"z-10 w-48 bg-white rounded shadow dark:bg-gray-700"}>
    <ul className="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownBgHoverButton">
      <li>
        <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
          <input id="checkbox-item-4" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
          <label for="checkbox-item-4" className="ml-2 w-full text-sm font-medium text-gray-900 rounded dark:text-gray-300">HIV</label>
        </div>
      </li>
      <li>
        <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
            <input checked id="checkbox-item-5" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
            <label for="checkbox-item-5" className="ml-2 w-full text-sm font-medium text-gray-900 rounded dark:text-gray-300">Polio</label>
          </div>
      </li>
      <li>
        <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
          <input id="checkbox-item-6" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
          <label for="checkbox-item-6" className="ml-2 w-full text-sm font-medium text-gray-900 rounded dark:text-gray-300">Cancer</label>
        </div>
      </li>
      <li>
        <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
          <input id="checkbox-item-6" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
          <label for="checkbox-item-6" className="ml-2 w-full text-sm font-medium text-gray-900 rounded dark:text-gray-300">Heart Disease</label>
        </div>
      </li>
    </ul>
</div>

    <div className="flex items-center">
    <input id="link-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label for="link-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Include travel data</label>
    </div>
   

  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick = {showGraph}>Show Graph</button>
</>
  )
}

export default Module