import { useEffect,useState } from "react";
import "./nav.css";
import{ Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlipay } from "@fortawesome/free-brands-svg-icons";

const Navbar=()=>{
    const[sticky,setSticky]=useState(false);
    useEffect(()=>{
        const handleScroll=()=>{
            window.scrollY>50 ? setSticky(true): setSticky(false);
        };

        window.addEventListener("scroll",handleScroll);
        return()=>window.removeEventListener("scroll",handleScroll);
    },[]);
    const [mobileMenu,setMobileMenu]=useState(false);
    const toggleMenu= ()=>{
        mobileMenu ? setMobileMenu(false):setMobileMenu(true);
    }
    return(
        <nav className={`container ${sticky?'dark-nav':''}`}>
            <div className="logo">
            <FontAwesomeIcon icon={faAlipay} beatFade style={{color: "rgb(151, 190, 252)",}} />
            
            </div>
            <ul className={mobileMenu ? '':'hide-mobile-menu'}>
             <li><Link to='hero' smooth={true} offset={0} duration={500} onClick={() => setMobileMenu(false)}>Home</Link></li>
                <li><Link to='services' smooth={true} offset={-260} duration={500} onClick={() => setMobileMenu(false)}>Services</Link></li>
                <li><Link to='about' smooth={true} offset={-150} duration={500} onClick={() => setMobileMenu(false)}>About us</Link></li>
                <li><Link to='campus' smooth={true} offset={-260} duration={500} onClick={() => setMobileMenu(false)}>Why Choose us</Link></li>
                <li><Link to='testimonials' smooth={true} offset={-260} duration={500} onClick={() => setMobileMenu(false)}>Testimonials</Link></li>
                <li><Link to='contact' smooth={true} offset={-260} duration={500} className='btn' onClick={() => setMobileMenu(false)}>Contact us</Link></li> 
            </ul>
            <button className="menu-icon" type="button" onClick={toggleMenu}>Menu</button>
        </nav>
    )
}
export default Navbar;
