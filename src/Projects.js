import React from 'react';
import "./App.css";
import { Link } from 'react-router-dom';

const Projects = () => {
    return (
        <div className="px-auto pt-5 align-items-center d-flex">
            <div className="bg-dark border rounded d-flex flex-column container-fluid">
                <p className="mx-auto pt-5 h3">A few projects I have worked on.</p>
                <div className="card mx-auto mt-3 mb-5" style={{ width: "18rem" }}>
                    <img src="fcc.png" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Back End and API Certification</h5>
                        <p className="card-text">Free Code Camp's Backend and API certification course was completed. The course gave a series of projects that required the utilisation of Node.js, Express, MongoDB and Mongoose to build API's and microservices. </p>
                        <a href="https://github.com/samuelIkoli/Free-code-camp-Backend" className="btn btn-primary" target="_blank" >Link to Repository</a>
                        <br />
                        <a href="https://www.freecodecamp.org/learn/back-end-development-and-apis/" target="_blank" className="btn mt-2 btn-primary">Link to original course</a>
                    </div>
                </div>
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
                        <p className="card-text">Almost like the actual website Yelp which enables users to sign up and review businesses before publishimg them, Yelpcamp on the other hand is based on this idea and tailored towards camps. This project was a requirement for the completion of a certified course taken on Udemy. The complete web development bootcamp by Colt Steele. On the frontend of the website is raw HTML , Javascript and Bootstrap's CSS using EJS as the view engine. On the backend is Node.js utilising express. Some other node packages were installed to aid and contribute various functionalities that where needed. MongoDB is used in the backend with Mongoose as the ODM. Photos that get uploaded are stored in Cloudinary. The website is hosted on Heroku.</p>
                        <a href="https://fierce-cliffs-76480.herokuapp.com/" className="btn btn-primary" target="_blank" >Visit Site</a>
                        <br />
                        <a href="https://github.com/samuelIkoli/Yelpcamp" target="_blank" className="btn mt-2 btn-primary">Link to Repository</a>
                        <br />
                        <a href="https://www.udemy.com/course/the-web-developer-bootcamp/" target="_blank" className="btn mt-2 btn-primary">Link to original course</a>
                    </div>
                </div>
                <div className="card mx-auto mb-5" style={{ width: "18rem" }}>
                    <img src="p3.jpeg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">K-9JA</h5>
                        <p className="card-text">A website to advertise the sales of the dogs I breed. On the front end HTML , Javascript and Bootstrap's CSS with EJS as the view engine. On the backend is Node.js and the express library. Instead of multiple HTML pages for the show pages for the different dogs, a single page was used fetching the appropriate data to render depending on the respective show page being viewed. Hosted on Heroku.</p>
                        <a href="https://canecorsos.herokuapp.com/" target="_blank" className="btn btn-primary">Visit Site</a>
                        <br />
                        <a href="https://github.com/samuelIkoli/K-9JA" target="_blank" className="btn mt-2 btn-primary">Link to Repository</a>
                    </div>
                </div>
                <div className="card mx-auto mb-5" style={{ width: "18rem" }}>
                    <img src="bluetooth.jpeg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Bluetooth Tracker</h5>
                        <p className="card-text">I worked on this project in my final year of the university. The project consists of small tags that can be attached to your keys, bag, purse and other small items you may wish to track if they are misplaced within a small range and you wish to find them. Especially if they are just there but they are under something so we can't see them. They connect to a smart phone via bluetooth and are managed on a mobile app I also developed. The tag of the item can then be beeped and then tracked by sound. Approximate distance is also shown.</p>
                    </div>
                </div>
                <div className="card mx-auto mb-5" style={{ width: "18rem" }}>
                    <img src="unity.jpeg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Balloon beach</h5>
                        <p className="card-text">This project is gotten from a course on Udemy. Utilising C# on the Unity game engine. The source code is quite bulky so I will not be  putting a link to it, the builds are quite bulky too; but my certificate of completion can be viewed by following the link below.</p>
                        <a href="Unity.pdf" target="_blank" className="btn btn-primary">View certification</a>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Projects;
