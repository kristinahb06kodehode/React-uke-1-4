import React from "react";
import { Link } from "react-router-dom";

const Landing: React.FC = () => {
  return (
    <div className="landing">
      <h1>Welcome to the Tech Blog!</h1>
      <Link to="/home">
        <button className="cta.btn">Enter page!</button>
      </Link>
    </div>
  );
};

export default Landing;
