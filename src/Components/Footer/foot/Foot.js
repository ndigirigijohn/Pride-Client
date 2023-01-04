import React from 'react'
import './Foot.scss'
import {Link} from 'react-router-dom'


function Foot() {
  return (
    <div className="foot">
      <div className="details">


      <div className='about' id="about">
        <h2>ABOUT</h2>
        <p>We sell you beauty supplements and beyond making you look perfect, we help you identify the perfect product for your skin through our <Link to='/fms' style={{color:"blue"}}> knowldge based system</Link>.
          </p>
          <p>Shopping with us is an excitment beyond look !</p>
      </div>
      <div className="contact">
        <h2>CONTACT </h2>
        <a href="mailto:jontejonhn@gmail.com">
          <span>Email:</span>
          <span>xyz@gmail.com</span>
        </a>
        <br/>
        <a href='tel:0742734120'>
          <span>Tel :</span>
          <span>0742734120</span>

        </a>

      </div>
      <div className="address">
        <h2>ADRESS</h2>
        <p>PR56+XQ5, Social Security House, Starehe</p>

      </div>
      </div>
    </div>

  )
}

export default Foot