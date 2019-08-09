import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";
import Header from "./common/Header";
import PageNotFound from "./PageNotFound";
import GalleryPage from "./Gallery/GalleryPage";
// eslint-disable-next-line import/no-named-as-default
import ManageGalleryPage from "./Gallery/ManageGalleryPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
      <ToastContainer autoClose={3000} hideProgressBar />
    </div>
  );
}

export default App;
