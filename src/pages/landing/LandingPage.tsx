import React from "react";
import { Link } from "react-router-dom";
import style from "./LandingPage.module.css";

const Landing: React.FC = () => {
  return (
    <div className={style.landing}>
      <h1 className={style.h1}>This is Kitty Central!</h1>
      <Link to="/home" className={style.enterBtn}>
        <button className={style.enterBtn}>Please Enter</button>
      </Link>
    </div>
  );
};

export default Landing;
