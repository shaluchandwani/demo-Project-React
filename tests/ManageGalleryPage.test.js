import React from "react";
import { mount } from "enzyme";
import { venders, newGallery, Gallery } from "../tools/mockData";
import { ManageGalleryPage } from "../src/components/Gallery/ManageGalleryPage";

function render(args) {
  const defaultProps = {
    venders,
    Gallery,
    history: {},
    saveGallery: jest.fn(),
    loadvenders: jest.fn(),
    loadGallery: jest.fn(),
    GalleryOne: newGallery,
    match: {}
  };

  const props = { ...defaultProps, ...args };

  return mount(<ManageGalleryPage {...props} />);
}

it("sets error when attempting to save an empty title field", () => {
  const wrapper = render();
  wrapper.find("form").simulate("submit");
  const error = wrapper.find(".alert").first();
  expect(error.text()).toBe("Title is required.");
});
