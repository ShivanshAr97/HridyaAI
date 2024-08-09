import React from 'react'
import logo from '../assets/logo.svg';
const Navbar = () => {
  return (
    <div className='min-h-screen bg-gradient-to-r from blue-50 to-white '>
        <header className='flex items-center justify-between px-6 py-4 border-b'>
            <div className='flex items-center'>
                <img src={logo} alt="Logo" 
                width={100}
                height={50}
                style={{aspectRatio:"100/50" ,objectFit:"cover"}}
                />
            </div>
            <nav className='flex space-x-8 text-lg font-medium'>
                <a href="#" className='text-black font-bold'>Home</a>
                <a href="#" className='text-gray-500 hover:font-bold hover:text-black'>About</a>
                <a href="#" className='text-gray-500 hover:font-bold hover:text-black'>Features</a>
            </nav>

        </header>
    </div>
  )
}

export default Navbar