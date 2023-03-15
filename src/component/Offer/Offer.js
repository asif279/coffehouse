import React from 'react';
import './Offer.css';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";



// import required modules
import { Pagination } from "swiper";
import {offer} from '../../Data';

const Offer = () => {
    return (
       <section className="offer section" id="offer">
         <div className="title_section">
                <h4 className="titleOne">Offer</h4>
                <h2 className='titleTwo'>Special Offer For You</h2>
            </div>


            <Swiper
            spaceBetween={30}
            
             pagination={{clickable: true}} modules={[Pagination]} className="container">
        
             {
                offer.map(({img,title,discount,description},index)=>{
                    return (
                        <SwiperSlide key={index} >
                        <div className='offer_item'>
                        <div className="offer_img_wrap">
                            <img src={img} alt="" className="offer_img" />
                        </div>
                        <div className="offer_content">
                            <h3 className="offer_title">{title}</h3>
                            <span className="offer_discount">{discount}</span>
                            <p className="offer_description">{description}</p>
                            <a href="/" className="btn">Order Now</a>
                        </div>
                        </div>
                        
                       
                        </SwiperSlide> 
                    )
                })
             }

           </Swiper>

       </section>
    );
};

export default Offer;