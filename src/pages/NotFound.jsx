import React from 'react'
import images from '../assets/asserts'
function NotFound() {
  return (
   <div className='min-h-screen bg-[#0F172A] text-white'>
      <div className="flex justify-center">
        <img 
          src={images.not_found} 
          alt="not found" 
          className='h-80 w-100 mt-23'
        />
      </div>
      <h1 className="text-3xl font-semibold pt-10 text-center">
        No Repositories Found!
      </h1>
    </div>
    
    
  )
}

export default NotFound