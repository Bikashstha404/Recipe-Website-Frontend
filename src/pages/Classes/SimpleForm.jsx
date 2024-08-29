import React, { useState } from "react";

export default function SimpleForm() {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");

  const [Error, setError] = useState("");

  const handleName = (event) => {
    setName(event.target.value);
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (Name === "") {
      setError("Name is required");
      console.log("Error", Error)
      return;
    } else if (Email === "") {
      setError("Email is required");
      return;
    } else if (!Email.includes("@")) {
      setError("Please enter a valid email");
      return;
    }
    console.log("Form Submitted");
    console.log(`Name: ${Name}`);
    console.log(`Email: ${Email}`);
  };

  return (
    <>
      <div>
        <h2>Form Handling</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name</label>
            <input
              type="text"
              placeholder="Enter Your Name"
              //   value={Name}
              onChange={handleName}
            ></input>
          </div>
          <div>
            <label>Email</label>
            <input
              type="text"
              placeholder="Enter Your Email"
              value={Email}
              onChange={handleEmail}
            ></input>
          </div>
          {Error && <p style={{ color: 'red' }}>{Error}</p>}
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}
