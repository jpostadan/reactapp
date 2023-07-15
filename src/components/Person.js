import React from "react";
import personsData from "../datas/personsData";

const Person = () => {
  if (personsData.name !== "0") {
    return (
      <div>
        <h1 key={personsData.id}>{personsData[0].name}</h1>
        <h2 key={personsData.id}>{personsData[0].age}</h2>
        <p>Current user</p>
      </div>
    );
  } else return <h1>Im not James</h1>;
};

export default Person;
