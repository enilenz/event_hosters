import React from 'react'

import Carousel from './Carousel';

import firstImage from '../assets/event7d.jpg';
import secondImage from '../assets/event8d.jpg';

const Home = () => {
  return (
    <div>
      <Carousel />

      <section className='bg-white text-dark py-1 ' >
        <div className='container text-center '>
          <div class="row">
            <div class="col-md-7 ">
              <div className=''>
                <h1 className='display-6 fw-bold fs-3 my-5'>FLEXIBLE EVENT SPACES</h1>

                <p>
                  We have a range of spaces available, which have been used to put on art exhibitions, theatres, award events, community events, and curated music events. Our spaces have also proved popular as filming locations.

                  We work closely with our events customers to help deliver a seamless experience on the day.
                </p>
              </div>

            </div>
            <div class="col-md-5">
              <img
                className="d-block d-md-block w-100 py-4"
                src={firstImage}
                alt="First slide"
              />

            </div>
          </div>
        </div>
      </section>


      <section className='section bg-dark text-white py-1'>
        <div className='container text-center '>
          <div class="row">
          <div class="col-md-5">
              <img
                className="d-block d-md-block w-100 py-4"
                src={secondImage}
                alt="First slide"
              />

            </div>
            <div class="col-md-7 ">
              <div className=''>
                <h1 className='display-6 fw-bold fs-3 my-5'>STATE OF THE ART EQUIPMENT AND FACILITIES</h1>

                <p>
                  Depending on your specific needs, a wide array of world class camera and studio equipment will be provided to capture and create whatever ideal you have in mind.
                 
                </p>
              </div>

            </div>

        
            <div className=' container text-center mt-4 mb-4'>
                <h5>Head on over to the events page</h5>
                <a class="btn btn-primary" href="events" role="button">Events</a>
            </div>

          </div>
        </div>
      </section>

     

  


    </div>
  )
}

export default Home