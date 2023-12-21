import { Link } from "react-router-dom";

function Error({ error, tasks }) {
  // const { error, isError } = useTaskContext();
  console.log(error);

  return (
    <div className="w-full flex justify-center  ">
      <div className="w-80 border border-red-900 rounded-lg text-center">
        <span className=" text-lg font-bold  text-red-900 capitalize ">
          {error}
        </span>

        {tasks === 0 ? (
          <Link to="/create-task">
            <div className="m-2 text-lg font-bold border border-gray-200 px-2 py-1 rounded-md text-center bg-gray-200 hover:bg-white hover:text-gray-400">
              Create a Task
            </div>
          </Link>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
export default Error;
