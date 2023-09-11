import React from "react";
import "./Building.css";
import Card2 from "./Card2";
const Building = () => {
  return (
    <div className="Building-container">
      <div className="Building-Card-Align">
        <div className="Building-Card-left">
          <h1 className="Building-Main-head">
            <span style={{ color: "gold" }}>BUILDING</span>
            <span>WITH THE</span>
            COPE CREW
          </h1>

          <Card2
            text="01"
            img="https://cope.studio/images/01.png"
            title1="CRAFT "
            title2="WITH BUILDERS"
            para="Every company is catalyzed by a team of functional experts in all 3 stacks of company building. Product, Engineering and Growth."
          />
        </div>
        <div className="Building-Card-Right">
          <div className="Building-Card-Align2-card1">
            <Card2
              text="02"
              img="https://cope.studio/images/02.png"
              title1="STACK "
              title2="THE ODDS"
              para="Our resources, playbooks and network accelerate and de-risk ideas. In turn, this increases the probability for success for what you're building."
            />
          </div>
          <div className="Building-Card-Align2-card2">
            <Card2
              text="03"
              title1="FOCUS  "
              title2="ON LAUNCHING"
              img="	https://cope.studio/images/03.png"
              para="Our team enables founders to focus on creating and building. We simplify everything around it, in our 12-week program - Oasis."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Building;
