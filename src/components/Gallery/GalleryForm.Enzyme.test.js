import React from "react";
import GalleryForm from "./GalleryForm";
import { shallow } from "enzyme";

function renderGalleryForm(args) {
  const defaultProps = {
    venders: [],
    GalleryOne: {},
    saving: false,
    errors: {},
    onSave: () => {},
    onChange: () => {}
  };

  const props = { ...defaultProps, ...args };
  return shallow(<GalleryForm {...props} />);
}

it("renders form and header", () => {
  const wrapper = renderGalleryForm();
  expect(wrapper.find("form").length).toBe(1);
  expect(wrapper.find("h2").text()).toEqual("Add Items in Gallery");
});

it('labels save buttons as "Save" when not saving', () => {
  const wrapper = renderGalleryForm();
  expect(wrapper.find("button").text()).toBe("Save");
});

it('labels save button as "Saving..." when saving', () => {
  const wrapper = renderGalleryForm({ saving: true });
  expect(wrapper.find("button").text()).toBe("Saving...");
});
