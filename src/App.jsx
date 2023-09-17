
import './App.css'
import LineChart from './Components/LineChart/LineChart'

// import DaisyNav from './Components/DaisyNav/DaisyNav'
import Navbar from './Components/Navbar/Navbar'
import Phones from './Components/Phones/Phones'
import PriceOptions from './Components/PriceOptions/PriceOptions'

function App() {
  

  return (
    <>
      {/* <DaisyNav></DaisyNav> */}
      <Navbar></Navbar>
      <h1 className='text-7xl bg-red-700'>Vite + React</h1>
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
      <Phones></Phones>
      
    
     
    </>
  )
}

export default App
