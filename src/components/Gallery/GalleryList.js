import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const GalleryList = ({ Gallery }) => (
  <table className="table">
    <thead>
      <tr>
        <th />
        <th>Title</th>
        <th>vender</th>
        <th>Size</th>
        <th>Amount</th>
        <th>Image</th>
      </tr>
    </thead>
    <tbody>
      {Gallery.map(Gallery => {
        return (
          <tr key={Gallery.id}>
            <td>
              <a className="btn btn-light" href={"/GalleryOne/" + Gallery.slug}>
                Detailed View
              </a>
            </td>
            <td>
              <Link to={"/GalleryOne/" + Gallery.slug}>{Gallery.title}</Link>
            </td>
            <td>{Gallery.VenderName}</td>
            <td>{Gallery.size}</td>
            <td>{Gallery.amount}</td>
            <td>{Gallery.image}</td>
          </tr>
        );
      })}
    </tbody>
  </table>
);

GalleryList.propTypes = {
  Gallery: PropTypes.array.isRequired
};

export default GalleryList;
