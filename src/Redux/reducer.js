// state, action

import { ADD_TODO,REMOVE_TODO_ITEM,TOGGLE_TODO_STATUS } from "./actionTypes";

const initState = {
  todo:[]
};

const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      return {
        ...state,
        todo: [...state.todo,payload]
      };
      case REMOVE_TODO_ITEM: {
        // TODO
        return {
          ...state,
          todo: state.todo.filter((item) => item.id !== payload?.id)
        };
      }
      case TOGGLE_TODO_STATUS: {
        // TODO
        return {
          ...state,
          todo: state.todo.map((item) =>
            item.id === payload.id
              ? { ...item, status: !item.status }
              : item
          )
        };
      }
    default:
      return state;
  }
};

export { reducer };
