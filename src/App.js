import './App.css';
import {Nevbar } from './Navbar';
import {
  BrowserRouter as Router,

  Route,

} from "react-router-dom";
import { Covid } from './Covid';
import 'bootstrap/dist/css/bootstrap.css'
import { Corona } from './Corona';
function App() {
  
  return (
    <>
    <Router>
      <Nevbar></Nevbar>
      <Route exact path="/">
        <Corona/>
    </Route>
      <Route exact path="/covid">
        <Covid/>
    </Route>
    </Router>
    </>
  );
}

export default App;
