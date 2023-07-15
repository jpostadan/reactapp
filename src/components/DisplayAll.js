import React from "react";
import person from "../datas/personsData";

const display = () => {
  return (
    <div>
      <h2>People on the List</h2>
      {person.map((person) => {
        return (
          <h3 key={person.id}>
            {person.name} : {person.age}
          </h3>
        );
      })}
    </div>
  );
};

export default display;
