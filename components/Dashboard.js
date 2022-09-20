import { collection } from 'firebase/firestore';
import React, { useState, useContext } from 'react'
import { useCollection } from 'react-firebase-hooks/firestore';
import { db } from '../firebase';
import GraphOrTrends from './GraphOrTrends';
import MapLegend from './MapLegend';
import Module from './Module';
import { GraphContext } from '../contexts/GraphContext';

function Dashboard() {
    const [graphTrends, setGraphTrends] = useState(false)
    const { graphDisplay } = useContext(GraphContext)

    //Pull Data
    const stepOneRef = collection(db,"diseases")
    const [allData] = useCollection(stepOneRef)
    const recipient = allData?.docs.map(doc => doc.data())
    //Pull Data


  return (
    <>
   
          <div className = "col-start-2 col-span-1 row-start-3 row-span-3 border border-8 border-green-500">
            {graphDisplay && <MapLegend />}
          </div>
          <div className = {graphDisplay?"col-start-3 col-span-4 row-start-2 row-span-5 border border-8 border-yellow-500":"col-start-4 col-span-1 row-start-2 row-span-5 border border-8 border-yellow-500"}>
              {!graphDisplay && <Module  />}
              {graphDisplay && <GraphOrTrends />}
          </div>
  
    </>
  )
}

export default Dashboard