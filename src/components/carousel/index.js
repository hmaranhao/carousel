import React from 'react'
import PropTypes from 'prop-types'

import './style.css'
import { useEffect } from 'react'

export default function Carousel({ images }) {  

  useEffect(() => {
    
    document.querySelector('.carousel-items').addEventListener('wheel', e => {
      if(e.deltaY > 0){
        e.target.scrollBy(300, 0)
      }else {
        e.target.scrollBy(-300, 0)
      }
    })
  }, [])

  return (
    <div>
      <div className="carousel">
        <div className="carousel-items">
          {images.map(img => (
            <div className="item"><img key={img} src={img} alt=""/></div>
          ))}
        </div>
      </div>
    </div>
  )
}

Carousel.propTypes = {
  images: PropTypes.array.isRequired
}
