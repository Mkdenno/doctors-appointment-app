import React from 'react'
import { Link } from "react-router-dom";


const Booking = () => {
  return (
    <div className="booking">
    <div className="desc">
    <h1>Book  sugar test Appointment</h1>
    <p>Healthy people are more productive. </p>
    </div>

      <button className="bg-blue-600 text-gray-200  p-2 rounded  hover:bg-blue-500 hover:text-gray-100"><Link to="/doctors"><span className="text-red-500">Get Started</span></Link></button>
  </div>
  )
}

export default Booking