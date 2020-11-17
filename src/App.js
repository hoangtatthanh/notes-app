import React, {Component} from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';

import TopNav from "./components/TopNav";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: []
        }
    }

    s4() {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }

    generateID() {
        return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + this.s4() + this.s4();
    }

    onSubmit = (data) => {
        // if (localStorage.getItem('notes') === null){
        //     let notes = [];
        //     notes.push(data);
        //     localStorage.setItem('notes', JSON.stringify(notes));
        // } else {
        //     let notes = JSON.parse(localStorage.getItem('notes'));
        //     notes.push(data);
        //     localStorage.setItem('notes', JSON.stringify(notes));
        // }
        let {notes} = this.state;
        if (data.id === ''){
            data.id = this.generateID();
            notes.push(data);
        } else {
            const index = this.findIndex(data.id);
            notes[index] = data;
        }

        this.setState({
            notes: notes
        });
        localStorage.setItem('notes', JSON.stringify(notes));
    }

    findIndex = (id) => {
        let { notes } = this.state;
        let result = -1;
        notes.forEach((note, index) => {
            if (note.id === id){
                result = index
            }
        });
        return result;
    }

    render() {
        return (
            <Router>
                <div className="container">
                    <div className="row">
                        <Switch>
                            <Route path="/">
                                <TopNav onSubmit={this.onSubmit}/>
                            </Route>
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
