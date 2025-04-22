import React from "react";
import "./Portfolio.css";
import Menu from "./Menu";

const Portfolio = () => {
  return (
    <section className="portfolio container section" id="portfolio">
      <h2 className="section__title">Projects</h2>
      <div className="project__grid">
        {Menu.map(({ id, title, description, tech }) => (
          <div className="project__card" key={id}>
            <h3 className="project__title">{title}</h3>
            <p className="project__desc">{description}</p>
            <div className="project__tags">
              {tech.map((item, index) => (
                <span key={index} className="project__tag">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
