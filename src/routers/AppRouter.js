import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Nav from "../components/Nav";
import Footer from "../components/Footer";

import LandingPage from "../components/pages/LandingPage";
import AboutPage from "../components/pages/AboutPage";
import PortfolioPage from "../components/pages/PortfolioPage";
import ContactPage from "../components/pages/ContactPage";
import CodepenPage from "../components/pages/CodepenPage";

import NotFoundPage from "../components/pages/NotFoundPage";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/portfolio" component={PortfolioPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/codepen" component={CodepenPage} />
        <Route component={NotFoundPage} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;
