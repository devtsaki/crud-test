import React from "react";

import Modal from "common/components/Modal";
import Body from "./Body";
import { ITodo } from "features/home/types";

interface Props {
  todo: ITodo;
  isOpen: boolean;
  onDismiss: () => void;
}

const EditModal = ({ todo, isOpen, onDismiss }: Props) => {
  return (
    <Modal
      title={"Edit todo"}
      body={<Body todo={todo} onDismiss={onDismiss} />}
      isOpen={isOpen}
      onDismiss={onDismiss}
    />
  );
};

export default EditModal;
