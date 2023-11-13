import React from "react";
import { AxiosError } from "axios";

interface ErrorDisplayProps {
  error: AxiosError<unknown> | null;
}

const ErrorDisplay: React.FC<ErrorDisplayProps> = ({ error }) => {
  if (!error) {
    return <div>Error</div>;
  }

  return (
    <div>
      <h1>Error</h1>
      <p>{error.message}</p>
      {/* Include other error information as needed */}
    </div>
  );
};

export default ErrorDisplay;
export type { ErrorDisplayProps };
