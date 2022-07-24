import { screen, render } from "@testing-library/react";

import { TodosList } from "./TodosList";

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
  const onDeleteTodo = jest.fn();
  const onEditTodo = jest.fn();
  const resetApiData = jest.fn();

  it("will render 'title1'", () => {
    render(
      <TodosList
        data={{} as any}
        todos={mockedTodos}
        onDeleteTodo={onDeleteTodo}
        editTodo={onEditTodo}
        resetApiData={resetApiData}
      />
    );

    const element = screen.getByText("title1");

    expect(element).toBeTruthy();
  });

  it("will render 'title2'", () => {
    render(
      <TodosList
        data={{} as any}
        todos={mockedTodos}
        onDeleteTodo={onDeleteTodo}
        editTodo={onEditTodo}
        resetApiData={resetApiData}
      />
    );

    const element = screen.getByText("title2");

    expect(element).toBeTruthy();
  });
});
