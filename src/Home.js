import React from 'react';
import Typewriter from "typewriter-effect";
import './App.css';


const Home = () => {
    return (
        <div className="px-auto pt-5 align-items-center courier d-flex">
            <div className="bg-dark border rounded align-items-center container-fluid d-flex">
                <div className="align-items-center p-md-5 p-sm-1">
                    <p className="fs-5">

                    </p>
                    <Typewriter
                        options={{
                            delay: 20,
                        }}
                        onInit={(typewriter) => {
                            typewriter
                                .typeString("Welcome to the official portfolio website of Samuel Ikoli. That's me. I'm Samuel Ikoli. A Bachelor of Engineering, Electrical and Electronics Engineering, with a passion for software development. This website was developed by me using ReactJS and is hosted on Google's Firebase. Feel free to navigate around this website to find out more about me.")
                                .start()

                        }}
                    />
                </div>

            </div>

        </div>
    )
}

export default Home;