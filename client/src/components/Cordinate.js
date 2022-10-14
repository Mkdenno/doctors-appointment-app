import React from "react";
import testImage from "../assets/test.jpeg";

const Cordinate = () => {
  return (
    <div className="">
      <div className="diabeticAbout">
        <div className="cordinatePic">
          <img src={testImage} alt="" />
        </div>

        <div className="aboutD">
          <h1>Coordinate support groups </h1>
          <p>Lorem ipsum dolor sit amet adipsicing elit</p>
          <button className="bg-blue-600 text-gray-200  p-2 rounded  hover:bg-blue-500 hover:text-gray-100">
            Become a Volunteer
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cordinate;
