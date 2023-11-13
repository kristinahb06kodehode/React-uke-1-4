import React, { useState, useEffect } from "react";
import { TechPeople } from "./moredata.tsx";

interface Person {
  name: string;
  date: string;
  title: string;
  mainText: string;
}

const FilterableList: React.FC = () => {
  const [filterValue, setFilterValue] = useState<string>("");
  const [filteredPeople, setFilteredPeople] = useState<Person[]>(TechPeople);

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const filterValue = e.target.value;
    setFilterValue(filterValue);
  };

  useEffect(() => {
    const filtered = TechPeople.filter((person: Person) =>
      person.name.toLowerCase().includes(filterValue.toLowerCase())
    );
    setFilteredPeople(filtered);
  }, [filterValue]);

  return (
    <div>
      <input
        className="input-field"
        type="text"
        placeholder="Search..."
        value={filterValue}
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

export default FilterableList;
