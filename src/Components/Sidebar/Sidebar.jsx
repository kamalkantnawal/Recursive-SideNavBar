import React, { useState } from "react";
import ChildItems from "../ChildItems";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";

const ChildList = ({ originalData }) => {
  const [displatcurrentChildren, setDisplayCurrentChildren] = useState({});
  const handleClicked = (getCurrentId) => {
    setDisplayCurrentChildren({
      ...displatcurrentChildren,
      [getCurrentId]: !displatcurrentChildren[getCurrentId],
    });
  };
  console.log("display", displatcurrentChildren);
  return (
    <div className="sidebar">
      {originalData && originalData.length ? (
        originalData.map((item, index) => (
          <div className="child-list" key={index}>
            <ChildItems data={item} />
            <div>
              {item?.children && item.children.length > 0 && (
                <>
                  <spna>
                    <p onClick={() => handleClicked(item?.key)}>
                      {displatcurrentChildren[item?.key] ? (
                        <CiCircleMinus style={{ color: "#ffffff" }} />
                      ) : (
                        <CiCirclePlus />
                      )}
                    </p>
                  </spna>
                  {displatcurrentChildren[item?.key] && (
                    <div>
                      <div style={{ marginLeft: 20 }}>
                        <ChildList originalData={item.children} />
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        ))
      ) : (
        <div>No items found</div>
      )}
    </div>
  );
};

const Sidebar = ({ data }) => {
  return <ChildList originalData={data} />;
};

export default Sidebar;
