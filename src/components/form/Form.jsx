/* eslint-disable react/prop-types */
// import React from "react";
function Form({ onSubmit, children }) {
  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-2 p-4">
      {children}
    </form>
  );
}
export default Form;
