import React from "react";

type Description = {
  data: {
    name: string;
    date: string;
    title: string;
    mainText: string;
  };
};

const UserDetails: React.FC<Description> = ({ data }) => {
  return (
    <div>
      <section>
        <div className="userInf">
          <div className="userDetails">
            <div className="circle"></div>
            <h4>{data.name}</h4>
          </div>
        </div>
        <p className="date">{data.date}</p>
      </section>
    </div>
  );
};

export default UserDetails;
