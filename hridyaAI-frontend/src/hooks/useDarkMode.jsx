import React, { useEffect, useState } from 'react'

const useDarkMode = () => {
    const [darkMode,setDarkMode]=useState("light");
    useEffect(()=>{
        if(darkMode==="dark"){
            document.documentElement.classList.add("dark");
        }
        else{
            document.documentElement.classList.remove("dark");
        }
    },[darkMode])

    const toggleDarkMode=()=>{
        setDarkMode(darkMode==="dark"?"light":"dark");
    }
    return [darkMode,toggleDarkMode];
}

export default useDarkMode