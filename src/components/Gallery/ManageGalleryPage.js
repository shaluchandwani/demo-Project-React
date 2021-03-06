import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { loadGallery, saveGallery } from "../../redux/actions/GalleryActions";
import { loadvenders } from "../../redux/actions/VenderActions";
import PropTypes from "prop-types";
import GalleryForm from "./GalleryForm";
import { newGallery } from "../../../tools/mockData";
import Spinner from "../common/Spinner";
import { toast } from "react-toastify";

export function ManageGalleryPage({
  Gallery,
  venders,
  loadvenders,
  loadGallery,
  saveGallery,
  history,
  ...props
}) {
  const [GalleryOne, setGallery] = useState({ ...props.GalleryOne });
  const [errors, setErrors] = useState({});
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (Gallery.length === 0) {
      loadGallery().catch(error => {
        alert("Loading Gallery failed" + error);
      });
    } else {
      setGallery({ ...props.GalleryOne });
    }

    if (venders.length === 0) {
      loadvenders().catch(error => {
        alert("Loading venders failed" + error);
      });
    }
  }, [props.GalleryOne]);

  function handleChange(event) {
    const { name, value } = event.target;
    setGallery(prevGallery => ({
      ...prevGallery,
      [name]: name === "vender" ? parseInt(value, 10) : value
    }));
  }
  function formIsValid() {
    const { title, size, amount } = GalleryOne;
    const errors = {};
    if (!title) errors.title = "Title is required.";
    if (!size) errors.size = "size is required.";
    if (!amount) errors.amount = "amount is required.";

    setErrors(errors);
    return Object.keys(errors).length === 0;
  }

  function handleSave(event) {
    event.preventDefault();
    if (!formIsValid()) return;
    setSaving(true);
    saveGallery(GalleryOne)
      .then(() => {
        toast.success("Item saved in Gallery.");
        history.push("/Gallery");
      })
      .catch(error => {
        setSaving(false);
        setErrors({ onSave: error.message });
      });
  }

  return venders.length === 0 || Gallery.length === 0 ? (
    <Spinner />
  ) : (
    <GalleryForm
      GalleryOne={GalleryOne}
      errors={errors}
      venders={venders}
      onChange={handleChange}
      onSave={handleSave}
      saving={saving}
    />
  );
}

ManageGalleryPage.propTypes = {
  GalleryOne: PropTypes.object.isRequired,
  venders: PropTypes.array.isRequired,
  Gallery: PropTypes.array.isRequired,
  loadGallery: PropTypes.func.isRequired,
  loadvenders: PropTypes.func.isRequired,
  saveGallery: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

export function getGalleryBySlug(Gallery, slug) {
  return Gallery.find(GalleryOne => GalleryOne.slug === slug) || null;
}

function mapStateToProps(state, ownProps) {
  const slug = ownProps.match.params.slug;
  const GalleryOne =
    slug && state.Gallery.length > 0
      ? getGalleryBySlug(state.Gallery, slug)
      : newGallery;
  return {
    GalleryOne,
    Gallery: state.Gallery,
    venders: state.venders
  };
}

const mapDispatchToProps = {
  loadGallery,
  loadvenders,
  saveGallery
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageGalleryPage);
