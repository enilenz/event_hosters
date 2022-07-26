import React from 'react';
import firstImage from '../assets/event1.jpg';
import secondImage from '../assets/event2.jpg';
import thirdImage from '../assets/event3.jpg';
import fourthImage from '../assets/event4.jpg';
import fifthImage from '../assets/event5.jpg';
import sixthImage from '../assets/event6.jpg';

import {Carousel} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Carousell = () => {
  return (
    <div className='bg-dark shadow'>



<Carousel>
      <Carousel.Item interval={3000}>
        <img
          height={450}
          className="d-block w-100"
          src={secondImage}
          alt="First slide"
        />
        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          height={450}
          className="d-block w-100"
          src={firstImage}
          alt="Second slide"
        />

        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          height={450}
          className="d-block w-100"
          src={thirdImage}
          alt="Third slide"
        />

        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          height={450}
          className="d-block w-100"
          src={sixthImage}
          alt="Third slide"
        />

        <Carousel.Caption>
 
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    </div>
  )
}

export default Carousell