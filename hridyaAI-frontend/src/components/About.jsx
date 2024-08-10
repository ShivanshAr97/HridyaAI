import React from "react";

const About = () => {
  return (
    <main className="flex flex-col-reverse items-center justify-evenly py-20 md:flex-row w-full dark:bg-slate-800">
      <div className="max-w-lg md:w-1/2">
        <img
          src="/doctor3.png"
          alt="doctor3"
          width={400}
          height={300}
          className="relative z-10"
          style={{ aspectRatio: "500/500", objectFit: "cover" }}
        />
      </div>
      <div className="text-center md:text-left max-w-md md:w-1/2 md:ml-8">
        <h4 className="font-semibold text-gray-800 dark:text-gray-200 text-2xl font-nunito ">About Us</h4>
        <h2 className="text-4xl font-bold py-2 leading-left dark:text-gray-200">We Help Your Health</h2>
        <p className="mt-4 text-gray-400 dark:text-gray-200">
          This profile describes the activities of health services and medical
          support as well as the facilities and conditions of the General
          Hospital which is reflected in the general public served from all
          groups, religions and beliefs, ethnicity and the level and frequency
          of bed occupancy which continues to increase significantly.
        </p>
        <button className="text-lg rounded-lg mt-6 bg-red-500 text-white hover:bg-red-600 border-black z-10  border-b border-collapse px-8 py-4">
         More About Us
        </button>
      </div>
    </main>
  );
};

export default About;
