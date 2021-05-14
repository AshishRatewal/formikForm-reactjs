import React from "react";
import { ErrorMessage, useField } from "formik";
const Textfield = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <div className="mb-4">
        <input
          className={`form-control ${
            meta.touched && meta.error && "is-invalid"
          }`}
          {...field}
          {...props}
          autocomplete="off"
        />
        <ErrorMessage component="div" className="error" name={field.name} />
      </div>
    </>
  );
};

export default Textfield;
