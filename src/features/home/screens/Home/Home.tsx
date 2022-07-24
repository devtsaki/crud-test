import React from "react";
import { connect } from "react-redux";
import { Dispatch } from "react";
import styled from "styled-components";

import { RootState } from "state/types";
import { HomeTodosActionCreators } from "features/home/ducks";
import { IHomeScreen, ITodo } from "features/home/types";
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
  const [todosData, setTodosData] = React.useState([] as ITodo[]);
  const [searchQuery, setSearchQuery] = React.useState("");

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

  React.useEffect(() => {
    if (todos.length > 0) {
      setTodosData(todos);
    }
  }, [todos]);

  const onChangeSearch = React.useCallback(
    (term: string) => {
      if (todos?.length > 0) {
        setSearchQuery(term);

        const filteredData = todos.filter((todo: ITodo) =>
          todo?.title.toLowerCase().includes(term.toLowerCase())
        );

        requestAnimationFrame(() => {
          setTodosData(filteredData);
        });
      }
    },
    [todos]
  );

  return (
    <Wrapper>
      <div className="flex justify-center">
        <div className="w-full">
          <div className="input-group relative flex flex-wrap items-stretch w-full mb-4 rounded">
            <input
              type="search"
              className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Search"
              aria-label="Search"
              onChange={(e) => onChangeSearch(e.target.value)}
              value={searchQuery}
            />
          </div>
        </div>
      </div>
      <PageTitle
        text="List of todos ✅ ✅ ✅ ✅ ✅"
        onAddClick={handleOpenModal}
      />
      <TodosList todos={todosData} onDeleteTodo={deleteTodo} />
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
