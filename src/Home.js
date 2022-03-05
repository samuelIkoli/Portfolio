import React from 'react';
import './App.css';
import { FaRegSmileBeam } from "react-icons/fa"



const Home = () => {
    return (
        <div className="px-auto pt-5 align-items-center d-flex">
            <div className="bg-dark border rounded align-items-center container-fluid d-flex">
                <div className="align-items-center">
                    <p className="px-2 fs-5">
                        Welcome to the official portfolio website of Samuel Ikoli. That's me btw. I'm Samuel Ikoli. This website is created using ReactJS and hosted on .....not sure yet.. lol. Feel free to navigate around this website and find out more about me.
                    </p>
                    <p className="px-2 text-center fs-5">
                        <FaRegSmileBeam />
                    </p>
                    <p className="px-2 text-center fs-5">BTW.... This spinning logo was inspired by React's default app. I just added it coz I think it's cool.</p>
                    <p className="text-center ">
                        <img src="MyLogo2.png" className="img-fluid  rounded-circle App-logo" alt="" />
                    </p>
                </div>

            </div>

        </div>
    )
}

export default Home;