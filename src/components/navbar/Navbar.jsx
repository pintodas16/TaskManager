import { NavLink, useLocation } from "react-router-dom";
import FilterContainer from "../filter/FilterContainer.jsx";
import SearchBox from "./SearchBox.jsx";
function Navbar() {
  const { pathname } = useLocation();

  console.log(pathname);

  return (
    <header className="px-10 md:px-6 ">
      <nav className="border rounded-md bg-white shadow-md container  md:max-w-6xl mx-auto mt-6 mb-8 px-4 py-4 flex justify-between items-center">
        {/* <!-- logo --> */}

        <NavLink to="/">
          <span className="text-xl  md:text-2xl font-bold cursor-pointer text-red-300 hover:opacity-70 ">
            Task Manager
          </span>
        </NavLink>

        {/* <!-- secarchbar --> */}
        <SearchBox />
        {/* <!-- add task  --> */}
        <NavLink
          to={`${
            pathname === "/"
              ? "/create-task"
              : pathname !== "/create-task"
              ? "/create-task"
              : "/"
          }`}
          className=" px-2 md:px-6 py-2 bg-red-300 border border-bg-red-400 rounded-lg text-lg md:text-xl font-bold text-center text-gray-600 hover:bg-white hover:border-rose-500 hover:text-red-400 "
        >
          {pathname === "/create-task" ? "Back to homepage" : "Create Task"}
        </NavLink>
      </nav>
      {pathname === "/" ? <FilterContainer /> : ""}
    </header>
  );
}
export default Navbar;
