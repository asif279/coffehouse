import React from 'react';
import './Team.css';
import chef from '../../assets/team-1.jpg';
import chef1 from '../../assets/team-2.jpg';
import chef2 from '../../assets/team-3.jpg';
import chef3 from '../../assets/team-4.jpg';
import {FaFacebookF,FaTwitter,FaLinkedinIn,FaYoutube} from 'react-icons/fa';


const Team = () => {
    return (
       <section className="section container grid team" id="team">
         <div className="title_section">
                <h4 className="titleOne">Chef's</h4>
                <h2 className='titleTwo'>Meet Our Expert Chef's</h2>
            </div>
            <div className="team_grid grid container">
                <div className="team_item">
                    <img src={chef} alt="" className="team_img1" />
                    <div className="team_data">
                        <h3 className="team_title">Lexi Di</h3>
                        <p className="team_degi">Senior Chef</p>
                    </div>
                    <div className="team_social">
                        <a href="/" className="team_social_link">
                               <FaFacebookF/>
                        </a>
                        <a href="/" className="team_social_link">
                               <FaTwitter/>
                        </a>
                        <a href="/" className="team_social_link">
                               <FaYoutube/>
                        </a>
                        <a href="/" className="team_social_link">
                               <FaLinkedinIn/>
                        </a>
                    </div>
                </div>


                <div className="team_item">
                    <img src={chef1} alt="" className="team_img1" />
                    <div className="team_data">
                        <h3 className="team_title">Lexi Di</h3>
                        <p className="team_degi">Senior Chef</p>
                    </div>
                    <div className="team_social">
                        <a href="/" className="team_social_link">
                               <FaFacebookF/>
                        </a>
                        <a href="/" className="team_social_link">
                               <FaTwitter/>
                        </a>
                        <a href="/" className="team_social_link">
                               <FaYoutube/>
                        </a>
                        <a href="/" className="team_social_link">
                               <FaLinkedinIn/>
                        </a>
                    </div>
                </div>

                <div className="team_item">
                    <img src={chef2} alt="" className="team_img1" />
                    <div className="team_data">
                        <h3 className="team_title">Lexi Di</h3>
                        <p className="team_degi">Senior Chef</p>
                    </div>
                    <div className="team_social">
                        <a href="/" className="team_social_link">
                               <FaFacebookF/>
                        </a>
                        <a href="/" className="team_social_link">
                               <FaTwitter/>
                        </a>
                        <a href="/" className="team_social_link">
                               <FaYoutube/>
                        </a>
                        <a href="/" className="team_social_link">
                               <FaLinkedinIn/>
                        </a>
                    </div>
                </div>

                <div className="team_item">
                    <img src={chef3} alt="" className="team_img1" />
                    <div className="team_data">
                        <h3 className="team_title">Lexi Di</h3>
                        <p className="team_degi">Senior Chef</p>
                    </div>
                    <div className="team_social">
                        <a href="/" className="team_social_link">
                               <FaFacebookF/>
                        </a>
                        <a href="/" className="team_social_link">
                               <FaTwitter/>
                        </a>
                        <a href="/" className="team_social_link">
                               <FaYoutube/>
                        </a>
                        <a href="/" className="team_social_link">
                               <FaLinkedinIn/>
                        </a>
                    </div>
                </div>
            </div>

       </section>
    );
};

export default Team;