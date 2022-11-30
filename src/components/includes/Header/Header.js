import react from 'react'
// import logs from '../../../assets/images/images.jpeg';
import './Header.css' 
import {Link} from 'react-router-dom';



// import sample from './sample.mp4'


import React from 'react'
import styled from 'styled-components'
  
  function Header() {
    return (
      <section id="main">
      <section id="header" className='wrapper'>
      <div className="nav-left">
        <h1>
            {/* <img src={require("../../../assets/images/images.jpeg")} alt="logo" /> */}
            Quiz
        </h1>
      </div>
      <div class="right">
          <ImageData to="login/">Login</ImageData>
      </div>
     
    </section>
     <section id='center'>
     <div class="starts" >
       <Star to="/starts">START</Star>
     </div>
     </section>
          {/* <video className='videoTag' autoPlay loop muted>
          <source src={sample} type='video/mp4' />
          </video> */}
     </section>

    )
  }
  
  export default Header

  const ImageData =styled(Link)``;
  const Star = styled (Link)``;
