import React from 'react';
import "./App.css";
import { RiLinkedinBoxFill, RiMailLine } from "react-icons/ri";
import { FaGithub, FaPhone } from "react-icons/fa";
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
    const [state, handleSubmit] = useForm("xnqwvbgj");

    return (
        <div className="px-auto pt-5 align-items-center d-flex">
            <div className=" border rounded py-5 flex-column container-fluid bg-dark">
                <p><RiLinkedinBoxFill /><a rel="noreferrer" href="https://www.linkedin.com/in/samuel-ikoli-584380115/" target="_blank" className="px-3">Linkedin</a></p>
                <p><FaGithub /> <a rel="noreferrer" href="https://github.com/samuelIkoli" target="_blank" className="px-3">Github</a></p>
                <p><FaPhone /> <a href="tel:+2347031523145" className="px-3"> +234 703 152 3145</a> </p>
                <p><RiMailLine /> <span className="px-2"></span> ayibanimiikoli@gmail.com</p>
                <br />
                <p>You can also use this form to contact me.</p>
                <form onSubmit={handleSubmit}>
                    <div className="col-12 col-lg-6">
                        <label htmlFor="email">
                            Email Address
                        </label>
                    </div>
                    <div className="col-12 col-lg-6">
                        <input
                            id="email"
                            type="email"
                            name="email"
                        />
                    </div>
                    <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                    />
                    <div className="col-12 mt-2 col-lg-6">
                        <label htmlFor="message">
                            Message
                        </label>
                    </div>
                    <div className="col-12 col-lg-6">
                        <textarea
                            id="message"
                            name="message"
                            rows="4" cols="35"
                        />
                    </div>
                    <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                    />
                    <div className="col-12 mt-2 col-lg-6 pb-3">
                        <button type="submit" disabled={state.submitting}>
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact;
