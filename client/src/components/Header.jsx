import React from 'react'
import {assets} from '../assets/assets'

function Header() {
  return (
    <div className='flex items-center justify-between max-sm:flex-col-reverse gap-y-10 px-4 mt-10 lg:px-44 sm:mt-20'>
      {/* left side  */}
      <div >
            <h1 className='text-4xl xl:text-5xl 2xl:text-6xl font-bold text-neutral-700 leading-tight'>
              
              Remove the <br /> <span className='bg-linear-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent'>background</span> from <br /> images for free 
            
            </h1>
            <p>Remove the background from your images <br /> with our free online tool</p>
            <div>
              <input type="file" name='' id='upload1' hidden />
              <label htmlFor="upload1">
                <img src= {assets.upload_btn_icon} alt="upload-icon" />
                <p>Upload your image</p>
              </label>
            </div>
      </div>

      {/* right side  */}
      <div>

      </div>
    </div>
  )
}

export default Header