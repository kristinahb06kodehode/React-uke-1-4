import React from "react";

type ErrorDisplayProps = {
  error: string | null;
};

const ErrorDisplay: React.FC<ErrorDisplayProps> = ({ error }) => {
  if (error) {
    return <p>Error: {error}</p>;
  }

  return null;
};

export default ErrorDisplay;
