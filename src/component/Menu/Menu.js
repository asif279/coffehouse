import React from 'react';
import './Menu.css';

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