import React, { useState } from 'react'
import Desktop from '../components/desktop/Desktop'
import Personal from '../components/personal/Personal'
import Slider from '../components/Slider/Slider'
import './homepage.css'



const HomePage = () => {

  const [switchCompo, setSwitchCompo]= useState(false)

  const handleSwitch =()=>{
    setSwitchCompo(state => state = !state)
  }

  return (
    <div className='home'>
      <Slider/>

      <div className="homepage-text">
        <h1>Get the best Laptops  </h1>
        <p>Find the PC that is right for you</p>

      <div className="home-link">
        <button className="link"  onClick={handleSwitch}>PC</button>
        <button className="link"  onClick={handleSwitch}>Accessories</button>
      </div>

     {switchCompo && <Desktop/>} 
      {!switchCompo && <Personal/>}
      
 
      </div>
    </div>
  )
}

export default HomePage