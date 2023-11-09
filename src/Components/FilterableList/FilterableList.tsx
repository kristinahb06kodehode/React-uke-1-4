import React, { useState, useEffect } from "react";
import { TechPeople } from "./moredata.tsx";
interface Person {
  name: string;
  date: string;
  title: string;
  mainText: string;
}

const Filter: React.FC = () => {
  const [filter, setFilter] = useState<string>("");
  const [filteredPeople, setFilteredPeople] = useState<Person[]>(TechPeople);

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const filterValue = e.target.value;
    setFilter(filterValue);
  };

  useEffect(() => {
    const filtered = TechPeople.filter((person: Person) =>
      person.name.toLowerCase().includes(filter.toLowerCase())
    );
    setFilteredPeople(filtered);
  }, [filter]);

  return (
    <div>
      <input
        className="input-field"
        type="text"
        placeholder="Search..."
        value={filter}
        onChange={handleFilterChange}
      />
      <ul>
        {filteredPeople.map((person, index) => (
          <li key={index}>
            <h3>{person.name}</h3>
            <p>{person.date}</p>
            <p>{person.title}</p>
            <p>{person.mainText}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Filter;
