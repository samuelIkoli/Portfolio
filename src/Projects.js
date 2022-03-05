import React from 'react';
import "./App.css";
import { Link } from 'react-router-dom';

const Projects = () => {
    return (
        <div className="px-auto pt-5 align-items-center d-flex">
            <div className="bg-dark border rounded d-flex flex-column container-fluid">
                <p className="mx-auto pt-4 h3">I will proceed to showing a couple of projects I have worked on.</p>
                <div className="card mx-auto mt-3 mb-5" style={{ width: "18rem" }}>
                    <img src="ctc.png" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Creative Talent Cooperative</h5>
                        <p className="card-text">Creative Talent is a Cooperative based in Abuja, Nigeria. I was contracted as a full stack web developer to set up and manage their website and it's functionalities. Using technology like Wordpress, Plesk, Woocommerce and Flutterwave.</p>
                        <a href="https://creativetalent.coop/" className="btn btn-primary" target="_blank" >Visit Site</a>
                    </div>
                </div>
                <div className="card mx-auto mt-3 mb-5" style={{ width: "18rem" }}>
                    <img src="webdev.jpeg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Yelpcamp</h5>
                        <p className="card-text">I took a certified course on Udemy and had to build this project to complete the course. The course is 'The Complete Web Development Bootcamp' by Colt Steele. This website was built using HTML, CSS, Javascript, NodeJS, Express, MongoDB a noSQL database, cloudinary to store uploaded images, as well as so many different node packages for different processes like authentication, authorisation, method override, embedded Javascript and much more. The main purpose of the website is for reviewing camps. Click the button below to check out the website. The website is being hosted on Heroku.</p>
                        <a href="https://fierce-cliffs-76480.herokuapp.com/" className="btn btn-primary" target="_blank" >Visit Site</a>
                    </div>
                </div>
                <div className="card mx-auto mb-5" style={{ width: "18rem" }}>
                    <img src="p3.jpeg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">K-9JA</h5>
                        <p className="card-text">I created this website as a project to work on my web developer skills as well as to aid my dog breeding business. Click the button below to check out the website. The website is being hosted on Heroku. </p>
                        <a href="https://canecorsos.herokuapp.com/" target="_blank" className="btn btn-primary">Visit Site</a>
                    </div>
                </div>
                <div className="card mx-auto mb-5" style={{ width: "18rem" }}>
                    <img src="bluetooth.jpeg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Bluetooth Tracker</h5>
                        <p className="card-text">I worked on this project in my final year of the university. The project consists of small tags that can be attached to your keys, bag, purse and other small items you may wish to track if they are misplaced within a small range and you wish to find them. Especially if they are just there but they are under something so we can't see them. They connect to a smart phone via bluetooth and are managed on a mobile app I also created. The tag of the item can then be beeped and then traced by sound. Approximate distance is also shown.</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Projects;
