import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Javascript", "HTML", "CSS", "React", "Node.js"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/20210408_185036.jpg" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h1>Full Stack Developer</h1>
          <h2>Portfolio</h2>

          <span ref={textRef}></span>
        </div>
        <a href="#portfolio">
          <img src="assets/outline_expand_more_black_24dp.png" alt="" />
        </a>
      </div>
    </div>
  );
}
