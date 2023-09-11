import React from "react";
import Card from "./Card";
import "./startups.css";

const Startups = () => {
  return (
    <div className="cont">
      <div className="title">
        <p>
          Cope is a <span className="yellow">moonshot</span> factory for the
          metaverse
        </p>
      </div>
      <div className="card-bodies">
        <Card
          title1="SELECT "
          title2="STARTUPS"
          para="We pick the most strategic startups that can launch in the Polygon & Web3 ecosystem."
          img="https://cope.studio/images/s2card1.png"
        />
        <Card
          title1="BUILD "
          title2="STARTUPS"
          para="We back the game-changing creative ideas and create ventures that further our thesis."
          img="https://cope.studio/images/s2card2.png"
        />
        <Card
          title1="BACK "
          title2="STARTUPS"
          para="We back companies to go further with capital, design,recruitment and engineering."
          img="https://cope.studio/images/s2card3.png"
        />
      </div>
    </div>
  );
};

export default Startups;
