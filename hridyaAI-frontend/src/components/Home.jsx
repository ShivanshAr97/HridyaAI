import React from "react";
import doctor from '/doctor1 2.png';
import { Link, useNavigate } from "react-router-dom";
const Home = () => {
  const navigate=useNavigate();
  const heartFailurePrediction=()=>{
    // integration of api
    navigate('/heartfailureprediction');
  }
  return (
    <main className='flex flex-col items-center justify-evenly py-20 md:flex-row w-full dark:bg-slate-800'>
      <div className="text-center md:text-left max-w-md">
        <h1 className="text-5xl font-bold leading-right py-2 dark:text-gray-200 font-shrik">
          We Care About Your <span className="text-red-500">Heart</span>
        </h1>
        <p className="mt-4 text-gray-400 dark:text-gray-200 font-pjs">
          Check Now Your Health With Our Professional Doctor, Completed And
          Modern Facilities Services
        </p>
         <button  to='/heartfailureprediction' className="text-xl rounded-lg mt-6 bg-red-500 text-white hover:bg-red-600 border-black z-10  border-b border-collapse px-8 py-4"
        onClick={heartFailurePrediction}>
        Check Now
        </button>
        

      </div>
      <div className="max-w-lg">
      <img
      src={doctor}
      alt="Doctor"
    width={200}
    height={200}
    className="relative z-10"
    style={{ aspectRatio: "400/700", objectFit: "cover" }}
      />
      </div>
     
    </main>
  );
};

export default Home;
