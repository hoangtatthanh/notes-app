import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';

import TopNav from "./components/TopNav";

function App() {
    return (

        <Router>
            <div className="container">
                <div className="row">
                    <Switch>
                        <Route path="/" component={TopNav} />
                    </Switch>
                </div>
            </div>
        </Router>

    );
}

export default App;
