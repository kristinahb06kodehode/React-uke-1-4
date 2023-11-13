import React from "react";

interface Data {
  id: number;
  title: string;
  body: string;
}

interface DataDisplayProps {
  data: Data | null;
}

const DataDisplay: React.FC<DataDisplayProps> = ({ data }) => {
  return (
    <div>
      <h1>Data</h1>
      <p>ID: {data?.id}</p>
      <p>Title: {data?.title}</p>
      <p>Body: {data?.body}</p>
    </div>
  );
};

export default DataDisplay;
