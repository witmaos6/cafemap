

/* src/App.js */

import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ToExamine from "./pages/ToExamine";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/ToExamine" component={ToExamine} />
        <Route path="/" exact component={Home} />
        <Route path="/About" component={About} />
        <Route path="/Contact" component={Contact} />
      </Switch>
    </Router>
  );
}
export default App;

