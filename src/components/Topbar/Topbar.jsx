import "./topbar.scss";
import { Person, Mail } from "@material-ui/icons";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Sean Inches
          </a>
          <a href="https://github.com/SeanInches">
            <div className="itemContainer">
              <img src="assets/icons8-github-64.png" width={"78%"} />
            </div>
          </a>
          <a href="https://www.linkedin.com/in/sean-inches-461263222/">
            <div className="itemContainer">
              <img src="assets/icons8-linkedin-64.png" width={"78%"} />
            </div>
          </a>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
