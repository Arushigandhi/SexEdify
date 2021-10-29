import NavMenu from './components/NavMenu/NavMenu';
import './App.css';
import HeroSection from './components/HeroSection/HeroSection';
import AboutUs from './components/AboutUs/AboutUs';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Modules from './pages/Modules';
import Portal from './pages/Portal';
import Choose from './components/Choose/Choose';

function App() {
  return (
    <div>
    {/* <Router> */}
      <NavMenu />
      <HeroSection />
      <Choose />
      <AboutUs />

        {/* <Switch>
          <Route path="/Modules">
            <Modules />
          </Route>
          <Route path="/Portal">
          <Portal />
          </Route>
        </Switch>
    </Router> */}
    </div>
  );
}

export default App;
