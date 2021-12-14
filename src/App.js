import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ToExamine from './pages/ToExamine';
import About from './pages/About';
import Contact from './pages/Contact';
import { useState } from 'react';
import Home from './pages/Home';

function App() {
    const [name, setName] = useState('');
    const [place, setPlace] = useState('');

    return (
        <>
            <Navbar name={name} setPlace={setPlace} />
            <Router>
                <Switch>
                    <Route path="/" component={() => <Home setName={setName} searchPlace={place} />} exact />
                    <Route path="/ToExamine" component={ToExamine} exact />
                    <Route path="/About" component={About} exact />
                    <Route path="/Contact" component={Contact} exact />
                </Switch>
            </Router>
        </>
    );
}
export default App;
