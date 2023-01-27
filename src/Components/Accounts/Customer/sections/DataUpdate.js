import React from 'react'
import './Sections.css'

function DataUpdate() {
  const user = JSON.parse(localStorage.getItem('user'))
  return (
    <form className='update_password'>
      <h3>Update Personal Data</h3>
      <input type="text" placeholder={user.name} />
      <input type="text" placeholder={user.email} />
      <input type="text" placeholder={user.phone}/>
      <input type="password" placeholder='Current password' />
      <input type="password" placeholder='New password' />
      <input type="password" placeholder='Confirm new password' />
      <button type='submit'>Continue</button>
    </form>
  )
}

export default DataUpdate