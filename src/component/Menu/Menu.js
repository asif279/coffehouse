import React from 'react';
import './Menu.css';
import menu1 from '../../assets/01.jpg';
import menu2 from '../../assets/02.jpg';
import menu3 from '../../assets/03.jpg';
import menu4 from '../../assets/04.jpg';
import menu5 from '../../assets/05.jpg';
import menu6 from '../../assets/06.jpg';
import menu7 from '../../assets/07.jpg';
import menu8 from '../../assets/08.jpg';
import { menu } from '../../Data';

const Menu = () => {
    return (
       <section className="section menu" id="menu">
          <div className="title_section">
                <h4 className="titleOne">Menu</h4>
                <h2 className='titleTwo'>Let's Check Our Menu</h2>
            </div>
            <div className="menu_grid grid container">

            {
                menu.map(({img,price,description,title},index)=>{
                    return (
                        <div className="menu_item grid">
                            <div className="menu_img_wrap">
                            <img src={img} alt="" className="menu_img" />
                            </div>
                            <div className="menu_data">
                                <div>
                                    <h3 className="menu_title">{title}</h3>
                                    <p className="menu_des">{description}</p>
                                </div>
                                <span className="menu_price">{price}</span>
                            </div>
                        </div>
                    )
                })
            }

            </div>
       </section>

    );
};

export default Menu;