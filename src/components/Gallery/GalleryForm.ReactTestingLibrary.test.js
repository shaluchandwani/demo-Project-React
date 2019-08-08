import React from "react";
import { cleanup, render } from "react-testing-library";
import GalleryForm from "./GalleryForm";

afterEach(cleanup);

function renderGalleryForm(args) {
  let defaultProps = {
    venders: [],
    GalleryOne: {},
    saving: false,
    errors: {},
    onSave: () => {},
    onChange: () => {}
  };

  const props = { ...defaultProps, ...args };
  return render(<GalleryForm {...props} />);
}

it("should render Add Gallery header", () => {
  const { getByText } = renderGalleryForm();
  getByText("Add Items in Gallery");
});

it('should label save button as "Save" when not saving', () => {
  const { getByText } = renderGalleryForm();
  getByText("Save");
});

it('should label save button as "Saving..." when saving', () => {
  const { getByText } = renderGalleryForm({ saving: true });
  getByText("Saving...");
});
