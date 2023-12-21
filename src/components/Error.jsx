import { Link } from "react-router-dom";

function Error({ error, tasks }) {
  // const { error, isError } = useTaskContext();
  // console.log(error, isError);
  console.log(error, tasks, typeof tasks);
  return (
    <div className="w-full flex justify-center  ">
      <div className="w-80 border border-red-900 rounded-lg">
        <span className=" text-lg font-bold  text-red-900 capitalize px-8 py-3 ">
          {error}
        </span>
        <div className="mx-auto">
          {tasks === 0 ? <Link to="/create-task">Create a task</Link> : ""}
        </div>
      </div>
    </div>
  );
}
export default Error;
