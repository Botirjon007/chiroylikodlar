import React from "react";

const Section = (props) => {
    console.log(props);
  return (
    <div
      style={{
        backgroundColor: "black",
        height: "5rem",
        color: "white",
        padding: "2rem",
        margin: "2rem",
      }}
    >
      <h1>{props.fullName}</h1>
      <h3>{props.age}</h3>
    </div>
  );
};

export default Section;
