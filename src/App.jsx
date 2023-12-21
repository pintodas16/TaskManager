import { Outlet } from "react-router-dom";

import Navbar from "./components/navbar/Navbar.jsx";
import { FilterContextProvider } from "./contexts/FilterContex.jsx";
import { TaskContextProvider } from "./contexts/taskContext.jsx";

function App() {
  return (
    <TaskContextProvider>
      <FilterContextProvider>
        <Navbar />
        <Outlet />
      </FilterContextProvider>
    </TaskContextProvider>
  );
}

export default App;
