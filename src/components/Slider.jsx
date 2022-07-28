import React from 'react'
import bacakground from '../assets/images/background.png'
const Slider = () => {
  return (
    <div className='img-container' >
      <img className='slider-img' src={bacakground} />
      <p className='upper text'>Caffee first,</p>
      <p className='under text'>Schemes late.</p>
    </div>
  )
}

export default Slider