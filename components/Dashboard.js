import { collection } from 'firebase/firestore';
import React, { useState } from 'react'
import { useCollection } from 'react-firebase-hooks/firestore';
import { db } from '../firebase';
import Graph from './Graph';
import Module from './Module';

function Dashboard() {
    const [posts,setPosts] = useState([]);
    const [graphDisplay, setShowGraph] = useState(false)

    const stepOneRef = collection(db,"diseases")
    const [allData] = useCollection(stepOneRef)
    const recipient = allData?.docs.map(doc => doc.data())

    const showGraph = (e) => {
        console.log("hello world")
        setShowGraph(dogs => !dogs)
      }

  return (
    <>
        {!graphDisplay && <Module showGraph ={showGraph} />}
        {graphDisplay && <Graph />}
    </>
  )
}

export default Dashboard