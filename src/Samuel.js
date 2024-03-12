import React, { useState, useEffect } from 'react';
import "./App.css";
import { RiLinkedinBoxFill, RiMailLine } from "react-icons/ri";
import { FaGithub, FaInstagram } from "react-icons/fa";


const Samuel = () => {

    // const [myAge, setMyAge] = useState();
    // useEffect(() => {
    //     setInterval(() => {
    //         var ageInMilliseconds = Date.now() - new Date('1997-06-22');
    //         setMyAge((ageInMilliseconds / 1000 / 60 / 60 / 24 / 365.25).toFixed(15));
    //     }, 100)
    // }, []);


    return (
        <div className="container-fluid" >
            <div className="text-center">
                <img src="samage_30.jpeg" className="d-block border rounded-circle mt-5 mx-auto" alt="" />
            </div>
            <div className="text-center pt-2">
                <h2>SAMUEL IKOLI</h2>
            </div>
            <div className="text-center pt-2">
                <p>Software Developer</p>
            </div>
            <div className="text-center pt-2">
                <p>B.Eng, Electrical and Electronics Engineering, Nile University</p>
            </div>
            <div className="text-center pt-2">
                <p>Lives in: Abuja, Nigeria</p>
            </div>
            {/* <div className="text-center pt-2">
                <p>Age: {myAge} </p>
            </div> */}
            <hr />
            <div className="text-center pt-2 pb-1">
                <p><span className="mx-2"><RiMailLine /></span> ayibanimiikoli@gmail.com</p>
            </div>
            <hr />
            <div className="text-center d-flex pt-2">
                <div className="mx-auto"><h2><a rel="noreferrer" href="https://www.linkedin.com/in/samuel-ikoli-584380115/" target="_blank"><RiLinkedinBoxFill /></a></h2></div>
                <div className="mx-auto"><h2><a rel="noreferrer" href="https://github.com/samuelIkoli" target="_blank"><FaGithub /></a></h2></div>
                <div className="mx-auto"><h2><a rel="noreferrer" href="https://www.instagram.com/socially.sam/" target="_blank"><FaInstagram /></a></h2></div>
            </div>
        </div >
    )
}

export default Samuel;
