import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

import { Home } from "./Home";

describe("Home screen", () => {
  const mockStore = configureMockStore();
  const store = mockStore({
    data: { home: { todos: { data: [] } } },
  });

  it("will render 'I am Home'", () => {
    const todosRequested = jest.fn();
    const deleteTodo = jest.fn();

    render(
      <Provider store={store}>
        <Home
          todosRequested={todosRequested}
          deleteTodo={deleteTodo}
          data={{
            data: [],
            status: "",
            create: { status: "" },
            edit: { status: "" },
            delete: { status: "" },
          }}
        />
      </Provider>
    );

    const element = screen.getByText("List of todos ✅ ✅ ✅ ✅ ✅");

    expect(element).toBeTruthy();
  });
});
