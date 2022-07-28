import React from 'react'
import image from '../assets/images/image.png'
const Section = () => {
  return (
    <div className='section'>
      <div className='sec-img-container'>
        <img className='sec-img' src={image} />
      </div>
      <div className='sec-content'>
        <p>
          Make Your Own Caffee
        </p>
      </div>
    </div>
  )
}

export default Section;