import React from 'react'
import Image from 'next/image'

function Header() {
  return (
    <> 
      
          <div className = "border border-8 border-purple-400 col-start-2 col-span-1">
              <Image
              src = "https://www.popcouncil.org/assets/img/about/pc-brand.png"
              alt="Picture of the author"
              width={175}
              height={175}
              />
          </div>

         <div className=" border border-8 border-blue-400 col-start-3 col-span-3">
                <div className=' border border-4 border-blue-400 h-1/2 text-center text-6xl'>Population Council</div>
                <div className='border border-4 border-blue-400 h-1/2  text-center text-4xl'>Infection Disease Tracker</div>
         </div>

    </>
  )
}

export default Header