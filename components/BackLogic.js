import React from 'react'
import { useState, useContext } from "react";
import { GraphContext } from '../contexts/GraphContext';

function BackLogic() {

    const { alldata } = useContext(GraphContext)

    console.log( alldata )
  return (
    <div>BackLogic</div>
  )
}

export default BackLogic