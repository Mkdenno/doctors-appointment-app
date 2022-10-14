import React from "react";
// import devImage from "../assets/dev.avif";
// import exerciseImage from "../assets/exe.jpg";
import hosiImage from "../assets/hosi.avif";
import Booking from "./Booking";
import Activity from "./Activity";
import AboutDiab from "../AboutDiab";
import Cordinate from "./Cordinate";
import Footer from "./Footer";

const Home = ({ user }) => {
  if (user) {
    return (
      <div
        name="home"
        className="h-screen w-full  bg-gradient-to-r from-cyan-400 via-blue to-cyan-50"
      >
        <h1 className="username">Welcome, {user.username}</h1>
        {/* <h1>Welcome, {user.email}</h1> */}
        <div className="container">
          <div className="description">
            <h1>Take Healthy Steps Against Diabetes</h1>
            <br />
            <p>
              Understanding diabetes is the first step towards managing and
              preventing it. We help people understand diabetes.
            </p>
          </div>
          <div className="images">
            {/* <img src={exerciseImage} alt="" /> */}
            <img src={hosiImage} alt="" />
          </div>
        </div>
        <Booking user={user}/>
        <Activity />
        <AboutDiab />
        <Cordinate />
        <Footer />
      </div>
    );
  } else {
    return (
      <div
        name="home"
        className="h-screen w-full  bg-gradient-to-r from-cyan-400 via-blue to-cyan-50"
      >
        <div className="container">
          <div className="description">
            <h1>Take Healthy Steps Against Diabetes</h1>
            <br />
            <p>
              Understanding diabetes is the first step towards managing and
              preventing it. We help people understand diabetes.
            </p>
          </div>
          <div className="images">
            {/* <img src={exerciseImage} alt="" /> */}
            <img src={hosiImage} alt="" />
          </div>
        </div>
        <Activity />
        <AboutDiab />
        <Cordinate />
        <Footer />
      </div>
    );
  }
};

export default Home;
