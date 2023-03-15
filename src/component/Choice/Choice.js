import React from 'react';
import './Choice.css';
import Choose from '../../assets/choose.jpg';
import coffe from '../../assets/coffee-beans.svg';
import coffe1 from '../../assets/coffee-beans-2.svg';
import coffe3 from '../../assets/coffee-beans-3.svg'

const Choice = () => {
    return (
       <section className="section container grid choose_grid" id="section">
       <div className="left-side">

       <h3 className="section-title">
        Why Choose Us
       </h3>
       <h2 className="section-head">
       Coffe House most out of your favourite &<br/> tasty coffee house
       </h2>
       <p className="para_des">
       There are many variations of passages available but the majority have suffered alteration in some from the injected tumor or randomised words
                There are many variations of passages available
       </p>

       <div className="left_s">
       <div className='choice_img_wrap'>
       <img src={coffe} alt="" className="img_des" />
       </div>
       <div className="wid">
       <h3>Awesome Aroma</h3>
        <p>There are many variations of passages available but the majority have suffered alteration in some from the injected</p>
       </div>
   </div>

   <div className="left_s">
   <div className='choice_img_wrap'>
       <img src={coffe1} alt="" className="img_des" />
       </div>
       <div className="wid">
       <h3>Organic Beans</h3>
        <p>There are many variations of passages available but the majority have suffered alteration in some from the injected</p>
       </div>
   </div>
   <div className="left_s">
   <div className='choice_img_wrap'>
       <img src={coffe3} alt="" className="img_des" />
       </div>
       <div className="wid">
       <h3>Healthy Coffee</h3>
        <p>There are many variations of passages available but the majority have suffered alteration in some from the injected</p>
       </div>
   </div>
</div>


       <div className="right-side">

       <img src={Choose} alt="" className="choose_img" />

       </div>
       </section>
    );
};

export default Choice;