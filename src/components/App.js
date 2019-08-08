import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";
import Header from "./common/Header";
import PageNotFound from "./PageNotFound";
import GalleryPage from "./Gallery/GalleryPage";
import ManageGalleryPage from "./Gallery/ManageGalleryPage";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/Gallery" component={GalleryPage} />
        <Route path="/GalleryOne/:slug" component={ManageGalleryPage} />
        <Route path="/GalleryOne" component={ManageGalleryPage} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
