/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "../utils/axios.js";

const initialState = {
  tasks: [],
  isLoading: false,
  isError: false,
  error: "",
  task: {},
};
const reducer = (state, action) => {
  switch (action.type) {
    case "loading":
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case "task/getTasks": {
      // console.log(action.payload);
      return {
        ...state,
        tasks: action.payload,
        isLoading: false,
        isError: false,
        // isEditing: false,
        // task: {},
      };
    }
    case "task/created": {
      console.log(action.payload);
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
        isLoading: false,
        isError: false,
        error: "",
      };
    }
    case "task/deleted": {
      const id = action.payload;
      return {
        ...state,
        tasks: state.tasks.filter((task) => task._id !== id),
        isLoading: false,
        isError: false,
      };
    }
    case "task/updated": {
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
        isLoading: false,
        isError: false,
        task: {},
      };
    }
    case "task/isEdit":
      console.log(action.payload);
      return {
        ...state,
        task: action.payload,
      };
    case "task/rejected":
      return {
        ...state,
        isLoading: false,
        isError: true,
        error: action.payload,
      };
    default:
      return state;
  }
};

const TaskContext = createContext();
function TaskContextProvider({ children }) {
  const [{ isLoading, isError, error, tasks, task }, dispatch] = useReducer(
    reducer,
    initialState
  );

  // handle get all tasks
  const getTasks = async () => {
    dispatch({ type: "loading" });
    try {
      const response = await axios.get("/tasks");
      console.log(response);
      // dispatch("task/getTasks", response.data.data);
      dispatch({ type: "task/getTasks", payload: response.data.data });
    } catch (error) {
      // console.log(error.message);
      // console.log(error.response);
      dispatch({ type: "task/rejected", payload: error.message });
    }
  };

  // handle create task
  const createTask = async (task) => {
    dispatch({ type: "loading" });
    try {
      const response = await axios.post("/tasks", JSON.stringify(task));
      // console.log(response.data);
      dispatch({ type: "task/created", payload: response.data.data });
      return response.data;
    } catch (error) {
      console.log("error block");
      // console.log(error.response.data.message);
      dispatch({ type: "task/rejected", payload: error.response.data.message });
      return error.response.data;
    }
  };
  const deleteTask = async (id) => {
    dispatch({ type: "loading" });
    try {
      await axios.delete(`/tasks/${id}`);
      dispatch({ type: "task/deleted", payload: id });
    } catch (err) {
      dispatch({ type: "task/rejected", payload: error.response.data.message });
    }
  };
  const taskEdit = async (data) => {
    // console.log(data);
    dispatch({ type: "task/isEdit", payload: data });
  };
  const updateTask = async (id, data) => {};

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <TaskContext.Provider
      value={{
        isLoading,
        isError,
        error,
        tasks,
        task,
        createTask,
        deleteTask,
        updateTask,
        taskEdit,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

function useTaskContext() {
  return useContext(TaskContext);
}

export { TaskContext, TaskContextProvider, useTaskContext };
