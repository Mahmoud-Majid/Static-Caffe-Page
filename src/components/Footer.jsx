import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
      <h1>JOIN US</h1>
      <div className="mail-footer">
          <div className='mail-input'>
            <input className='input' type="text" placeholder="Your Email" />
              <span className='footer-span'>
                Subscribe
            </span>
          </div>
       </div>
    </div>
  )
}

export default Footer