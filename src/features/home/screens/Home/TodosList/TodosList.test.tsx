import { screen, render } from "@testing-library/react";

import TodosList from "./TodosList";

describe("TodosList component", () => {
  const mockedTodos = [
    {
      id: 123,
      title: "title1",
      completed: false,
    },
    {
      id: 456,
      title: "title2",
      completed: false,
    },
  ];
  const ondeleteTodo = jest.fn();

  it("will render 'title1'", () => {
    render(<TodosList todos={mockedTodos} ondeleteTodo={ondeleteTodo} />);

    const element = screen.getByText("title1");

    expect(element).toBeTruthy();
  });

  it("will render 'title2'", () => {
    render(<TodosList todos={mockedTodos} ondeleteTodo={ondeleteTodo} />);

    const element = screen.getByText("title2");

    expect(element).toBeTruthy();
  });
});
