import React from "react";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import PageNotFound from "./components/pages/PageNotFound";
import Navbar from "./components/inc/Navbar";
import Footer from "./components/inc/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          {/* <Route
            activeClassName="is-active"
            path="/"
            exact
            component={() => <Home />}
          />
          <Route
            activeClassName="is-active"
            path="/about"
            exact
            component={() => <About />}
          />
          <Route
            activeClassName="is-active"
            path="/contact"
            exact
            component={() => <Contact />}
          />
          <Route component={() => <PageNotFound />} /> */}

          <Route exact activeClassName="is-active" to="/">
            <Home />
          </Route>
          <Route exact activeClassName="is-active" to="/about">
            <About />
          </Route>
          <Route exact activeClassName="is-active" to="/contact">
            <Contact />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
