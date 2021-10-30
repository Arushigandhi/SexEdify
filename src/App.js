import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PreTeen from './pages/PreTeen';
import Teen from './pages/Teen';
import Adult from './pages/Adult';
import Home from './pages/Home';
// import SimpleForm from './components/HeroSection/SimpleForm';
import Container from './components/Container/Container';
// import GoToTop from './GoToTop';


function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/preteen" >
            <PreTeen />
          </Route>
          <Route path="/teen">
            <Teen />
          </Route>
          <Route path="/adult">
            <Adult />
          </Route>
          {/* <Route path="/simpleform">
            <SimpleForm />
          </Route> */}
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/curriculum/:module_id" >
            <Container />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
