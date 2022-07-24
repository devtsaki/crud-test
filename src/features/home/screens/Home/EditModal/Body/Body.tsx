import React, { Dispatch } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Formik, Field, Form, ErrorMessage } from "formik";

import Button from "common/components/Button";
import { HomeTodosActionCreators } from "features/home/ducks";
import { RootState } from "state/types";
import Constants from "common/constants";
import { IBodyEditModal, ITodo } from "features/home/types";

const Wrapper = styled.div`
  max-height: 600px;
  max-width: 500px;
  display: flex;
  min-width: 400px;
`;

interface Props extends IBodyEditModal {
  todo: ITodo;
  onDismiss: () => void;
}

const Body = ({ todo, data, resetApiData, editTodo, onDismiss }: Props) => {
  const [isLoading, setIsLoading] = React.useState(false);

  const {
    edit: { status = "" },
  } = data;

  const handleSubmit = React.useCallback(
    (values: { id: number; title: string; completed?: boolean }) => {
      setIsLoading(true);
      const { id, title, completed = false } = values;
      editTodo({ id, title, completed });
    },
    [editTodo]
  );

  React.useEffect(() => {
    if (
      [
        Constants.RESPONSE_STATUS.SUCCESS,
        Constants.RESPONSE_STATUS.FAILURE,
      ].includes(status)
    ) {
      setIsLoading(false);
      onDismiss();
      resetApiData();
    }
  }, [status, onDismiss, resetApiData]);

  const handleValidation = (values: { title: string }) => {
    const errors: { title?: string } = {};

    if (!values.title) {
      errors.title = "Please enter a title";
    }

    return errors;
  };

  return (
    <Wrapper className="flex items-center justify-center flex-col px-12">
      <div className="flex items-center justify-center flex-col w-full">
        <Formik
          initialValues={{
            id: todo.id,
            title: todo.title,
          }}
          onSubmit={handleSubmit}
          validate={handleValidation}
        >
          {(formik) => (
            <Form>
              <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                htmlFor="title"
              >
                Todo ID
              </label>
              <Field
                id="id"
                name="id"
                disabled={true}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                htmlFor="id"
              >
                Todo ID
              </label>
              <Field
                id="title"
                name="title"
                placeholder="Enter a title"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              <ErrorMessage component="a" name="title" />
              <div className="flex items-center justify-between row mx-4 my-8 w-full">
                <div className="flex items-center justify-center w-1/2 h-12">
                  <Button
                    variant="secondary"
                    label="Cancel"
                    onClick={onDismiss}
                  />
                </div>
                <div className="flex items-center justify-center w-1/2 h-12">
                  <Button
                    type="submit"
                    variant="primary"
                    label="Edit Todo"
                    disabled={
                      !formik.dirty || !!formik.errors?.title || isLoading
                    }
                    onClick={formik.handleSubmit}
                  />
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Body);
