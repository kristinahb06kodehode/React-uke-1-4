// Import React library and Link component from react-router-dom
import React from "react";
import { Link } from "react-router-dom";
import style from "./LandingPage.module.css";

// Define the Landing component as a functional component
const Landing: React.FC = () => {
  return (
    // Landing page container with styling
    <div className={style.landing}>
      {/* Heading for the landing page */}
      <h1 className={style.h1}>This is Kitty Central!</h1>

      {/* Link to navigate to the home page with an enter button */}
      <Link to="/home" className={style.enterBtn}>
        <button className={style.enterBtn}>Please Enter</button>
      </Link>
    </div>
  );
};

export default Landing;
