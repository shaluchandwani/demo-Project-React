import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
  <div className="jumbotron">
    <h1>SVAS Collections</h1>
    <p>
      Feel Free to view the collections and to know more about us please click
    </p>
    <Link to="about" className="btn btn-primary btn-lg">
      Learn more About Us
    </Link>
  </div>
);

export default HomePage;
