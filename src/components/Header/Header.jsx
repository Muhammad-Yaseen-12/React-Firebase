import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faBars, faX } from '@fortawesome/free-solid-svg-icons'
// import { faBars } from '@fortawesome/free-solid-svg-icons'

import Logo from './../../../public/Logo.png'
import "./Header.css"
import { useState } from 'react'




function Header() {
    let [show, setShow] = useState(false)
    let menu = () => {
        setShow(!show)
    }
    // console.log(show);

    return (
        <>
            <div className="nav">
                <img src={Logo} alt="Logo" />

                <button className="menu-btn" onClick={menu}>
                    {show ? <FontAwesomeIcon icon={faX} /> : <FontAwesomeIcon icon={faBars} />}
                </button>

                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/signup">Signup</Link></li>
                </ul>
                <button className="register-btn" >
                    Register Now <FontAwesomeIcon icon={faArrowRight} />
                </button>
            </div>
            <div className="navMobile">
                <ul style={{ display: show ? "block" : "none" }}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/signup">Signup</Link></li>
                </ul>
            </div >
        </>

    )
}

export default Header