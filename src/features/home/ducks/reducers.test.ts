import CommonReducers from "./reducers";
import ActionNames from "./actionNames";

describe("Common reducer", () => {
  const initialState = {
    todos: { data: [], status: "" },
  };

  it("will return the initial state", () => {
    expect(CommonReducers(initialState, { type: "a type" } as any)).toEqual({
      todos: { data: [], status: "" },
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
      },
    });
  });

  it("will return the FETCH_TODOS_SUCCEDED state", () => {
    expect(
      CommonReducers(initialState, {
        type: ActionNames.FETCH_TODOS_SUCCEDED,
        payload: { data: [{ image: "123" }] },
      } as any)
    ).toEqual({
      todos: {
        data: [{ image: "123" }],
        status: "SUCCESS",
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
      },
    });
  });
});
