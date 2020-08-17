import React from 'react'
import { ProgressBar } from "react-bootstrap";

export default function Skills() {
    return (
        <>
            <div className="container-fluid">
                <section>
                    <main className="offset-md-2 my-3 px-3 pt-3" id="skills">
                        <h1 className="title">Skills</h1>
                        <div className="container py-4">
                            <h4 className="description">Programming languages & tools</h4>
                            <div className="container row programming-icons">
                                <div className="dropdown">
                                    <img
                                        src="https://img.icons8.com/color/96/000000/html-5.png"
                                        alt="HTML5"
                                        className="img-fluid"
                                    ></img>
                                    <div className="dropdown-content">
                                        <ProgressBar variant="danger" now={70} srOnly />
                                    </div>

                                </div>

                                <div className="dropdown">
                                    <img
                                        src="https://img.icons8.com/color/96/000000/css3.png"
                                        alt="CSS"
                                        className="img-fluid"
                                    ></img>
                                    <div className="dropdown-content">
                                        <ProgressBar variant="danger" now={60} srOnly />
                                    </div>
                                </div>
                                <div className="dropdown">
                                    <img
                                        src="https://img.icons8.com/color/96/000000/javascript.png"
                                        alt="JavaScript"
                                    ></img>
                                    <div className="dropdown-content">
                                        <ProgressBar variant="danger" now={60} srOnly />
                                    </div>
                                </div>
                                <div className="dropdown">
                                    <img
                                        src="https://img.icons8.com/plasticine/96/000000/react.png"
                                        alt="Reactjs"
                                        className="img-fluid"
                                    ></img>
                                    <div className="dropdown-content">
                                        <ProgressBar variant="danger" now={55} srOnly />
                                    </div>
                                </div>

                                {/* <img
                  src="https://img.icons8.com/color/96/000000/nodejs.png"
                  alt="Nodejs"
                  className="img-fluid"
                ></img>
                <img
                  src="https://img.icons8.com/color/96/000000/mongodb.png"
                  alt="MongoDB"
                  className="img-fluid"
                ></img> */}
                            </div>
                        </div>
                        <div className="container pt-4 pb-1">
                            <h4 className="description">Communication Languages</h4>
                            <div className="col d-flex justify-content-between pt-1 ">
                                <div className="container">
                                    <h5 className="my-0">
                                        <img
                                            src="https://img.icons8.com/officexs/16/000000/vietnam.png"
                                            alt="Vietnamese"
                                            className="mb-1"
                                        ></img>{" "}
                  Vietnamese
                </h5>
                                    <ProgressBar variant="danger" now={80} srOnly />
                                </div>

                                <div className="container">
                                    <h5 className="my-0">
                                        <img
                                            src="https://img.icons8.com/officexs/16/000000/usa.png"
                                            alt="American English"
                                            className="mb-1"
                                        ></img>{" "}
                  English
                </h5>
                                    <ProgressBar variant="danger" now={65} srOnly />
                                </div>

                            </div>
                        </div>
                    </main>
                </section>
            </div>
            <hr></hr>
        </>
    );
}
