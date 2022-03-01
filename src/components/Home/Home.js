import React from 'react';
import Header from './Header';
import ProudImg from '../../assets/images/1.jpg' ; 
import IngredientsImg from '../../assets/images/2.png';

const Home = () => {
  return(
<>
    <Header />
    <section className='numbers'>
    <div className='container'>
<div className='row'>
    <div className='col-lg-3'>
        <h2>1287+</h2>
        <h6>Savings</h6>
    </div>
    <div className='col-lg-3'>
        <h2>5786+</h2>
        <h6>Photos</h6>
    </div>
    <div className='col-lg-3'>
        <h2>1440+</h2>
        <h6>Rockets</h6>
    </div>
    <div className='col-lg-3'>
        <h2>7110+</h2>
        <h6>Globes</h6>

    </div>
</div>
</div>
    </section>
{/* ************************************** */}
    <section className='pride'>
    <div className='container'>
        <div className='row'>
        <div className='col-md-6'>
        <img src= {ProudImg} alt='ProudImg'/>
        </div>
        <div className='col-md-6'>
        <div className='pride-info'>
        <h2>We pride ourselves on making real
             food from the best ingredients.</h2>
             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum 
             in sit amet leo. Mauris feugiat erat tellus.</p>
            <button className='btn1'><a href='#'>Learn More</a> </button>
        </div>
        </div>
        </div>
    </div>
    </section>
{/* ************************************** */}
<section className='ingredients'>
    <div className='container'>
        <div className='row'>
            <div className='col-md-6'>
            <div className='ingredients-info'>
                <h2>We make everything by hand with
                 the best possible ingredients.</h2>
                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.Far far away, behind the word mountains, far from the countries
                  Vokalia and Consonantia, there live the blind texts.</p>
                  <ul>
                      <li> <i class="fas fa-check"></i> Etiam sed dolor ac diam volutpat.</li>
                      <li><i class="fas fa-check"></i> Erat volutpat aliquet imperdiet.</li>
                      <li><i class="fas fa-check"></i> purus a odio finibus bibendum.</li>
                  </ul>
                  <button className='btn1'><a href='#'>Learn More</a></button>
            </div>

            </div>
            <div className='col-md-6'>
            <img src={ IngredientsImg } />
            </div>
        </div>
    </div>
</section>
</>
  ) ;
};

export default Home;
