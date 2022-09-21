import React from 'react'

function CheckBox({index,item,type}) {

    const currentClicked = []

    const clicker = (e,illness,type)=>{

        if(type == "disease")
        {if(currentClicked.includes(illness)){
          const indexZ = currentClicked.indexOf(illness)
          currentClicked.splice(indexZ, 1)
        }else{
          currentClicked.push(illness)
        }}

        if(type == "time"){}

        if(type == "air"){
            
        }
   
      }

  return (
    <div className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
    <input
      id={`checkbox-item-${index}`}
      type="checkbox"
      value=""
      onClick={(e)=>clicker(e,item,type)}
      className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
    />
    <label
      for={`checkbox-item-${index}`}
      className="ml-2 w-full text-sm font-medium text-gray-900 rounded dark:text-gray-300"
    >
        {item}
        </label>
    </div>
  )
}

export default CheckBox