import React from 'react'

export default function AboutMe() {
    return (
        <>
            <div className="container-fluid">
                <section id="about">
                    <main className="offset-md-2 my-3 px-3 pt-3">
                        <div className="jumbotron jumbotron-fluid bg-transparent">
                            <div className="container py-4">
                                <h1 className="header">
                                    QUANG <span style={{ color: "#ADD8E6" }}>TRAN</span>
                                </h1>
                                <h3 className="pb-3">
                                    <span style={{ color: "grey" }}>
                                        6/12 Bui Thi Xuan, Tan Binh, HCMC, Vietnam · +84924126896 ·{" "}
                                    </span>
                                    <a href="mailto:tranvietquang3077@gmail.com" style={{ color: "#8B4513" }}>tranvietquang3077@gmail.com</a>
                                </h3>
                                <ul className="lead pt-2">
                                    <li>A young marketer who decided to become a Full-Stack Web Developer.</li>
                                    <li>I'm enthusiastic developer with high flexibility to adapt to new working environment.</li>
                                    <li>I'm looking forward oppurtunities and fully ready for challenges.</li>
                                </ul>
                                <div className="social-icons pt-5">
                                    <a href="https://www.facebook.com/tranviet.quang.94/">
                                        <i className="fab fa-facebook fa-3x mr-2"></i>
                                    </a>
                                    <a href="https://github.com/quangtran99/">
                                        <i className="fab fa-github-square fa-3x mx-2"></i>
                                    </a>
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
