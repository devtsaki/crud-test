import React from "react";
import { connect } from "react-redux";
import { Dispatch } from "react";

import { RootState } from "state/types";
import { HomeTodosActionCreators } from "features/home/ducks";
import { IHomeScreen } from "features/home/types";

export const Home = ({ data, todosRequested }: IHomeScreen) => {
  React.useEffect(() => {
    todosRequested();
  }, [todosRequested]);

  console.log(data);

  return (
    <div>
      <span>I am Home</span>
    </div>
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
