import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Navbar = ({ connectWallet }) => {
  const clickSpan = ()=> {
    alert("hi im working")
  }

  const [walletConnected, setWallet] = useState(false);
  return (

    <nav class="navbar navbar-expand-lg navbar-dark bg-dark shadow">
      <div class="container">
        {/* <a class="navbar-brand  display-1 my-2 fs-3" href="#">EventHosters</a> */}

        <Link to="/" className="navbar-brand  display-1 my-2 fs-3 mineColour" >EventHosters</Link>

        <div class="collapse navbar-collapse  ps-5 py-2" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              {/* <a class="nav-link active" aria-current="page" href="#">Events</a> */}
              <Link to="/events" class="nav-link">Events</Link>
            </li>
            <li class="nav-item">
              {/* <a class="nav-link" href="#">About</a> */}
              <Link to="/about" class="nav-link ">About</Link>
            </li>
            <li class="nav-item">
              {/* <a class="nav-link" href="#">Contact Us</a> */}
              <Link to="/contact" class="nav-link ">Contact Us</Link>
            </li>
          </ul>
        </div>

        <div className='navbar-text'>
          <div className='container'>

              <span className="border border-white rounded-pill border-2 px-3 py-1 bg-white opacity-75 text-black fw-bolder">
                <i className="bi bi-coin pe-2"></i>
                          3 CELO
              </span>
          

          </div>
        </div>
      </div>
    </nav>

    // <div>
    //     <nav className="navbar navbar-dark bg-dark shadow">
    //         <div className="container">
    //             <a className="navbar-brand display-1 my-2 fs-3" href="#">
    //                 EventHosters
    //             </a>




    //             <div className='navbar-text'>
    //                 <div className='container'>
    //                     <span className="border border-white rounded-pill border-2 px-3 py-1 bg-white text-black fw-bold">
    //                         <i className="bi bi-calendar2-event-fill pe-2"></i>

    //                         120 EHT
    //                     </span>
    //                 </div>
    //             </div>
    //         </div>
    //     </nav>
    // </div>
  )
}

export default Navbar