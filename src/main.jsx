import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./App.jsx";
import FouOhFour from "./components/404.jsx";
import AddTaskContainer from "./components/AddTask/AddTaskContainer.jsx";
import EditTaskContainer from "./components/EditTask/EditTaskContainer.jsx";
import "./index.css";
import TasksPage from "./pages/TasksPage.jsx";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<TasksPage />} />
      <Route path="/create-task" element={<AddTaskContainer />} />
      <Route path="/update-Task/:id" element={<EditTaskContainer />} />
      <Route path="*" element={<FouOhFour />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
