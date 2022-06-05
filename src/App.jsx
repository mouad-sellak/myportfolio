import TopBar from "./components/topbar/TopBar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Work from "./components/work/Work";
import './app.scss'

function App() { 
  return (
    <div className="app">
      <TopBar />
      <div className='sections' >
        <Intro />
        <Portfolio />
        <Work />
      </div>
    </div>
  );
}

export default App;
