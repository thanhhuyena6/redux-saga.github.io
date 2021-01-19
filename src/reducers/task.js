import { toastError, toastSuccess } from "../helpers/toastHelper";
import * as taskConstant from "./../constants/task";

const initialState = {
  listTask: [],
  taskEditing: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case taskConstant.FETCH_TASK: {
      return {
        ...state,
        listTask: [],
      };
    }
    case taskConstant.FETCH_TASK_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        listTask: data,
      };
    }
    case taskConstant.FETCH_TASK_FAILED: {
      const { error } = action.payload;
      toastError(error);
      return {
        ...state,
        listTask: [],
      };
    }
    case taskConstant.FILTER_TASK_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        listTask: data,
      };
    }
    case taskConstant.ADD_TASK: {
      return {
        ...state,
      };
    }
    case taskConstant.ADD_TASK_SUCCESS: {
      const { data } = action.payload;
      toastSuccess("Thêm mới công việc thành công");
      return {
        ...state,
        listTask: [data].concat(state.listTask),
      };
    }
    case taskConstant.ADD_TASK_FAILED: {
      const { error } = action.payload;
      toastError(error);
      return {
        ...state,
      };
    }
    case taskConstant.SET_TASK_EDITING: {
      const { task } = action.payload;
      return {
        ...state,
        taskEditing: task,
      };
    }
    case taskConstant.UPDATE_TASK: {
      return {
        ...state,
      };
    }
    case taskConstant.UPDATE_TASK_SUCCESS: {
      const { data } = action.payload;
      const { listTask } = state;
      const index = listTask.findIndex((item) => item.id === data.id);
      if (index !== -1) {
        const newList = [
          ...listTask.slice(0, index),
          data,
          ...listTask.slice(index + 1),
        ];
        toastSuccess("Cập nhật công việc thành công");
        return {
          ...state,
          listTask: newList,
        };
      }
      return {
        ...state,
      };
    }
    case taskConstant.UPDATE_TASK_FAILED: {
      const { error } = action.payload;
      toastError(error);
      return {
        ...state,
      };
    }
    case taskConstant.DELETE_TASK: {
      return {
        ...state,
      };
    }
    case taskConstant.DELETE_TASK_SUCCESS: {
      const { data: taskId } = action.payload; // task id
      toastSuccess("Xóa công việc thành công");
      return {
        ...state,
        listTask: state.listTask.filter((item) => item.id !== taskId),
      };
    }
    case taskConstant.DELETE_TASK_FAILED: {
      const { error } = action.payload;
      toastError(error);
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};

export default reducer;
