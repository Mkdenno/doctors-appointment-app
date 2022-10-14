import React, { useState } from "react";

const AddDoc = ({ setUser }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState([]);
  console.log(errors);

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputData = {
      username,
      email,

    };

    fetch("/signup", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(inputData),
    }).then((response) => {

      if (response.ok) {
        response.json().then((user) => setUser(user));
      } else {
        response.json().then((errorData) => setErrors(errorData.errors));
      }
    });
    setUsername("");
    setEmail("");

  };


  return (
    <div className="Reginto">
      <div>
        <div className="bg-grey-lighter min-h-screen flex flex-col">
          <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
            <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
              <h1 className="mb-8 text-3xl text-center">Add Doctor</h1>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  className="block border border-grey-light w-full p-3 rounded mb-4"
                  name="fullname"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Full Name"
                />
                <input
                  type="text"
                  className="block border border-grey-light w-full p-3 rounded mb-4"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                />

                <button
                  type="submit"
                  className="w-full text-center py-3 rounded bg-green-900 text-white hover:bg-green-dark focus:outline-none my-1"
                >
                  Add Doctor
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddDoc;
