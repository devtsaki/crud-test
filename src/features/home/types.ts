import {
  mapDispatchToProps as HomeMapDispatchToProps,
  mapStateToProps as HomeMapStateToProps,
} from "./screens/Home";

import {
  mapDispatchToProps as BodyDispatchToProps,
  mapStateToProps as BodyMapStateToProps,
} from "./screens/Home/AddNewModal/Body";

export type IHomeScreen = {} & ReturnType<typeof HomeMapDispatchToProps> &
  ReturnType<typeof HomeMapStateToProps>;

export type IBodyAddModal = {} & ReturnType<typeof BodyDispatchToProps> &
  ReturnType<typeof BodyMapStateToProps>;

export interface ITodo {
  id: number;
  title: string;
  completed: boolean;
  userId?: number;
}
