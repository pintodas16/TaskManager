import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTaskContext } from "../../contexts/taskContext.jsx";
import Form from "./Form.jsx";
import Input from "./Input.jsx";
const options = [
  { value: "select-one", label: "Select One" },
  { value: "In-Progress", label: "In-Progress" },
  { value: "Completed", label: "Completed" },
];
function FormContainer() {
  const { createTask, isError, isLoading, error } = useTaskContext();
  const navigate = useNavigate();
  // const [title, setTitle] = useState("");
  // const [description, setDescription] = useState("");
  // const [status, setStatus] = useState({});
  // const [date, setDate] = useState("");
  // const [error, setError] = useState(false);

  // console.log(error);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    status: "",
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
      // check if there is already task exis or not
      const task = {
        ...formData,
        due_date: formData.date,
      };
      await createTask(task);
      if (!isLoading && !isError) {
        console.log(isError, isLoading, error);
        setFormData({
          title: "",
          description: "",
          status: "",
          date: "",
        });
        navigate("/");
      } else {
        console.log("task already exist");
      }
    } else {
      // form is invalid
      console.log("form is not valid ");
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
          Create task
        </button>
      </div>
    </Form>
  );
}
export default FormContainer;
