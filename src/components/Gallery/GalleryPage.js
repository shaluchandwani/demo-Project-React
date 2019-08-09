import React from "react";
import { connect } from "react-redux";
import * as GalleryActions from "../../redux/actions/GalleryActions";
import * as VenderActions from "../../redux/actions/VenderActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import GalleryList from "./GalleryList";
import { Redirect } from "react-router-dom";
import Spinner from "../common/Spinner";
import { toast } from "react-toastify";

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

  handleDeleteGallery = async Gallery => {
    toast.success("Item deleted from Gallery");
    try {
      await this.props.actions.deleteGallery(Gallery);
    } catch (error) {
      toast.error("Delete failed. " + error.message, { autoClose: false });
    }
  };

  render() {
    return (
      <>
        {this.state.redirectToAddGalleryPage && <Redirect to="/GalleryOne" />}
        <h2>Gallery</h2>
        {this.props.loading ? (
          <Spinner />
        ) : (
          <>
            <button
              style={{ marginBottom: 20 }}
              className="btn btn-primary add-gallery"
              onClick={() => this.setState({ redirectToAddGalleryPage: true })}
            >
              Add Item in Gallery
            </button>
            <GalleryList
              onDeleteClick={this.handleDeleteGallery}
              Gallery={this.props.Gallery}
            />
          </>
        )}
      </>
    );
  }
}

GalleryPage.propTypes = {
  venders: PropTypes.array.isRequired,
  Gallery: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    Gallery:
      state.venders.length === 0
        ? []
        : state.Gallery.map(Gallery => {
            return {
              ...Gallery,
              VenderName: state.venders.find(a => a.id === Gallery.vender).name
            };
          }),
    venders: state.venders,
    loading: state.apiCallsInProgress > 0
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadGallery: bindActionCreators(GalleryActions.loadGallery, dispatch),
      loadvenders: bindActionCreators(VenderActions.loadvenders, dispatch),
      deleteGallery: bindActionCreators(GalleryActions.deleteGallery, dispatch)
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GalleryPage);
