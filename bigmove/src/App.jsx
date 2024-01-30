
import './App.css'
import Home from "/src/components/page1/home"
import About from "../src/components/page2/About"
import Policy from "../src/components/page3/policy"
import { Routes , Route } from "react-router-dom"
function App() {


  return (

  <div>
     <Routes >
      <Route path ="/"  element ={   <Home/>  }/>
      <Route path ="/About"  element ={   <About  />}/>
      <Route path ="/Policy"  element ={   <Policy  />}/>
     </Routes>
    
  </div>
 
  )
}

export default App
