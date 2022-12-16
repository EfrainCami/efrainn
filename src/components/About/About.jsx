import React from "react";
import Image from "../../img/hotelbonito.jpg";
import "./About.css";


const About = () => {
    return ( 
        <section>
            <p className="section-title">Nosotros</p>
            <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi dolore officiis tempora, explicabo nobis consequatur dolorum iste expedita est molestias laudantium quos cupiditate consectetur dolorem? Itaque repudiandae ipsa facilis inventore.</p>
            <img className="image" src={Image} alt="" />
        </section>
     );
}
 
export default About;