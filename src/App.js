import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import MySite from './Components/MySite1/MySite';
import Navbar from './Components/Share/Navbar/Navbar';
import MySite2 from './Components/MySite2/MySite2';
import MySite3 from './Components/MySite3/MySite3';


function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path='/'>
          <MySite/>
        </Route>
        <Route path='/dashboard1'>
          <MySite/>
        </Route>
        <Route path='/dashboard2'>
          <MySite2/>
        </Route>
        <Route path='/dashboard3'>
          <MySite3/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
