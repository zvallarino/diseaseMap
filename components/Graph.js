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


  const date_filter = [
        moment(new Date(year_filter, 0)).format('YYYY-MM'),
        moment(new Date(year_filter, 1)).format('YYYY-MM'),
        moment(new Date(year_filter, 2)).format('YYYY-MM'),
        moment(new Date(year_filter, 3)).format('YYYY-MM'),
        moment(new Date(year_filter, 4)).format('YYYY-MM'),
        moment(new Date(year_filter, 5)).format('YYYY-MM'),
        moment(new Date(year_filter, 6)).format('YYYY-MM'),
  ]
  
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
        <canvas id="myChart"></canvas>
        <Line data = {data} width = {100} height = {40} options={options}/>
    </div>
  )
}

export default Graph