import React, { Dispatch } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { HomeTodosActionCreators } from "features/home/ducks";
import { RootState } from "state/types";
import { ITodoList } from "features/home/types";
import { ITodo } from "features/home/types";
import Dialog from "common/components/Dialog";
import Actions from "./Actions";
import EditModal from "../EditModal";

const Wrapper = styled.div`
  display: flex;
  width: 800px;
  height: 100%;
  align-items: center;
  justify-content: center;
  align-content: flex-start;
`;

interface Props extends ITodoList {
  todos: ITodo[];
  onDeleteTodo: (payload: { id: number }) => void;
}

export const TodosList = ({ todos, onDeleteTodo, editTodo }: Props) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isEditOpen, setIsEditOpen] = React.useState(false);
  const [selectedTodo, setSelectedTodo] = React.useState({});

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleOpenEditModal = () => {
    setIsEditOpen(true);
  };

  const handleCloseEditModal = () => {
    setIsEditOpen(false);
  };

  const handleEditTodo = (todo: ITodo) => {
    setSelectedTodo(todo);
    handleOpenEditModal();
  };

  const handleDeleteTodo = (id: number) => {
    onDeleteTodo({ id });
    setIsOpen(false);
  };

  const handleCheckBox = (e: any, todo: ITodo) => {
    editTodo({ ...todo, completed: e.target.checked });
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
                value={`${todo.id}`}
                id={`item_${todo.id}`}
                checked={todo.completed}
                onChange={(e) => handleCheckBox(e, todo)}
              />
              <label
                className="form-check-label inline-block text-gray-800"
                htmlFor={`item_${todo.id}`}
              >
                {todo.title}
              </label>
            </div>
            <Actions
              onEdit={() => handleEditTodo(todo)}
              onDelete={handleOpenModal}
            />
            <Dialog
              title="Delete favorite"
              description="Are you sure you want to delete this favorite?"
              isOpen={isOpen}
              onConfirm={() => handleDeleteTodo(todo.id)}
              onDismiss={handleCloseModal}
            />
            <EditModal
              todo={selectedTodo as ITodo}
              isOpen={isEditOpen}
              onDismiss={handleCloseEditModal}
            />
          </li>
        ))}
      </ul>
    </Wrapper>
  );
};

export const mapStateToProps = (state: RootState) => {
  return {
    data: state.data.home.todos,
  };
};

export const mapDispatchToProps = (dispatch: Dispatch<any>) => {
  return {
    editTodo: (payload: { id: number; title: string; completed: boolean }) =>
      dispatch(HomeTodosActionCreators.editTodo(payload)),
    resetApiData: (slice = "all") =>
      dispatch(HomeTodosActionCreators.resetApiData(slice)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodosList);
