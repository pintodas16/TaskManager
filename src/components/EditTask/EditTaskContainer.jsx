import EditTaskForm from "./EditTaskForm";
function EditTaskContainer() {
  return (
    <section className="">
      {/* <!-- container  --> */}
      <div className="container h-full mx-auto max-w-2xl  flex justify-center items-center px-8 py-4 ">
        {/* <!-- form container  --> */}
        <div className="border-2 border-red-300 w-full   rounded-lg shadow-lg divide-y-2 divide-dotted divide-red-300">
          {/* <!-- title  --> */}
          <h3 className="p-4 pb-2 text-xl font-bold  uppercase ">EditTask</h3>
          <EditTaskForm />
        </div>
      </div>
    </section>
  );
}

export default EditTaskContainer;
