import React, { useState, useEffect } from "react";

interface Details {
  name: string;
  date: string;
  title: string;
  mainText: string;
}

const Filter: React.FC<{ details: Details[] }> = ({ details }) => {
  const [search, setSearch] = useState<string>("");
  const [filteredDetails, setFilteredDetails] = useState<Details[]>(details);

  useEffect(() => {
    setFilteredDetails(details);
  }, [details]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const keyword = event.target.value;
    setSearch(keyword);

    const filtered = details.filter((item) =>
      item.name.toLowerCase().includes(keyword.toLowerCase())
    );
    setFilteredDetails(filtered);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={handleSearch}
      />
      <ul>
        {filteredDetails.map((item, index) => (
          <li key={index}>
            <h3>{item.title}</h3>
            <p>{item.mainText}</p>
            <p>{item.date}</p>
            <p>{item.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Filter;
