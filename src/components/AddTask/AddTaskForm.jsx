import { useState } from "react";

import { useNavigate } from "react-router-dom";
import { useTaskContext } from "../../contexts/TasksContext.jsx";
import Form from "../form/Form.jsx";
import Input from "../form/Input.jsx";

function AddTaskFrom() {
  const navigate = useNavigate();
  const { createTask } = useTaskContext();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
  });
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
      // check if there is already task exis or not
      const task = {
        ...formData,
        due_date: formData.date,
      };
      const data = await createTask(task);
      // console.log(data);
      if (data._success) {
        console.log("task created");
        setFormData({
          title: "",
          description: "",
          date: "",
        });
        navigate("/");
      } else {
        console.log("task already exist ");
      }
    } else {
      // form is invalid
      console.log("form is not valid ");
      navigate("/create-task");
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
          Create task
        </button>
      </div>
    </Form>
  );
}
export default AddTaskFrom;
