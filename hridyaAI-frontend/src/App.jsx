import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Services from "./components/Services"
import About from "./components/About"

function App() {


  return (
    <>
      {/* <h1 className="text-3xl font-bold underline text-red-400">Hello World</h1> */}
      <Navbar/>
      <Home/>
      <Services/>
      <About/>
    </>
  )
}

export default App
