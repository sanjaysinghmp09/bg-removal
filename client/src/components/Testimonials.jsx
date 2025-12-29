import React from 'react'
import { testimonialsData } from '../assets/assets'

function Testimonials() {
  return (
    <div>
        {/* Title */}
        <h1 className='mb-12 sm:mb-20 text-center text-2xl md:text-3xl lg:text-4xl mt-1 font-semibold bg-linear-to-r from-gray-900 to-gray-500 bg-clip-text text-transparent py-5'>What Our Customers Say <br /> About Us </h1>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto px-4 py-8'>
            {testimonialsData.map((item, index) => (
                <div key={index} className='bg-white rounded-xl p-6 drop-shadow-md'>
                    <p className='text-gray-700 italic mb-4'> "</p>
                    <p className='text-gray-800 text-lg mb-4'> {item.text} </p>
                    
                    <div>
                        <img src={item.image} alt="itemImage" />
                        <div>
                            <p>{item.author}</p>
                            <p>{item.jobTitle}</p>

                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Testimonials