import ActionCreators from "./actionCreators";
import ActionNames from "./actionNames";

describe("Home action creators", () => {
  it("will return getTodos type and paylod", () => {
    expect(ActionCreators.getTodos()).toEqual({
      type: ActionNames.FETCH_TODOS_REQUESTED,
      payload: {},
    });
  });

  it("will return todosSucceeded type and paylod", () => {
    const mockedData = [{ id: "123" }];

    expect(ActionCreators.todosSucceeded(mockedData)).toEqual({
      type: ActionNames.FETCH_TODOS_SUCCEDED,
      payload: { data: mockedData },
    });
  });

  it("will return todosFailed type and paylod", () => {
    expect(ActionCreators.todosFailed()).toEqual({
      type: ActionNames.FETCH_TODOS_FAILED,
      payload: {},
    });
  });

  it("will return createTodo type and paylod", () => {
    expect(ActionCreators.createTodo({ title: "a_title" })).toEqual({
      type: ActionNames.CREATE_TODO_REQUESTED,
      payload: { title: "a_title" },
    });
  });

  it("will return createTodoSucceeded type and paylod", () => {
    expect(ActionCreators.createTodoSucceeded()).toEqual({
      type: ActionNames.CREATE_TODO_SUCCEDED,
      payload: {},
    });
  });

  it("will return createTodoFailed type and paylod", () => {
    expect(ActionCreators.createTodoFailed()).toEqual({
      type: ActionNames.CREATE_TODO_FAILED,
      payload: {},
    });
  });
});
