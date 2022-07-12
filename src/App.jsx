import { useState } from "react";
import TopBar from "./components/topbar/TopBar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Work from "./components/work/Work";
import './app.scss'
import Menu from "./components/menu/Menu";

function App() { 
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app">
      <TopBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className='sections' >
        <Intro />
        <Portfolio />
        <Work />
      </div>
    </div>
  );
}

export default App;
