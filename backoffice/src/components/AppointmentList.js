import React, { useState } from "react";

const AppointmentList = ({ app, id }) => {
  const [pending, setPending] = useState(false);

  const handleApprove = () => {
    setPending((pending)=>!pending)

    const dataa = {
      status: true,
    };

    fetch(`/appointments/${id}`, {
      method: "PATCH",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(dataa),
    });
  };

  return (
    <>
      <tr>
        <td>{app.username}</td>
        <td>{app.email}</td>
        <td>
          <button onClick={handleApprove}>
            {pending ? "Approved" : "Approve"}
          </button>
        </td>
      </tr>
    </>
  );
};

export default AppointmentList;
