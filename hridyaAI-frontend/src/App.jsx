import HeartFailurePrediction from "./pages/HeartFailurePrediction"
import Landing from "./pages/Landing"
import {BrowserRouter as Router,Routes,Route } from "react-router-dom"

function App() {
  return (
    <>
   <Router>
    <Routes>
      <Route path="/" element={<Landing/>} />
      <Route path="/heartfailureprediction" element={<HeartFailurePrediction/>}/>
    </Routes>
   </Router>
   </>
  )
}

export default App
