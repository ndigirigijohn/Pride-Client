import React from 'react'
import './Sections.css'
import {Link} from 'react-router-dom'

function PersonalData() {
  const user = JSON.parse(localStorage.getItem('user'))
  const skincode= JSON.parse(localStorage.getItem('skincode'))
  return (
    <div className='personal_data'>
      <div className="data_heading">
      <h3>Personal Data</h3>
      </div>
      <div className="data">
        <div>
        <p><span>Name</span>: {user.name}</p>
        <p><span>Email</span> {user.email}</p>
        <p><span>Phone</span> {user.phone}</p>

        </div>
        <div>
        <p> <span>Skin code</span> {skincode}</p>
        <p><span>Description</span> {"Dry skin, less sensitive to the sun, with acne"}</p>

        </div>
      </div>
      <div className="data_info">
          <p>You can update your skin code and description by reselecting your options  <Link style={{color:"#c9104e"}} to='/FMS'>here</Link>.
          Your skin code is used to recommend products that are fit for your skin</p>
        </div>

    </div>
  )
}

export default PersonalData