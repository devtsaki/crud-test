import styled from "styled-components";

import IconButton from "common/components/IconButton";

const Wrapper = styled.div`
  display: flex;
  width: 6rem;
  align-items: center;
  justify-content: space-between;
`;

interface Props {
  onEdit: () => void;
  onDelete: () => void;
}

const Actions = ({ onEdit, onDelete }: Props) => {
  return (
    <Wrapper>
      <IconButton icon="edit" onClick={onEdit} />
      <IconButton icon="delete" onClick={onDelete} />
    </Wrapper>
  );
};

export default Actions;
