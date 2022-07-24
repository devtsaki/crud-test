import { render, screen } from "@testing-library/react";

import PageTitle from "./PageTitle";

describe("PageTitle component", () => {
  const onAddClick = jest.fn();
  it("will render 'A title'", () => {
    render(<PageTitle text="A title" onAddClick={onAddClick} />);

    const element = screen.getByText("A title");

    expect(element).toBeTruthy();
  });
});
