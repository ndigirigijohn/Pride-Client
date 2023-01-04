import React from 'react'
import Foot from './foot/Foot'
import Feedback from './feedback/Feedback'
import { AiFillInstagram } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import { AiFillYoutube } from 'react-icons/ai';
import { FaTiktok } from 'react-icons/fa';
import './Footer.scss'



function Footer() {
  return (
    <div className='Footer'>
      <Foot/>
      <Feedback/>
      <div className="social">
        <a href="https://instagram.com"><AiFillInstagram/></a>
        <a href="https://facebook.com"><BsFacebook/></a>
        <a href="https://youtube.com"><AiFillYoutube/></a>
        <a href="https://tiktok.com"><FaTiktok/></a>

        
      </div>

      <div className="copy">
        Copyright © <strong>PRIDE SUPPLEMENTS 2020</strong>
      </div>

    </div>
  )
}

export default Footer