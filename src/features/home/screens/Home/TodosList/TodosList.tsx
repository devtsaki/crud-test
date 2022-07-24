import styled from "styled-components";

import { ITodo } from "features/home/types";

const Wrapper = styled.div`
  display: flex;
  width: 800px;
  height: 100%;
  align-items: center;
  justify-content: center;
  align-content: flex-start;
`;

interface Props {
  todos: ITodo[];
}

const TodoslList = ({ todos }: Props) => {
  const handleSelectTodo = (todo: ITodo) => {
    console.log("toto", todo);
  };

  if (todos.length === 0) {
    return <span>There are no todos</span>;
  }

  return (
    <Wrapper>
      <ul className="bg-white rounded-lg border border-gray-200 w-full text-gray-900">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="px-6 py-2 border-b border-gray-200 w-full rounded-t-lg"
          >
            <div className="form-check">
              <input
                className="form-check-input  h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                type="checkbox"
                value=""
                id={`item_${todo.id}`}
              />
              <label
                className="form-check-label inline-block text-gray-800"
                htmlFor={`item_${todo.id}`}
              >
                {todo.title}
              </label>
            </div>
          </li>
        ))}
      </ul>
    </Wrapper>
  );
};

export default TodoslList;
