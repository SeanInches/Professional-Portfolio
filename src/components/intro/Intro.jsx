import "./intro.scss";

export default function Intro() {
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/20210408_185036.jpg" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Full Stack Developer</h2>
          <h1>Sean Inches</h1>
          <h3>Portfolio</h3>
        </div>
        <a href="#portfolio">
          <img src="assets/outline_expand_more_black_24dp.png" alt="" />
        </a>
      </div>
    </div>
  );
}
