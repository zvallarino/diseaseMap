import React, { useEffect } from 'react'
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
import { useState, useContext } from "react";
import { GraphContext } from '../contexts/GraphContext';
import { DateTime } from 'luxon';
import BackLogic from './BackLogic';
import Seeding from './Seeding';
import {HIV_OBJECT, ECOLI_OBJECT, FINAL_OBJECT} from "./DummyData"

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Filler,
    Title,
    Title, 
    Tooltip,
    Legend
);

function Graph() {

  const { alldisease, graphStartDate} = useContext(GraphContext)

  const diseaseExample = FINAL_OBJECT
  
 
  useEffect(()=>{
    
  },[])

  const end_date_example = DateTime.now()
  const start_date_example = DateTime.now().minus({years:1}) 

  const rangeGenerator = (startDate, EndDate) => {
  const difference = Math.floor((EndDate.diff(startDate,"months").toObject()).months)
  let i = 0
  let ranger = []
  while (i < difference){
    ranger.push(startDate.plus({months:i}).toLocaleString({ month: 'short', year: 'numeric' }))
    i++
  }
  return ranger
  }

  const uniqueDiseases = (arr) => {
    const answer = []
    for(let i = 0; i<arr.length;i++){
      if(!(answer.includes(arr[i].name))){
        answer.push(arr[i].name)
      }
    }
    return answer
  }

  const dataSort = (arr) => {
    const newObject = {}
    for(let i = 0; i<arr.length; i++){
      if(newObject[arr[i].name]){
        newObject[arr[i].name].push({
          x:arr[i].time, y:arr[i].case_count
        })
      }else{
        newObject[arr[i].name] = [{
          x:arr[i].time, y:arr[i].case_count
        }]
      }
    }
    return (newObject)
  }

  const data_setter = (obj) => {
    const color = ["red", "blue", "green"]
    let i = 0
    const answer = []
    for(const property in obj){
     const newObject = 
      {
        "label":property,
        "data":obj[property],
        "borderWidth": 1,
        "fill": false,
        "borderColor": color[i]
      }
      i++
      answer.push(newObject)
    }
    return answer
  }

  // const data_sets = [ {
  //   label: 'Polio Case Count',
  //   data: [{ x: '2021-11-06',
  //   y: 50},{
  //     x: '2021-11-07',
  //     y: 60
  // }, {
  //     x: '2021-11-08',
  //     y: 50 },],
  //   borderWidth: 1,
  //   fill: false,
  //   borderColor: 'red'
  // }]



function monthDiff(dateFrom, dateTo) {
 return dateTo.getMonth() - dateFrom.getMonth() + 
   (12 * (dateTo.getFullYear() - dateFrom.getFullYear()))
}

// console.log(monthDiff(new Date(2020,11),new Date(2022,0)))

// console.log(new Date())

  const data_set = data_setter(dataSort(diseaseExample))
  // const date_filter = rangeGenerator(start_date_example,end_date_example)
  
  const data = {
    // labels: date_filter,
    datasets: data_set
  }

  const options = {
    responsive: true,
    interaction: {
        mode: 'index',
        intersect: false,
      },
      layout: {
        padding: {
            top: 0
        }
    },
      
    plugins: {
        legend: {
            display: true,
        },
        title: {
            display: true,
            text: 'Infection Disease Chart'
        },
    },
    elements: { 
        line: {
            tension: 0,
            borderWidth:2, 
            borderColor: "rgba(47,97,68, 1)",
            fill: "start", 
            backgroundColor: "rgba(47,97,68,0.3", 
        }, 
        point:{
            radius:0,
            hitRadius:0,
        },
    },
    scales:{
        xAxis: {
            display:true, 
        },
        yAxis: {
            display:true,
        }
    }
  }



  return (
    <div>
        <Line data = {data} width = {200} height = {100} options={options}/>
        <BackLogic />
        <Seeding />
    </div>
  )
}

export default Graph