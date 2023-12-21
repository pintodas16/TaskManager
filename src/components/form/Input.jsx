/* eslint-disable react/prop-types */
// import React from "react";
function Input({
  type,
  label,
  value,
  name,
  onChange,
  options,
  error,
  ...rest
}) {
  const inputStyle = `w-full px-2 py-1 text-lg border-2 border-red-300 ${
    error?.isError ? "border-red-600" : ""
  } focus:ring-blue-400 focus:outline-blue-400 rounded-lg`;

  const commonProps = {
    type,
    label,
    value,
    name,
    onChange,
    options,
    className: inputStyle,
    ...rest,
  };
  return (
    <div className="">
      <label
        htmlFor=""
        className="block text-gray-600 font-bold capitalize leading-4 mb-2"
      >
        {label}
      </label>
      {type === "text" && <input {...commonProps} />}
      {type === "text" && error.title ? (
        <div className="text-red-700">{error.title}</div>
      ) : (
        ""
      )}
      {type === "date" && <input {...commonProps} />}
      {type === "date" && error.date ? (
        <div className="text-red-700">{error.date}</div>
      ) : (
        ""
      )}
      {type === "text-area" && <textarea {...commonProps} />}
      {type === "text-area" && error.description ? (
        <div className="text-red-700">{error.description}</div>
      ) : (
        ""
      )}
      {type === "select" && (
        <select {...commonProps}>
          {}
          {options.map((option, index) => (
            <option key={index} value={option.label}>
              {option.label}
            </option>
          ))}
        </select>
      )}
      {type === "select" && error.status ? (
        <div className="text-red-700">{error.status}</div>
      ) : (
        ""
      )}
    </div>
  );
}
export default Input;
