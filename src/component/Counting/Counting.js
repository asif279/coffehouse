import React from 'react';
import './Counting.css';
import cshop from '../../assets/coffee-shop.svg';
import exp from '../../assets/download.svg';
import chop from '../../assets/coffee-cup.svg';
import chef from '../../assets/chef.svg';


const Counting = () => {
    return (
        <section className="count container" id="count">
            <div className="count_grid container grid">
                <div className="count_item">
                    <div className="count_img_wrap">
                        <img src={cshop} alt="" className="count_img" />
                    </div>
                    <div>
                        <p className="count_p">1500</p>
                        <h3 className="count_title">+ Total Branch</h3>
                    </div>
                </div>

                <div className="count_item">
                    <div className="count_img_wrap">
                        <img src={chop} alt="" className="count_img" />
                    </div>
                    <div>
                        <p className="count_p">250</p>
                        <h3 className="count_title">+ Happy Customers</h3>
                    </div>
                </div>

                <div className="count_item">
                    <div className="count_img_wrap">
                        <img src={chef} alt="" className="count_img" />
                    </div>
                    <div>
                        <p className="count_p">120</p>
                        <h3 className="count_title">+ Professional Chef</h3>
                    </div>
                </div>

                <div className="count_item">
                    <div className="count_img_wrap">
                        <img src={exp} alt="" className="count_img" />
                    </div>
                    <div>
                        <p className="count_p">50</p>
                        <h3 className="count_title">+ Years of Experience</h3>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Counting;