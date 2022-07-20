import { render, screen } from "@testing-library/react";

import Layout from "./Layout";

describe("Layout component", () => {
  it("will render 'I am Layout'", () => {
    render(
      <Layout>
        <span>I am Layout</span>
      </Layout>
    );

    const element = screen.getByText("I am Layout");

    expect(element).toBeTruthy();
  });
});
