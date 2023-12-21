import { Link } from "react-router-dom";
import { useTaskContext } from "../../contexts/TasksContext";
const daysOfmonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function Task({ task }) {
  // task date:
  let taskDate = new Date(task.due_date);

  // Current date
  let currentDate = new Date();

  // Calculate the difference in milliseconds
  let timeDifference = taskDate - currentDate;

  // Convert the difference to days
  let calculateDay = Math.floor(timeDifference / (1000 * 60 * 60 * 24)) + 1;

  console.log(calculateDay);

  const { deleteTask } = useTaskContext();
  const handleDelete = (id) => {
    deleteTask(id);
  };

  return (
    <div className="border shadow-lg px-6 py-4 rounded-xl bg-white   transition-all duration-300 hover:border-gray-400 hover:shadow-xl ">
      {/* <!-- edit and delete  --> */}
      <div className="flex justify-end gap-2 items-center ">
        <Link to={`/update-Task/${task._id}`}>
          <span className="px-3 py-1 border rounded-md hover:bg-green-400">
            <i className="fa-regular fa-pen-to-square"></i>
          </span>
        </Link>
        {/* delete button  */}
        <span
          className="px-3 py-1 border rounded-md hover:bg-red-500"
          onClick={() => handleDelete(task._id)}
        >
          <i className="fa-solid fa-trash-can"></i>
        </span>
      </div>
      {/* <!-- title  --> */}
      <h4 className="text-xl  font-semibold  ">{task.title}</h4>

      {/* description  */}
      <p className="mt-4">{task.description}</p>

      {/* <!-- status  --> */}
      <div className=" flex justify-between  mt-6">
        <span className="text-gray-500">
          {task.status === "Completed" ? (
            ""
          ) : (
            <span>
              <b>{calculateDay < 0 ? calculateDay * -1 : calculateDay} days </b>
              {calculateDay < 0 ? " over Due " : " remainning"}
            </span>
          )}
        </span>
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
