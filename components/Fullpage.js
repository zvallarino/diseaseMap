import React, { useEffect } from 'react'
import Dashboard from './Dashboard'
import Header from './Header'
import { useState, createContext } from "react";
import { GraphContext } from '../contexts/GraphContext';
import { collection } from 'firebase/firestore';
import { useCollection } from 'react-firebase-hooks/firestore';
import { db } from '../firebase';
import Seeding from './Seeding';



function Fullpage() {

    const ALL_DISEASES =  ["E.Coli","Chlamydia","HIV"]
    const [graphDisplay, setShowGraph] = useState(true)
    const [graphTrends, setGraphTrends] = useState(false)
    const [dataset, setDateSet] = useState([])
    const [airTravel, setAirTravel] = useState(false)
    const [list_of_diseases, setDiseaseData] = useState(["E.Coli","Chlamydia","Syphilis","HIV","Polio","Malaria","Tuberculosis","Influenza","Monkey Pox"])
    const [graphStartDate, setStartDate] = useState("")
    const [graphEndDate, setEndDate] = useState("")

    //Pull Data
        const stepOneRef = collection(db,"diseases")
        const [allData] = useCollection(stepOneRef)
        const alldata = allData?.docs.map(doc => doc.data())

     

  return (
    <>
        <GraphContext.Provider value = {{
          ALL_DISEASES,
          list_of_diseases,graphDisplay,
          setShowGraph,graphTrends,
          setGraphTrends, setDateSet, 
          dataset, alldata, 
          airTravel, setAirTravel,
          graphStartDate, setStartDate,
          graphEndDate, setEndDate,
          setDiseaseData

          }}>
            <Header />
            <Dashboard />
        </GraphContext.Provider>
    </>
  )
}

export default Fullpage