import React from 'react'
import { FaMoon, FaSun } from "react-icons/fa";
import useDarkMode from '../hooks/useDarkMode';


const Navbar = () => {
   const [darkMode,setDarkMode]=useDarkMode("light");
    const toggleDarkMode=()=>{
        setDarkMode(!darkMode);
    }
  return (
    <div className='bg-white text-black dark:bg-slate-800 '>
        <header className='flex items-center justify-between px-6 py-4 '>
            <div className='flex items-center cursor-pointer'>
                <img src='/logo.png' alt="Logo" 
                width={120}
                height={50}
                style={{objectFit:"cover"}}
                onClick={() => window.location.reload()}
                />
            </div>
            <nav className='flex space-x-8 text-lg font-medium '>
                <a href="" className='font-bold text-black dark:text-white '>Home</a>
                <a href="#about" className='hover:font-bold text-gray-600 hover:text-black dark:text-gray-200 dark:hover:text-gray-500'>About</a>
                <a href="#footer" className='hover:font-bold  text-gray-600 hover:text-black dark:text-gray-200 dark:hover:text-gray-500'>Features</a>
            </nav>
            <button className='text-2xl' onClick={toggleDarkMode}>
           {darkMode==="light"?<FaMoon/>:<FaSun className='text-white'/>} 
            </button>
        </header>
    </div>
  )
}

export default Navbar