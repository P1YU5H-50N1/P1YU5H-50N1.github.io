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
    <HashRouter basename="/">
      <Switch>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/about" component={About} />
          <Route exact path="/creations" component={Creations} />
        </div>
      </Switch>
    </HashRouter>
  );
}

export default App;
