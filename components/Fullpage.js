import React from 'react'
import Dashboard from './Dashboard'
import Header from './Header'
import { useState, createContext } from "react";
import { GraphContext } from '../contexts/GraphContext';



function Fullpage() {

    const list_of_diseases = ["E.Coli","Chlamydia","Syphilis","HIV","Polio","Malaria","Tuberculosis","Influenza","Monkey Pox"]
    const [graphDisplay, setShowGraph] = useState(false)
    const [graphTrends, setGraphTrends] = useState(false)

    

  return (
    <>
        <GraphContext.Provider value = {{list_of_diseases,graphDisplay,setShowGraph,graphTrends,setGraphTrends}}>
            <Header />
            <Dashboard />
        </GraphContext.Provider>
    </>
  )
}

export default Fullpage