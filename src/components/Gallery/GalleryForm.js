import React from "react";
import PropTypes from "prop-types";
import TextInput from "../common/TextInput";
import SelectInput from "../common/SelectInput";

const GalleryOneForm = ({
  GalleryOne,
  venders,
  onSave,
  onChange,
  saving = false,
  errors = {}
}) => {
  return (
    <form onSubmit={onSave}>
      <h2>{GalleryOne.id ? "Edit" : "Add"} Items in Gallery</h2>
      {errors.onSave && (
        <div className="alert alert-danger" role="alert">
          {errors.onSave}
        </div>
      )}
      <TextInput
        name="title"
        label="Title"
        value={GalleryOne.title}
        onChange={onChange}
        error={errors.title}
      />

      <SelectInput
        name="vender"
        label="Vender Name"
        value={GalleryOne.vender || ""}
        defaultOption="Select Vender"
        options={venders.map(vender => ({
          value: vender.id,
          text: vender.name
        }))}
        onChange={onChange}
        error={errors.vender}
      />

      <TextInput
        name="size"
        label="Size"
        value={GalleryOne.size}
        onChange={onChange}
        error={errors.size}
      />

      <TextInput
        name="amount"
        label="amount"
        value={GalleryOne.amount}
        onChange={onChange}
        error={errors.amount}
      />

      <button type="submit" disabled={saving} className="btn btn-primary">
        {saving ? "Saving..." : "Save"}
      </button>
    </form>
  );
};

GalleryOneForm.propTypes = {
  venders: PropTypes.array.isRequired,
  GalleryOne: PropTypes.object.isRequired,
  errors: PropTypes.object,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool
};

export default GalleryOneForm;
