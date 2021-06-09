import "./App.css";
import reportWebVitals from "./reportWebVitals";
import { HashRouter, Route, Switch, Link } from "react-router-dom";
import Navbar from "./Layouts/NavBar";
import Home from "./Layouts/Home";
import Contact from "./Layouts/Contact";
import About from "./Layouts/About";
import Creations from "./Layouts/Creations";


function App() {
  reportWebVitals(console.log);
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <div className="App">
          <Navbar />
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/contact">
            <Contact/>
          </Route>
          <Route exact path="/about">
            <About/>
          </Route>
          <Route exact path="/creations">
            <Creations/>
          </Route>
        </div>
      </Switch>
    </HashRouter>
  );
}

export default App;
