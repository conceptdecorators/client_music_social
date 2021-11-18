import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import About from "./components/layout/About";
import Services from "./components/layout/Services";
import Sync from "./components/layout/Sync";
import Faq from "./components/layout/Faq";
import Home from "./components/layout/Home";
import Blog from "./components/layout/Blog";
import Upload from "./components/layout/Upload";
import Routes from "./components/routing/Routes";
import "./App.css";
import Footer from "./components/layout/Footer";

// Redux
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <div className="page-container">
      <Provider store={store}>
        <Router>
          <Fragment>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route path="/about" component={About} />
              <Route exact path="/services" component={Services} />
              <Route exact path="/sync" component={Sync} />
              <Route exact path="/faq" component={Faq} />
              <Route exact path="/blog" component={Blog} />
              <Route path="/upload" exact component={Upload} />
              <Route component={Routes} />
            </Switch>
          </Fragment>
        </Router>
        <Footer />
      </Provider>
    </div>
  );
};

export default App;
