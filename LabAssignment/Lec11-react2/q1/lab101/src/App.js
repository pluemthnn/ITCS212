import React, { Component } from 'react';
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./components/home";
import Menu from "./components/menu";
import Recipe from "./components/recipe";


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/menu" component={Menu} />
            <Route path="/recipe" component={Recipe} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
