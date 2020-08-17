import React from "react";
import Scrollspy from "react-scrollspy";


export default function NavigationBar() {
    return (
        <div className="container-fluid" id="top">
            <div className="row h-100">
                <aside
                    className="col-12 col-md-2 p-0 fixed-top"
                    style={{ backgroundColor: "black" }}
                    navigation-main
                >
                    <nav
                        className="navbar navbar-expand  flex-md-column flex-row align-items-start py-2"
                        id="mainNav"
                        style={{ backgroundColor: "black" }}
                    >
                        <div className="container d-flex justify-content-between">
                            <img
                                src="https://scontent.fvca1-2.fna.fbcdn.net/v/t1.0-9/104484017_1519540378225596_4201338452684786796_o.jpg?_nc_cat=104&_nc_sid=09cbfe&_nc_ohc=5XDxmShyTMIAX-ViDvQ&_nc_ht=scontent.fvca1-2.fna&oh=7d397ece04a197bce38c33a41d301a0e&oe=5F5976FB" width="150"
                                height="150"
                                className="img-fluid rounded-circle d-none d-md-inline my-5"
                                alt="Profile"
                            ></img>
                        </div>

                        <div className="container collapse navbar-collapse">
                            <Scrollspy
                                items={[
                                    "top",
                                    "about",
                                    "education",
                                    "experience",
                                    "skills",
                                    "portfolio",
                                    "interest"
                                ]}
                                currentClassName="nav-item--active"
                                className="flex-md-column flex-row navbar-nav w-100 justify-content-around"
                            >
                                <li className="nav-item nav-text d-block d-md-none">
                                    <a className="float" href="#top">
                                    <i class="fas fa-arrow-up my-float"></i>
                                    </a>
                                </li>
                                <li className="nav-item nav-text">
                                    <a className="nav-link pl-0 d-none d-md-inline" href="#about">
                                        {" "}
                                        <span>About</span>
                                    </a>
                                </li>
                                <li className="nav-item nav-text">
                                    <a className="nav-link pl-0" href="#education">
                                        {" "}
                                        <span>Education</span>
                                    </a>
                                </li>
                                <li className="nav-item nav-text">
                                    <a className="nav-link pl-0" href="#experience">
                                        {" "}
                                        <span>Experience</span>
                                    </a>
                                </li>
                                <li className="nav-item nav-text">
                                    <a className="nav-link pl-0" href="#skills">
                                        {" "}
                                        <span>Skills</span>
                                    </a>
                                </li>
                                <li className="nav-item nav-text">
                                    <a className="nav-link pl-0" href="#portfolio">
                                        {" "}
                                        <span>Portfolio</span>
                                    </a>
                                </li>
                                <li className="nav-item nav-text">
                                    <a className="nav-link pl-0 d-none d-md-inline" href="#interest">
                                        {" "}
                                        <span>Interests</span>
                                    </a>
                                </li>
                            </Scrollspy>
                        </div>
                    </nav>
                </aside>
            </div>
        </div>
    );
}
