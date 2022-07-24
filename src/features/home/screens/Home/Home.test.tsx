import { render, screen } from "@testing-library/react";

import { Home } from "./Home";

describe("Home screen", () => {
  it("will render 'I am Home'", () => {
    const todosRequested = jest.fn();

    render(
      <Home
        todosRequested={todosRequested}
        data={{ data: [], status: "", create: { status: "" } }}
      />
    );

    const element = screen.getByText("List of todos ✅ ✅ ✅ ✅ ✅");

    expect(element).toBeTruthy();
  });
});
