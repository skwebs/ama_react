import React from "react";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Register from "./components/pages/Register";
import Students from "./components/pages/Students";
import PageNotFound from "./components/pages/PageNotFound";
import Navbar from "./components/inc/Navbar";
import Footer from "./components/inc/Footer";
import { Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <>
      <header className="flex-grow-0 flex-shrink-0">
        <Navbar />
      </header>
      <main
        style={{ marginTop: "56px", marginBottom: "40px" }}
        className="container flex-grow-1 flex-shrink-0">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/students" component={Students} />
          {/* <Redirect exact from="/" to="/home" /> */}
          <Route path="*" component={PageNotFound} />
          {/* <Route path="*">
            <Redirect to="/home" />
          </Route> */}
          {/* <Redirect from="/" to="/home" /> */}
        </Switch>
      </main>
      <footer className="flex-grow-0 flex-shrink-0">
        <Footer />
      </footer>
    </>
  );
};

export default App;
