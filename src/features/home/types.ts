import {
  mapDispatchToProps as HomeMapDispatchToProps,
  mapStateToProps as HomeMapStateToProps,
} from "./screens/Home";

import {
  mapDispatchToProps as TodoListMapDispatchToProps,
  mapStateToProps as TodoListMapStateToProps,
} from "./screens/Home/TodosList";

import {
  mapDispatchToProps as BodyDispatchToProps,
  mapStateToProps as BodyMapStateToProps,
} from "./screens/Home/AddNewModal/Body";

import {
  mapDispatchToProps as EditBodyDispatchToProps,
  mapStateToProps as EditBodyMapStateToProps,
} from "./screens/Home/EditModal/Body";

export type IHomeScreen = {} & ReturnType<typeof HomeMapDispatchToProps> &
  ReturnType<typeof HomeMapStateToProps>;

export type IBodyAddModal = {} & ReturnType<typeof BodyDispatchToProps> &
  ReturnType<typeof BodyMapStateToProps>;

export type IBodyEditModal = {} & ReturnType<typeof EditBodyDispatchToProps> &
  ReturnType<typeof EditBodyMapStateToProps>;

export type ITodoList = {} & ReturnType<typeof TodoListMapDispatchToProps> &
  ReturnType<typeof TodoListMapStateToProps>;
export interface ITodo {
  id: number;
  title: string;
  completed: boolean;
  userId?: number;
}
