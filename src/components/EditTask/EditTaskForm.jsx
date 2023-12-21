import { useState } from "react";

import { useNavigate } from "react-router-dom";
import { useTaskContext } from "../../contexts/TasksContext.jsx";
import Form from "../form/Form.jsx";
import Input from "../form/Input.jsx";
const options = [
  { value: "Created", label: "Created" },
  { value: "In-Progress", label: "In-Progress" },
  { value: "Completed", label: "Completed" },
  { value: "Pending", label: "Pending" },
];
function EditTaskForm({ task }) {
  const navigate = useNavigate();
  const { updateTask } = useTaskContext();
  const { _id, title, description, status, due_date } = task;
  //   const navigate = useNavigate();
  // const [title, setTitle] = useState("");
  // const [description, setDescription] = useState("");
  // const [status, setStatus] = useState({});
  // const [date, setDate] = useState("");
  // const [error, setError] = useState(false);

  // console.log(error);
  const [formData, setFormData] = useState({
    title: title,
    description: description,
    status: status,
    date: due_date,
  });

  // update the formfield according to task data

  const [errors, setErrors] = useState({});
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({});
  };

  const validateForm = () => {
    const validationErrors = {};
    // validate title
    if (!formData.title.trim()) {
      // console.log("title is empty");
      validationErrors.title = "Title is required";
    }
    // validate description
    if (!formData.description.trim()) {
      validationErrors.description = "Description is required";
    }
    //validate status
    if (!formData.status) {
      validationErrors.status = "select task status";
    }
    // validate date
    if (!formData.date) {
      validationErrors.date = "date must be selected";
    }
    // if there is a validation errors update the errors state
    if (Object.keys(validationErrors).length > 0) {
      setErrors((prevState) => ({
        ...prevState,
        ...validationErrors,
        isError: true,
      }));
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      // form is valid
      // update the task
      const editedTask = {
        ...formData,
        due_date: formData.date,
      };
      // console.log(editedTask);
      await updateTask(_id, editedTask);
      navigate("/");
    } else {
      return;
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      {/* <!-- input for title  --> */}
      <Input
        label="Title"
        type="text"
        name="title"
        error={errors}
        value={formData.title}
        onChange={handleInputChange}
        // onChange={(e) => setTitle(e.target.value)}
      />
      {/* <!-- input for description  --> */}
      <Input
        label="description"
        type="text-area"
        name="description"
        error={errors}
        value={formData.description}
        onChange={handleInputChange}
      />

      {/* <!-- input for status --> */}
      <Input
        label="status"
        type="select"
        options={options}
        name="status"
        error={errors}
        value={formData.status}
        onChange={handleInputChange}
      />

      {/* <!-- input for date --> */}
      <Input
        label="date"
        type="date"
        name="date"
        error={errors}
        value={formData.date}
        onChange={handleInputChange}
      />

      {/* <!-- submit --> */}
      <div className="flex justify-end ">
        <button
          type="submit"
          className="px-6 py-2 text-center font-semibold border-2 bg-red-300 border-red-300 hover:bg-white hover:text-red-400 hover:border-red-400 rounded-lg"
        >
          Update task
        </button>
      </div>
    </Form>
  );
}
export default EditTaskForm;
