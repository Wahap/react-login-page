import React from "react";
import Header from "./Header";
import { mount, shallow } from "enzyme";
import { MemoryRouter } from "react-router-dom";

import { posts, authors } from "../../../tools/mockData";

import configureStore from "../../redux/configureStore";
const store = configureStore();

const props = {
  user: authors[0],
  posts
};
const user = { id: 1, name: "Cory House", email: "email@email.com" };
describe("renders without crashing", () => {
  test("render", () => {
    const wrapper = shallow(<Header />);

    expect(wrapper.exists()).toBe(true);
  });
});

//Note how with shallow render you search for the React component tag
// it("contains 2 anchors via mount", () => {
//   const numAnchors = mount(
//     <MemoryRouter>
//       <Header store={store} user={user} />
//     </MemoryRouter>
//   ).find("a").length;

//   expect(numAnchors).toEqual(6);
// });

// Note how with mount you search for the final rendered HTML since it generates the final DOM.
// We also need to pull in React Router's memoryRouter for testing since the Header expects to have React Router's props passed in.
it("contains 2 anchors via mount", () => {
  const numAnchors = mount(
    <MemoryRouter>
      <Header store={store} />
    </MemoryRouter>
  ).find("a").length;

  expect(numAnchors).toEqual(2);
});
