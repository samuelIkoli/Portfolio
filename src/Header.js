import React from 'react';
import "./App.css";


const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg sticky-top navbar-light bg-light" >
            <div className="container-fluid w-100">
                <a className="navbar-brand" href="/"> <img src="MyLogo4.png" className="img-fluid" style={{ height: "2rem" }} alt="" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <div className="navbar-nav me-auto mb-2 mb-lg-0">
                        <a className="nav-link menu active nav-item" href="/">HOME</a>
                        <a className="nav-link menu active" href="/about">ABOUT</a>
                        <a className="nav-link menu active" href="/projects">PROJECTS</a>
                        <a className="nav-link menu active" href="/resume">RESUME</a>
                        <a className="nav-link menu active" aria-current="page" href="/contact">CONTACT</a>
                        <a className="nav-link menu active" href="/donate">DONATE</a>
                    </div>
                </div>
            </div>
        </nav>

    )
}

export default Header;
