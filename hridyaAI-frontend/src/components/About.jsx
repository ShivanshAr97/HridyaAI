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
      <div className="text-center md:text-left max-w-xl md:w-1/2 md:-ml-8">
        <h4 className="font-semibold text-gray-600 dark:text-gray-200 text-2xl font-nunito ">About Us</h4>
        <h2 className="text-4xl font-bold py-2 leading-left dark:text-gray-200">We Help Your Health</h2>
        <p className="mt-4 text-gray-600 dark:text-gray-200 text-justify">
        हृदयAI is an advanced machine learning project designed to predict the risk of heart failure readmissions within 30 days of hospital discharge. <br />
        By analyzing comprehensive patient data, Hridya AI aims to identify individuals at high risk of readmission, enabling targeted interventions that can reduce mortality rates and alleviate financial burdens on patients and healthcare systems. <br />
        Utilizing a dataset with various medical records and heart failure diagnosis codes, our project integrates data analysis with predictive modeling to offer actionable insights for improved patient care and optimized healthcare resource management.
        </p>
      </div>
    </main>
  );
};

export default About;
