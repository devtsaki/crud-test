import React from "react";
import styled from "styled-components";

import { ITodo } from "features/home/types";
import Dialog from "common/components/Dialog";
import Actions from "./Actions";

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
  ondeleteTodo: (payload: { id: number }) => void;
}

const TodoslList = ({ todos, ondeleteTodo }: Props) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleEditTodo = (id: number) => {
    console.log("toto", id);
  };

  const handleDeleteTodo = (id: number) => {
    ondeleteTodo({ id });
    setIsOpen(false);
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
            className="px-6 py-2 border-b border-gray-200 w-full rounded-t-lg flex items-center justify-between"
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
            <Actions
              onEdit={() => handleEditTodo(todo.id)}
              onDelete={handleOpenModal}
            />
            <Dialog
              title="Delete favorite"
              description="Are you sure you want to delete this favorite?"
              isOpen={isOpen}
              onConfirm={() => handleDeleteTodo(todo.id)}
              onDismiss={handleCloseModal}
            />
          </li>
        ))}
      </ul>
    </Wrapper>
  );
};

export default TodoslList;
