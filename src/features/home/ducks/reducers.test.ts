import CommonReducers from "./reducers";
import ActionNames from "./actionNames";

describe("Common reducer", () => {
  const initialState = {
    todos: { data: [], status: "", create: { status: "" } },
  };

  it("will return the initial state", () => {
    expect(CommonReducers(initialState, { type: "a type" } as any)).toEqual({
      todos: { data: [], status: "", create: { status: "" } },
    });
  });

  it("will return the FETCH_TODOS_REQUESTED state", () => {
    expect(
      CommonReducers(initialState, {
        type: ActionNames.FETCH_TODOS_REQUESTED,
      } as any)
    ).toEqual({
      todos: {
        data: [],
        status: "PENDING",
        create: { status: "" },
      },
    });
  });

  it("will return the FETCH_TODOS_SUCCEDED state", () => {
    expect(
      CommonReducers(initialState, {
        type: ActionNames.FETCH_TODOS_SUCCEDED,
        payload: { data: [{ id: "123" }] },
      } as any)
    ).toEqual({
      todos: {
        data: [{ id: "123" }],
        status: "SUCCESS",
        create: { status: "" },
      },
    });
  });

  it("will return the FETCH_TODOS_FAILED state", () => {
    expect(
      CommonReducers(initialState, {
        type: ActionNames.FETCH_TODOS_FAILED,
      } as any)
    ).toEqual({
      todos: {
        data: [],
        status: "FAILURE",
        create: { status: "" },
      },
    });
  });

  it("will return the CREATE_TODO_REQUESTED state", () => {
    expect(
      CommonReducers(initialState, {
        type: ActionNames.CREATE_TODO_REQUESTED,
      } as any)
    ).toEqual({
      todos: {
        data: [],
        status: "",
        create: { status: "PENDING" },
      },
    });
  });

  it("will return the CREATE_TODO_SUCCEDED state", () => {
    expect(
      CommonReducers(initialState, {
        type: ActionNames.CREATE_TODO_SUCCEDED,
        payload: {},
      } as any)
    ).toEqual({
      todos: {
        data: [],
        status: "",
        create: { status: "SUCCESS" },
      },
    });
  });

  it("will return the CREATE_TODO_FAILED state", () => {
    expect(
      CommonReducers(initialState, {
        type: ActionNames.CREATE_TODO_FAILED,
        payload: {},
      } as any)
    ).toEqual({
      todos: {
        data: [],
        status: "",
        create: { status: "FAILURE" },
      },
    });
  });
});
