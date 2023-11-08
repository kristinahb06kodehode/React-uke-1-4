import React from "react";

type Description = {
  data: {
    name: string;
    date: string;
    title: string;
    mainText: string;
  };
};

const TextContent: React.FC<Description> = ({ data }) => {
  return (
    <div>
      <h3>{data.title}</h3>
      <p className="text-content">{data.mainText}</p>
      <p className="readMore">Read more...</p>
    </div>
  );
};

export default TextContent;
