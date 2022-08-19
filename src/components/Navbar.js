import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Navbar = ({balance }) => {
  const clickSpan = ()=> {
    alert("hi im working")
  }

  const [walletConnected, setWallet] = useState(false);
  return (

    <nav class="navbar navbar-expand-lg navbar-dark bg-dark shadow">
      <div class="container">

        <Link to="/" className="navbar-brand  display-1 my-2 fs-3 mineColour" >EventHosters</Link>

        <div class="collapse navbar-collapse  ps-5 py-2" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link to="/events" class="nav-link">Events</Link>
            </li>
            <li class="nav-item">
              <Link to="/menu" class="nav-link ">Menu</Link>
            </li>
          </ul>
        </div>

        <div className='navbar-text'>
          <div className='container'>

              <span className="border border-white rounded-pill border-2 px-3 py-1 bg-white opacity-75 text-black fw-bolder">
                <i className="bi bi-coin pe-2"></i>
                          {balance}cUSD
              </span>
          

          </div>
        </div>
      </div>
    </nav>

  
  )
}

export default Navbar