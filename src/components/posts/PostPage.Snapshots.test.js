import React from "react";
import renderer from "react-test-renderer";
import { courses, authors } from "../../../tools/mockData";
import PostPage from "./PostPage";
import configureStore from "../../redux/configureStore";
const store = configureStore();

const props = {
  loading: true
};

it("sets submit button label 'Saving...' when saving is true", () => {
  const tree = renderer.create(<PostPage store={store} {...props} />);

  expect(tree).toMatchSnapshot();
});
