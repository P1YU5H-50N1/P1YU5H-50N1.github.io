import "./App.css";
import reportWebVitals from "./reportWebVitals";
import { HashRouter, Route, Switch, Link } from "react-router-dom";
import HomeBg from "./Resources/Graphics/HomeBg.png";
import Navbar from "./Layouts/NavBar";

function App() {
  reportWebVitals(console.log);
  return (
    <HashRouter>
      <Switch>

      <div className="App" style={{
        backgroundImage:`url(${HomeBg})`
        }}>
        <Navbar/>
        <Route exact path='/'>
          Home
        </Route>
        <Route exact path='/contact'>
          Contact
        </Route>
        <Route exact path='/about'>
          About me
        </Route>
        <Route exact path='/creations'>
          My Projects
        </Route>


      </div>
      </Switch>
    </HashRouter>
  );
}

export default App;
