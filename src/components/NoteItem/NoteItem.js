import React from "react";
import "./NoteItem.scss";
import { FaChevronDown } from "react-icons/fa";

const NoteItem = () => {
  return (
    <div className="NoteItem">
      <h3>My First Notes</h3>
      <FaChevronDown className="icon-down" />
    </div>
  );
};

export default NoteItem;
