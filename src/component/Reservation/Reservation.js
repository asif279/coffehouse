import React from 'react';
import './Reservation.css';
import { FaRegBookmark } from 'react-icons/fa';

import shape2 from '../../assets/shape-2.png';
import shape3 from '../../assets/shape-3.png';

const Reservation = () => {
    return (
        <div>
           <section className="reservation container grid section" id="reservation">
                 
           <div className="title_section">
                <h4 className="titleOne">Reservation</h4>
                <h2 className='titleTwo'>Book A Table</h2>
            </div>
            <form action="" className="reservation_form grid">
                <div className="form_div_input">
                    <input className='form_input' placeholder='Your Name' type="text" name="" id="" />
                </div>
                <div className="form_div_input">
                    <input className='form_input' placeholder='Your Email' type="email" name="" id="" />
                </div>

                <div className="form_div_input">
                    <input className='form_input' placeholder='Your Phone No' type="text" name="" id="" />
                </div>

                <div className="form_div_input">
                    <input className='form_input' placeholder='Date Ex: DD/MM/YYYY' type="text" name="" id="" />
                </div>

                <div className="form_div_input">
                    <input className='form_input' placeholder='Time Ex:1.25PM' type="text" name="" id="" />
                </div>

                <div className="form_div_input">
                    <input className='form_input' placeholder='No of People' type="text" name="" id="" />
                </div>
                
                <div className="form_div_textarea form_div_input">
<textarea  placeholder='Your Message' className='form_input'></textarea>
                </div>
                <button className="btn btn_flex btn_reserve">
                    <FaRegBookmark/>Book a Table
                </button>

            </form>
            <img src={shape2} alt="" className="shape_One" />
            <img src={shape3} alt="" className="shape_Two" />
             
           </section>
        </div>
    );
};

export default Reservation;