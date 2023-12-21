import { useState } from "react";
import { useFilterContext } from "../../contexts/FilterContex";

function Filter() {
  const { dispatch } = useFilterContext();
  const [option, setOption] = useState("");
  const handleChange = (e) => {
    setOption(e.target.value);
    console.log(e.target.value);
    dispatch({ type: "filter/filterBy", payload: e.target.value });
  };
  return (
    <div className="flex flex-wrap gap-1 md:flex-2  items-center ">
      <h5 className="text-lg md:text-xl bold capitalize ">filter :</h5>
      <select
        name=""
        id=""
        className="px-2 py-1 md:text-lg border-2 border-gray-200 border-dotted focus:ring-blue-400 focus:outline-blue-400
                    rounded-lg"
        value={option}
        onChange={handleChange}
      >
        <option value="" disabled>
          select one
        </option>
        <option value="Created">Created</option>
        <option value="In-Progress">In-progress</option>
        <option value="Completed">completed</option>
        <option value="Pending">Pending</option>
      </select>
    </div>
  );
}
export default Filter;
