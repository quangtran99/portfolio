import React, { useState } from "react";
import AboutMe from "./AboutMe";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";
import Portfolio from "./Portfolio";
import Interests from "./Interests";
import { Col, Row } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";

export default function ResumeContent() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      className="quang-style"
    >
      <Carousel.Item>
        <AboutMe />
      </Carousel.Item>
      <Carousel.Item>
        <Education />
      </Carousel.Item>
      <Carousel.Item>
        <Experience />
      </Carousel.Item>
      <Carousel.Item>
        <Skills />
      </Carousel.Item>
      <Carousel.Item>
        <Portfolio />
      </Carousel.Item>
      <Carousel.Item>
        <Interests />
      </Carousel.Item>
    </Carousel>
  );
}
//     const target = React.createRef();
//     return (
//         <div >

//             <Row className="quang-style">
//                 <AboutMe />
//                 <Education />
//                 <Experience />
//                 <Skills />
//                 <Portfolio />
//                 <Interests />
//             </Row>

//         </div>
//     )
// }
