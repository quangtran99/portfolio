import React, { useState } from "react";
import AboutMe from "./AboutMe";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";
import Portfolio from "./Portfolio";
import Interests from "./Interests";
import { Col, Row } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import Footer from "./Footer";

export default function ResumeContent() {
  return (
    <div>
      <Row>
        <AboutMe />
        <Education />
        <Experience />
        <Skills />
        <Portfolio />
        <Interests />
      </Row>
    </div>
  );
}
