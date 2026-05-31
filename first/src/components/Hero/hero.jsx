import React from "react";
import'./hero.css';

const hero=()=>{
    const handleScrollToServices=()=>{
        const servicesSection=document.getElementById('services');
        if(servicesSection){
            servicesSection.scrollIntoView({behavior:'smooth'});
        }
    }
    return(
        <div id="hero" className="hero">
            <div className="hero-text">
                <h1>welcome to this page </h1>
                <p>visit our services to learn more</p>
                <button className="btn" onClick={handleScrollToServices}>explore it</button>
            </div>
        </div>
    )
}
export default hero;
