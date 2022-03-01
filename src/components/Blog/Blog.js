import React from 'react';
import './Blog.css';
import Data from '../../Data';
import Img from '../../assets/images/04.jpg'
import {Carousel} from'react-bootstrap';
import Item1 from'../../assets/images/04.jpg';
import Item2 from '../../assets/images/05.jpg'
const Blog = () => {
const blogItem =Data.map((item)=>{
    return(
        <div className='col-md-4'>
        <div className='item-product'>
        <img src={item.img} />
             <h5> {item.title}</h5>
               <span> {item.time}</span>
              <h6>{item.price} </h6>  
        </div> 
        <button className='btn1'><a href='#'> Order Now</a></button> 
        </div>
        )
})
  return (
      <>
     <section className='blogs'>
         <div className='container'>
             <div className='row'>
                 <div className='col-md-12'>
                     <h2>Explore Our Foods </h2>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus. Far far away, behind the word mountains, far from the countries Vokalia and C
                     there live the blind texts. Separated they live in Bookmarksgrove.</p>
                 </div>
             </div>

             <div className='row'>
              {blogItem}
             </div>
         </div>
     </section>
{/* ********************************** */}
{/* ***********carsole section*************** */}
<div className='slider'>
<div className='container'>
<div className='row'>
<div className='col-lg-12 col-md-12'>
<Carousel className='carsoule'>
  <Carousel.Item className='carsoule-item'>
    <img src={Item1}/>
    <Carousel.Caption className='carsoule-caption'>
    <p>"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. "</p>

      <h6>Simab Dave - Web Designer</h6>
    </Carousel.Caption>
  </Carousel.Item>
 
  <Carousel.Item  className='carsoule-item'>
    <img src={Item2}/>

    <Carousel.Caption className='carsoule-caption'>
    <p>"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live far from the countries Vokalia."</p>

      <h6>Johnthan Doe - UX Designer</h6>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
</div>
</div>
</div>

</>
  );
};

export default Blog;
