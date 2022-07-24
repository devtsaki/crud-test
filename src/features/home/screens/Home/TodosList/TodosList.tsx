import styled from "styled-components";

import { ITodo } from "features/home/types";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  max-width: 800px;
  height: 100%;
  align-items: center;
  justify-content: center;
  align-content: flex-start;
`;

interface Props {
  todos: ITodo[];
}

const BreedslList = ({ todos }: Props) => {
  const handleSelectTodo = (todo: ITodo) => {
    console.log("toto", todo);
  };

  if (todos.length === 0) {
    return <span>There are no todos</span>;
  }

  return (
    <Wrapper>
      {todos.map((todo) => (
        <span key={todo.id}>{todo.title}</span>
      ))}
    </Wrapper>
  );
};

export default BreedslList;
