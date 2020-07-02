import React from "react";
import { FaPlus } from "react-icons/fa";
import "./AddNote.scss";

const AddNote = ({ click }) => {
  return (
    <div className="AddNote" onClick={click}>
      <FaPlus className="icon-plus" />
    </div>
  );
};

export default AddNote;
