import React from 'react'

const Services = () => {
  return (
   <section className='bg-blue-50 py-12 dark:bg-gray-800'>
    <div className='text-center mb-10'>
    <h3 className='text-lg font-semibold text-gray-700'></h3>
    <p className='font-xl text-black font-semibold dark:text-gray-200 text-2xl font-pjs '>Our Services</p>
    <h2 className="text-3xl font-bold text-gray-600 dark:text-gray-400 font-poppins">3 Easy Steps To Care Your Heart</h2>
    </div>
    <div className='flex flex-col items-center justify-center md:flex-row space-y-6 md:space-y-0 md:space-x-8'>
        <div className='flex flex-col items-center bg-white p-14 rounded-lg shadow-md dark:bg-slate-400'>
           <img src='/healthcare1.png' alt="" />
            <h3 className="text-2xl font-semibold mb-2 dark:text-gray-100 font-cardo">Step 1</h3>
            <p className="text-gray-500 text-center text-xl dark:text-gray-300">Choose What Date To Check</p>
        </div>

        <div className="flex flex-col items-center bg-white p-14 rounded-lg shadow-md dark:bg-slate-400">

            <img src='/healthcare2.png' alt="healthcare2" />
          <h3 className="text-2xl font-semibold mb-2 dark:text-gray-100 font-cardo">Step 2</h3>
          <p className="text-gray-500 text-center text-xl dark:text-gray-300">Choose What Poly To Check</p>
        </div>
        <div className='flex flex-col items-center bg-white p-14 rounded-lg shadow-md dark:bg-slate-400'>

                <img src='/doctor2.png' alt="doctor2" />
            <h3 className='text-2xl font-semibold mb-2 dark:text-gray-100 font-cardo'>Step 3</h3>
            <p className=' text-gray-500 text-center text-xl dark:text-gray-300'>And Choose doctor to check</p>
        </div>
    </div>
   </section>
  )
}

export default Services