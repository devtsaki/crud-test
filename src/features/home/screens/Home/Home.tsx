import React from "react";
import { connect } from "react-redux";
import { Dispatch } from "react";
import styled from "styled-components";

import { RootState } from "state/types";
import { HomeTodosActionCreators } from "features/home/ducks";
import { IHomeScreen } from "features/home/types";
import PageTitle from "common/components/PageTitle";
import TodosList from "./TodosList";
import AddNewModal from "./AddNewModal";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 24px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Home = ({ data, deleteTodo, todosRequested }: IHomeScreen) => {
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    todosRequested();
  }, [todosRequested]);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleDismiss = () => {
    setIsOpen(false);
  };

  const { data: todos = [] } = data;

  return (
    <Wrapper>
      <PageTitle
        text="List of todos ✅ ✅ ✅ ✅ ✅"
        onAddClick={handleOpenModal}
      />
      <TodosList todos={todos} ondeleteTodo={deleteTodo} />
      <AddNewModal isOpen={isOpen} onDismiss={handleDismiss} />
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
    todosRequested: () => dispatch(HomeTodosActionCreators.getTodos()),
    deleteTodo: (payload: { id: number }) =>
      dispatch(HomeTodosActionCreators.deleteTodo(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
