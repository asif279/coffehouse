import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <section className="home" id="home">
            <div className="home_container container">
                <div className="home_content">
                    <span className="home_subtitle">
                        Welcome to CoffeHouse!!
                    </span>
                    <h1 className="home_title">
                    Discover Amazing Coffee<br/> house && getting energy
                    </h1>
                    <p className="home_description">
                    There are many variations of passages available but the majority have suffered alteration in some from the injected tumor or randomised words
                    </p>
                    <div className="home_btns">
                        <a href="#menu" className='btn'>Click Menu</a>
                        <a href="#reservation" className='btn home_btn'>Book Table</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;