import React from 'react'
import "./Home.css"
import { Link } from 'react-router-dom'
import Navbar from '../../pages/navbar/Nav'
function home() {
  return (
    <div>
         <Navbar />

         <div className='container'>
         <img src="../assets/images/background.jpg" />
            <div className="main">
              
                <h4>Welcome To EnviroPolicy <br /><p className='
                homep'>our mission is to enhance the efficiency of the environment policy analysis in Rwanda , striving for sustainable future by promoting informed decision-making environmental stewardship and improved publichealth

              </p></h4>
                <button className='btn'><Link to="/About"  >About</Link></button>
              
            </div>
         </div>
         
    </div>
    

  )
}

export default home