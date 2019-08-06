import React from "react";
import { connect } from "react-redux";
import * as GalleryActions from "../../redux/actions/GalleryActions";
import * as VenderActions from "../../redux/actions/VenderActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import GalleryList from "./GalleryList";
import { Redirect } from "react-router-dom";

class GalleryPage extends React.Component {
  state = {
    redirectToAddCoursePage: false
  };
  componentDidMount() {
    const { Gallery, venders, actions } = this.props;

    if (Gallery.length === 0) {
      actions.loadGallery().catch(error => {
        alert("Loading Gallery failed" + error);
      });
    }

    if (venders.length === 0) {
      actions.loadvenders().catch(error => {
        alert("Loading venders failed" + error);
      });
    }
  }

  render() {
    return (
      <>
        {this.state.redirectToAddGalleryPage && <Redirect to="/GalleryOne" />}
        <h2>Gallery</h2>

        <button
          style={{ marginBottom: 20 }}
          className="btn btn-primary add-gallery"
          onClick={() => this.setState({ redirectToAddGalleryPage: true })}
        >
          Add Item in Gallery
        </button>
        <GalleryList Gallery={this.props.Gallery} />
      </>
    );
  }
}

GalleryPage.propTypes = {
  venders: PropTypes.array.isRequired,
  Gallery: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  debugger;
  return {
    Gallery:
      state.venders.length === 0
        ? []
        : state.Gallery.map(Gallery => {
            debugger;
            return {
              ...Gallery,
              VenderName: state.venders.find(a => a.id === Gallery.vender).name
            };
          }),
    venders: state.venders
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadGallery: bindActionCreators(GalleryActions.loadGallery, dispatch),
      loadvenders: bindActionCreators(VenderActions.loadvenders, dispatch)
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GalleryPage);
