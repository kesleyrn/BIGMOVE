import React from 'react'
import "./About.css"
import Navbar from '../../pages/navbar/Nav'
function about() {
  return (
    <div>
         <Navbar />
         <div className="containerr">
          <div className="row">
            <img src="../assets/images/aboutimage.jpg" alt="about image" className='image' />
          </div>
          <div className="row">
            <h2 >Accelerating Rwanda from zere to Hero</h2>
            <section >
              
            Rwanda's remarkable transformation from adversity to triumph epitomizes resilience and visionary leadership. Implementing inclusive policies, fostering economic growth, and prioritizing education have propelled the nation forward. This rapid ascent showcases the power of unity, innovation, and strategic planning, turning Rwanda from ground zero to a beacon of success and hope for the world. <br />
            <button className="butt">More</button>
            </section>
          </div>
         </div>
         <div className="foot">
          <section className="ft">
            <span>
              <h3>SUPPORT OUR WORKS </h3>
              <p className='
              pr'>By practicing Policies and giving ideals </p>
            </span>
            <span>
              <button className="bnt">LEAVE A MESSAGE</button>
            </span>
          </section>
         </div>
    </div>
    

  )
}

export default about