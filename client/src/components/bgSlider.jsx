import React from 'react'
import { assets } from '../assets/assets';

const BgSlider = () => {


    const  [sliderPosition, setSliderPosition] = React.useState(40);
    const handleSliderChange = (e) => {
      setSliderPosition(e.target.value)
    }



  return (
    <div>
       {/* title text here  */}
       <h1 className='mb-12 sm:mb-20 text-center text-2xl md:text-3xl lg:text-4xl mt-1 font-semibold bg-linear-to-r from-gray-900 to-gray-500 bg-clip-text text-transparent'>Remove Background With High <br /> Quality and Accuracy </h1>

       <div className='relative w-full max-w-3xl m-auto overflow-hidden rounded-xl'>
        {/* Background image slider here */}

        <img src={assets.image_w_bg} style={{clipPath:`inset(0 ${100.2 - sliderPosition}% 0 0 )`}} alt="background-image" />

        {/* Foreground Image */}

        <img className='absolute top-0 left-0 w-full h-full' src={assets.image_wo_bg} style={{clipPath:`inset(0 0 0 ${ sliderPosition}% )`}} alt="foreGround-image" />

        {/* Slider Input  */}
        <input className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full z-10 slider' type="range" min="0" max="100" value={sliderPosition} onChange={handleSliderChange} />
       </div>
    </div>
  )
}

export default BgSlider