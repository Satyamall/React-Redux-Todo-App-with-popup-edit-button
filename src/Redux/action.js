

import { ADD_TODO,REMOVE_TODO_ITEM,TOGGLE_TODO_STATUS} from "./actionTypes";

const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload
  };
};
const removeTodo = (id) => ({
  type: REMOVE_TODO_ITEM,
  payload: {
    id: id
  }
});

const toggleTodo = (id) => ({
  type: TOGGLE_TODO_STATUS,
  payload: {
    id: id
  }
});

export { addTodo,removeTodo,toggleTodo};
