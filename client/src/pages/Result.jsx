import React from 'react'
import { assets } from '../assets/assets'

function Result() {
  return (
    <div className='mx-4 my-3 lg:mx-44 mt-14 min-h-[75vh]'>
      <div className='bg-white rounded-lg px-8 py-6 drop-shadow-sm'>
        {/* ..........Image Container.......... */}
        <div className='flex flex-col sm:grid grid-cols-2 gap-8'>
          {/* Left sidwe image container */}

          <div>
            <p className='font-semibold text-gray-600 mb-2'>Original</p>
            <img className='rounded-md border border-gray-200' src={assets.image_w_bg} alt="" />
          </div>

          {/* Right side image container */}
          <div>
            <p>Background Removed</p>
            <img src={assets.image_wo_bg} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Result