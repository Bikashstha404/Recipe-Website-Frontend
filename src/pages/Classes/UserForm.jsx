import React from "react";
import { useForm } from "react-hook-form";

function UseForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitData = (data) => {
    console.log("Form Submitted");
    console.log(data);
  };

  return (
    <div>
      <h2>Form Handling using React Hook Form</h2>
      <form onSubmit={handleSubmit(submitData)}>
        <div>
          <label>Name</label>
          <input
            {...register("name", {
              required: "Name not entered",
              minLength: {
                value: 3,
                message: "Name must be 3 characters long",
              },
              maxLength: {
                value: 15,
                message: "Name must be no more than 15 characters long",
              },
            })}
            type="text"
            placeholder="Enter Your Name"
          ></input>
        </div>
        {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}
        <div>
          <label>Email</label>
          <input
            {...register("email", {
              required: "Email not entered",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/,
                message: "Invalid email format",
              },
            })}
            type="text"
            placeholder="Enter Your Email"
          ></input>
        </div>
        {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
export default UseForm;
