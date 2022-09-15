import React from 'react'
import Image from 'next/image'

function Header() {
  return (
    <div> 
        <div className = 'flex border border-8 border-purple-500'>
          <div className = "border border-8 border-red-500">
              <Image
              src = "https://upload.wikimedia.org/wikipedia/commons/c/c2/Population_Council_Logo.png"
              alt="Picture of the author"
              width={200}
              height={200}
              />
          </div>
         <div className="flex-1 border border-8 border-green-500">
              <div className='flex items-center justify-center border border-4 border-blue-400 h-1/2'>Population Council</div>
              <div className='flex items-center justify-center border border-4 border-blue-400 h-1/2'>Infection Disease Tracker</div>
         </div>
        </div>
    </div>
  )
}

export default Header