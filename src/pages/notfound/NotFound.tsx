import React from "react";
import style from "./NotFound.module.css";

// Define the NotFound component as a functional component
const NotFound: React.FC = () => {
  return (
    // Container for the NotFound component with styling
    <div className={style.NotFound}>
      {/* Heading for the 404 - Not Found message */}
      <h1>404 - Not Found</h1>
    </div>
  );
};

export default NotFound;
