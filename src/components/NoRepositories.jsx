import React from 'react'
import images from '../assets/asserts'
function NoRepositories() {
  return (
    <div className="text-center mt-12">     
      <div className="flex justify-center mt-12">
        <img 
          src={images.no_repo} 
          alt="no_repo" 
          className='h-80 w-100'
        />
      </div>
      <h1 className="text-3xl font-semibold pt-10">
        No Repositories Found!
      </h1>
    </div>
  )
}

export default NoRepositories