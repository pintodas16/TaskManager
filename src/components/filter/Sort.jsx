import { useState } from "react";

function Sort() {
  // const { dispatch } = useFilterContext();
  const [option, setOption] = useState("");
  const handleChange = (e) => {
    setOption(e.target.value);
    console.log(e.target.value);
    // dispatch({ type: "filter/sortBy", payload: e.target.value });
  };
  return (
    <div className="flex flex-wrap md:gap-2 items-center  ">
      <h5 className="text-lg md:text-xl bold capitalize ">sort by :</h5>
      <select
        name=""
        id=""
        className="px-2 py-1 md:text-lg border-2 border-gray-200 border-dotted focus:ring-blue-400 focus:outline-blue-400
                        rounded-lg"
        value={option}
        onChange={handleChange}
      >
        <option value="" disabled>
          select one{" "}
        </option>
        <option value="date-ascending"> Date(ascending)</option>
        <option value="date-descending"> Date(descending)</option>
      </select>
    </div>
  );
}
export default Sort;
