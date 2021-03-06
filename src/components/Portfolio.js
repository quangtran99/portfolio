import React from "react";
import { Col, Row } from "react-bootstrap";

export default function Portfolio() {
  return (
    <>
      <div className="container-fluid">
        <section>
          <main className="offset-md-2 my-3 px-3 pt-3" id="portfolio">
            <h1 className="title">Portfolio</h1>
            <div className="container py-4">
              <h3>Web Development</h3>
              <br></br>
              <Row>
                <Col lg={6}>
                  <div className="card">
                    <div className="face face1">
                      <img src="https://i.imgur.com/nQ5JoUe.png"></img>
                    </div>
                    <div className="face face2">
                      <div className="content">
                        <p>
                          This is a website that sells luxury products. It was
                          built with ReactJS,NodeJS and MongoDB
                        </p>
                        <div class="text-right">
                          <a
                            href="https://github.com/quangtran99/final-fe"
                            class="btn btn-outline-dark mx-2"
                            target="_blank"
                          >
                            Repository front-end
                          </a>
                          <a
                            href="https://github.com/quangtran99/final-be"
                            class="btn btn-outline-dark mx-2"
                            target="_blank"
                          >
                            Repository back-end
                          </a>
                          <a
                            href="https://quang-final.netlify.app/"
                            target="_blank"
                            class="btn btn-outline-dark ml-2"
                          >
                            Demo
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="card">
                    <div className="face face1">
                      <img src="https://i.imgur.com/RdoKeGP.png"></img>
                    </div>
                    <div className="face face2">
                      <div className="content">
                        <p>
                          This is a Group project of 3 members, we build a
                          Social networking website that used Javascript
                        </p>
                        <div class="text-right">
                          <a
                            href="https://github.com/quangtran99/ProjectGroupWeek3"
                            class="btn btn-outline-dark mx-2"
                            target="_blank"
                          >
                            Repository
                          </a>
                          <a
                            href="https://twitter-catalina.netlify.app/"
                            target="_blank"
                            class="btn btn-outline-dark ml-2"
                          >
                            Demo
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </main>
        </section>
      </div>
    </>
  );
}
