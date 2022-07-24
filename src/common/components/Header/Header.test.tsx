import { render, screen } from "@testing-library/react";

import Header from "./Header";

describe("Header componet", () => {
  it("will render 'Todo CRUD'", () => {
    render(<Header />);

    const element = screen.getByText("Todo CRUD");

    expect(element).toBeTruthy();
  });
});
