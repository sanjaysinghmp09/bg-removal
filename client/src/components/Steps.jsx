import React from 'react'
import { assets } from '../assets/assets'

const Steps = () => {
  return (
    <div className='mx-4 lg:mx-44 py-20 xl:py-40'>

      <h1 className='text-center text-2xl md:text-3xl lg:text-4xl mt-1 font-semibold bg-linear-to-r from-gray-900 to-gray-500 bg-clip-text text-transparent'>
        Steps to remove background <br /> image in second
      </h1>

      <div className='flex items-start flex-wrap gap-4 mt-16 xl:mt-24 justify-center'>

        {/* STEP 1 */}
        <div className='group relative flex items-start gap-4 bg-white p-7 pb-10 rounded 
                        border border-gray-200
                        transition-all duration-300 ease-out
                        hover:-translate-y-3
                        hover:border-gray-900
                        hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)]'>

          {/* glow */}
          <div className='absolute inset-0 rounded opacity-0 group-hover:opacity-100 transition duration-300 
                          bg-linear-to-r from-gray-200/40 to-gray-400/30 blur-xl -z-10'></div>

          <img
            className='max-w-9 transition-all duration-300 
                       group-hover:scale-125 group-hover:-rotate-6'
            src={assets.upload_icon}
            alt="upload"
          />

          <div>
            <p className='text-xl font-medium transition-colors duration-300 group-hover:text-black'>
              Upload Image
            </p>
            <p className='text-sm text-neutral-500 mt-1 transition-colors duration-300 group-hover:text-neutral-700'>
              This is a demo text , will replace it later. <br /> this is demo..
            </p>
          </div>
        </div>

        {/* STEP 2 */}
        <div className='group relative flex items-start gap-4 bg-white p-7 pb-10 rounded 
                        border border-gray-200
                        transition-all duration-300 ease-out
                        hover:-translate-y-3
                        hover:border-gray-900
                        hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)]'>

          <div className='absolute inset-0 rounded opacity-0 group-hover:opacity-100 transition duration-300 
                          bg-linear-to-r from-gray-200/40 to-gray-400/30 blur-xl -z-10'></div>

          <img
            className='max-w-9 transition-all duration-300 
                       group-hover:scale-125 group-hover:rotate-6'
            src={assets.remove_bg_icon}
            alt="remove"
          />

          <div>
            <p className='text-xl font-medium transition-colors duration-300 group-hover:text-black'>
              Remove Background
            </p>
            <p className='text-sm text-neutral-500 mt-1 transition-colors duration-300 group-hover:text-neutral-700'>
              This is a demo text , will replace it later. <br /> this is demo..
            </p>
          </div>
        </div>

        {/* STEP 3 */}
        <div className='group relative flex items-start gap-4 bg-white p-7 pb-10 rounded 
                        border border-gray-200
                        transition-all duration-300 ease-out
                        hover:-translate-y-3
                        hover:border-gray-900
                        hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)]'>

          <div className='absolute inset-0 rounded opacity-0 group-hover:opacity-100 transition duration-300 
                          bg-linear-to-r from-gray-200/40 to-gray-400/30 blur-xl -z-10'></div>

          <img
            className='max-w-9 transition-all duration-300 
                       group-hover:scale-125 group-hover:-rotate-6'
            src={assets.download_icon}
            alt="download"
          />

          <div>
            <p className='text-xl font-medium transition-colors duration-300 group-hover:text-black'>
              Download Image
            </p>
            <p className='text-sm text-neutral-500 mt-1 transition-colors duration-300 group-hover:text-neutral-700'>
              This is a demo text , will replace it later. <br /> this is demo..
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Steps
