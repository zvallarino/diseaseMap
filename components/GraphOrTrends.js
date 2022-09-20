import React, { useContext } from 'react'
import Graph from './Graph'
import Trends from './Trends'
import { useState, createContext } from "react";
import { GraphContext } from '../contexts/GraphContext';

function GraphOrTrends() {

    const { graphTrends } = useContext(GraphContext)
  return (
    <>
        {graphTrends?<Trends />:<Graph />}
    </>
  )
}

export default GraphOrTrends