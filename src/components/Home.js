import React from 'react'

import Carousel from './Carousel';
import firstImage from '../assets/event7d.jpg';

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

      <section className='section bg-white text-dark py-1'>
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

      {/* <section id='intro'>
        <div className='container-lg'>
          <div className='row justify-content-center align-items-center'>
            <div className='col-md-5 text-center text-md-start'>
              <h1>
                <div className='display-2'>Black-Belt</div>
                <div className='display-5 text-muted'>Your Coding Skills</div>
              </h1>
              <p className='lead my-4 text-muted'>Lorem ipsum, dolor sit amet consectetur adipiscing elit</p>
              <a href='#pricing' className='btn btn-secondary btn-lg'>Buy Now</a>
            </div>
            <div className='col-md-5 text-center d-none d-md-block'>
               <img/>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  )
}

export default Home