import React from "react";
import { AxiosError } from "axios";

interface ErrorDisplayProps {
  error: AxiosError;
}

const ErrorDisplay: React.FC<ErrorDisplayProps> = ({ error }) => {
  return <div>Error: {error.message}</div>;
};

export default ErrorDisplay;
