import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Testimonials = () => {
  const navigate = useNavigate();
  const heartFailurePrediction = () => {
    navigate("/heartfailureprediction");
  };
  return (
    <section className="py-12 border-y-2 px-6 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto text-center ">
        <h4 className="text-2xl font-semibold text-gray-600 dark:text-gray-200">
          Testimonials
        </h4>
        <h2 className="text-3xl font-bold text-gray-800 mt-2 ">
          What They Say After Using Our Product
        </h2>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
        <div className="bg-white p-6 rounded-lg shadow-lg dark:bg-gray-300">
          <img
            src="/testimonial1.png"
            alt="testimonial"
            className="w-full rounded-md h-72 object-cover"
          />
          <div className="mt-4 ">
            <h3 className="text-lg font-semibold text-gray-800">
              Ramesh Kumar
            </h3>
            <p className="mt-2 text-gray-600 font-semibold">
              The service I felt was very good, the staff and doctors were
              friendly and provided very clear information.
            </p>
            <div className="mt-4 flex items-center">
              <div className="flex">
                <span>⭐</span>
                <span>⭐</span>
                <span>⭐</span>
                <span>⭐</span>
                <span>⭐</span>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg dark:bg-gray-300 ">
          <img
            src="/testimonial2.png"
            alt="testimonial2"
            className="w-full h-72 object-cover rounded-md"
          />
          <div className="mt-4 ">
            <h3 className="text-lg font-semibold">Suresh Kumar</h3>
            <p className="mt-2 text-gray-600 font-semibold">
              {" "}
              It was a great experience with their platform,the staff and
              doctors were quite supportive.
            </p>
            <div className="mt-4 flex items-center">
              <div className="flex">
                <span>⭐</span>
                <span>⭐</span>
                <span>⭐</span>
                <span>⭐</span>
                <span>⭐</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12">
        <div className="bg-blue-300 flex text-white py-12 px-6 rounded-lg shadow-md max-w-7xl mx-auto text-center">
          <div className="border">
            <h3 className="text-2xl font-bold border">
              Let's Consult Your Health With Our Model
            </h3>
            <p className="mt-2">We Will Provide The Best Service.</p>
          </div>
          <button
            className="mt-6 px-4 py-1 bg-red-400 text-white rounded-lg hover:bg-red-500"
            onClick={heartFailurePrediction}
          >
            Try Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
