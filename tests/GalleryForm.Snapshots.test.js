import React from "react";
import GalleryOneForm from "../src/components/Gallery/GalleryForm";
import renderer from "react-test-renderer";
import { Gallery, venders } from "../tools/mockData";

it("sets submit button label 'Saving...' when saving is true", () => {
  const tree = renderer.create(
    <GalleryOneForm
      GalleryOne={Gallery[0]}
      venders={venders}
      onSave={jest.fn()}
      onChange={jest.fn()}
      saving
    />
  );

  expect(tree).toMatchSnapshot();
});

it("sets submit button label 'Save' when saving is false", () => {
  const tree = renderer.create(
    <GalleryOneForm
      GalleryOne={Gallery[0]}
      venders={venders}
      onSave={jest.fn()}
      onChange={jest.fn()}
      saving={false}
    />
  );

  expect(tree).toMatchSnapshot();
});
