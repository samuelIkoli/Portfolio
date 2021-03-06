import React from 'react';
import "./App.css";

const About = () => {
    return (
        <div className="pt-5 align-items-center copper d-flex">
            <div className="bg-dark border rounded d-flex container">
                <div className="align-items-center p-md-5 p-sm-3 pt-3">
                    <p>I shall proceed to give you information about myself.</p>
                    <p>I have created two means to do this. A more formal approach and a not so formal approach, maybe semi-formal or informal; not sure. Click on any of the tabs depending on your preference.</p>
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Formal</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Not so formal</button>
                        </li>
                    </ul>
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                            <p className="pt-3">Name: SAMUEL IKOLI</p>
                            <p>Software Engineering</p>
                            <p>Highest degree attained: Bachelor of Engineering, Electrical and Electronics</p>
                            <p>Country of Origin: Nigeria</p>
                            <p>Country of Residence: Nigeria</p>
                            <p>Hobbies: Video games, anime, movies, football, working out</p>
                            <p>Passionate about: Development (Individuals and society), My personal contribution to society, Some animals are cool.</p>
                            <p>Role model: Elon Musk. A hero, a genius, an entrepreneur, a physicist.</p>
                        </div>
                        <div className="tab-pane comic fade pt-3" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                            My name is Samuel Ikoli. I am Nigerian and I reside in Nigeria. I graduated from Nile University in 2021. I studied Electrical and Electronics Engineering. I am currently a software developer because... why not!! ;-). I am passionate about growth and development and my role to play towards achieving that. I like animals. I have dogs but I am interested in a few other animals. They're cute lol. My role model is hands down Elon Musk. Like I can't even begin to go there. So much greatness to talk about. My hobbies are playing video games, playing football, watching anime (a weeb if you may). I workout occasionally. Sometimes I forget.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
