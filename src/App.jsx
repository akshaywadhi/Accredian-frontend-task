import './App.css'
import AskedQue from './Components/AskedQue'
import ContactExpert from './Components/ContactExpert'
import Footer from './Components/Footer'
import Hero from './Components/Hero'
import {Navbar} from './Components/Navbar'
import ReferProcess from './Components/ReferProcess'
import Table from './Components/Table'

function App() {
 

  return (
    <>
  
     <ContactExpert/>
     <div className='container'>
      <Navbar/>
      <Hero/>
      </div>
      <ReferProcess/>
      <div className='container'>
        <Table/>
        <AskedQue/>
      </div>
      <Footer/>
    </>
  )
}

export default App
