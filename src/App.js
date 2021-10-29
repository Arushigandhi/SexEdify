import NavMenu from './components/NavMenu/NavMenu';
import './App.css';
import HeroSection from './components/HeroSection/HeroSection';
import AboutUs from './components/AboutUs/AboutUs';
import Choose from './components/Choose/Choose';

function App() {
  return (
    <div>
      <NavMenu />
      <HeroSection />
      <Choose />
      <AboutUs />
    </div>
  );
}

export default App;
