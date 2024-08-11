import React, { useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
const HeartFailurePrediction = () => {
  const [religion, setReligion] = useState("");
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState("");
  const [ethnicity, setEthnicity] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("");
  const [emergencyTime, setEmergencyTime] = useState(0.0);
  const [prediction, setPrediction] = useState(10);

  const selectReligion = [
    "HINDU",
    "NOT SPECIFIED",
    "CATHOLIC",
    "PROTESTANT QUAKER",
    "BUDDHIST",
    "JEWISH",
    "EPISCOPALIAN",
    "OTHER",
    "GREEK ORTHODOX",
    "UNOBTAINABLE",
    "JEHOVAH'S WITNESS",
  ];
  const selectEthnicity = [
    "ASIAN",
    "WHITE",
    "ASIAN-CHINESE",
    "BLACK/AFRICAN AMERICAN",
    "HISPANIC OR LATINO",
    "UNABLE TO OBTAIN",
    "UNKNOWN/NOT SPECIFIED",
  ];
  const selectGender = ["M", "F"];
  const selectMaritalStatus = ["MARRIED", "SINGLE", "WIDOWED", "DIVORCED"];
  const reqArray = {
    religion: religion,
    marital_status: maritalStatus,
    ethnicity:ethnicity,
    emergency_time: parseFloat(emergencyTime),
    gender: gender,
    age: parseInt(age),
  };
  const PredictReAdmission = async () => {
    try {
      const res = await axios.post("http://localhost:5000/predict", reqArray);
      console.log(reqArray);

      console.log("Prediction is successful", res.data);
      setPrediction(res.data.prediction);
    } catch (error) {
      console.log("Error in getting prediction", error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="dark:bg-slate-800 min-h-screen flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 p-6">
          <div className="flex items-center justify-center">
            <img
              src="/heart.png"
              alt=""
              className="w-full h-auto rounded shadow-md "
            />
          </div>
          <div className="space-y-4">
            <h1 className="text-center dark:text-gray-300 text-2xl font-semibold font-shrik">
              Predict the Readmission of Heart Failure Patients
            </h1>
            <div className="flex flex-col">
              <label className="dark:text-gray-300 p-1">Religion</label>
              <select
                value={religion}
                onChange={(e) => setReligion(e.target.value)}
                className="p-2 rounded border dark:bg-slate-200 dark:text-gray-900"
              >
                <option value="">Select Religion</option>
                {selectReligion.map((item, index) => (
                  <option value={item} key={index}>
                    {item}
                  </option>
                ))}
              </select>
              <div className="flex flex-col">
                <label className="dark:text-gray-300 p-1">Age</label>
                <input
                  type="number"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  className="p-2 rounded border dark:bg-slate-200 dark:text-gray-900"
                />
              </div>
              <div className="flex flex-col">
                <label className="dark:text-gray-300 p-1">Gender</label>
                <select
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  className="p-2 rounded border dark:bg-slate-200 dark:text-gray-900"
                >
                  <option value="">Select Gender</option>
                  {selectGender.map((item, index) => (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col">
                <label className="dark:text-gray-300 p-1">Ethnicity</label>
                <select
                  value={ethnicity}
                  onChange={(e) => setEthnicity(e.target.value)}
                  className="p-2 rounded border dark:bg-slate-300 dark:text-gray-900"
                >
                  <option value="">Select Ethnicity</option>
                  {selectEthnicity.map((item, index) => (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col">
                <label className="dark:text-gray-300 p-1">Marital Status</label>
                <select
                  value={maritalStatus}
                  onChange={(e) => setMaritalStatus(e.target.value)}
                  className="p-2 rounded border dark:bg-slate-200 dark:text-gray-900"
                >
                  <option value="">Select Marital Status</option>
                  {selectMaritalStatus.map((item, index) => (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col">
                <label className="dark:text-gray-300 p-1">
                  Emergency Time (hours)
                </label>
                <input
                  type="number"
                  value={emergencyTime}
                  onChange={(e) => setEmergencyTime(e.target.value)}
                  className="p-2 rounded border dark:bg-slate-200 dark:text-gray-900"
                />
              </div>
              <button
                onClick={PredictReAdmission}
                className="w-full py-2 bg-blue-500 text-white rounded mt-4"
              >
                Predict Readmission
              </button>
              {prediction !== 10 && (
                <div className="text-center dark:text-gray-300 mt-4">
                  {prediction === 0 ? (
                    <h2 className="bg-green-600 text-white rounded-md py-2">
                      Prediction Result: {prediction}
                    </h2>
                  ) : (
                    <h2 className="bg-red-600 text-white py-2 rounded-md">
                      Prediction Result: {prediction}
                    </h2>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeartFailurePrediction;
