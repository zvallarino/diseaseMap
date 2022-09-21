import { collection, doc, writeBatch } from "firebase/firestore";
import { DateTime } from "luxon";
import React, { useEffect } from 'react'
import { db } from "../firebase";

function Seeding() {
  const differenceInMonths = (obj) => {
    const diffInMonths = obj.endDate.diff(obj.startDate, 'months');}

  function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }


  function dateMaker(){
    const firstDate = DateTime.fromISO("2017-01-01");
    const lastDate = DateTime.now()
    const difference = lastDate.diff(firstDate,"months").toObject()
    const differenceInMonths = Math.floor(difference.months)
    const all_diseases = ["E.Coli","Chlamydia","HIV"]
    let i = 0
    let batchTest = []

    while(i < all_diseases.length){
      console.log(all_diseases[i])
    }

    // while(i<differenceInMonths){
    //   for(const element in all_diseases){
    //     batchTest.push({
    //      "name":all_diseases[element],
    //      "case_count":getRandomInt(0,150), 
    //      "date":firstDate.plus({months: i}).toISO()})
    //   }
    //   i++
    // }

    // const batch = writeBatch(db);
    //     batchTest.forEach((item) => {
    //       const docRef = doc(collection(db, "diseases"));
    //       batch.set(docRef, item)
    //     });
        
        // batch.commit();

        console.log(batchTest)
  }

  useEffect(() => {dateMaker()}, [])
  
  return (
    <div>Seeding</div>
  )
}

export default Seeding
