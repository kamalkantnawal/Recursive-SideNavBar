import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import RightPanel from "./RightPanel";
import { data } from "./Constant";
import { Bodydiv } from "./Style";

const Body = () => {
  return (
    <Bodydiv>
      <Sidebar data={data} />
      <RightPanel />
    </Bodydiv>
  );
};

export default Body;
