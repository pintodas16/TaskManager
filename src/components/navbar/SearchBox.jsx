import { useState } from "react";

function SearchBox() {
  // const { dispatch } = useFilterContext();
  const [title, setTitle] = useState("");
  const handleChange = (e) => {
    setTitle(e.target.value);
    // console.log(e.target.value);
    // dispatch({ type: "filter/searchTerm", payload: e.target.value.trim() });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className=" ">
      <form action="" onSubmit={handleSubmit}>
        <div className="hidden md:block relative">
          <span className="w-4 h-4 absolute left-2 top-2 text-center text-xl">
            <i className="fa-solid fa-magnifying-glass text-xl text-red-300"></i>
          </span>
          <input
            type="text"
            className="pl-8 py-2 px-4 text-lg font-semibold leading-3 border-2 rounded-md border-rose-300 focus:outline-none focus:border-red-300 "
            value={title}
            onChange={handleChange}
          />
        </div>
      </form>
    </div>
  );
}
export default SearchBox;
