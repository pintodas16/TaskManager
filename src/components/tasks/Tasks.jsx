import Task from "./Task.jsx";

function Tasks() {
  return (
    <main>
      {/* <!-- section container  --> */}
      <div className="container max-w-6xl mx-auto px-10 md:px-6 lg:px-0 mb-10 ">
        {/* <!-- grid contianer  --> */}
        <div className="grid gap-4  md:grid-cols-2 lg:grid-cols-3 transition-all duration-700">
          {/* <!-- single task  --> */}
          <Task />
        </div>
      </div>
    </main>
  );
}

export default Tasks;
