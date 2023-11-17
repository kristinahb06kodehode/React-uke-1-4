// Import React library
import React from "react";

// Define the props for the LoadingStatus component
type LoadingStatusProps = {
  loading: boolean;
};

// Define LoadingStatus as a functional component using React.FC
const LoadingStatus: React.FC<LoadingStatusProps> = ({ loading }) => {
  // Check if data is still loading
  if (loading) {
    // Render a loading message if data is still loading
    return <p>Loading...</p>;
  }
  // If data is not loading, return null (component won't render
  return null;
};

export default LoadingStatus;
