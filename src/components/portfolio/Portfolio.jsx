import { useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";

export default function Portfolio() {
  const [selected, setSelected] = useState("e-commercebackend");
  const list = [
    {
      id: "e-commercebackend",
      title: "E-Commerce Back End",
    },
    {
      id: "texteditor",
      title: "Text Editor",
    },
    {
      id: "placeholder",
      title: "Placeholder",
    },
    {
      id: "placeholder",
      title: "Placeholder",
    },
  ];
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        <div className="item">
          <img src="assets/icons8-code-folder-64.png" alt="why no work" />
          <h3>E-Commerce Back End</h3>
        </div>
        <div className="item">
          <img src="assets/icons8-code-folder-64.png" alt="why no work" />
          <h3>Text Editor</h3>
        </div>
        <div className="item">
          <img src="assets/icons8-code-folder-64.png" alt="why no work" />
          <h3>placeholder</h3>
        </div>
        <div className="item">
          <img src="assets/icons8-code-folder-64.png" alt="why no work" />
          <h3>placeholder</h3>
        </div>
      </div>
    </div>
  );
}
