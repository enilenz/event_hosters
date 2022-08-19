import React from 'react'
import firstImage from '../assets/event7d.jpg';

const Menu = () => {

  const myStyle={
    backgroundImage: 
"url('https://img.freepik.com/premium-vector/digital-restaurant-menu-horizontal-format_23-2148655475.jpg?w=2000')",
    height:'100vh',
    marginTop:'-30px',
    fontSize:'50px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
};
  return (
    <div style={myStyle}>
      <h1> geeksforgeeks </h1>
    </div>
  )
}

export default Menu