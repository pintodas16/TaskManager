import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useTaskContext } from "../../contexts/TasksContext";
import Error from "../Error.jsx";
import Loading from "../Loading.jsx";
import EditTaskForm from "./EditTaskForm";
function EditTaskContainer() {
  const { isLoading, getSingleTask, task, error } = useTaskContext();
  const { id } = useParams();

  useEffect(() => {
    getSingleTask(id);
  }, [id]);
  console.log(isLoading, error, task);
  if (isLoading) return <Loading />;

  return (
    <section className="">
      {/* <!-- container  --> */}
      {!isLoading && error ? <Error error={error} /> : ""}
      <div className="container h-full mx-auto max-w-2xl  flex justify-center items-center px-8 py-4 ">
        {/* <!-- form container  --> */}

        <div className="border-2 border-red-300 w-full   rounded-lg shadow-lg divide-y-2 divide-dotted divide-red-300">
          {/* <!-- title  --> */}
          <h3 className="p-4 pb-2 text-xl font-bold  uppercase ">Edit Task</h3>
          {task.title ? (
            <EditTaskForm task={task} />
          ) : (
            <p className="p-4">Task not found with this id</p>
          )}
        </div>
      </div>
    </section>
  );
}

export default EditTaskContainer;
