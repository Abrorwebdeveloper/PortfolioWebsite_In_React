import { useEffect, useRef } from "react";
import "./intro.scss";
import { init } from "ityped";

function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      strings: ["Frontend Developer", "Mentor"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/myimg.png" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi there, I'm</h2>
          <h1>Abror Bog'ibekov</h1>
          <h3>
            Freelancer <span ref={textRef}></span>
          </h3>

          <div className="mainBtn">
            <a href="#contact" className="contactMe">
              Contact me
            </a>
            <a href="#works" className="aboutMe">
              About me
            </a>
          </div>
        </div>
        <div className="arrow_bottom">
          <a href="#portfolio">
            <img src="assets/down.png" />
          </a>
          <a href="#portfolio">
            <img src="assets/down.png" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Intro;
