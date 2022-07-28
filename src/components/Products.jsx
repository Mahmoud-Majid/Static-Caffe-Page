import React from 'react'
import image1 from '../assets/images/image1.png'
import image2 from '../assets/images/image2.png'
import image3 from '../assets/images/image3.png'
import image4 from '../assets/images/image4.png'
import { BsStarFill } from "react-icons/bs";

const Products = () => {
  return (
    <div className='products-container'>

      <div className="headers">
        <h5>Practice Advice</h5>
        <h1>Coffee Products</h1>
      </div>

      <div className="cards">
        <div className='card'>
          <img src={image1} />
          <div className='card-content'>
            <h3>Coffee</h3>
            <p className='card-discription'>
              <BsStarFill  className='card-star' />
              <span className='card-rate'>
                4.4
              </span>
              <span className='card-reviews'>
                429 reviews
              </span>
            </p>
            <p className='card-location'>New Cairo, Egypt</p>
          </div>
        </div>
        <div className='card'>
          <img src={image2} />
          <div className='card-content'>
            <h3>Coffee</h3>
            <p className='card-discription'>
              <BsStarFill  className='card-star' />
              <span className='card-rate'>
                4.4
              </span>
              <span className='card-reviews'>
                429 reviews
              </span>
            </p>
            <p className='card-location'>New Cairo, Egypt</p>
          </div>
        </div>
        <div className='card'>
          <img src={image3} />
          <div className='card-content'>
            <h3>Coffee</h3>
            <p className='card-discription'>
              <BsStarFill  className='card-star' />
              <span className='card-rate'>
                4.4
              </span>
              <span className='card-reviews'>
                429 reviews
              </span>
            </p>
            <p className='card-location'>New Cairo, Egypt</p>
          </div>
        </div>
        <div className='card'>
        <img src={image4} />
        <div className='card-content'>
          <h3>Coffee</h3>
          <p className='card-discription'>
            <BsStarFill  className='card-star' />
            <span className='card-rate'>
              4.4
            </span>
            <span className='card-reviews'>
              429 reviews
            </span>
          </p>
          <p className='card-location'>New Cairo, Egypt</p>
        </div>
        </div>
      </div>
        
    </div>
  )
}

export default Products
