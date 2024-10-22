import './App.css';
import About from './Components/About';
import Clients from './Components/Clients';
import Home from './Components/Home';
import Menu from './Components/Menu';
import Portfolio from './Components/Portfolio';
import Service from './Components/Service';
import Team from './Components/Team';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";




function App() {
  return (
    <>

      <Router>
            <Home />
            <Menu />
        <Switch>
        
          {/* <Route exact path='/'>
          </Route> */}
          <Route exact path='/'>
            <About />
          </Route>
          <Route path='/Service'>
            <Service />
          </Route>
          <Route path='/Portfolio'>
            <Portfolio />
          </Route>
          <Route path='/Clients'>
            <Clients />
          </Route>
          <Route path='/Team'>
            <Team />
          </Route>
        </Switch>
      </Router>

    </>
  );
}

export default App;
