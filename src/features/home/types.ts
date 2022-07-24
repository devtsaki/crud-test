import {
  mapDispatchToProps as HomeMapDispatchToProps,
  mapStateToProps as HomeMapStateToProps,
} from "./screens/Home";

export type IHomeScreen = {} & ReturnType<typeof HomeMapDispatchToProps> &
  ReturnType<typeof HomeMapStateToProps>;

export interface ITodo {
  id: number;
  title: string;
  completed: boolean;
  userId?: number;
}
