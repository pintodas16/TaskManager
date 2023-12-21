import { Link } from "react-router-dom";
import { useTaskContext } from "../../contexts/TasksContext";

function Task({ task }) {
  const { taskEdit } = useTaskContext();
  const handleDelete = (id) => {
    console.log("delete");
  };
  const handleEdit = (id) => {
    console.log("edit");
  };
  return (
    <div className="border shadow-lg px-6 py-4 rounded-xl bg-white   transition-all duration-300 hover:border-gray-400 hover:shadow-xl ">
      {/* <!-- edit and delete  --> */}
      <div className="flex justify-end gap-2 items-center ">
        <Link to={`/update-Task/${task._id}`}>
          <span
            className="px-3 py-1 border rounded-md hover:bg-green-400"
            onClick={() => handleEdit(4)}
          >
            <i className="fa-regular fa-pen-to-square"></i>
          </span>
        </Link>
        {/* delete button  */}
        <span
          className="px-3 py-1 border rounded-md hover:bg-red-500"
          onClick={() => handleDelete(5)}
        >
          <i className="fa-solid fa-trash-can"></i>
        </span>
      </div>
      {/* <!-- title  --> */}
      <h4 className="text-xl  font-semibold  ">{task.title}</h4>

      {/* description  */}
      <p className="mt-4">{task.description}</p>

      {/* <!-- status  --> */}
      <div className=" flex justify-end  gap-2 mt-6">
        <span
          className={`${
            task.status === "In-Progress"
              ? "bg-yellow-400"
              : task.status === "Completed"
              ? "bg-green-500"
              : task.status === "Created"
              ? "bg-gray-200"
              : "bg-red-700"
          } px-2 py-1 text-md rounded-md font-semibold`}
        >
          {task.status}
        </span>
      </div>
    </div>
  );
}
export default Task;
