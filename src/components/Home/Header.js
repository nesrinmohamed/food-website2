import React from 'react';
import './Header.css'
import myImg from '../../assets/images/3.jpg';
const Header =()=> {
  return (
<header>
    <div className="container">
    <div className='col-lg-6'>
    <h2> Good food choices are good investments. </h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum amet leo. </p>
    <button className='btn1'> Order Now <span class="fa fa-shopping-basket"></span></button>
    <button className='btn2'>Learn More <i class="fas fa-chevron-right"></i> </button>
    </div>
    <div className='col-lg-6'>
    
    </div>
    </div>
</header>
  );
}

export default Header;