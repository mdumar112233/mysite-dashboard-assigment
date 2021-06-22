import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import MySite from './Components/MySite1/MySite';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <MySite/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
