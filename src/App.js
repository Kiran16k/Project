import Building from "./components/Building";
import Metaverse from "./components/Metaverse";
import Startups from "./components/Startups";
import Welcome from "./components/Welcome";
import Navbar from "./components/Navbar";
import ParentComponent from "./components/test";

import { Route, Routes } from "react-router-dom";
import Calculator from "./components/Calc";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/Startup" element={<Startups />} />
        <Route path="/Metaverse" element={<Metaverse />} />
        <Route path="/Building" element={<Building />} />
        <Route path="/ParentComponent" element={<ParentComponent />} />
        <Route path="/Assign" element={<Calculator />} />
      </Routes>
    </div>
  );
}

export default App;
