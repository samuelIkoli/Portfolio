import React from 'react';
import "./App.css";
import { Link } from 'react-router-dom';

const Resume = () => {
    return (
        <div className="px-auto pt-5">
            <div className="px-auto pt-5 align-items-center d-flex">
                <div className="bg-dark border rounded d-flex align-items-centers flex-column container-fluid panel">
                    <p className=" mx-auto pt-3">Click <a href="Resume.pdf" target="_blank">here</a> to view my Resume</p>
                    <p className=" mx-auto pt-3">Below is a couple of tools I have worked with and my estimated proficiency with them.</p>
                    <div className="row mb-2">
                        <div className="col-12 col-lg-6">Language/Framework/Library/Platform</div>
                        <div className="col-12 col-lg-6">Proficiency</div>
                        <hr />
                    </div>
                    <div className="row">
                        <div className="col-12 col-lg-6">HTML</div>
                        <div className="col-12 col-lg-6">
                            <div className="progress mb-3">
                                <div className="progress-bar bg-success" role="progressbar" style={{ width: "95%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <hr />
                    </div>
                    <div className="row">
                        <div className="col-12 col-lg-6">CSS</div>
                        <div className="col-12 col-lg-6">
                            <div className="progress mb-3">
                                <div className="progress-bar bg-success" role="progressbar" style={{ width: "90%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <hr />
                    </div>
                    <div className="row">
                        <div className="col-12 col-lg-6">Javascript</div>
                        <div className="col-12 col-lg-6">
                            <div className="progress mb-3">
                                <div className="progress-bar bg-success" role="progressbar" style={{ width: "90%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <hr />
                    </div>
                    <div className="row">
                        <div className="col-12 col-lg-6">Bootstrap</div>
                        <div className="col-12 col-lg-6">
                            <div className="progress mb-3">
                                <div className="progress-bar bg-success" role="progressbar" style={{ width: "90%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <hr />
                    </div>
                    <div className="row">
                        <div className="col-12 col-lg-6">NodeJS</div>
                        <div className="col-12 col-lg-6">
                            <div className="progress mb-3">
                                <div className="progress-bar bg-success" role="progressbar" style={{ width: "80%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <hr />
                    </div>
                    <div className="row">
                        <div className="col-12 col-lg-6">Express</div>
                        <div className="col-12 col-lg-6">
                            <div className="progress mb-3">
                                <div className="progress-bar bg-success" role="progressbar" style={{ width: "80%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <hr />
                    </div>
                    <div className="row">
                        <div className="col-12 col-lg-6">MongoDB</div>
                        <div className="col-12 col-lg-6">
                            <div className="progress mb-3">
                                <div className="progress-bar bg-success" role="progressbar" style={{ width: "80%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <hr />
                    </div>
                    <div className="row">
                        <div className="col-12 col-lg-6">React</div>
                        <div className="col-12 col-lg-6">
                            <div className="progress mb-3">
                                <div className="progress-bar bg-success" role="progressbar" style={{ width: "70%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <hr />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resume;
