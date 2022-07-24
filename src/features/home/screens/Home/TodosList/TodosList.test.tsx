import { screen, render } from "@testing-library/react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

import { TodosList } from "./TodosList";

describe("TodosList component", () => {
  const mockStore = configureMockStore();
  const store = mockStore({
    data: { home: { todos: { data: [], edit: { status: "" } } } },
  });

  const mockedData = {
    data: [],
    status: "",
    create: {
      status: "",
    },
    edit: {
      status: "",
    },
    delete: {
      status: "",
    },
  };

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
      <Provider store={store}>
        <TodosList
          data={mockedData}
          todos={mockedTodos}
          onDeleteTodo={onDeleteTodo}
          editTodo={onEditTodo}
          resetApiData={resetApiData}
        />
      </Provider>
    );

    const element = screen.getByText("title1");

    expect(element).toBeTruthy();
  });

  it("will render 'title2'", () => {
    render(
      <Provider store={store}>
        <TodosList
          data={mockedData}
          todos={mockedTodos}
          onDeleteTodo={onDeleteTodo}
          editTodo={onEditTodo}
          resetApiData={resetApiData}
        />
      </Provider>
    );

    const element = screen.getByText("title2");

    expect(element).toBeTruthy();
  });
});
