import React from "react";

const ChildItems = ({ data }) => {
  console.log("data", data?.children);

  return (
    <>
      <div className="child-itmes">{data?.label}</div>
    </>
  );
};

export default ChildItems;
