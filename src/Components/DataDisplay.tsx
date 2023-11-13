import React from "react";
import UserDetailsData from "./UserDetails";
import TextContent from "./TextContent";

export type UserDetailsData = {
  name: string;
  date: string;
  title: string;
  mainText: string;
};

interface DataDisplayProps {
  data: { userDetails?: UserDetailsData; textContent?: UserDetailsData };
}

const DataDisplay: React.FC<DataDisplayProps> = ({ data }) => {
  if (!data.userDetails || !data.textContent) {
    return null;
  }

  return (
    <div>
      <UserDetailsData data={data.userDetails} />
      <TextContent data={data.textContent} />
    </div>
  );
};

export default DataDisplay;
