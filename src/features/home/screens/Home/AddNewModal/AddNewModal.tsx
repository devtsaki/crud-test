import React from "react";

import Modal from "common/components/Modal";

interface Props {
  isOpen: boolean;
  onDismiss: () => void;
}

const AddNewModal = ({ isOpen, onDismiss }: Props) => {
  return (
    <Modal
      title={"Add a new todo"}
      body={<span>Hello</span>}
      isOpen={isOpen}
      onDismiss={onDismiss}
    />
  );
};

export default AddNewModal;
