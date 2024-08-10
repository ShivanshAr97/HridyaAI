import React from 'react'
import { FaInstagram, FaLinkedin, FaMailBulk, FaPhone } from 'react-icons/fa'
import {MdEmail} from 'react-icons/md';
const Footer = () => {
  return (
   <footer className='py-10 text-gray-800 bg-blue-50 dark:bg-gray-800 dark:text-gray-300'>
    <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8'>
    <div className='flex flex-col items-start'>
    <img src="/logo.png" alt="logo" className='mb-4 w-32'/>
    <p className='text-xl inline-flex items-center gap-3 px-2'><span><FaPhone/></span> +91 9999999999  </p>
    </div>
    <div>
        <h3 className='font-bold mb-4 text-xl'>Contact Us</h3>
        <ul className='space-y-2'>
            <li className='text-gray-600 inline-flex items-center hover:text-gray-800 hover:cursor-pointer gap-1 text-lg dark:text-gray-200 dark:hover:text-gray-400'><FaInstagram className='ml-2'/> Instagram </li>
            <li className=' text-gray-600 flex items-center hover:text-gray-800 hover:cursor-pointer gap-1 text-lg dark:text-gray-200 dark:hover:text-gray-400'><MdEmail className='ml-2'/> HridyaAI@gmail.com </li>
            <li className='text-gray-600 flex items-center hover:text-gray-800 hover:cursor-pointer gap-1 text-lg dark:text-gray-200 dark:hover:text-gray-400'><FaLinkedin className='ml-2'/> LinkedIn </li>
        </ul>
    </div>
    <div>
          <h3 className="font-bold mb-4 text-xl ">Get Daily Updates</h3>
          <form className="flex gap-4">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="p-2 border rounded-md w-full"
            />
            <button className="bg-green-600 text-white px-6 rounded-md hover:bg-green-700 ">
              Subscribe
            </button>
          </form>
        </div>
    <div>

    </div>
    </div>
   </footer>
  )
}

export default Footer
