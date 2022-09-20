import React from 'react'
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

  const { dataset } = useContext(GraphContext)


  const data_sets = [ {
    label: 'Polio Case Count',
    data: [12, 18, 22, 33, 44, 55, 22, 77],
    borderWidth: 1,
    fill: false,
    borderColor: 'red'
  },
  {
    label: 'Malaria Case Count',
    data: [12, 2, 13,40,50,40,20,20],
    borderWidth: 1,
    fill: false,
    borderColor: 'green'
  },
  {
    label: 'Tuberculosis Case Count',
    data: [14, 17, 16, 15, 13, 9, 6, 2],
    borderWidth: 1,
    fill: false,
    borderColor: 'orange'
  },
  {
    label: 'Monkey Pox Case Count',
    data: [20, 19, 13, 12, 8, 6, 8, 9],
    borderWidth: 1,
    fill: false,
    borderColor: 'purple'
  },]
  const year_filter = 2021
  const month_start = 12
  const month_end = 5

function monthDiff(dateFrom, dateTo) {
 return dateTo.getMonth() - dateFrom.getMonth() + 
   (12 * (dateTo.getFullYear() - dateFrom.getFullYear()))
}

// console.log(monthDiff(new Date(2020,11),new Date(2022,0)))

// console.log(new Date())


  const date_filter = dataset
  
  const data = {
    labels: date_filter,
    datasets: data_sets
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
    </div>
  )
}

export default Graph