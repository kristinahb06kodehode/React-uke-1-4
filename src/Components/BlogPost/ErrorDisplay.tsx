// Import React library
import React from "react";

// Define the props for the ErrorDisplay component
type ErrorDisplayProps = {
  error: string | null;
};

// Define ErrorDisplay as a functional component using React.FC
const ErrorDisplay: React.FC<ErrorDisplayProps> = ({ error }) => {
  // Check if there is an error
  if (error) {
    // Render an error message if there is an error
    return <p>Error: {error}</p>;
  }
  // If there is no error, return null (component won't render)
  return null;
};

export default ErrorDisplay;
