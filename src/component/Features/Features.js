import React from 'react';
import './Features.css';
import Free from  '../../assets/free-delivery.svg';
import shape from '../../assets/shape.png';
import certified from '../../assets/certified.svg';
import coffeeBeans from '../../assets/coffee-beans.svg';
import coffee from '../../assets/coffee.svg';

const Features = () => {
    return (
        <section className="section features" id="features">
            <div className="title_section">
                <h4 className="titleOne">Features</h4>
                <h2 className='titleTwo'>Our Best Features</h2>
            </div>

            <div className="card_section">
                <div className="card_detail">
                    <img className='free_img' src={Free} alt="" />
                    <h3>Free Shipping</h3>
                    <p>Long established fact<br/> that a reader will be by the<br/> readable content of a page<br/> looking at its layout</p>
                    <img src={shape} alt="" className='shape' />
                </div>
                <div className="card_detail">
                    <img className='free_img' src={certified} alt="" />
                    <h3>Free Shipping</h3>
                    <p>Long established fact<br/> that a reader will be by the<br/> readable content of a page<br/> looking at its layout</p>
                    <img src={shape} alt="" className='shape' />
                </div>
                <div className="card_detail">
                    <img className='free_img' src={coffeeBeans} alt="" />
                    <h3>Free Shipping</h3>
                    <p>Long established fact<br/> that a reader will be by the<br/> readable content of a page<br/> looking at its layout</p>
                    <img src={shape} alt="" className='shape' />
                </div>
                <div className="card_detail">
                    <img className='free_img' src={coffee} alt="" />
                    <h3>Free Shipping</h3>
                    <p>Long established fact<br/> that a reader will be by the<br/> readable content of a page<br/> looking at its layout</p>
                    <img src={shape} alt="" className='shape' />
                </div>
            </div>
        </section>
    );
};

export default Features;