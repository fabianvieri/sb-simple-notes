import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const ViewNote = ({ click, toogle }) => {
  if (toogle) {
    return <FaMinus className="icon" onClick={click} />;
  }
  return <FaPlus className="icon" onClick={click} />;
};

export default ViewNote;
