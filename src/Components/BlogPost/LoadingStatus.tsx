import React from "react";

type LoadingStatusProps = {
  loading: boolean;
};

const LoadingStatus: React.FC<LoadingStatusProps> = ({ loading }) => {
  if (loading) {
    return <p>Loading...</p>;
  }

  return null;
};

export default LoadingStatus;
