
import { DateTime } from 'luxon';
import moment from 'moment';
import React, { useState } from 'react'

function InputField() {

    function checkDate(str){
        var regex = /^(1[0-2]|0[1-9]|\d)\/(20\d{2}|19\d{2}|0(?!0)\d|[1-9]\d)$/;
        var result = regex.test(str);
        return result
    }

    const [inputs, setInputs] = useState({});

    let practiceStartDate = "08/20"

    let practiceEndDate = "09/22"

    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
    }

    const handleSlash = (str) => {
        const v = str.split("/")
        console.log(v)
        console.log(v)

        if(v[1].length == 2){
           return parseInt(v[1])<17
        } 
        
        if(v[1].length == 4) {
            return parseInt(v[1])<2017
         }
    }

    const checkStartAndEnd = (start,end) =>{
        console.log(start)
        console.log(end)

        start = converter(start)
        end = converter(end)
        start = converterTwo(start)
        end = converterTwo(end)

        return (start > end)

      
        const diffInMonths = end.diff(start, 'months');
        console.log(diffInMonths.values.months)

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
        return dateZ
    }

    const converterTwo = (date) =>{
        return date = DateTime.fromISO(`${date[1]}-${date[0]}-01`);
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        if(!checkDate(inputs.startDate)){
            alert("Start date is not in the correct format")
        } else if (!checkDate(inputs.endDate)){
            alert("End date is not in the correct format")
        } else if(handleSlash(inputs.startDate)){
            alert("Date needs to be past 2017")
        } else if(checkStartAndEnd(practiceStartDate,practiceEndDate)){
            alert("Start Date is after End Date")
        }
        else {
            alert("Correct Everything")
        }
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