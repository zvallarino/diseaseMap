import { collection } from 'firebase/firestore';
import React, { useEffect } from 'react'
import { useState, useContext } from "react";
import { useCollection } from 'react-firebase-hooks/firestore';
import { GraphContext } from '../contexts/GraphContext';
import { db } from '../firebase';

function BackLogic() {
    

  useEffect(() => {
  
    return () => {
     
    }
  }, [])
  


  return (
    <div>BackLogic</div>
  )
}

export default BackLogic