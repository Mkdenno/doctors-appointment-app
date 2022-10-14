import React, { useState, useEffect } from "react";

const DocList = ({
  docid,
  useremail,
  username,
  email,
  description,
  location,
  userid,
}) => {
  const [isClicked, setIsClicked] = useState(false);
  const [appointmentData, setAppointmentData] = useState([]);
  const [appointmentStatus, setAppointmentStatus] = useState("book");

  useEffect(() => {
    fetch("/appointments")
      .then((res) => res.json())
      .then((data) => setAppointmentData(data));
  }, []);

  //console.log(appointmentData);

//    appointmentData.forEach((user) => {

    
//   });

  

  const appData = {
    username: username,
    email: useremail,
    user_id: userid,
    doctor_id: docid,
    status: false,
  };

  const handlesubmit = () => {
    if (!isClicked) {
      setAppointmentStatus("booked");
      fetch("/appointments", {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify(appData),
      });
    }
  };

  return (
    <div>
      <div className="cardContainer">
        <div className="card">
          <div className="data">
            <h1>
              <span className="name">Name</span>:{username}
            </h1>
            <p>
              <span className="abouts">Email</span>:{email}
            </p>
            <p>
              <span className="abouts">About Doctor</span>:{description}
            </p>
            <p>
              <span className="abouts">Location</span>:{location}
            </p>
          </div>
          <button
            className="bg-blue-600 text-gray-200  p-2 rounded  hover:bg-blue-500 hover:text-gray-100"
            onClick={() => {
              handlesubmit(username);
              setIsClicked(true);
            }}
          >
            {

             appointmentData.status == true? "booked"  : appointmentStatus
            }
          </button>
          <p>{!isClicked ? "" : "pending"}</p>
        </div>
      </div>
    </div>
  );
};

export default DocList;
