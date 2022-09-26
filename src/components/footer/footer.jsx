import React from "react";
import './footer.css'

const Footer = ()=>{
    return(
        <div className="footer">
            
            <h2>Подпишитесь на нас!</h2>

            <div className="footIcons">

                <a href="https://www.instagram.com/geektech_edu/">
                    <span className='instagram'></span>
                </a>

                <a href="https://www.facebook.com/GeekTech.kg">
                    <span className='facebook'></span>
                </a>

                <a href="https://t.me/geektech_kg">
                    <span className='telegram'></span>
                </a>

                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                    <span className='youtube'></span>
                </a>
                
            </div>
        </div>
    )
}

export default Footer;