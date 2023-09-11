import React from "react";
import "./Style.css";
import Footer from "./footer";
const Welcome = () => {
  return (
    <div className="Container">
      <div style={{ display: "flex", flexDirection: "column" }}>
        <header>
          <h1 className="white">
            Welcome to <span className="yellow">Cope Studio</span>
          </h1>

          <div>
            <h1 className="Main-head">
              DESIGNING BLUEPRINTS FOR THE
              <span className="yellow">METAVERSE</span>
            </h1>
            <aside>
              <p className="white">
                Cope.Studio is a moonshot factory for the Metaverse. Founded as
                a startup studio, Cope evolved into Metaverse specific studio
                that combined the fields of design, NFTs, DAO, and VR/AR to
                create pioneering launches with builders. We’ve worked with over
                50 products, projects, and companies to equip them to launch
                their blockchain initiatives within a year of our organisation’s
                establishment. And with Web3 still in its infancy stages when it
                comes to scaling and development, Cope aims to be a one-stop for
                anyone looking to explore the possibilities on the Metaverse.
              </p>
            </aside>
            <article>
              <img
                id="img-object"
                src={
                  "	https://www.mindinventory.com/blog/wp-content/uploads/2022/10/frontend-development-tools.png"
                }
                alt=""
                height="200px"
                width="600px"
              ></img>
            </article>
          </div>
        </header>
        <Footer />
      </div>
    </div>
  );
};

export default Welcome;
