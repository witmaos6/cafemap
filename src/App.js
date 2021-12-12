

/* src/App.js */

import "./App.css";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ToExamine from "./pages/ToExamine";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import MapContainer from "./pages/MapContainer";

function App() {
  return (
    <Router>
      <Navbar />
      <LandingPage/>
      <Switch>
        <Route path="/ToExamine" component={ToExamine} />
        <Route path="/" exact component={Home} />
        <Route path="/About" component={About} />
        <Route path="/Contact" component={Contact} />
        <Route path="/MapContainer" MapContainer={MapContainer} />
      </Switch>
    </Router>
  );
}
export default App;

