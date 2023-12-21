import { useLocation } from "react-router-dom";
import Error from "../components/Error.jsx";
import Loading from "../components/Loading.jsx";
import Tasks from "../components/tasks/Tasks";
import { useTaskContext } from "../contexts/TasksContext";
function TasksPage() {
  const { pathName } = useLocation();
  console.log(pathName);
  const { isLoading, tasks, isError, error } = useTaskContext();
  let content;
  if (isLoading && !isError) {
    // console.log(loading, isError);
    content = <Loading />;
  }
  if (!isLoading && isError) {
    // console.log(isLoading, error);
    content = <Error error={error} />;
  }
  if (!isLoading && !isError && tasks?.length <= 0) {
    content = <Error error="there is no task" tasks={0} />;
  }
  if (!isLoading && !isError && tasks?.length > 0) {
    content = <Tasks />;
  }
  return <>{content}</>;
}
export default TasksPage;
