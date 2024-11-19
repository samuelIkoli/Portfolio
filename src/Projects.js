import React from 'react';
import { FaAsterisk } from "react-icons/fa";
import "./App.css";

const Projects = () => {
    return (
        <div className="px-auto pt-5 align-items-center d-flex">
            <div className="bg-dark border rounded d-flex text-center flex-column container-fluid">
                <p className="mx-auto pt-5 h3 copper">A few projects I have worked on.</p>
                <br />
                <div>
                    <FaAsterisk />
                    <a href="#os" className="nodecor me-3">Open Source </a>
                    <FaAsterisk />
                    <a href="#a2" className="nodecor me-3">Auth n 2FA </a>
                    <FaAsterisk />
                    <a href="#stream" className="nodecor me-3">StreamAndSave </a>
                    <FaAsterisk />
                    <a href="#pip" className="nodecor me-3">Pip Calculator </a><br/>
                    <FaAsterisk />
                    <a href="#buzz" className="nodecor me-3">Buzz </a>
                    <FaAsterisk />
                    <a href="#cs50x" className="nodecor me-3">CS50x </a>
                    <FaAsterisk />
                    <a href="#fcc" className="nodecor me-3">Backend and API certification </a><br />
                    <FaAsterisk />
                    <a href="#ctc" className="nodecor me-3">Creative Talent </a>
                    <FaAsterisk />
                    <a href="#yelpcamp" className="nodecor me-3">Yelpcamp </a>
                    <FaAsterisk />
                    <a href="#k9ja" className="nodecor me-3">K9JA </a>
                    <FaAsterisk />
                    <a href="#bt" className="nodecor me-3">Bluetooth Tracker </a><br />
                    <FaAsterisk />
                    <a href="#unity" className="nodecor me-3">Mobile Game Development </a>
                    <FaAsterisk />
                    <a href="#todo" className="nodecor me-3">TO DO APP </a>
                    <FaAsterisk />
                    <a href="#mg" className="nodecor me-3">Memory Game </a>
                    <br />
                    <FaAsterisk />
                    <a href="#scraper" className="nodecor me-3">Web Scraper </a>
                    <FaAsterisk />
                    <a href="#calculator" className="nodecor me-3">Simple Calculator</a>
                    <FaAsterisk />
                    <a href="#Acalculator" className="nodecor me-3">Another Simple Calculator</a>
                </div>
                <div className="card mx-auto mt-3 mb-5" id="os" style={{ width: "18rem" }}>
                    <img src="auth-n-2fa.png" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Open Source Contribution</h5>
                        <p className="card-text">I have contributed, or at least made PR's to a number of open source projects. Green Software to track CO2 emiission as an effect of powering the internet in your region or byte transmission from your website. An OMR checker which can be calibrated to scan and mark different OMR sheets and can even be downloaded on mobile to take screenshots rather than traditional scanning.</p>
                        <a href="https://github.com/github/GreenSoftwareDirectory" rel="noreferrer" target="_blank" className="btn mt-2 btn-primary">GreenSoftwareDirectory</a>
                        <a href="https://github.com/thegreenwebfoundation/co2.js" rel="noreferrer" target="_blank" className="btn mt-2 btn-primary">CO2.JS</a>
                        <a href="https://github.com/Udayraj123/OMRChecker" rel="noreferrer" target="_blank" className="btn mt-2 btn-primary">OMR Checker</a>
                        <a href="https://github.com/souravjain540/Basic-Python-Programs" rel="noreferrer" target="_blank" className="btn mt-2 btn-primary">Basic-Python-Programs</a>
                        <br />
                    </div>
                </div>
                <div className="card mx-auto mt-3 mb-5" id="a2" style={{ width: "18rem" }}>
                    <img src="auth-n-2fa.png" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Auth n 2FA</h5>
                        <p className="card-text">Authentication service with two factor authentication using speakeasy on the backend for the time based two-fa service, using the qrcode node package to convert the information to a scanable qr code compatible with mobile authentication apps like google authenticator. MySQL as a databse with knexJS as an ORM to store user information, utilizing bcrypt to hash user password. React on the frontend.</p>
                        <a href="https://github.com/samuelIkoli/auth_n_2fa" rel="noreferrer" target="_blank" className="btn mt-2 btn-primary">Link to BE Repository</a>
                        <a href="https://github.com/samuelIkoli/reactauth" rel="noreferrer" target="_blank" className="btn mt-2 btn-primary">Link to FE Repository</a>
                        <br />
                    </div>
                </div>
                <div className="card mx-auto mt-3 mb-5" id="stream" style={{ width: "18rem" }}>
                    <img src="sas.png" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Stream and Save</h5>
                        <p className="card-text">Endpoint to stream a video to download it on local storage. Using NodeJS's default file system module to receive chunks of data encoded in base64 and then saving to local storage to using Rabbit MQ's queuing services and Deepgram to queue and transcribe the videos in order.</p>
                        <a href="https://github.com/samuelIkoli/streamAndSave" rel="noreferrer" target="_blank" className="btn mt-2 btn-primary">Link to Repository</a>
                        <br />
                    </div>
                </div>
                <div className="card mx-auto mt-3 mb-5" id="pip" style={{ width: "18rem" }}>
                    <img src="pip.png" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Pip Calculator</h5>
                        <p className="card-text">A P.I.P. (Percentage In Point) calculator for traders to determine the value of a pip movement in their local currency.</p>
                        <a href="https://github.com/samuelIkoli/pipcalculator" rel="noreferrer" target="_blank" className="btn mt-2 btn-primary">Link to Repository</a>
                        <br />
                        <a href="https://pipcalculator.vercel.app/" rel="noreferrer" target="_blank" className="btn mt-2 btn-primary">Pip Calculator</a>
                        <br />
                    </div>
                </div>
                <div className="card mx-auto mt-3 mb-5" id="buzz" style={{ width: "18rem" }}>
                    <img src="buzz.png" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Buzz</h5>
                        <p className="card-text">Buzz is a mobile application for a start-up that serves as a social media platform for artists and other event organisers to sell and promote their events as well as manage them. I served as tech-lead for this project. On the front-end we have react native for cross-platform build, on the backend we have express, running on NodeJS connected to a mySQL database hosted with AWS as well as firebase used for media storage.</p>
                        <a href="https://play.google.com/store/apps/details?id=com.protegelabs.buzz" rel="noreferrer" target="_blank" className="btn mt-2 btn-primary">See on Play Store</a>
                        <br />
                        <a href="https://apps.apple.com/ng/app/buzz-ng/id6455226192" rel="noreferrer" target="_blank" className="btn mt-2 btn-primary">See on App Store</a>
                        <br />
                        <a href="https://www.youtube.com/watch?v=TnROL-8Qm0k" rel="noreferrer" target="_blank" className="btn mt-2 btn-primary">See Video</a>
                    </div>
                </div>
                <div className="card mx-auto mt-3 mb-5" id="cs50x" style={{ width: "18rem" }}>
                    <img src="cs50x.png" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">CS50x</h5>
                        <p className="card-text">CS50x certification course was completed. The course gave a series of projects that requires knowledge on C, Python, Flask, HTML, CSS, Javascript, SQL and more, using them for problem solving such as creating image filters, alteriing the volume of an audio file, recovering "lost" data on a memory card, data structure and algortihm problems, creating simple and complex web applications utilising bootstrap on the frontend, flask on the backend and sqlite3 as a database.</p>
                        <a href="https://cs50.harvard.edu/x/2022/" rel="noreferrer" target="_blank" className="btn mt-2 btn-primary">Link to original course</a>
                    </div>
                </div>
                <div className="card mx-auto mt-3 mb-5" id="fcc" style={{ width: "18rem" }}>
                    <img src="fcc.png" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Back End and API Certification</h5>
                        <p className="card-text">Free Code Camp's Backend and API certification course was completed. The course gave a series of projects that required the utilisation of Node.js, Express, MongoDB and Mongoose to build API's and microservices. </p>
                        <a href="https://github.com/samuelIkoli/Free-code-camp-Backend" rel="noreferrer" className="btn btn-primary" target="_blank" >Link to Repository</a>
                        <br />
                        <a href="https://www.freecodecamp.org/learn/back-end-development-and-apis/" rel="noreferrer" target="_blank" className="btn mt-2 btn-primary">Link to original course</a>
                    </div>
                </div>
                <div className="card mx-auto mt-3 mb-5" id="ctc" style={{ width: "18rem" }}>
                    <img src="ctc.png" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Creative Talent Cooperative</h5>
                        <p className="card-text">Creative Talent is a Cooperative based in Abuja, Nigeria. I was contracted as a full stack web developer to set up and manage their website and it's functionalities. Using technology like Wordpress, Plesk, Woocommerce and Flutterwave.</p>
                        <a href="https://creativetalent.coop/" rel="noreferrer" className="btn btn-primary" target="_blank" >Site down :-(</a>
                    </div>
                </div>
                <div className="card mx-auto mt-3 mb-5" id="yelpcamp" style={{ width: "18rem" }}>
                    <img src="webdev.jpeg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Yelpcamp</h5>
                        <p className="card-text">Almost like the actual website Yelp which enables users to sign up and review businesses before publishimg them, Yelpcamp on the other hand is based on this idea and tailored towards camps. This project was a requirement for the completion of a certified course taken on Udemy. The complete web development bootcamp by Colt Steele. On the frontend of the website is raw HTML , Javascript and Bootstrap's CSS using EJS as the view engine. On the backend is Node.js utilising express. Some other node packages were installed to aid and contribute various functionalities that where needed. MongoDB is used in the backend with Mongoose as the ODM. Photos that get uploaded are stored in Cloudinary. The website is hosted on Heroku.</p>
                        <a href="https://yelpcamp-ruddy.vercel.app/" rel="noreferrer" className="btn btn-primary" target="_blank" >Visit Site</a>
                        <br />
                        <a href="https://github.com/samuelIkoli/Yelpcamp" rel="noreferrer" target="_blank" className="btn mt-2 btn-primary">Link to Repository</a>
                        <br />
                        <a href="https://www.udemy.com/course/the-web-developer-bootcamp/" rel="noreferrer" target="_blank" className="btn mt-2 btn-primary">Link to original course</a>
                    </div>
                </div>
                <div className="card mx-auto mb-5" id="k9ja" style={{ width: "18rem" }}>
                    <img src="p3.jpeg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">K-9JA</h5>
                        <p className="card-text">A website to advertise the sales of the dogs I breed. On the front end HTML , Javascript and Bootstrap's CSS with EJS as the view engine. On the backend is Node.js and the express library. Instead of multiple HTML pages for the show pages for the different dogs, a single page was used fetching the appropriate data to render depending on the respective show page being viewed. Hosted on Heroku.</p>
                        <a href="https://k-9-ja.vercel.app/" rel="noreferrer" target="_blank" className="btn btn-primary">Visit Site</a>
                        <br />
                        <a href="https://github.com/samuelIkoli/K-9JA" rel="noreferrer" target="_blank" className="btn mt-2 btn-primary">Link to Repository</a>
                    </div>
                </div>
                <div className="card mx-auto mb-5" id="bt" style={{ width: "18rem" }}>
                    <img src="bluetooth.jpeg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Bluetooth Tracker</h5>
                        <p className="card-text">I worked on this project in my final year of the university. The project consists of small tags that can be attached to your keys, bag, purse and other small items you may wish to track if they are misplaced within a small range and you wish to find them. Especially if they are just there but they are under something so we can't see them. They connect to a smart phone via bluetooth and are managed on a mobile app I also developed. The tag of the item can then be beeped and then tracked by sound. Approximate distance is also shown.</p>
                    </div>
                </div>
                <div className="card mx-auto mb-5" id="unity" style={{ width: "18rem" }}>
                    <img src="unity.jpeg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Balloon beach</h5>
                        <p className="card-text">This project is gotten from a course on Udemy. Utilising C# on the Unity game engine. The source code is quite bulky so I will not be  putting a link to it, the builds are quite bulky too; but my certificate of completion can be viewed by following the link below.</p>
                        <a href="Unity.pdf" rel="noreferrer" target="_blank" className="btn btn-primary">View certification</a>
                    </div>
                </div>
                <div className="card mx-auto mt-3 mb-5" id="todo" style={{ width: "18rem" }}>
                    <img src="todo.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">TO-DO APP</h5>
                        <p className="card-text">A simple TODO app made with react, taking advantage of ES6 functions and react hooks as an alternative to classes,constructors and props.</p>
                        <a href="/todo" rel="noreferrer" target="_blank" className="btn mt-2 btn-primary">TO DO APP</a>
                        <br />
                        <a href="https://github.com/samuelIkoli/Portfolio" rel="noreferrer" target="_blank" className="btn mt-2 btn-primary">Link to Repository</a>
                    </div>
                </div>
                <div className="card mx-auto mt-3 mb-5" id="mg" style={{ width: "18rem" }}>
                    <img src="memory.png" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Memory Game</h5>
                        <p className="card-text">A simple and classic game that takes advantage of react hooks like useState and useEffect.</p>
                        <a href="/memory_game" rel="noreferrer" target="_blank" className="btn mt-2 btn-primary">Memory Game</a>
                        <br />
                        <a href="https://github.com/samuelIkoli/Portfolio" rel="noreferrer" target="_blank" className="btn mt-2 btn-primary">Link to Repository</a>
                    </div>
                </div>
                <div className="card mx-auto mt-3 mb-5" id="scraper" style={{ width: "18rem" }}>
                    <img src="scraper.png" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Web Scraper</h5>
                        <p className="card-text">A web scraper that extracts the Title, Type, Description and Image from a website. On the front-end is html, embedded Javascript and bootstrap's CSS; on the back-end is Express running on Node.JS. The scraping functionality is derived from using axios to make HTTP requests, then using cheerio to Parse the incoming HTML response and extracting the required metadata.</p>
                        <a href="https://web-scraper-coral-sigma.vercel.app/" rel="noreferrer" target="_blank" className="btn mt-2 btn-primary">Web Scraper</a>
                        <br />
                        <a href="https://github.com/samuelIkoli/Web_scraper" rel="noreferrer" target="_blank" className="btn mt-2 btn-primary">Link to Repository</a>
                    </div>
                </div>
                <div className="card mx-auto mt-3 mb-5" id="calculator" style={{ width: "18rem" }}>
                    <img src="calculator.png" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Simple Calculator</h5>
                        <p className="card-text">A simple calculator made with react, using simple function components and the useState hook.</p>
                        <a href="/calculator" rel="noreferrer" target="_blank" className="btn mt-2 btn-primary">Calculator</a>
                        <br />
                        <a href="https://github.com/samuelIkoli/Portfolio" rel="noreferrer" target="_blank" className="btn mt-2 btn-primary">Link to Repository</a>
                    </div>
                </div>
                <div className="card mx-auto mt-3 mb-5" id="Acalculator" style={{ width: "18rem" }}>
                    <img src="Acalc.png" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Simple Calculator</h5>
                        <p className="card-text">I know, I know, it seems similar to the one above. The major difference is that, this is implemented with different technology. Vanilla HTML, CSS and Javascript with DOM manipulation.</p>
                        <a href="https://web-scraper-coral-sigma.vercel.app/calc" rel="noreferrer" target="_blank" className="btn mt-2 btn-primary">Calculator</a>
                        <br />
                        <a href="https://github.com/samuelIkoli/Web_scraper/blob/master/views/calculator.ejs" rel="noreferrer" target="_blank" className="btn mt-2 btn-primary">Link to Repository</a>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Projects;
