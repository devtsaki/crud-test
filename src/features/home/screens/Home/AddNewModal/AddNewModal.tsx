import React from "react";

import Modal from "common/components/Modal";
import Body from "./Body";

interface Props {
  isOpen: boolean;
  onDismiss: () => void;
}

const AddNewModal = ({ isOpen, onDismiss }: Props) => {
  return (
    <Modal
      title={"Add a new todo"}
      body={<Body onDismiss={onDismiss} />}
      isOpen={isOpen}
      onDismiss={onDismiss}
    />
  );
};

export default AddNewModal;
