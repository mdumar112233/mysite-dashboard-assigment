import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import MySite from './Components/MySite1/MySite';
import Navbar from './Components/Share/Navbar/Navbar';


function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path='/'>
          <MySite/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
