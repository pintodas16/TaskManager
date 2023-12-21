import Tasks from "../components/tasks/Tasks";

function TasksPage() {
  return <Tasks />;
}
export default TasksPage;

// const { isLoading, tasks, isError, error, getTasks } = useTaskContext();
//   // let decide what content to show
//   // console.log(isLoading, tasks, error, isError);
//   // const isLoading = true;
//   // const error = "";
//   // const tasks = [];

//   let content;
//   if (isLoading && !isError) {
//     // console.log(loading, isError);
//     content = <Loading />;
//   }
//   if (!isLoading && isError) {
//     // console.log(isLoading, error);
//     content = <Error error={error} />;
//   }
//   if (!isLoading && !isError && tasks?.length <= 0) {
//     content = <Error error="there is no task" tasks={0} />;
//   }
//   if (!isLoading && !isError && tasks?.length > 0) {
//     content = <Tasks />;
//   }
//   return <>{content}</>;
