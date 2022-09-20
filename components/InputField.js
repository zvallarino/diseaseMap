
import { DateTime } from 'luxon';
import moment from 'moment';
import React, { useState } from 'react'
import { useContext } from "react";
import { GraphContext } from '../contexts/GraphContext';


function InputField() {

    function checkDate(str){
        var regex = /^(1[0-2]|0[1-9]|\d)\/(20\d{2}|19\d{2}|0(?!0)\d|[1-9]\d)$/;
        var result = regex.test(str);
        return result
    }

    const { setDateSet } = useContext(GraphContext)

    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
    }

    const validations = (obj) =>{
        for (const property in obj) {
            if(!checkDate(obj[property])){
                alert(`${property} is not in the correct format`)
                return true
            }else if(handleSlash(obj[property])){
                alert(`We do not have data before 2017, please input a different date`)
                return true
            }
        }
    }

    const copyOfState = (obj) => {
        return {...obj}
    }

    const secondValidations = (obj) => {
        for (const property in obj) {
            obj[property] = converter(obj[property])
        }
        return obj
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        if(validations(inputs)){
            return
        }
        const copyState = copyOfState(inputs)
        copyState = secondValidations(copyState)
        console.log(differenceInMonths(copyState))
        console.log(copyState.startDate.toLocaleString({ month: 'short', year: 'numeric' }))
        setDateSet(daterange(copyState.startDate,differenceInMonths(copyState)))
      }




    const handleSlash = (str) => {
        const v = str.split("/")

        if(v[1].length == 2){
           return parseInt(v[1])<17
        } 
        
        if(v[1].length == 4) {
            return parseInt(v[1])<2017
         }
    }

    const differenceInMonths = (obj) => {
        const diffInMonths = obj.endDate.diff(obj.startDate, 'months');
        return diffInMonths.toObject();
  
    }

    const monthCheck = (month) => {
        if(month.length == 1){
            return `0${month}`
        } else {
            return month
        }
    }

    const yearCheck = (year) => {
        if(year.length == 2){
            year = `20${year}`
            return year
        } else {
            return year
        }
    }

    const converter = (date) => {
        const dateZ = date.split("/")
        dateZ[0] = monthCheck(dateZ[0])
        dateZ[1] = yearCheck(dateZ[1])
        return DateTime.fromISO(`${dateZ[1]}-${dateZ[0]}-01`);
    }

    const daterange = (startdate,difference) =>{
        let i = 0;
        console.log(difference)
        const arrayZ = []
        while(i < difference.months){

            arrayZ.push(startdate.plus({months:i}).toLocaleString({ month: 'short', year: 'numeric' }))
            i++
        }

        return arrayZ
    }


  return (
    <div className="w-72">
        <form onSubmit = {handleSubmit}>
            <label for="large-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Start Date</label>
            <input 
                type = "text"
                placeholder="Enter Month/Year XX/XX"
                name = "startDate"
                value = {inputs.startDate || ""}
                onChange = {handleChange}/>
        
            <label for="large-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">End Date</label>
            <input 
                type = "text"
                placeholder="Enter Month/Year XX/XX"
                name = "endDate"
                value = {inputs.endDate || ""}
                onChange = {handleChange}
                />
            <button type="submit">Press me</button>
        </form>
     </div>
  )
}

export default InputField