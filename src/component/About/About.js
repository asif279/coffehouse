import React from 'react';
import './About.css';
import aboutImage from '../../assets/about-img.jpg';
import {FcCheckmark} from 'react-icons/fc';

const About = () => {
    return (
       <section className="about section" id="about">
        <div className="about_grid container grid">
            <div className="about_img">
            <img src={aboutImage}alt="" className='img_about' />
             </div>

             <div className="about_content">
             <h4 className='heading'>About Us</h4>
                <h2 className="section_title" data-title='About Us'>Fresh Quality and Organic tasty Coffee<br/> House for you</h2>
                <p className="about_description">
                There are many variations of passages available but the majority have suffered alteration in some from the injected tumor or randomised words
                There are many variations of passages available but the majority have suffered alteration in some from the injected tumor or randomised words
                </p>

                <div className="about_detailes grid">
                    <p className="about_detail_des">
                      <FcCheckmark className='about_detail_ic'/>
                      This is the Organic Coffe of World
                    </p>
                    <p className="about_detail_des">
                      <FcCheckmark className='about_detail_ic'/>
                      This is the Organic Coffe of World
                    </p>
                    <p className="about_detail_des">
                      <FcCheckmark className='about_detail_ic'/>
                      This is the Organic Coffe of World
                    </p>
                   
                    <p className="about_detail_des">
                      <FcCheckmark className='about_detail_ic'/>
                      This is the Organic Coffe of World
                    </p>


                   
                </div>
                <a href="#team" className="btn">Our Experts</a>
             </div>
    
        </div>
       </section>
    );
};

export default About;