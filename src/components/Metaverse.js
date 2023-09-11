import React from "react";
import Card1 from "./Card1";
import "./metaverse.css";
const Metaverse = () => {
  return (
    <div className="Main-container-Meta">
      <img src="" alt=""></img>
      <div className="Sub-Main">
        <h1 className="Meta-Head">
          THE<span style={{ color: "gold" }}> METAVERSE </span>STACK
        </h1>
        <p className="Meta-para">
          <aside className="Meta-aside">
            Day by day, it is becoming easier to envision and participate in the
            next phase of the Internet.
          </aside>
        </p>
        <div className="Main-card-box">
          <Card1
            img="https://cope.studio/images/sec3c1.png"
            title2="DECENTRALIZATION"
          />
          <Card1
            img="https://cope.studio/images/sec3c2.png"
            title2="TOKENIZATION"
          />
          <Card1
            img="https://cope.studio/images/sec3c3.png"
            title2="IMMERSION"
          />
        </div>
      </div>
    </div>
  );
};

export default Metaverse;
