import React from "react";
import { FaEye, FaCheck } from "react-icons/fa";

const ViewNote = ({ click, toogle }) => {
  if (toogle) {
    return <FaCheck className="icon" onClick={click} />;
  }
  return <FaEye className="icon" onClick={click} />;
};

export default ViewNote;
