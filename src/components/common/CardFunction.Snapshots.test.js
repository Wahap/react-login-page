import React from "react";
import PropTypes from "prop-types";
import renderer from "react-test-renderer";
import { posts, postArray } from "../../../tools/mockData";
import configureStore from "../../redux/configureStore";
import CardFunction from "./CardFunction";
const store = configureStore();

const props = {
  loading: true,
  posts
};

it("sets submit button label 'Saving...' when saving is false", () => {
  const tree = renderer.create(<CardFunction store={store} data={posts} />);

  expect(tree).toMatchSnapshot();
});

it("sets submit button label 'Saving...' when saving is true", () => {
  const tree = renderer.create(<CardFunction store={store} data={postArray} />);

  expect(tree).toMatchSnapshot();
});
